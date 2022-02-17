if (document.querySelector('.dropdown-filter')) {     // проверка наличия dropdown-filter
  $(document).ready(function () {
    $('.dropdown-filter').click(function (event) {
      $(this).toggleClass('filter-active').next().slideToggle(300);
    });
  });
};