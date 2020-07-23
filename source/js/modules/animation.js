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
});
