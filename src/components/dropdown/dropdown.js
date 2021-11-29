const counter = function () {
	const btns = document.querySelectorAll('.dropdown-guests__btn');
	btns.forEach(btn => {
		btn.addEventListener('click', function (event) {
			const direction = this.dataset.direction;
			const inp = this.parentElement.querySelector('.dropdown-guests__value');
			const currentValue = +inp.value;
			let newValue;
			if (direction === 'plus') {
				newValue = currentValue + 1;
			} else {
				newValue = currentValue - 1 > 0 ? currentValue - 1 : 0;
			}
			inp.value = newValue;
			event.preventDefault();
		})
	})
}
counter();

// const btnCounter = document.querySelectorAll('.dropdown-guests__btn');

// btnCounter.forEach(btnElement => {
// 	btnElement.addEventListener("click", function (event) {
// 		const directionCount = btnElement.dataset.direction;
// 		let spanCounter = btnElement.parentElement.querySelector('.dropdown-guests__value');
// 		let currentValue = +spanCounter.textContent;
// 		let newValue;
// 		if (directionCount === 'plus') {
// 			newValue = currentValue + 1;
// 		} else {
// 			newValue = currentValue - 1 > 0 ? currentValue - 1 : 0;
// 		}
// 		console.log(newValue);
// 		spanCounter.textContent = newValue;
// 		event.preventDefault();
// 	})
// })

// // -----------------------------------------

// let valueCounter = document.querySelectorAll('.dropdown-guests__item');

// let valueCounterOne = valueCounter[0],
// 	valueCounterTwo = valueCounter[1],
// 	valueCounterThree = valueCounter[2];

// let spanCounterOne = valueCounterOne.querySelector('.dropdown-guests__value').textContent,
// 	spanCounterTwo = valueCounterTwo.querySelector('.dropdown-guests__value').textContent,
// 	spanCounterThree = valueCounterThree.querySelector('.dropdown-guests__value').textContent;


// let dropdownArray = ['гость', 'гостя', 'гостей']
// let babyArray = ['младенец', 'младенца', 'младенцев'];

// function endingItem(count, array) {
// 	let itemText;
// 	if (count == 1) {
// 		itemText = count + ' ' + array[0];
// 	} else if (count > 1 && count < 5) {
// 		itemText = count + ' ' + array[1];
// 	} else if (count >= 5) {
// 		itemText = count + ' ' + array[2];
// 	} else {
// 		itemText = '';

// 	}
// 	return itemText;
// }

// textOne = endingItem(spanCounterOne, dropdownArray);
// textTwo = endingItem(spanCounterTwo, dropdownArray);
// textThree = endingItem(spanCounterThree, babyArray);

// // let newInputSelection = inputSelection(textOne, textTwo, textThree);

// function inputSelection(textOne, textTwo, textThree) {
// 	let inputText = document.querySelector('.dropdown-guests__input').value;
// 	if (sel2.length > 0) {
// 		inputText = '';
// 		inputText += textThree;
// 		if (textOne.length > 0) {
// 			inputText += ', ' + textOne;
// 		}
// 		if (textTwo.length > 0) {
// 			inputText += ', ' + textTwo;
// 		}
// 	}

// 	if (textTwo.length > 0) {
// 		inputText = '';
// 		inputText += textTwo;
// 		if (textOne.length > 0) {
// 			inputText += ', ' + textOne;
// 		}
// 		if (textThree.length > 0) {
// 			inputText += ' ' + textThree;
// 		}
// 	}

// 	if (textOne.length > 0) {
// 		inputText = '';
// 		inputText += textOne;
// 		if (textTwo.length > 0) {
// 			inputText += ', ' + textTwo;
// 		}
// 		if (textThree.length > 0) {
// 			inputText += ', ' + textThree;
// 		}
// 	}
// 	return inputText;
// }
// expading the list

const listDrop = document.querySelector('.dropdown-guests');

document.addEventListener("click", list);

function list(event) {
	if (event.target.closest('.dropdown-guests__input')) {
		listDrop.classList.toggle('_active-dropdown');
	}
	if (!event.target.closest('.dropdown-guests')) {
		listDrop.classList.remove('_active-dropdown');
	}
}



