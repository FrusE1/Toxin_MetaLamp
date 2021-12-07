const ulTag = document.querySelector(".paginator__list");
let totalPages = 20;
function element(totalPages, page) {
	let liTag = '';
	let activeLi;
	let beforePages = page - 1;
	let afterPages = page + 1;
	if (page > 1) {
		liTag += `<li class="paginator__li-prev" onclick="element(totalPages, ${page - 1})"><span class="paginator__span"><i class="paginator__arrow paginator__arrow-prev icon-arrow"></i></span></li>`;
	}

	for (let pageLenght = beforePages; pageLenght <= afterPages; pageLenght++) {
		if (page == pageLenght) {
			activeLi = "paginator__number_active";
		} else {
			activeLi = "";
		}
		liTag += `<li class="paginator__number ${activeLi}"><span>${pageLenght}</span></li>`;
	}

	if (page < totalPages) {
		liTag += `<li class="paginator__li-next"><span class="paginator__span"><i class="paginator__arrow paginator__arrow-next icon-arrow"></i></span></li>`
	}
	ulTag.innerHTML = liTag;
}
element(totalPages, 5);