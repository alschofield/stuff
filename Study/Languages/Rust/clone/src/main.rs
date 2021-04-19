fn main() {
    let string = String::from("hello world");
    let string2 = string.clone();

    // no error cause clone copies heap data too
    println!("{}", string2)
}
