#![warn(rust_2018_idioms)]
use std::io::prelude::*;
use std::net::TcpListener;
use std::net::TcpStream;
use std::str;
use hyper::{body::HttpBody as _, Body, Client, Request, Method};

type Result<T> = std::result::Result<T, Box<dyn std::error::Error + Send + Sync>>;

#[tokio::main]
async fn main() {
  let listener = TcpListener::bind("127.0.0.1:7878").unwrap();

  for stream in listener.incoming() {
    let stream = stream.unwrap();

    handle_connection(stream).await;
  };
}

async fn handle_connection(mut stream: TcpStream) {
  let mut buffer = [0; 1024];
  let mut body = Ok(String::from(""));
  stream.read(&mut buffer).unwrap();

  let get = b"GET / HTTP/1.1\r\n";
  let post = b"POST / HTTP/1.1\r\n";

  // how to extract headers
  let url = get_url(buffer);

  // ultimately this gives us more control of the anything we want to do in between requests from the different microservice apps
  if url.starts_with("http") {
    if buffer.starts_with(get) {
      // return the results to the client
      println!("get");
      body = handle_get(String::from(url), String::from("")).await;
    } else if buffer.starts_with(post) {
      
      // how to extract body of post, right now it looks like we cant with this TcpListener/Stream

      println!("post");
      body = handle_post(String::from(url), String::from(""), String::from("")).await;
    };
  };

  let response_body = body.unwrap();

  println!("{}", response_body);

  let response = format!(
    "HTTP/1.1 200 OK\r\nContent-Length: {}\r\n\r\n{}",
    response_body.len(),
    response_body
  );

  stream.write(response.as_bytes()).unwrap();
  stream.flush().unwrap()
}

async fn handle_get(url: String, _headers: String) -> Result<String> {
  let mut body = "".to_owned();
  let req = Request::builder()
      .method(Method::GET)
      .uri(url)
      .body(Body::from(""))?;

  let client = Client::new();

  let mut res = client.request(req).await?;

  while let Some(next) = res.data().await {
    let chunk = next?;
    body.push_str(str::from_utf8(&chunk).unwrap());
  }

  Ok(body)
}

async fn handle_post(url: String, _headers: String, data: String) -> Result<String> {
  let mut body = "".to_owned();
  let req = Request::builder()
      .method(Method::POST)
      .uri(url)
      .body(Body::from(data))?;

  let client = Client::new();

  let mut res = client.request(req).await?;

  while let Some(next) = res.data().await {
    let chunk = next?;
    body.push_str(str::from_utf8(&chunk).unwrap());
  }

  Ok(body)
}

fn get_url(b: [u8; 1024]) -> String {
  let mut _s = String::from_utf8(b.to_vec()).unwrap();
  println!("{}", _s);

  let mut _s2 = _s.split_off(_s.find("X-Schofield-Proxy-Url").unwrap());
  let _remnants = _s2.split_off(_s2.find("\r").unwrap());
  let v: Vec<&str> = _s2.split(" ").collect();

  String::from(v[1])
}
