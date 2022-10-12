'use strict';

// Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo.

// creo le variabili che mi servono all'interno del js
const numeroUtente = parseInt(document.getElementById('numero').value);
const btn = document.querySelector('button');
const result = document.getElementById('risultato');

// console.log(numeroUtente)
// console.log(btn)
// console.log(result)

// creo una funzione che attaccherò al btn
function check(){
    // console.log('sono dentro la funzione')

    // se il numero è pari, lo stampiamo in pagina
    if(numeroUtente %2 === 0){
        console.log(numeroUtente)

        result.innerHTML = `${numeroUtente} è pari!`
    }else{

    }
}
btn.addEventListener('click', check);