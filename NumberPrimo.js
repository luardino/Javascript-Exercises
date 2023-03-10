function primeNumber (num){
    var num = 0;
    for (var i = 0; i <= num; i++){
        if ((num % 1 === 0) && (num % num === 0)){
            return (primeNumber(i));
        }
    }
}
console.log(primeNumber(num));