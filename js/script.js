
/* -Chiedere il nome e cognome dell'utente
   -Chiedere quanti km intende percorrere 
   -Chiedere l'età dell'utente
   
   -Calcolare il prezzo del biglieto in base ai km (0,21€ al km)
   -Definire una variabile che conterrà il prezzo finale 

   ?SE l'utente ha meno di 18 anni 
     ° avrà uno sconto sul biglietto del 20%
   ?SE ALTRIMENTI l'utente ha più di 65 anni 
     ° avrà uno sconto sul biglietto del 40%
   :ALTRIMENTI l'utente pagherà il prezzo pieno del biglietto 
*/







let infoUser = prompt("Nome e cognome");
let kmUser = parseInt(prompt("Km da percorrere"));
let ageUser = parseInt(prompt("Età"));

let ticketPrice = kmUser * 0.21;
let finalPrice;


if (ageUser < 18) {
    finalPrice = ticketPrice - ticketPrice / 100 * 20; 
}   else if (ageUser >= 65) {
    finalPrice = ticketPrice - ticketPrice / 100 * 40;
} else { 
    finalPrice = ticketPrice;
}

finalPrice = finalPrice.toFixed(2);
document.writeln("Il prezzo del biglietto è: " + finalPrice + "€");





document.writeln("Nome e cognome: " + infoUser);
document.writeln("Km da percorrere: " + kmUser + "km" );
document.writeln("Età: " + ageUser + "anni");




    
