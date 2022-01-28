let segnoUtente = prompt("Pari o dispari?");

//Il programma non va avanti se riceve valori diversi da "pari" o "dispari"
while(segnoUtente.toLowerCase() != "pari" && segnoUtente.toLowerCase() != "dispari"){
    segnoUtente = prompt("Valore non valido!!! Pari o dispari?");
}


let numeroUtente = parseInt(prompt("inserisci un numero intero da 1 a 5"));

//verifico la validità del numero inserito
while(isNaN(numeroUtente) || numeroUtente > 5){
    numeroUtente = parseInt(prompt("Valore non valido!! Inserisci un numero intero da 1 a 5"));
}


//chiamo la funzione che genera un numero a caso di un range preciso
let numeroPC = numeroRandom(1,5);
console.log(numeroPC);


//variabile stringa che contiene "pari" o "dispari" a seconda del risultato del controllo
let segnoSommaNumeri = verificaParioDispari(numeroUtente, numeroPC);



if(segnoSommaNumeri == segnoUtente.toLowerCase()){
    document.getElementById("random").innerHTML = "Il computer ha scelto: " + numeroPC + " Hai vinto";
}else{
    document.getElementById("random").innerHTML = "Il computer ha scelto: " + numeroPC + " Hai perso";
}



//SEZIONE FUNZIONI
function numeroRandom(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}


function verificaParioDispari(num1, num2){
    let somma = num1 + num2;

    let risultato;

    if(somma % 2 == 0){
        risultato = "pari";
    }else{
        risultato = "dispari";
    }

    return risultato;
}