if (document.querySelector('.header')) {     // проверка наличия header
  $(document).ready(function () {
    $('.header-body__burger').click(function (event) {
      $('.header-body__burger,.menu-header,.account-head').toggleClass('burger-active');
    });
  });
};