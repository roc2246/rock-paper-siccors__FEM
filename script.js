const displayRules = document.getElementsByClassName("rules-btn")[0];
const rulesModal = document.getElementsByClassName("rules-modal")[0];
const closeRulesBtn = document.getElementsByClassName(
  "rules-modal__container--close"
)[0];

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
