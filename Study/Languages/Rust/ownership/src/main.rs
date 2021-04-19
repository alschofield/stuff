fn main() {
    let string = String::from("hello world")
    let string2 = string

    // error cause over heap stuff and ownership and shadowing
    println!("{}", string)
}
