

// function additionner(a , e , i , o , u) {
// return a + e + i + o + u;
// }

// voyelle.for (let index = 0; index < array.length; index++) {
//     const element = array[index];
   
    

// } (mot => {
//     voyelle +=1;

// if (mot === voyelle) {

//     let resultat = additionner(voyelle)
//     console.log(resultat)
// }
    
// });

// mot.length;

// console.log(mot[3]);

let mot = "invariablement"
let voyelles = ["a", "e", "i", "o", "u"];

let countA = 0
let countE = 0
let countI = 0
let countO = 0
let countU = 0

for (let lettre of mot) {

    if (lettre === "a") {
        countA += 1;
        
    }
    if (lettre === "e") {
        countE += 1;
         
    }
    if (lettre === "i") {
        countI += 1;
     
    }
    if (lettre === "o") {
        countO += 1;
     
    }
    if (lettre === "u") {
        countU += 1;
     
    }
} 
console.log("nombre de A :" + countA);
console.log("nombre de E :" + countE);
console.log("nombre de I :" + countI);
console.log("nombre de O :" + countO);
console.log("nombre de U :" + countU);