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
    // console.log('sono dentro la funzione')

    let numeroUtente = parseInt(document.getElementById('numero').value);
    // se il numero è pari, lo stampiamo in pagina
    if(numeroUtente % 2 == 0){
        // console.log('numeroUtente')

        result.innerHTML = `${numeroUtente} è pari!`

    // altrimenti, se il numero è dispari stampiamo il suo valore MA +1
    }else{
        numeroUtente = numeroUtente + 1 ;
        result.innerHTML = `${numeroUtente}. Ho aggiunto +1 al tuo numero perchè era dispari!`
    }
}
btn.addEventListener('click', check);



//BONUS 4

// Crea due array che hanno un numero di elementi diversi.  Aggiungi elementi all’array 
//che ha meno elementi fino a quando ne avrà tanti quanti l’altro.

//creo due array
const frutta = ['mela', 'banana', 'pesca', 'arancia', 'kiwi'];
const topping = ['ciccolato', 'fragola', 'lampone'];



// se frutta è maggiore di topping:
if(frutta.length > topping.length){
    const elementiDaAgg = frutta.length - topping.length;
    console.log(elementiDaAgg);
    for(let i = 0; i < elementiDaAgg; i++){
        topping.push(i);
    }
    console.log(topping);
}else if(topping.length > frutta.length){
    const elementiDaAgg = topping.length - frutta.length;
    for(let i = 0; i < elementiDaAgg; i++){
        frutta.push(i);
    }
    console.log(frutta);
}else{
    console.log('sono uguali')
}


