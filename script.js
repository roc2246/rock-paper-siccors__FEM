let mode = "original";
let houseOptions = 3;
let resultMssg;

let score = 0;

let userChoice;
let houseChoice;

const bonusColLayout = "repeat(9, auto)";
const bonusRowLayout = `var(--choice-border-width) repeat(3, auto) 
var(--choice-border-width) repeat(3, auto) var(--choice-border-width) 
2rem var(--choice-border-width) repeat(3,auto) var(--choice-border-width)`;

const logoContainer = document.getElementsByClassName("top__logo-box")[0];
const regularLogo = document.getElementsByClassName(
  "top__logo-box--regular-logo"
)[0];
const bonusLogo = document.getElementsByClassName(
  "top__logo-box--bonus-logo"
)[0];

const scoreContainer = document.getElementsByClassName("top__score--score")[0];

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

let housePicks = [
  choices[0].cloneNode(true),
  choices[1].cloneNode(true),
  choices[2].cloneNode(true),
];

const results = document.getElementsByClassName("pick__outcome--heading")[0];

const playAgain = document.getElementsByClassName(
  "pick__outcome--play-again"
)[0];

function getNo(max) {
  return Math.floor(Math.random() * max);
}

function checkPick(userPick, housePick) {
  return (
    userChoice.innerHTML === userPick.innerHTML &&
    houseChoice.innerHTML === housePick.innerHTML
  );
}

function rules() {
  const paper = choices[0];
  const scissors = choices[1];
  const rock = choices[2];
  const lizard = choices[3];
  const spock = choices[4];
  if (userChoice.innerHTML === houseChoice.innerHTML) {
    resultMssg = `YOU TIED`;
  } else if (checkPick(rock, paper)) {
    resultMssg = `YOU LOSE`;
  } else if (checkPick(rock, scissors)) {
    resultMssg = `YOU WIN`;
  } else if (checkPick(rock, lizard)) {
    resultMssg = `YOU WIN`;
  } else if (checkPick(rock, spock)) {
    resultMssg = `YOU LOSE`;
  } else if (checkPick(paper, rock)) {
    resultMssg = `YOU WIN`;
  } else if (checkPick(paper, scissors)) {
    resultMssg = `YOU LOSE`;
  } else if (checkPick(paper, lizard)) {
    resultMssg = `YOU LOSE`;
  } else if (checkPick(paper, spock)) {
    resultMssg = `YOU WIN`;
  } else if (checkPick(scissors, rock)) {
    resultMssg = `YOU LOSE`;
  } else if (checkPick(scissors, paper)) {
    resultMssg = `YOU WIN`;
  } else if (checkPick(scissors, lizard)) {
    resultMssg = `YOU WIN`;
  } else if (checkPick(scissors, spock)) {
    resultMssg = `YOU LOSE`;
  } else if (checkPick(lizard, rock)) {
    resultMssg = `YOU LOSE`;
  } else if (checkPick(lizard, paper)) {
    resultMssg = `YOU WIN`;
  } else if (checkPick(lizard, scissors)) {
    resultMssg = `YOU LOSE`;
  } else if (checkPick(lizard, spock)) {
    resultMssg = `YOU WIN`;
  } else if (checkPick(spock, rock)) {
    resultMssg = `YOU WIN`;
  } else if (checkPick(spock, paper)) {
    resultMssg = `YOU LOSE`;
  } else if (checkPick(spock, scissors)) {
    resultMssg = `YOU WIN`;
  } else if (checkPick(spock, lizard)) {
    resultMssg = `YOU LOSE`;
  }
}

function setScore () {
    if (resultMssg === "YOU WIN") {
    score += 1;
  } else if (resultMssg === "YOU LOSE") {
    score -= 1;
  }
  results.innerHTML = resultMssg;
  scoreContainer.innerHTML = score;
}

function getResults(pick) {
  options.style.display = "none";
  pickContainer.style.display = "flex";

  userChoice = pick;
  houseChoice = housePicks[getNo(houseOptions)];

  userChoice.onclick = () => {};
  houseChoice.onclick = () => {};

  yourPick.appendChild(userChoice);
  housePickContainer.appendChild(houseChoice);
  rules();
  setScore()
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
    getResults(container);
  };

  options.appendChild(container);
}

function setChoiceLayout(no, col, row) {
  choices[no].style.gridColumn = col;
  choices[no].style.gridRow = row;
}

function setConnector(direction, col, row, deg) {
  const line = document.getElementsByClassName(
    `options__line--${direction}`
  )[0];
  line.style.gridColumn = col;
  line.style.gridRow = row;

  if (direction !== "left-right") {
    line.style.transform = `rotate(${deg}deg)`;
  } else {
    deg = undefined;
  }

  if (
    direction === "bottom-right-top-left" ||
    direction === "bottom-left-top-right"
  ) {
    line.style.display = "block";
  }

  if (
    (mode === "original" && direction === "bottom-right-top-left") ||
    (mode === "original" && direction === "bottom-left-top-right")
  ) {
    line.style.display = "none";
    col = null;
    row = null;
    deg = null;
    line.style.transform = "";
  }
}

function setLayout(type) {
  if (type === "bonus") {
    setChoiceLayout(0, "7/10", "5/10");
    setChoiceLayout(1, "4/7", "1/6");
    setChoiceLayout(2, "6/9", "11/16");
    setChoiceLayout(3, "2/6", "11/16");
    setChoiceLayout(4, "1/4", "5/10");

    setConnector("left-right", "2/9", "13/14");
    setConnector("top-left-bottom-right", "1/5", "10", "70");
    setConnector("top-right-bottom-left", "6/10", "10", "110");
    setConnector("bottom-right-top-left", "5/10", "5", "40");
    setConnector("bottom-left-top-right", "1/6", "5", "140");
  } else if (type === "original") {
    setChoiceLayout(0, "1/4", "1/2");
    setChoiceLayout(1, "5/8", "1/2");
    setChoiceLayout(2, "3/6", "3/4");

    setConnector("left-right", "1/8", "1/2");
    setConnector("top-left-bottom-right", "2/5", "1/4", "60");
    setConnector("top-right-bottom-left", "4/7", "1/4", "120");
    setConnector("bottom-right-top-left");
    setConnector("bottom-left-top-right");
  }
}

function setGrid(col, row) {
  options.style.gridTemplateColumns = col;
  options.style.gridTemplateRows = row;
}

function setGameType(type) {
  if (type === "bonus") {
    mode = "bonus";
    houseOptions = 5;
    setGrid(bonusColLayout, bonusRowLayout);
    createOption("lizard");
    createOption("spock");
    choices[3].style.display = "flex";
    choices[4].style.display = "flex";
    housePicks = [
      ...housePicks,
      choices[3].cloneNode(true),
      choices[4].cloneNode(true),
    ];

    setLayout("bonus");
  } else if (type === "original") {
    mode = "original";
    houseOptions = 3;
    setGrid("", "");
    setLayout("original");

    choices[3].remove();
    choices[3].remove();

    housePicks.splice(3, 2);
  }
}

logoContainer.onclick = () => {
  if (bonusLogo.style.display === "none" || bonusLogo.style.display === "") {
    regularLogo.style.display = "none";
    bonusLogo.style.display = "inline";
    setGameType("bonus");
  } else {
    regularLogo.style.display = "inline";
    bonusLogo.style.display = "none";
    setGameType("original");
  }
};

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

Object.keys(choices).forEach((choice) => {
  choices[choice].onclick = () => {
    getResults(choices[choice]);
  };
});

playAgain.onclick = () => {
  resultMssg = " ";
  options.style.display = "grid";
  pickContainer.style.display = "none";

  if (houseOptions === 3) {
    choices[0].remove();
    choices[0].remove();
    choices[0].remove();

    createOption("paper");
    createOption("scissors");
    createOption("rock");
  } else if (houseOptions === 5) {
    choices[0].remove();
    choices[0].remove();
    choices[0].remove();
    choices[0].remove();
    choices[0].remove();

    createOption("paper");
    createOption("scissors");
    createOption("rock");
    createOption("lizard");
    createOption("spock");

    setLayout("bonus");

    choices[3].style.display = "flex";
    choices[4].style.display = "flex";
  }

  userChoice = undefined;
  houseChoice = undefined;

  yourPick.innerHTML = "";
  housePickContainer.innerHTML = "";
};
