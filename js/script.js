'use strict';

// Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo.

// creo le variabili che mi servono all'interno del js

const btn = document.querySelector('button');
const result = document.getElementById('risultato');

// console.log(numeroUtente)
// console.log(btn)
// console.log(result)

// creo una funzione che attaccherò al btn
function check(){
    console.log('sono dentro la funzione')

    const numeroUtente = parseInt(document.getElementById('numero').value);
    // se il numero è pari, lo stampiamo in pagina
    if(numeroUtente % 2 == 0){
        console.log('numeroUtente')

        result.innerHTML = `${numeroUtente} è pari!`

    // altrimenti, se il numero è dispari stampiamo il suo valore MA +1
    }else{
        numeroUtente = numeroUtente += 1 ;
        result.innerHTML = `${numeroUtente}. Ho aggiunto +1 al tuo numero perchè era dispari!`
    }
}
btn.addEventListener('click', check);