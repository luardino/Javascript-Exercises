function fizzBuzz (num){
    if(num / 3){
        console.log("Fizz");
    }if(num / 5){
        console.log("Buzz");
    }if(num / 3 && num /5){
        console.log("FizzBuzz");
    }if(num/3 && num/5){

    }
    console.log(isNaN(num))
}

fizzBuzz(15)