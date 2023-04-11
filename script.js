let userChoice
let houseChoice

const displayRules = document.getElementsByClassName("rules-btn")[0];
const rulesModal = document.getElementsByClassName("rules-modal")[0];
const closeRulesBtn = document.getElementsByClassName(
  "rules-modal__container--close"
)[0];

const options = document.getElementsByClassName("options")[0]
const choices = document.getElementsByClassName("choice-box")

const pick = document.getElementsByClassName("pick")[0]
const yourPick = document.getElementsByClassName("pick__your-pic--container")[0]
const housePick = document.getElementsByClassName("pick__house-pic--container")[0]

function getNo(max) {
  return Math.floor(Math.random() * max);
}

displayRules.onclick = () => {
  if (rulesModal.style.display === "none" || rulesModal.style.display === "") {
    rulesModal.style.display = "flex";
  }
};

closeRulesBtn.onclick = () => {
    rulesModal.style.display ="none";
};

window.onclick = (event) => {
  if (event.target === rulesModal) {
    rulesModal.style.display = "none";
  }
};

Object.keys(choices).forEach((choice) => {
  choices[choice].onclick = () => {
    options.style.display = "none"
    pick.style.display ="flex"

    userChoice = choices[choice]
    houseChoice = choices[getNo(3)]

    yourPick.appendChild(userChoice)
    housePick.appendChild(houseChoice)
  }
})
