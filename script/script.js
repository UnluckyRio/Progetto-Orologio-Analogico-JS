// bar hours
const numberHours = document.querySelector(".number-hours");

const numberElements = [];

for (let i = 1; i <= 12; i++) {
  numberElements.push(`<span style="--index:${i}"><p>${i}</p></span>`);
}

numberHours.insertAdjacentHTML("afterbegin", numberElements.join(""));

// bar seconds

const barSeconds = document.querySelector(".bar-seconds");

const barElements = [];

for (let i = 1; i <= 60; i++) {
  barElements.push(`<span style="--index:${i}"><p></p></span>`);
}

barSeconds.insertAdjacentHTML("afterbegin", barElements.join(""));

// bar minutes

const handHour = document.querySelector(".hand.hour");
const handMinute = document.querySelector(".hand.minute");
const handSecond = document.querySelector(".hand.second");
