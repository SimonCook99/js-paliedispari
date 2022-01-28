let parola = prompt("Inserisci una parola e ti diremo se la parola è palindroma");

let titolo = document.getElementById("parola");

//Se l'utente inserisc un numero, il programma non prosegue
while(!isNaN(parseInt(parola))){
    parola = prompt("Hai inserito un numero!! Devi inserire una parola e ti diremo se la parola è palindroma");
}

//chiamo la funzione che si occupa della verifica
verificaPalindromo(parola);



function verificaPalindromo(stringa){

    //questa variabile conterrà la parola invertita di ciò che scriverà l'utente
    let stringaInvertita = "";

    //ciclo inverso che scorre lungo la parola inserita, e assegna la singola lettera alla nostra variabile
    for(let i = stringa.length - 1; i >= 0; i--){
        stringaInvertita += stringa[i];
    }

    console.log(stringaInvertita, stringa);

    //verifico l'uguaglianza dei 2 termini, portandoli entrambi in minuscolo così da evitare confusione con le possibili lettere maiuscole inserite
    if(stringaInvertita.toLowerCase() == stringa.toLowerCase()){
        titolo.innerHTML = "La parola " +stringa + " è palindroma"; 
    }else{
        titolo.innerHTML = "La parola " +stringa + " non è palindroma"; 
    }

}