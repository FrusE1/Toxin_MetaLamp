if (document.querySelector('.dropdown-guests')) { // проверка наличия dropdown-guests
	// --- Подсчет количества гостей
	const dropGuestsBlock = document.querySelectorAll('.dropdown-guests');
	dropGuestsBlock.forEach(dropGuestsElem => {
		dropGuestsElem.addEventListener("click", function (event) {
			const inputDropGuests = dropGuestsElem.querySelector('.dropdown-guests__input');
			const valueDropGuests = dropGuestsElem.querySelectorAll('.dropdown-guests__value');
			const btnDropMinus = dropGuestsElem.querySelectorAll('.dropdown-guests__btn_minus');
			const btnClearGuests = dropGuestsElem.querySelector('.dropdown-guests-btn__clear');
			let clearGuestsVar = "очистить";
			let inputGuestsVar = "Сколько гостей";
			// Значения установленные заранее
			let valueDropOnePrev = +valueDropGuests[0].textContent;
			let valueDropTwoPrev = +valueDropGuests[1].textContent;
			let valueDropThreePrev = +valueDropGuests[2].textContent;
			let valueDropSummPrev = valueDropOnePrev + valueDropTwoPrev + valueDropThreePrev;
			let babyDropPrev;
			if (valueDropThreePrev == 0) {
				babyDropPrev = ``;
			} else if (valueDropThreePrev == 1) {
				babyDropPrev = `, ${valueDropThreePrev} младенец`;
			}
			else if (valueDropThreePrev <= 4) {
				babyDropPrev = `, ${valueDropThreePrev} младенца`;
			}
			else if (valueDropThreePrev > 4) {
				babyDropPrev = `, ${valueDropThreePrev} младенцев`;
			};
			if (valueDropSummPrev == 0) {
				inputDropGuests.value = inputGuestsVar;
			} else if (valueDropSummPrev == 1) {
				inputDropGuests.value = `${valueDropSummPrev} гость${babyDropPrev}`;
			} else if (valueDropSummPrev <= 4) {
				inputDropGuests.value = `${valueDropSummPrev} гостя${babyDropPrev}`;
			} else if (valueDropSummPrev > 4) {
				inputDropGuests.value = `${valueDropSummPrev} гостей${babyDropPrev}`;
			};

			if (valueDropOnePrev >= 1) {
				btnDropMinus[0].style.color = "rgba(31, 32, 65, 0.5)";
				btnDropMinus[0].style.borderColor = "rgba(31, 32, 65, 0.5)";
			}
			if (valueDropTwoPrev >= 1) {
				btnDropMinus[1].style.color = "rgba(31, 32, 65, 0.5)";
				btnDropMinus[1].style.borderColor = "rgba(31, 32, 65, 0.5)";
			}
			if (valueDropThreePrev >= 1) {
				btnDropMinus[2].style.color = "rgba(31, 32, 65, 0.5)";
				btnDropMinus[2].style.borderColor = "rgba(31, 32, 65, 0.5)";
			}
			// Основной код подсчета гостей
			let targetDrop = event.target;
			let dropSpan;
			if (targetDrop.dataset.direction == "plus") {
				dropSpan = +targetDrop.previousElementSibling.textContent;
				targetDrop.previousElementSibling.textContent = ++dropSpan;
				if (dropSpan >= 1) {
					targetDrop.parentNode.firstElementChild.style.color = "rgba(31, 32, 65, 0.5)";
					targetDrop.parentNode.firstElementChild.style.borderColor = "rgba(31, 32, 65, 0.5)";
				};
			};
			if (targetDrop.dataset.direction == "minus") {
				dropSpan = +targetDrop.nextElementSibling.textContent;
				dropSpan = dropSpan > 0 ? --dropSpan : 0;
				if (dropSpan == 0) {
					targetDrop.style.color = "rgba(31, 32, 65, 0.25)";
					targetDrop.style.borderColor = "rgba(31, 32, 65, 0.25)";
				}
				targetDrop.nextElementSibling.textContent = dropSpan;
			}
			let valueDropOne = +valueDropGuests[0].textContent;
			let valueDropTwo = +valueDropGuests[1].textContent;
			let valueDropThree = +valueDropGuests[2].textContent;
			let valueSumm = valueDropOne + valueDropTwo + valueDropThree;
			let babyDrop;
			if (valueDropThree == 0) {
				babyDrop = ``;
			} else if (valueDropThree == 0) {
				babyDrop = `, ${valueDropThree} младенец`;
			}
			else if (valueDropThree <= 4) {
				babyDrop = `, ${valueDropThree} младенца`;
			}
			else if (valueDropThree > 4) {
				babyDrop = `, ${valueDropThree} младенцев`;
			};
			if (valueSumm == 0) {
				inputDropGuests.value = inputGuestsVar;
			} else if (valueSumm == 1) {
				inputDropGuests.value = `${valueSumm} гость${babyDrop}`;
			} else if (valueSumm <= 4) {
				inputDropGuests.value = `${valueSumm} гостя${babyDrop}`;
			} else if (valueSumm > 4) {
				inputDropGuests.value = `${valueSumm} гостей${babyDrop}`;
			};
			if (valueSumm == 0) {
				btnClearGuests.innerHTML = '';
			} else if (valueSumm > 0) {
				btnClearGuests.innerHTML = clearGuestsVar;
			};
			btnClearGuests.addEventListener("click", function () {		// Кнопка "очистить"
				btnClearGuests.innerHTML = '';
				valueDropGuests[0].textContent = 0;
				valueDropGuests[1].textContent = 0;
				valueDropGuests[2].textContent = 0;
				inputDropGuests.value = inputGuestsVar;
				let clearBtn = btnClearGuests.parentNode.previousElementSibling.querySelectorAll('.dropdown-guests__btn_minus');
				clearBtn.forEach(clearBtnElem => {
					clearBtnElem.style.borderColor = "rgba(31, 32, 65, 0.25)";
					clearBtnElem.style.color = "rgba(31, 32, 65, 0.25)";
				});
			});
			// --- Выпадаюший список гостей
			const btnDropReady = dropGuestsElem.querySelector('.dropdown-guests-btn__ready');

			btnDropReady.addEventListener("click", function (event) { // Кнопка "применить"
				dropGuestsElem.classList.remove('_active-dropdown-guests');
				event.preventDefault();
			});

			document.addEventListener("click", showList);
			function showList(event) {
				if (event.target.closest('.dropdown-guests__input')) {
					event.target.parentNode.classList.toggle('_active-dropdown-guests');
				};
				if (!event.target.closest('.dropdown-guests')) {
					dropGuestsElem.classList.remove('_active-dropdown-guests');
				};
			};
			event.preventDefault();
		});
	});
};