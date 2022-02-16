function current() {
const today = new Date();
const time =
  today.getHours() + ":" + String(today.getMinutes()).padStart(2, '0') + ":" + String(today.getSeconds()).padStart(2, '0');
document.getElementById("current-time").innerText = time;
}
setInterval(current, 1000);

const btn = document.querySelector(".btn-toggle");

btn.addEventListener("click", function darkMode() {
  const body = document.body;
  const p = document.getElementById('current-time');
  body.classList.toggle("dark-mode");
  p.classList.toggle("dark-clock");
} );

