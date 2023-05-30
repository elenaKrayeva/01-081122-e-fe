const btns = document.querySelectorAll(".btn");
const btnDiv = document.querySelector(".div");
const btnTry = document.querySelector(".btn-try");

document.addEventListener("DOMContentLoaded", setBomb);
btnTry.addEventListener("click", () => location.reload());

btnDiv.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("btn") &&
    e.target.classList.contains("boom")
  ) {
    e.target.innerText = "BOOM!";
    e.target.classList.add("active");
  } else if (e.target.classList.contains("btn")) {
    e.target.innerText = "LUCKY!";
  }
});

let num;

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return (num = Math.floor(Math.random() * (max - min + 1)) + min);
}
getRandomIntInclusive(1, 3);

function setBomb() {
  btns.forEach((btn) => {
    if (btn.classList.contains("btn" + num)) {
      btn.classList.add("boom");
    }
  });
}
