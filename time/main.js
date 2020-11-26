for (let line = "#"; line.length<8; line += "#")
console.log(line)


for (let x = 0; x <= 100; x += 1){
    if (x % 3 == 0){
        console.log("Fizz")
    } else if (x % 5 == 0){
        console.log("Buzz")
    } else if (x % 3 == 0 && x % 5 == 0){
        console.log("FizzBuzz")
    } else{
        console.log(x)
    }
}
    






