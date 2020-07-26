export default () => {
  // Социальные иконки
  const socialBlockItems = document.querySelectorAll(`.social-block__list li`);

  socialBlockItems.forEach((element, index) => {
    let delay = index / 15;
    element.style.transitionDelay = delay + `s`;
  });
};

// Появление шапки и футера
const body = document.querySelector(`body`);

window.addEventListener(`load`, () => {
  body.classList.add(`page-loaded`);

  // Смена состояния псевдоэлементов меню начинается после появления меню
  setTimeout(() => body.classList.add(`menu-loaded`), 500);

  // СТРАНИЦА ПРАВИЛ ---

  const rulesScreen = document.querySelector(`.screen--rules`);
  const lastRuleText = document.querySelector(`.rules__item:last-child p`);
  const rulesLink = document.querySelector(`.rules__link`);

  const mutationConfig = {
    attributes: true,
    childList: false,
    subtree: false
  };

  const callback = function (mutationsList) {
    for (let mutation of mutationsList) {
      if (mutation.type === `attributes`) {
        if ((rulesScreen.classList.contains(`active`)) && (rulesLink.classList.contains(`rules__link--visible`))) {
          rulesLink.classList.remove(`rules__link--visible`);
        }
      }
    }
  };

  const observer = new MutationObserver(callback);
  observer.observe(rulesScreen, mutationConfig);

  lastRuleText.addEventListener(`animationend`, () => {
    rulesLink.classList.add(`rules__link--visible`);
  });
});
