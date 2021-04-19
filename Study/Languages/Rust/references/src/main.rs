fn main() {
  let s1 = String::from("hello");

  let len = calculate_length(&s1);

  println!("The length of '{}' is {}.", s1, len);
}

fn calculate_length(s: &String) -> usize {
  s.len()
}

// https://doc.rust-lang.org/book/ch04-02-references-and-borrowing.html#references-and-borrowing
