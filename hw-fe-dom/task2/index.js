const btns = Array.from(document.querySelectorAll(".btn"));
const btnDiv = document.querySelector(".div");
const winner = document.querySelector(".winner");
const btnAgain = document.querySelector(".again");

let compChoice;

const variants = {
  "КАМЕНЬ НОЖНИЦЫ": "ИГРОК",
  "КАМЕНЬ БУМАГА": "КОМПЬЮТЕР",
  "НОЖНИЦЫ КАМЕНЬ": "КОМПЬЮТЕР",
  "НОЖНИЦЫ БУМАГА": "ИГРОК",
  "БУМАГА КАМЕНЬ": "ИГРОК",
  "БУМАГА НОЖНИЦЫ": "КОМПЬЮТЕР",
};

document.addEventListener("DOMContentLoaded", setComputerChoice);
btnDiv.addEventListener("click", (e) => {
  if (!e.target.classList.contains("btn")) return;
  e.target.classList.add("active");
  const html = `
  <div class="choice">КОМПЬЮТЕР ВЫБРАЛ: ${compChoice}</div>`;
  btnDiv.insertAdjacentHTML("afterend", html);
  const check = `${e.target.innerText} ${compChoice}`;

  if (e.target.innerText === compChoice) {
    winner.innerText = "НИЧЬЯ";
  }

  for (let key in variants) {
    if (key === check) {
      winner.innerText = `ВЫИГРАЛ: ${variants[key]}`;
    }
  }
  btns.forEach((btn) => btn.setAttribute("disabled", ""));
});

btnAgain.addEventListener("click", () => location.reload());

function setComputerChoice() {
  const num = Math.floor(Math.random() * 3);
  btns[num].classList.add("comp-choice");
  compChoice = btns[num].innerText;
}
