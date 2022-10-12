'use strict';

//Crea un array di numeri interi e fai la somma di tutti gli elementi 
//che sono in posizione dispari

/* 
1 creo un array con tutti numeri interi
2 faccio la somma di tutti gli elementi dispari

*/


//creo le variabili che poi userò per attaccare in pagina
const btn = document.querySelector('button');
const numbers = document.getElementById('numeri');

// creo l'array con una breve lista di numeri
const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//creo la variabile per la somma e la inizializzo a 0
let somma = 0;

//creo una funzione che mi permetta di creare la somma
for (let i = 0; i < numberArray.length; i++){
    // console.log(numberArray[i])

    //controllo le posizioni dispari
    if(i %3 == 0){
        somma += numberArray[i];
    }
}
console.log(somma)