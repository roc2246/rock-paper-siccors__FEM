let mode = "original"

let userChoice;
let houseChoice;

const logoContainer = document.getElementsByClassName("top__logo-box")[0]
const regularLogo = document.getElementsByClassName("top__logo-box--regular-logo")[0]
const bonusLogo = document.getElementsByClassName("top__logo-box--bonus-logo")[0]

const displayRules = document.getElementsByClassName("rules-btn")[0];
const rulesModal = document.getElementsByClassName("rules-modal")[0];
const closeRulesBtn = document.getElementsByClassName(
  "rules-modal__container--close"
)[0];

const options = document.getElementsByClassName("options")[0];
const choices = document.getElementsByClassName("choice-box");

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
  image.alt = `${choice}`;
  image.className = `options__${choice}-box--img`;

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

function setChoiceLayout(no, col, row){
choices[no].style.gridColumn = col
choices[no].style.gridRow = row
}

function setConnector(direction, col, row, deg) {
  const line = document.getElementsByClassName(`options__line--${direction}`)[0]
  line.style.gridColumn = col
  line.style.gridRow = row

  if(direction !== "left-right"){
    line.style.transform = `rotate(${deg}deg)`
  } else {
    deg = undefined
  }

  if (direction === "bottom-right-top-left" || direction === "bottom-left-top-right") {
    line.style.display = "block"
  }
}

function setGameType () {
options.style.gridTemplateColumns = "repeat(9, auto)"
options.style.gridTemplateRows += " var(--choice-border-width) repeat(3, auto) var(--choice-border-width)"
options.style.gridTemplateRows += " repeat(3, auto) var(--choice-border-width) 2rem var(--choice-border-width) repeat(3,auto) var(--choice-border-width)"
choices[3].style.display = "flex"
choices[4].style.display = "flex"

setChoiceLayout(0, "7/10", "5/10")
setChoiceLayout(1, "4/7", "1/6")
setChoiceLayout(2, "6/9", "11/16")
setChoiceLayout(3, "2/6", "11/16")
setChoiceLayout(4, "1/4", "5/10")

setConnector("left-right", "2/9", "13/14")
setConnector("top-left-bottom-right", "1/5", "10", "70")
setConnector("top-right-bottom-left", "6/10", "10", "110")
setConnector("bottom-right-top-left", "5/10", "5", "40")
setConnector("bottom-left-top-right", "1/6", "5", "140")
}

logoContainer.onclick = () => {
  if(bonusLogo.style.display === 'none' || bonusLogo.style.display === ""){
    regularLogo.style.display = "none"
    bonusLogo.style.display = "inline"
    setGameType()
  } else {
    regularLogo.style.display = "inline"
    bonusLogo.style.display = "none"
  }
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

// choices[3].remove();
// choices[3].remove();

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

  yourPick.innerHTML = "";
  housePickContainer.innerHTML = "";
};
