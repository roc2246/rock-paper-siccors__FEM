let userChoice;
let houseChoice;

const displayRules = document.getElementsByClassName("rules-btn")[0];
const rulesModal = document.getElementsByClassName("rules-modal")[0];
const closeRulesBtn = document.getElementsByClassName(
  "rules-modal__container--close"
)[0];

const options = document.getElementsByClassName("options")[0];
const choices = document.getElementsByClassName("choice-box");
// const paper = document.getElementsByClassName("options__paper-box")[0]
// const siccors = document.getElementsByClassName("options__siccors-box")[0]
// const rock = document.getElementsByClassName("options__rock-box")[0]

const pickContainer = document.getElementsByClassName("pick")[0];
const yourPick = document.getElementsByClassName(
  "pick__your-pic--container"
)[0];
const housePickContainer = document.getElementsByClassName(
  "pick__house-pic--container"
)[0];

const housePicks = [
  choices[0].cloneNode(true),
  choices[1].cloneNode(true),
  choices[2].cloneNode(true),
];

const playAgain = document.getElementsByClassName(
  "pick__outcome--play-again"
)[0];

function getNo(max) {
  return Math.floor(Math.random() * max);
}

function createOption(choice) {
  const container = document.createElement("div");
  container.className = `choice-box options__${choice}-box`;
  const image = document.createElement("img");

  image.src = `images/icon-${choice}.svg`;
  container.appendChild(image);
  container.onclick = () => {
    options.style.display = "none";
    pickContainer.style.display = "flex";

    userChoice = container;
    houseChoice = housePicks[getNo(3)];

    yourPick.appendChild(userChoice);
    housePickContainer.appendChild(houseChoice);
  };

  options.appendChild(container);
}

displayRules.onclick = () => {
  if (rulesModal.style.display === "none" || rulesModal.style.display === "") {
    rulesModal.style.display = "flex";
  }
};

closeRulesBtn.onclick = () => {
  rulesModal.style.display = "none";
};

window.onclick = (event) => {
  if (event.target === rulesModal) {
    rulesModal.style.display = "none";
  }
};

choices[3].remove();
choices[3].remove();

Object.keys(choices).forEach((choice) => {
  choices[choice].onclick = () => {
    options.style.display = "none";
    pickContainer.style.display = "flex";

    userChoice = choices[choice];
    houseChoice = housePicks[getNo(3)];

    yourPick.appendChild(userChoice);
    housePickContainer.appendChild(houseChoice);
  };
});

playAgain.onclick = () => {
  options.style.display = "grid";
  pickContainer.style.display = "none";

  choices[0].remove();
  choices[0].remove();
  choices[0].remove();

  createOption("paper");
  createOption("rock");
  createOption("scissors");

  userChoice = undefined;
  houseChoice = undefined;

  yourPick.innerHTML = '' 
  housePickContainer.innerHTML = ''
};
