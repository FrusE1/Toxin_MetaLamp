if (document.querySelector('.popup')) {     // проверка наличия popup

  const btnReg = document.querySelectorAll('.button__item_default');
  const btnLogin = document.querySelectorAll('.button__item-border');
  const cardReg = document.querySelector('.popup-reg');
  const cardLogin = document.querySelector('.popup-login');
  const roomSelect = document.querySelector('.main-page__card');
  const backgroundPage = document.querySelector('.main-page__content');
  const btnCardLogin = document.querySelector('.login-card__button');
  const headerLogin = document.querySelector('.header-login');
  const headerReg = document.querySelector('.header-reg');

  btnReg.forEach(btnRegItem => {
    btnRegItem.addEventListener("click", function (event) {
      cardReg.classList.toggle('popup_active');
      if (cardReg.classList.contains('popup_active')) {
        roomSelect.style.display = "none";
        backgroundPage.firstChild.style.display = "none";
        backgroundPage.lastChild.style.display = "block";
      } else {
        roomSelect.style.display = "block";
        backgroundPage.lastChild.style.display = "none";
        backgroundPage.firstChild.style.display = "block";
      };
      if (cardLogin.classList.contains('popup_active')) {
        cardLogin.classList.toggle('popup_active');
      }
      event.preventDefault();
    });
  });

  btnLogin.forEach(btnLoginItem => {
    btnLoginItem.addEventListener("click", function (event) {
      cardLogin.classList.toggle('popup_active');
      if (cardLogin.classList.contains('popup_active')) {
        roomSelect.style.display = "none";
        backgroundPage.firstChild.style.display = "none";
        backgroundPage.lastChild.style.display = "block";
      } else {
        roomSelect.style.display = "block";
        backgroundPage.lastChild.style.display = "none";
        backgroundPage.firstChild.style.display = "block";
      };
      if (cardReg.classList.contains('popup_active')) {
        cardReg.classList.toggle('popup_active');
      }
      event.preventDefault();
    });
  });
  btnCardLogin.addEventListener("click", function (event) {
    headerReg.style.display = "none";
    headerLogin.style.display = "block";
    cardLogin.classList.toggle('popup_active');
    roomSelect.style.display = "block";
    backgroundPage.lastChild.style.display = "none";
    backgroundPage.firstChild.style.display = "block";
    event.preventDefault();
  });
};