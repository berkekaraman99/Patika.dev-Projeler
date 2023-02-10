let username = prompt("Adınızı giriniz");

let myName = document.querySelector("#myName");
myName.innerHTML = username;

const days = [
  "Pazar",
  "Pazartesi",
  "Salı",
  "Çarşamba",
  "Perşembe",
  "Cuma",
  "Cumartesi",
];

let myClock = document.querySelector("#myClock");

function showTime() {
  let myDate = new Date();
  let day = days[myDate.getDay()];
  let hours = myDate.getHours().toString();
  hours = hours.length == 1 ? 0 + hours : hours;
  let minutes = myDate.getMinutes().toString();
  minutes = minutes.length == 1 ? 0 + minutes : minutes;
  let seconds = myDate.getSeconds().toString();
  seconds = seconds.length == 1 ? 0 + seconds : seconds;
  myClock.innerHTML = hours + ":" + minutes + ":" + seconds + " " + day;
}

setInterval(showTime, 1000);
