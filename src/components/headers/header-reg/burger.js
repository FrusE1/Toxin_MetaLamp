if (document.querySelector('.header')) {     // проверка наличия header
  $(document).ready(function () {
    $('.header-body__burger').click(function (event) {
      $('.header-body__burger,.menu-header,.account-head').toggleClass('burger-active');
      // Убирает окна регистрации и входа при нажатии на бургер-меню
      if ($('.header-body__burger,.menu-header,.account-head').hasClass('burger-active')) {
        $('.popup-reg,.popup-login').removeClass('popup-active');
      } else {
        $('.popup-reg').addClass('popup-active');
      };
    });
  });
};