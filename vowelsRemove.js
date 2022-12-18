let string = "Luardino Eduardo Lopes Gaspar Jaime"
let division = string.split("")
let vowels = /[aeiou]/ig;
let remove = string.match(vowels)
let noVowels = []


for(i = 0; i < division.length; i++){
    if(remove.indexOf(division[i])== -1){
        noVowels.push(division[i])
    }
}
console.log(noVowels.join(""))