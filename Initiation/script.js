function createArray(number){
    var newArray = [];
    for(var counter = 1; counter <= number; counter+=2){
      newArray.push(counter);
    }
    
    return newArray;
}

console.log(createArray(11))
var inputUtilisateur = prompt('Quelle est votre valeur ?')
console.log(createArray(inputUtilisateur))