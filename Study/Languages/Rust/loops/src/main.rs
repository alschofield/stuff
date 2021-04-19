fn main() {
  default_loop();
  while_loop();
  for_loop();
}

fn default_loop() {
  let mut n = 0;

  let result = loop {
    if n == 9 {
      break "999";
    }

    n += 1
  };

  println!("{} shit", result);
}

fn while_loop() {
  let mut n = 0;

  while n < 9 {
    n += 1
  }

  println!("999");
}

fn for_loop() {
  // for loop
  for n in (1..11).rev() {
    println!("{}", n);
  }

  println!("lift off");
}
