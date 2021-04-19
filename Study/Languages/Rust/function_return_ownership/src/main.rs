fn main() {
  let s1 = String::from("hello");

  let (s2, len) = calculate_length(s1);

  println!("The length of '{}' is {}.", s2, len);
}

fn calculate_length(s: String) -> (String, usize) {
  let length = s.len(); // len() returns the length of a String

  (s, length)
}

// https://doc.rust-lang.org/book/ch04-01-what-is-ownership.html#return-values-and-scope
// But this is too much ceremony and a lot of work for a concept that should be common. Luckily for us, Rust has a feature for this concept, called references.
