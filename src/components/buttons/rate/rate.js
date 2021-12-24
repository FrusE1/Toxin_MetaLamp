if (document.querySelector('.rate__items')) { // проверка наличия rate component
	const rateItemsList = document.querySelectorAll('.rate__item');
	const rateItemsArray = Array.prototype.slice.call(rateItemsList);

	rateItemsArray.forEach(item => {
		item.addEventListener("click", () => {
			item.parentNode.dataset.totalRate = item.dataset.itemRate;
		});
	});
}