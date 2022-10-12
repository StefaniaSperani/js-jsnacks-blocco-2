'use strict';

// Generatore di “nomi cognomi” casuali: il Grande Gatsby ha  una lista di nomi e una lista di cognomi, 
// e da queste vuole generare una falsa lista di invitati con nome e cognome.

// creo la variabile a cui inserirà la lista finale
const jokeList = document.getElementById('falsa-lista');
const btn = document.querySelector('button');

// creo un array con i nomi
const names = ['pippo', 'pluto', 'paperino', 'topolino'];
// creo un array con i cognomi
const lastName = ['html', 'css', 'javascript', 'bootstrap'];
// creo un array dove metto i nomi finti
const fakeName = [];

// creo il generatore random del nome
let nameRandom = Math.floor(Math.random() * names.length);
names[nameRandom];
// console.log(names[nameRandom])

// creo il generatore random del cognome
let lastNameRandom = Math.floor(Math.random() * lastName.length);
lastName[lastNameRandom];
// console.log(lastName[lastNameRandom])



// ora creo un ciclo che randomizzi la lista degli invitati
// for(let i = 0; i < fakeName.length; i++){
//     // console.log(fakeName[i])


// }


// btn.addEventListener('click', NOMEFUNZIONE)