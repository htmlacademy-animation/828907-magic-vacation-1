export default () => {
  // Социальные иконки
  const socialBlockItems = document.querySelectorAll(`.social-block__list li`);

  socialBlockItems.forEach((element, index) => {
    let delay = index / 15;
    element.style.transitionDelay = delay + `s`;
  });
};
