// bar hours
const numberHours = document.querySelector(".number-hours");

const numberElements = [];

for (let i = 1; i <= 12; i++) {
  numberElements.push(`<span style="--index:${i}"><p>${i}</p></span>`);
}

numberHours.insertAdjacentHTML("afterbegin", numberElements.join(""));

const barSeconds = document.querySelector(".bar-seconds");

const barElements = [];

for (let i = 1; i <= 60; i++) {
  barElements.push(`<span style="--index:${i}"><p></p></span>`);
}

barSeconds.insertAdjacentHTML("afterbegin", barElements.join(""));

const handHour = document.querySelector(".hand.hour");
const handMinute = document.querySelector(".hand.minute");
const handSecond = document.querySelector(".hand.second");

function getCurrentTime() {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  handHour.style.transform = `rotate(${hours * 30 + minutes / 2}deg)`;
  handMinute.style.transform = `rotate(${minutes * 6}deg)`;
  handSecond.style.transform = `rotate(${seconds * 6}deg)`;
}

setInterval(getCurrentTime, 1000);
