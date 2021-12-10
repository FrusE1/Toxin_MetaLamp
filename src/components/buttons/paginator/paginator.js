const ulTag = document.querySelector('.paginator__list');
const liPrev = document.querySelector('.paginator__li-prev');

let totalPages = 20;
function element(totalPages, page) {
	let liTag = '';
	let activeLi;
	let beforePages = page - 1;
	let afterPages = page + 1;
	if (page > 1) {
		liTag += `<li class="paginator__li-prev"><span class="paginator__span"><i class="paginator__arrow paginator__arrow-prev icon-arrow"></i></span></li>`;
	}

	if (page > 2) {
		liTag += `<li class="paginator__number" onclick="element(totalPages, 1)"><span>1</span></li>`;
		if (page > 3) {
			liTag += `<li class="paginator__dots"><span>...</span></li>`;
		}
	}

	for (let pageLenght = beforePages; pageLenght <= afterPages; pageLenght++) {
		if (pageLenght > totalPages) {
			continue;
		}

		if (pageLenght == 0) {
			pageLenght = pageLenght + 1;
		}

		if (page == pageLenght) {
			activeLi = "paginator__number_active";
		} else {
			activeLi = "";
		}

		liTag += `<li class="paginator__number ${activeLi}" onclick="element(totalPages, ${pageLenght})"><span>${pageLenght}</span></li>`;
	}

	if (page < totalPages - 1) {
		if (page < totalPages - 2) {
			liTag += `<li class="paginator__dots"><span>...</span></li>`;
		}
		liTag += `<li class="paginator__number" onclick="element(totalPages, ${totalPages})"><span>${totalPages}</span></li>`;
	}

	if (page < totalPages) {
		liTag += `<li class="paginator__li-next" onclick="element(totalPages, ${page + 1})"><span class="paginator__span"><i class="paginator__arrow paginator__arrow-next icon-arrow"></i></span></li>`
	}
	ulTag.innerHTML = liTag;
}
element(totalPages, 1);