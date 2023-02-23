
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


let infoUser = document.getElementById("name");
let kmUser = document.getElementById("km");
let ageUser = document.getElementById("age");
let generateButton = document.getElementById("generate");
let cancelButton = document.getElementById("cancel");
let passengerName = document.getElementById("passenger-name");
let passengerKm = document.getElementById("passenger-km");
let passengerAge = document.getElementById("passenger-age");
let passengerTicketPrice = document.getElementById("passenger-ticket-price");






generateButton.addEventListener("click", function() {
 passengerName.innerHTML = infoUser.value;
 passengerKm.innerHTML = kmUser.value;
});












// let infoUser = prompt("Nome e cognome");
// let kmUser = parseInt(prompt("Km da percorrere"));
// let ageUser = parseInt(prompt("Età"));

// let ticketPrice = kmUser * 0.21;
// let finalPrice;


// if (ageUser < 18) {
//     finalPrice = ticketPrice - ticketPrice / 100 * 20; 
// }   else if (ageUser >= 65) {
//     finalPrice = ticketPrice - ticketPrice / 100 * 40;
// } else { 
//     finalPrice = ticketPrice;
// }

// finalPrice = finalPrice.toFixed(2);











    
