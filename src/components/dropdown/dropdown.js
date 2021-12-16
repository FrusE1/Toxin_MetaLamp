// const counter = function () {
// 	const btns = document.querySelectorAll('.dropdown-guests__btn');
// 	btns.forEach(btn => {
// 		btn.addEventListener('click', function (event) {
// 			const direction = this.dataset.direction;
// 			const inp = this.parentElement.querySelector('.dropdown-guests__value');
// 			const currentValue = +inp.textContent;
// 			let newValue;
// 			if (direction === 'plus') {
// 				newValue = currentValue + 1;
// 			} else {
// 				newValue = currentValue - 1 > 0 ? currentValue - 1 : 0;
// 			}
// 			inp.textContent = newValue;
// 			const inputDrop = document.querySelector('.dropdown-guests__input');
// 			if (newValue <= 1) {
// 				inputDrop.value = `${newValue} гость`;
// 			} else if (newValue <= 4) {
// 				inputDrop.value = `${newValue} гостя`;
// 			} else if (newValue > 4) {
// 				inputDrop.value = `${newValue} гостей`;
// 			}
// 			event.preventDefault();
// 		});
// 	})
// }
// counter();

const inputDrop = document.querySelectorAll('.dropdown-guests__value');

const btnMinusOne = inputDrop[0].previousElementSibling;
const btnPlusOne = inputDrop[0].nextElementSibling;
let inputVarOne = +inputDrop[0].textContent;
const inputDropTest = document.querySelector('.dropdown-guests__input');
const buttonClear = document.querySelector('.dropdown-guests-btn__clear');

btnPlusOne.addEventListener("click", function (event) {
	inputDrop[0].textContent = ++inputVarOne;
	let babyVar;
	if (inputVarThree == 0) {
		babyVar = ``;
	} else if (inputVarThree == 1) {
		babyVar = `, ${inputVarThree} младенец`;
	} else if (inputVarThree <= 4) {
		babyVar = `, ${inputVarThree} младенца`;
	} else if (inputVarThree > 4) {
		babyVar = `, ${inputVarThree} младенцев`;
	}
	let inputVarSumm = inputVarOne + inputVarTwo + inputVarThree;
	if (inputVarSumm == 0) {
		inputDropTest.value = "Сколько гостей";
	} else if (inputVarSumm == 1) {
		inputDropTest.value = `${inputVarSumm} гость${babyVar}`;
	} else if (inputVarSumm <= 4) {
		inputDropTest.value = `${inputVarSumm} гостя${babyVar}`;
	} else if (inputVarSumm > 4) {
		inputDropTest.value = `${inputVarSumm} гостей${babyVar}`;
	}
	event.preventDefault();
});
btnMinusOne.addEventListener("click", function (event) {
	inputVarOne = inputVarOne > 0 ? --inputVarOne : 0
	inputDrop[0].textContent = inputVarOne;
	let babyVar;
	if (inputVarThree == 0) {
		babyVar = ``;
	} else if (inputVarThree == 1) {
		babyVar = `, ${inputVarThree} младенец`;
	} else if (inputVarThree <= 4) {
		babyVar = `, ${inputVarThree} младенца`;
	} else if (inputVarThree > 4) {
		babyVar = `, ${inputVarThree} младенцев`;
	}
	let inputVarSumm = inputVarOne + inputVarTwo + inputVarThree;
	if (inputVarSumm == 0) {
		inputDropTest.value = "Сколько гостей";
	} else if (inputVarSumm == 1) {
		inputDropTest.value = `${inputVarSumm} гость${babyVar}`;
	} else if (inputVarSumm <= 4) {
		inputDropTest.value = `${inputVarSumm} гостя${babyVar}`;
	} else if (inputVarSumm > 4) {
		inputDropTest.value = `${inputVarSumm} гостей${babyVar}`;
	}
	event.preventDefault();
})


const btnMinusTwo = inputDrop[1].previousElementSibling;
const btnPlusTwo = inputDrop[1].nextElementSibling;
let inputVarTwo = +inputDrop[1].textContent;
btnPlusTwo.addEventListener("click", function (event) {
	inputDrop[1].textContent = ++inputVarTwo;
	let babyVar;
	if (inputVarThree == 0) {
		babyVar = ``;
	} else if (inputVarThree == 1) {
		babyVar = `, ${inputVarThree} младенец`;
	} else if (inputVarThree <= 4) {
		babyVar = `, ${inputVarThree} младенца`;
	} else if (inputVarThree > 4) {
		babyVar = `, ${inputVarThree} младенцев`;
	}
	let inputVarSumm = inputVarOne + inputVarTwo + inputVarThree;
	if (inputVarSumm == 0) {
		inputDropTest.value = "Сколько гостей";
	} else if (inputVarSumm == 1) {
		inputDropTest.value = `${inputVarSumm} гость${babyVar}`;
	} else if (inputVarSumm <= 4) {
		inputDropTest.value = `${inputVarSumm} гостя${babyVar}`;
	} else if (inputVarSumm > 4) {
		inputDropTest.value = `${inputVarSumm} гостей${babyVar}`;
	}
	event.preventDefault();
});
btnMinusTwo.addEventListener("click", function (event) {
	inputVarTwo = inputVarTwo > 0 ? --inputVarTwo : 0;
	inputDrop[1].textContent = inputVarTwo;
	let babyVar;
	if (inputVarThree == 0) {
		babyVar = ``;
	} else if (inputVarThree == 1) {
		babyVar = `, ${inputVarThree} младенец`;
	} else if (inputVarThree <= 4) {
		babyVar = `, ${inputVarThree} младенца`;
	} else if (inputVarThree > 4) {
		babyVar = `, ${inputVarThree} младенцев`;
	}
	let inputVarSumm = inputVarOne + inputVarTwo + inputVarThree;
	if (inputVarSumm == 0) {
		inputDropTest.value = "Сколько гостей";
	} else if (inputVarSumm == 1) {
		inputDropTest.value = `${inputVarSumm} гость${babyVar}`;
	} else if (inputVarSumm <= 4) {
		inputDropTest.value = `${inputVarSumm} гостя${babyVar}`;
	} else if (inputVarSumm > 4) {
		inputDropTest.value = `${inputVarSumm} гостей${babyVar}`;
	}
	event.preventDefault();
})

const btnMinusThree = inputDrop[2].previousElementSibling;
const btnPlusThree = inputDrop[2].nextElementSibling;
let inputVarThree = +inputDrop[2].textContent;
btnPlusThree.addEventListener("click", function (event) {
	inputDrop[2].textContent = ++inputVarThree;
	let babyVar;
	if (inputVarThree == 0) {
		babyVar = ``;
	} else if (inputVarThree == 1) {
		babyVar = `, ${inputVarThree} младенец`;
	} else if (inputVarThree <= 4) {
		babyVar = `, ${inputVarThree} младенца`;
	} else if (inputVarThree > 4) {
		babyVar = `, ${inputVarThree} младенцев`;
	}
	let inputVarSumm = inputVarOne + inputVarTwo + inputVarThree;
	if (inputVarSumm == 0) {
		inputDropTest.value = "Сколько гостей";
	} else if (inputVarSumm == 1) {
		inputDropTest.value = `${inputVarSumm} гость${babyVar}`;
	} else if (inputVarSumm <= 4) {
		inputDropTest.value = `${inputVarSumm} гостя${babyVar}`;
	} else if (inputVarSumm > 4) {
		inputDropTest.value = `${inputVarSumm} гостей${babyVar}`;
	}
	event.preventDefault();
});
btnMinusThree.addEventListener("click", function (event) {
	inputVarThree = inputVarThree > 0 ? --inputVarThree : 0;
	inputDrop[2].textContent = inputVarThree;
	let babyVar;
	if (inputVarThree == 0) {
		babyVar = ``;
	} else if (inputVarThree == 1) {
		babyVar = `, ${inputVarThree} младенец`;
	} else if (inputVarThree <= 4) {
		babyVar = `, ${inputVarThree} младенца`;
	} else if (inputVarThree > 4) {
		babyVar = `, ${inputVarThree} младенцев`;
	}
	let inputVarSumm = inputVarOne + inputVarTwo + inputVarThree;
	if (inputVarSumm == 0) {
		inputDropTest.value = "Сколько гостей";
	} else if (inputVarSumm == 1) {
		inputDropTest.value = `${inputVarSumm} гость${babyVar}`;
	} else if (inputVarSumm <= 4) {
		inputDropTest.value = `${inputVarSumm} гостя${babyVar}`;
	} else if (inputVarSumm > 4) {
		inputDropTest.value = `${inputVarSumm} гостей${babyVar}`;
	}
	event.preventDefault();
})

buttonClear.addEventListener("click", function (event) {
	inputDropTest.value = 'Сколько гостей';
	inputDrop[0].textContent = "0";
	inputVarOne = 0;
	inputDrop[1].textContent = "0";
	inputVarTwo = 0;
	inputDrop[2].textContent = "0";
	inputVarThree = 0;
	event.preventDefault();
})

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

// .........................................
