impl Solution {
    pub fn fizz_buzz(n: i32) -> Vec<String> {
        let mut res: Vec<String> = Vec::new();
        for i in 1..=n {
            match i {
                num if i % 3 == 0 && i % 5 == 0 => {
                    res.push("FizzBuzz".into());
                }
                num if i % 3 == 0 => {
                    res.push("Fizz".into());
                }
                num if i % 5 == 0 => {
                    res.push("Buzz".into());
                }
                _ => res.push(i.to_string()),
            }
        }
        res
    }
}
