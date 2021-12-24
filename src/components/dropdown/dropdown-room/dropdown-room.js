if (document.querySelector('.dropdown-room__block')) { // проверка наличия dropdown-room
	// --- Подсчет количества комнат
	const dropRoom = document.querySelector('.dropdown-room__block');
	const inputDropRoom = document.querySelector('.dropdown-room__input');
	const valueDropRoom = document.querySelectorAll('.dropdown-room__value');
	const btnDropRoomMinus = document.querySelectorAll('.dropdown-room__btn_minus')
	let inputDropRoomVar = inputDropRoom.value;

	// Значения установленные заранее
	let valueDropRoomOnePrev = +valueDropRoom[0].textContent;
	let valueDropRoomTwoPrev = +valueDropRoom[1].textContent;
	let valueDropRoomThreePrev = +valueDropRoom[2].textContent;

	let bedroomsPrev;
	if (valueDropRoomOnePrev == 0) {
		bedroomsPrev = `0 спален`;
	} else if (valueDropRoomOnePrev == 1) {
		bedroomsPrev = `${valueDropRoomOnePrev} спальня`;
	}
	else if (valueDropRoomTwoPrev <= 4) {
		bedroomsPrev = `${valueDropRoomOnePrev} спальни`;
	}
	else if (valueDropRoomOnePrev > 4) {
		bedroomsPrev = `${valueDropRoomOnePrev} спален`;
	};

	let bedDropPrev;
	if (valueDropRoomTwoPrev == 0) {
		bedDropPrev = ``;
	} else if (valueDropRoomTwoPrev == 1) {
		bedDropPrev = `, ${valueDropRoomTwoPrev} кровать`;
	}
	else if (valueDropRoomTwoPrev <= 4) {
		bedDropPrev = `, ${valueDropRoomTwoPrev} кровати`;
	}
	else if (valueDropRoomTwoPrev > 4) {
		bedDropPrev = `, ${valueDropRoomTwoPrev} кроватей`;
	};

	let bathroomsDropPrev;
	if (valueDropRoomThreePrev == 0) {
		bathroomsDropPrev = ``;
	} else if (valueDropRoomThreePrev == 1) {
		bathroomsDropPrev = `, ${valueDropRoomThreePrev} ванная комната`;
	}
	else if (valueDropRoomThreePrev <= 4) {
		bathroomsDropPrev = `, ${valueDropRoomThreePrev} ванные комнаты`;
	}
	else if (valueDropRoomThreePrev > 4) {
		bathroomsDropPrev = `, ${valueDropRoomThreePrev} ванных комнат`;
	};

	let valueDropRoomSummPrev = bedroomsPrev + bedDropPrev + bathroomsDropPrev;
	if (valueDropRoomSummPrev == 0) {
		inputDropRoom.value = inputDropRoomVar;
	} else if (valueDropRoomSummPrev == 1) {
		inputDropRoom.value = `${valueDropRoomSummPrev}`;
	} else if (valueDropRoomSummPrev <= 4) {
		inputDropRoom.value = `${valueDropRoomSummPrev}`;
	} else if (valueDropRoomSummPrev > 4) {
		inputDropRoom.value = `${valueDropRoomSummPrev}`;
	};

	if (valueDropRoomOnePrev >= 1) {
		btnDropRoomMinus[0].style.color = "rgba(31, 32, 65, 0.5)";
		btnDropRoomMinus[0].style.borderColor = "rgba(31, 32, 65, 0.5)";
	}
	if (valueDropRoomTwoPrev >= 1) {
		btnDropRoomMinus[1].style.color = "rgba(31, 32, 65, 0.5)";
		btnDropRoomMinus[1].style.borderColor = "rgba(31, 32, 65, 0.5)";
	}
	if (valueDropRoomThreePrev >= 1) {
		btnDropRoomMinus[2].style.color = "rgba(31, 32, 65, 0.5)";
		btnDropRoomMinus[2].style.borderColor = "rgba(31, 32, 65, 0.5)";
	}

	// Основной код подсчета гостей
	dropRoom.addEventListener("click", function (event) {
		let targetRoomDrop = event.target;
		let dropRoomSpan;
		if (targetRoomDrop.dataset.direction == "plus") {
			dropRoomSpan = +targetRoomDrop.previousElementSibling.textContent;
			targetRoomDrop.previousElementSibling.textContent = ++dropRoomSpan;
			if (dropRoomSpan >= 1) {
				targetRoomDrop.parentNode.firstElementChild.style.color = "rgba(31, 32, 65, 0.5)";
				targetRoomDrop.parentNode.firstElementChild.style.borderColor = "rgba(31, 32, 65, 0.5)";
			}

		}
		if (targetRoomDrop.dataset.direction == "minus") {
			dropRoomSpan = +targetRoomDrop.nextElementSibling.textContent;
			dropRoomSpan = dropRoomSpan > 0 ? --dropRoomSpan : 0;
			if (dropRoomSpan == 0) {
				targetRoomDrop.style.color = "rgba(31, 32, 65, 0.25)";
				targetRoomDrop.style.borderColor = "rgba(31, 32, 65, 0.25)";
			}
			targetRoomDrop.nextElementSibling.textContent = dropRoomSpan;
		}
		let valueDropRoomOne = +valueDropRoom[0].textContent;
		let valueDropRoomTwo = +valueDropRoom[1].textContent;
		let valueDropRoomThree = +valueDropRoom[2].textContent;
		let bedrooms;
		if (valueDropRoomOne == 0) {
			bedrooms = `0 спален`;
		} else if (valueDropRoomOne == 1) {
			bedrooms = `${valueDropRoomOne} спальня`;
		}
		else if (valueDropRoomOne <= 4) {
			bedrooms = `${valueDropRoomOne} спальни`;
		}
		else if (valueDropRoomOne > 4) {
			bedrooms = `${valueDropRoomOne} спален`;
		};

		let bedDrop;
		if (valueDropRoomTwo == 0) {
			bedDrop = ``;
		} else if (valueDropRoomTwo == 1) {
			bedDrop = `, ${valueDropRoomTwo} кровать`;
		}
		else if (valueDropRoomTwo <= 4) {
			bedDrop = `, ${valueDropRoomTwo} кровати`;
		}
		else if (valueDropRoomTwo > 4) {
			bedDrop = `, ${valueDropRoomTwo} кроватей`;
		};

		let bathroomsDrop;
		if (valueDropRoomThree == 0) {
			bathroomsDrop = ``;
		} else if (valueDropRoomThree == 1) {
			bathroomsDrop = `, ${valueDropRoomThree} ванная комната`;
		}
		else if (valueDropRoomThree <= 4) {
			bathroomsDrop = `, ${valueDropRoomThree} ванные комнаты`;
		}
		else if (valueDropRoomThree > 4) {
			bathroomsDrop = `, ${valueDropRoomThree} ванных комнат`;
		};

		let valueDropRoomSumm = bedrooms + bedDrop + bathroomsDrop;
		if (valueDropRoomSumm == 0) {
			inputDropRoom.value = inputDropRoomVar;
		} else if (valueDropRoomSumm == 1) {
			inputDropRoom.value = `${valueDropRoomSumm}`;
		} else if (valueDropRoomSumm <= 4) {
			inputDropRoom.value = `${valueDropRoomSumm}`;
		} else if (valueDropRoomSumm > 4) {
			inputDropRoom.value = `${valueDropRoomSumm}`;
		};
		event.preventDefault();
	})

	// --- выпадающий список комнат
	const listDropRoom = document.querySelector('.dropdown-room');

	document.addEventListener("click", list);

	function list(event) {
		if (event.target.closest('.dropdown-room__input')) {
			listDropRoom.classList.toggle('_active-dropdown-room');
		};
		if (!event.target.closest('.dropdown-room')) {
			listDropRoom.classList.remove('_active-dropdown-room');
		};
	};
};