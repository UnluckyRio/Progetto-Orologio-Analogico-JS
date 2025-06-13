const numberHours = document.querySelector(".number-hours"); // Seleziona l'elemento dove mostrare i numeri delle ore

const numberElements = []; // Array per contenere gli span dei numeri

for (let i = 1; i <= 12; i++) {
  // Ciclo da 1 a 12 per le ore
  numberElements.push(`<span style="--index:${i}"><p>${i}</p></span>`); // Crea un elemento span con un numero e il suo indice
}

numberHours.insertAdjacentHTML("afterbegin", numberElements.join("")); // Inserisce tutti gli span dei numeri nel DOM

const barSeconds = document.querySelector(".bar-seconds"); // Seleziona l'elemento dove mostrare i trattini dei secondi

const barElements = []; // Array per contenere gli span dei trattini

for (let i = 1; i <= 60; i++) {
  // Ciclo da 1 a 60 per i secondi/minuti
  barElements.push(`<span style="--index:${i}"><p></p></span>`); // Crea un elemento span con un trattino vuoto e il suo indice
}

barSeconds.insertAdjacentHTML("afterbegin", barElements.join("")); // Inserisce tutti gli span dei trattini nel DOM

const handHour = document.querySelector(".hand.hour"); // Seleziona la lancetta delle ore
const handMinute = document.querySelector(".hand.minute"); // Seleziona la lancetta dei minuti
const handSecond = document.querySelector(".hand.second"); // Seleziona la lancetta dei secondi

function getCurrentTime() {
  // Funzione per aggiornare l'orario
  let date = new Date(); // Crea un nuovo oggetto Date (data e ora attuali)
  let hours = date.getHours(); // Ottiene l'ora corrente (0-23)
  let minutes = date.getMinutes(); // Ottiene i minuti correnti (0-59)
  let seconds = date.getSeconds(); // Ottiene i secondi correnti (0-59)

  // Calcola e applica la rotazione per le lancette
  handHour.style.transform = `rotate(${hours * 30 + minutes / 2}deg)`; // Ruota lancetta ore (30°/ora + 0.5°/minuto)
  handMinute.style.transform = `rotate(${minutes * 6}deg)`; // Ruota lancetta minuti (6°/minuto)
  handSecond.style.transform = `rotate(${seconds * 6}deg)`; // Ruota lancetta secondi (6°/secondo)
}

setInterval(getCurrentTime, 1000); // Chiama la funzione getCurrentTime ogni 1000ms (1 secondo)
