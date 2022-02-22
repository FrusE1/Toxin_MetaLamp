if (document.querySelector('.popup')) {     // проверка наличия popup
  const btnRegElems = document.querySelectorAll('.active-reg');
  const btnLoginElems = document.querySelectorAll('.active-login');
  const cardReg = document.querySelector('.popup-reg');
  const cardLogin = document.querySelector('.popup-login');
  const burgerActive = document.querySelector('.header-body__burger .menu-header .account-head');
  // всплывание окна регистрации
  btnRegElems.forEach(btnRegElem => {
    btnRegElem.addEventListener("click", function (event) {
      cardReg.classList.toggle('popup-active');
      // закрывает бургер-меню, если вызывается окно регистрации
      if (cardReg.classList.contains('popup-active')) {
        burgerActive.classList.remove('burger-active');
      };
      event.preventDefault();
    });
  });
  // всплывание окна входа
  btnLoginElems.forEach(btnLoginElem => {
    btnLoginElem.addEventListener("click", function (event) {
      cardLogin.classList.toggle('popup-active');
      // закрывает бургер-меню, если вызывается окно входа
      if (cardLogin.classList.contains('popup-active')) {
        burgerActive.classList.remove('burger-active');
      };
      event.preventDefault();
    });
  });
};