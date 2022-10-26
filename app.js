function time() {
  var date = new Date().toLocaleString("tr-TR");

  var day = new Date().getDay();
  var days = [
    "Pazar",
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi",
  ];

  document.querySelector("#time").innerHTML = `${date} `;
  document.querySelector("#day").innerHTML = days[day];
}
setInterval(time, 1000);

let userName = prompt("Adınız: ");
let userNamee = userName.toUpperCase();
document.querySelector(
  "#info"
).innerHTML = `Merhaba, ${userNamee}! Hoş Geldin!`;
