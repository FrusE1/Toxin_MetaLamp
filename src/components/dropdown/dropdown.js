// guest counter

const valueDropGuest = document.querySelectorAll('.dropdown-guests__value');

const btnMinusOne = valueDropGuest[0].previousElementSibling;
const btnPlusOne = valueDropGuest[0].nextElementSibling;
let inputVarOne = +valueDropGuest[0].textContent;
const inputDropGuest = document.querySelector('.dropdown-guests__input');
const btnDropClear = document.querySelector('.dropdown-guests-btn__clear');

btnPlusOne.addEventListener("click", function (event) {
	valueDropGuest[0].textContent = ++inputVarOne;
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
		inputDropGuest.value = "Сколько гостей";
	} else if (inputVarSumm == 1) {
		inputDropGuest.value = `${inputVarSumm} гость${babyVar}`;
	} else if (inputVarSumm <= 4) {
		inputDropGuest.value = `${inputVarSumm} гостя${babyVar}`;
	} else if (inputVarSumm > 4) {
		inputDropGuest.value = `${inputVarSumm} гостей${babyVar}`;
	}
	event.preventDefault();
});

btnMinusOne.addEventListener("click", function (event) {
	inputVarOne = inputVarOne > 0 ? --inputVarOne : 0
	valueDropGuest[0].textContent = inputVarOne;
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
		inputDropGuest.value = "Сколько гостей";
	} else if (inputVarSumm == 1) {
		inputDropGuest.value = `${inputVarSumm} гость${babyVar}`;
	} else if (inputVarSumm <= 4) {
		inputDropGuest.value = `${inputVarSumm} гостя${babyVar}`;
	} else if (inputVarSumm > 4) {
		inputDropGuest.value = `${inputVarSumm} гостей${babyVar}`;
	}
	event.preventDefault();
})


const btnMinusTwo = valueDropGuest[1].previousElementSibling;
const btnPlusTwo = valueDropGuest[1].nextElementSibling;
let inputVarTwo = +valueDropGuest[1].textContent;

btnPlusTwo.addEventListener("click", function (event) {
	valueDropGuest[1].textContent = ++inputVarTwo;
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
		inputDropGuest.value = "Сколько гостей";
	} else if (inputVarSumm == 1) {
		inputDropGuest.value = `${inputVarSumm} гость${babyVar}`;
	} else if (inputVarSumm <= 4) {
		inputDropGuest.value = `${inputVarSumm} гостя${babyVar}`;
	} else if (inputVarSumm > 4) {
		inputDropGuest.value = `${inputVarSumm} гостей${babyVar}`;
	}
	event.preventDefault();
});

btnMinusTwo.addEventListener("click", function (event) {
	inputVarTwo = inputVarTwo > 0 ? --inputVarTwo : 0;
	valueDropGuest[1].textContent = inputVarTwo;
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
		inputDropGuest.value = "Сколько гостей";
	} else if (inputVarSumm == 1) {
		inputDropGuest.value = `${inputVarSumm} гость${babyVar}`;
	} else if (inputVarSumm <= 4) {
		inputDropGuest.value = `${inputVarSumm} гостя${babyVar}`;
	} else if (inputVarSumm > 4) {
		inputDropGuest.value = `${inputVarSumm} гостей${babyVar}`;
	}
	event.preventDefault();
})

const btnMinusThree = valueDropGuest[2].previousElementSibling;
const btnPlusThree = valueDropGuest[2].nextElementSibling;
let inputVarThree = +valueDropGuest[2].textContent;

btnPlusThree.addEventListener("click", function (event) {
	valueDropGuest[2].textContent = ++inputVarThree;
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
		inputDropGuest.value = "Сколько гостей";
	} else if (inputVarSumm == 1) {
		inputDropGuest.value = `${inputVarSumm} гость${babyVar}`;
	} else if (inputVarSumm <= 4) {
		inputDropGuest.value = `${inputVarSumm} гостя${babyVar}`;
	} else if (inputVarSumm > 4) {
		inputDropGuest.value = `${inputVarSumm} гостей${babyVar}`;
	}
	event.preventDefault();
});

btnMinusThree.addEventListener("click", function (event) {
	inputVarThree = inputVarThree > 0 ? --inputVarThree : 0;
	valueDropGuest[2].textContent = inputVarThree;
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
		inputDropGuest.value = "Сколько гостей";
	} else if (inputVarSumm == 1) {
		inputDropGuest.value = `${inputVarSumm} гость${babyVar}`;
	} else if (inputVarSumm <= 4) {
		inputDropGuest.value = `${inputVarSumm} гостя${babyVar}`;
	} else if (inputVarSumm > 4) {
		inputDropGuest.value = `${inputVarSumm} гостей${babyVar}`;
	}
	event.preventDefault();
})

// clear button

btnDropClear.addEventListener("click", function (event) {
	inputDropGuest.value = 'Сколько гостей';
	valueDropGuest[0].textContent = "0";
	inputVarOne = 0;
	valueDropGuest[1].textContent = "0";
	inputVarTwo = 0;
	valueDropGuest[2].textContent = "0";
	inputVarThree = 0;
	event.preventDefault();
})

// expading the list

const listDrop = document.querySelector('.dropdown-guests');

const btnDropReady = document.querySelector('.dropdown-guests-btn__ready');



btnDropReady.addEventListener("click", function (event) { // apply button
	listDrop.classList.remove('_active-dropdown');
	event.preventDefault();
})

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
