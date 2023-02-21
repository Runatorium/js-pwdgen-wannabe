let nomeutente=prompt("Inserisci il tuo nome");  
let cognomeutente=prompt("Inserisci il tuo cognome");
let clr_pref_utente=prompt("Inserisci il tuo colore preferito");

let psw = (nomeutente + cognomeutente + clr_pref_utente + 21);
console.log(psw)

document.getElementById("password").innerHTML = `La tua password è: ${psw}`;