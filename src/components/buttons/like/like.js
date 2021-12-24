if (document.querySelectorAll('.like__label')) { // проверка наличия like-button
	const likeInput = document.querySelectorAll('.like__input');

	likeInput.forEach(likeElem => {
		likeElem.addEventListener("click", function (event) {
			const likeNum = likeElem.nextElementSibling;
			let likeNumVar = +likeNum.textContent;
			if (likeElem.checked) {
				likeNum.textContent = likeNumVar + 1;
			} else {
				likeNum.textContent = likeNumVar - 1;
			};
		});
	});
}