if (document.querySelector('.dropdown-room__block')) { // проверка наличия dropdown-room
	const dropRoomBlock = document.querySelectorAll('.dropdown-room');
	dropRoomBlock.forEach(dropRoomElem => {
		const inputDropRoom = dropRoomElem.querySelector('.dropdown-room__input');
		const valueDropRoom = dropRoomElem.querySelectorAll('.dropdown-room__value');
		const btnDropRoomMinus = dropRoomElem.querySelectorAll('.dropdown-room__btn_minus');
		// Значения установленные заранее
		let valueRoomOnePrev = +valueDropRoom[0].textContent;
		let valueRoomTwoPrev = +valueDropRoom[1].textContent;
		let valueRoomThreePrev = +valueDropRoom[2].textContent;
		let valueRoomSummPrev = valueRoomOnePrev + valueRoomTwoPrev + valueRoomThreePrev;
		let bedroomsPrev;
		if (valueRoomOnePrev == 0) {
			bedroomsPrev = `0 спален`;
		} else if (valueRoomOnePrev == 1) {
			bedroomsPrev = `${valueRoomOnePrev} спальня`;
		}
		else if (valueRoomOnePrev <= 4) {
			bedroomsPrev = `${valueRoomOnePrev} спальни`;
		}
		else if (valueRoomOnePrev > 4) {
			bedroomsPrev = `${valueRoomOnePrev} спален`;
		};

		let bedDropPrev;
		if (valueRoomTwoPrev == 0) {
			bedDropPrev = ``;
		} else if (valueRoomTwoPrev == 1) {
			bedDropPrev = `, ${valueRoomTwoPrev} кровать`;
		}
		else if (valueRoomTwoPrev <= 4) {
			bedDropPrev = `, ${valueRoomTwoPrev} кровати`;
		}
		else if (valueRoomTwoPrev > 4) {
			bedDropPrev = `, ${valueRoomTwoPrev} кроватей`;
		};

		let bathroomsDropPrev;
		if (valueRoomThreePrev == 0) {
			bathroomsDropPrev = ``;
		} else if (valueRoomThreePrev == 1) {
			bathroomsDropPrev = `, ${valueRoomThreePrev} ванная комната`;
		}
		else if (valueRoomThreePrev <= 4) {
			bathroomsDropPrev = `, ${valueRoomThreePrev} ванные комнаты`;
		}
		else if (valueRoomThreePrev > 4) {
			bathroomsDropPrev = `, ${valueRoomThreePrev} ванных комнат`;
		};
		let inputRoomSummPrev = bedroomsPrev + bedDropPrev + bathroomsDropPrev;
		if (valueRoomSummPrev == 0) {
			inputDropRoom.value = inputRoomSummPrev;
		} else if (valueRoomSummPrev == 1) {
			inputDropRoom.value = `${inputRoomSummPrev}`;
		} else if (valueRoomSummPrev <= 4) {
			inputDropRoom.value = `${inputRoomSummPrev}`;
		} else if (valueRoomSummPrev > 4) {
			inputDropRoom.value = `${inputRoomSummPrev}`;
		};
		if (valueRoomOnePrev >= 1) {
			btnDropRoomMinus[0].style.color = "rgba(31, 32, 65, 0.5)";
			btnDropRoomMinus[0].style.borderColor = "rgba(31, 32, 65, 0.5)";
		};
		if (valueRoomTwoPrev >= 1) {
			btnDropRoomMinus[1].style.color = "rgba(31, 32, 65, 0.5)";
			btnDropRoomMinus[1].style.borderColor = "rgba(31, 32, 65, 0.5)";
		};
		if (valueRoomThreePrev >= 1) {
			btnDropRoomMinus[2].style.color = "rgba(31, 32, 65, 0.5)";
			btnDropRoomMinus[2].style.borderColor = "rgba(31, 32, 65, 0.5)";
		};
		// --------
		dropRoomElem.addEventListener("click", function (event) {
			let inputDropRoomVar = "Сколько комнат";
			// Основной код подсчета гостей
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
			// вывод текста в инпут
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

			let valueDropRoomSumm = valueDropRoomOne + valueDropRoomTwo + valueDropRoomThree;
			let inputDropRoomSumm = bedrooms + bedDrop + bathroomsDrop;
			if (valueDropRoomSumm == 0) {
				inputDropRoom.value = inputDropRoomVar;
			} else if (valueDropRoomSumm == 1) {
				inputDropRoom.value = `${inputDropRoomSumm}`;
			} else if (valueDropRoomSumm <= 4) {
				inputDropRoom.value = `${inputDropRoomSumm}`;
			} else if (valueDropRoomSumm > 4) {
				inputDropRoom.value = `${inputDropRoomSumm}`;
			};
		});
		// --- выпадающий список комнат
		document.addEventListener("click", showList);

		function showList(event) {
			if (event.target.closest('.dropdown-room__input')) {
				event.target.parentNode.classList.toggle('_active-dropdown-room');
			};
			if (!event.target.closest('.dropdown-room')) {
				dropRoomElem.classList.remove('_active-dropdown-room');
			};
		};
	});
};