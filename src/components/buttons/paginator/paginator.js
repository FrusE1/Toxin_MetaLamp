const ulTag = document.querySelector(".paginator__list");
let totalPages = 15;
function pagination(totalPages, page) {
  let liTag = '';
  let activeLi;
  let beforePages = page - 1;
  let afterPages = page + 1;
  if (page > 1) {
    liTag += `<li class="paginator__li-prev"><span class="paginator__span"><i class="paginator__arrow paginator__arrow-prev icon-arrow"></i></span></li>`;
  };

  if (page > 2) {
    liTag += `<li class="paginator__number"><span>1</span></li>`;
    if (page > 3) {
      liTag += `<li class="paginator__dots"><span>...</span></li>`;
    };
  };

  let afterPagesList = afterPages + 1;
  let pageLenght;
  if (page <= 3) {
    for (pageLenght = beforePages; pageLenght <= afterPagesList; pageLenght++) {
      if (pageLenght > totalPages) {
        continue;
      };

      if (pageLenght == 0) {
        pageLenght = pageLenght + 1;
      };

      if (page == pageLenght) {
        activeLi = "paginator__number_active";
      } else {
        activeLi = "";
      };

      liTag += `<li class="paginator__number ${activeLi}"><span>${pageLenght}</span></li>`;
    };
  };
  if (page > 3) {
    for (pageLenght = beforePages; pageLenght <= afterPages; pageLenght++) {
      if (pageLenght > totalPages) {
        continue;
      };

      if (pageLenght == 0) {
        pageLenght = pageLenght + 1;
      };

      if (page == pageLenght) {
        activeLi = "paginator__number_active";
      } else {
        activeLi = "";
      };

      liTag += `<li class="paginator__number ${activeLi}"><span>${pageLenght}</span></li>`;
    };
  };

  if (page < totalPages - 1) {
    if (page < totalPages - 2) {
      liTag += `<li class="paginator__dots"><span>...</span></li>`;
    }
    liTag += `<li class="paginator__number"><span>${totalPages}</span></li>`;
  };

  if (page < totalPages) {
    liTag += `<li class="paginator__li-next"><span class="paginator__span"><i class="paginator__arrow paginator__arrow-next icon-arrow"></i></span></li>`
  };
  ulTag.innerHTML = liTag;

  const nextPagination = document.querySelector(".paginator__li-next");
  const prevPagination = document.querySelector(".paginator__li-prev");
  const activePagination = document.querySelector('.paginator__number_active');
  const nextActive = activePagination.nextElementSibling;
  const prevtActive = activePagination.previousElementSibling;
  if (page < 4) {
    if (nextActive) {
      const nextDouble = nextActive.nextElementSibling;
      nextDouble.addEventListener('click', function () {
        pagination(totalPages, page + 2);
      });
    };
  };
  if (nextActive) {
    nextActive.addEventListener("click", function () {
      pagination(totalPages, page + 1);
    });
  };
  if (prevtActive) {
    prevtActive.addEventListener("click", function () {
      pagination(totalPages, page - 1);
    });
  };
  if (page > 1) {
    prevPagination.addEventListener('click', function () {
      pagination(totalPages, page - 1);
    });
  };
  if (page < totalPages) {
    nextPagination.addEventListener('click', function () {
      pagination(totalPages, page + 1);
    });
  };
  if (prevPagination) {
    const firstPages = prevPagination.nextElementSibling;
    firstPages.addEventListener('click', function () {
      pagination(totalPages, 1);
    });
  };
  if (nextPagination) {
    const lastPages = nextPagination.previousElementSibling;
    lastPages.addEventListener('click', function () {
      pagination(totalPages, totalPages);
    });
  };
};
pagination(totalPages, 1);