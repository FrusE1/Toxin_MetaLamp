// guest counter

const valueDropRoom = document.querySelectorAll('.dropdown-room__value');

const roomMinusOne = valueDropRoom[0].previousElementSibling;
const roomPlusOne = valueDropRoom[0].nextElementSibling;
let inputRoomOne = +valueDropRoom[0].textContent;
const inputDropRoom = document.querySelector('.dropdown-room__input');
let inputRoomVar = inputDropRoom.value;

roomPlusOne.addEventListener("click", function (event) {
	valueDropRoom[0].textContent = ++inputRoomOne;
	let bedroomVar;
	if (inputRoomOne == 0) {
		bedroomVar = `0 спален`;
	} else if (inputRoomOne == 1) {
		bedroomVar = `${inputRoomOne} спальня`;
	} else if (inputRoomOne <= 4) {
		bedroomVar = `${inputRoomOne} спальни`;
	} else if (inputRoomOne > 4) {
		bedroomVar = `${inputRoomOne} спален`;
	};
	let bedVar;
	if (inputRoomTwo == 0) {
		bedVar = ``;
	} else if (inputRoomTwo == 1) {
		bedVar = `, ${inputRoomTwo} кровать`;
	} else if (inputRoomTwo <= 4) {
		bedVar = `, ${inputRoomTwo} кровати`;
	} else if (inputRoomTwo > 4) {
		bedVar = `, ${inputRoomTwo} кроватей`;
	};
	let bathroomsVar;
	if (inputRoomThree == 0) {
		bathroomsVar = ``;
	} else if (inputRoomThree == 1) {
		bathroomsVar = `, ${inputRoomThree} ванная комната`;
	} else if (inputRoomThree <= 4) {
		bathroomsVar = `, ${inputRoomThree} ванные комнаты`;
	} else if (inputRoomThree > 4) {
		bathroomsVar = `, ${inputRoomThree} ванных комнат`;
	};
	let inputRoomSumm = inputRoomOne + inputRoomTwo + inputRoomThree;
	if (inputRoomSumm == 0) {
		inputDropRoom.value = inputRoomVar;
	} else {
		inputDropRoom.value = `${bedroomVar + bedVar + bathroomsVar}`
	}
	if (inputRoomOne >= 1) {
		roomMinusOne.style.borderColor = "rgba(31, 32, 65, 0.5)";
		roomMinusOne.style.color = "rgba(31, 32, 65, 0.5)";
	};
	event.preventDefault();
});

roomMinusOne.addEventListener("click", function (event) {
	inputRoomOne = inputRoomOne > 0 ? --inputRoomOne : 0
	valueDropRoom[0].textContent = inputRoomOne;
	let bedroomVar;
	if (inputRoomOne == 0) {
		bedroomVar = `0 спален`;
	} else if (inputRoomOne == 1) {
		bedroomVar = `${inputRoomOne} спальня`;
	} else if (inputRoomOne <= 4) {
		bedroomVar = `${inputRoomOne} спальни`;
	} else if (inputRoomOne > 4) {
		bedroomVar = `${inputRoomOne} спален`;
	};
	let bedVar;
	if (inputRoomTwo == 0) {
		bedVar = ``;
	} else if (inputRoomTwo == 1) {
		bedVar = `, ${inputRoomTwo} кровать`;
	} else if (inputRoomTwo <= 4) {
		bedVar = `, ${inputRoomTwo} кровати`;
	} else if (inputRoomTwo > 4) {
		bedVar = `, ${inputRoomTwo} кроватей`;
	};
	let bathroomsVar;
	if (inputRoomThree == 0) {
		bathroomsVar = ``;
	} else if (inputRoomThree == 1) {
		bathroomsVar = `, ${inputRoomThree} ванная комната`;
	} else if (inputRoomThree <= 4) {
		bathroomsVar = `, ${inputRoomThree} ванные комнаты`;
	} else if (inputRoomThree > 4) {
		bathroomsVar = `, ${inputRoomThree} ванных комнат`;
	};
	let inputRoomSumm = inputRoomOne + inputRoomTwo + inputRoomThree;
	if (inputRoomSumm == 0) {
		inputDropRoom.value = inputRoomVar;
	} else {
		inputDropRoom.value = `${bedroomVar + bedVar + bathroomsVar}`
	}
	if (inputRoomOne == 0) {
		roomMinusOne.style.borderColor = "rgba(31, 32, 65, 0.25)";
		roomMinusOne.style.color = "rgba(31, 32, 65, 0.25)";
	};
	event.preventDefault();
})


const roomMinusTwo = valueDropRoom[1].previousElementSibling;
const roomPlusTwo = valueDropRoom[1].nextElementSibling;
let inputRoomTwo = +valueDropRoom[1].textContent;

roomPlusTwo.addEventListener("click", function (event) {
	valueDropRoom[1].textContent = ++inputRoomTwo;
	let bedroomVar;
	if (inputRoomOne == 0) {
		bedroomVar = `0 спален`;
	} else if (inputRoomOne == 1) {
		bedroomVar = `${inputRoomOne} спальня`;
	} else if (inputRoomOne <= 4) {
		bedroomVar = `${inputRoomOne} спальни`;
	} else if (inputRoomOne > 4) {
		bedroomVar = `${inputRoomOne} спален`;
	};
	let bedVar;
	if (inputRoomTwo == 0) {
		bedVar = ``;
	} else if (inputRoomTwo == 1) {
		bedVar = `, ${inputRoomTwo} кровать`;
	} else if (inputRoomTwo <= 4) {
		bedVar = `, ${inputRoomTwo} кровати`;
	} else if (inputRoomTwo > 4) {
		bedVar = `, ${inputRoomTwo} кроватей`;
	};
	let bathroomsVar;
	if (inputRoomThree == 0) {
		bathroomsVar = ``;
	} else if (inputRoomThree == 1) {
		bathroomsVar = `, ${inputRoomThree} ванная комната`;
	} else if (inputRoomThree <= 4) {
		bathroomsVar = `, ${inputRoomThree} ванные комнаты`;
	} else if (inputRoomThree > 4) {
		bathroomsVar = `, ${inputRoomThree} ванных комнат`;
	};
	let inputRoomSumm = inputRoomOne + inputRoomTwo + inputRoomThree;
	if (inputRoomSumm == 0) {
		inputDropRoom.value = inputRoomVar;
	} else {
		inputDropRoom.value = `${bedroomVar + bedVar + bathroomsVar}`
	};
	if (inputRoomTwo >= 1) {
		roomMinusTwo.style.borderColor = "rgba(31, 32, 65, 0.5)";
		roomMinusTwo.style.color = "rgba(31, 32, 65, 0.5)";
	};
	event.preventDefault();
});

roomMinusTwo.addEventListener("click", function (event) {
	inputRoomTwo = inputRoomTwo > 0 ? --inputRoomTwo : 0;
	valueDropRoom[1].textContent = inputRoomTwo;
	let bedroomVar;
	if (inputRoomOne == 0) {
		bedroomVar = `0 спален`;
	} else if (inputRoomOne == 1) {
		bedroomVar = `${inputRoomOne} спальня`;
	} else if (inputRoomOne <= 4) {
		bedroomVar = `${inputRoomOne} спальни`;
	} else if (inputRoomOne > 4) {
		bedroomVar = `${inputRoomOne} спален`;
	};
	let bedVar;
	if (inputRoomTwo == 0) {
		bedVar = ``;
	} else if (inputRoomTwo == 1) {
		bedVar = `, ${inputRoomTwo} кровать`;
	} else if (inputRoomTwo <= 4) {
		bedVar = `, ${inputRoomTwo} кровати`;
	} else if (inputRoomTwo > 4) {
		bedVar = `, ${inputRoomTwo} кроватей`;
	};
	let bathroomsVar;
	if (inputRoomThree == 0) {
		bathroomsVar = ``;
	} else if (inputRoomThree == 1) {
		bathroomsVar = `, ${inputRoomThree} ванная комната`;
	} else if (inputRoomThree <= 4) {
		bathroomsVar = `, ${inputRoomThree} ванные комнаты`;
	} else if (inputRoomThree > 4) {
		bathroomsVar = `, ${inputRoomThree} ванных комнат`;
	};
	let inputRoomSumm = inputRoomOne + inputRoomTwo + inputRoomThree;
	if (inputRoomSumm == 0) {
		inputDropRoom.value = inputRoomVar;
	} else {
		inputDropRoom.value = `${bedroomVar + bedVar + bathroomsVar}`
	};
	if (inputRoomTwo == 0) {
		roomMinusTwo.style.borderColor = "rgba(31, 32, 65, 0.25)";
		roomMinusTwo.style.color = "rgba(31, 32, 65, 0.25)";
	};
	event.preventDefault();
})

const roomMinusThree = valueDropRoom[2].previousElementSibling;
const roomPlusThree = valueDropRoom[2].nextElementSibling;
let inputRoomThree = +valueDropRoom[2].textContent;

roomPlusThree.addEventListener("click", function (event) {
	valueDropRoom[2].textContent = ++inputRoomThree;
	let bedroomVar;
	if (inputRoomOne == 0) {
		bedroomVar = `0 спален`;
	} else if (inputRoomOne == 1) {
		bedroomVar = `${inputRoomOne} спальня`;
	} else if (inputRoomOne <= 4) {
		bedroomVar = `${inputRoomOne} спальни`;
	} else if (inputRoomOne > 4) {
		bedroomVar = `${inputRoomOne} спален`;
	};
	let bedVar;
	if (inputRoomTwo == 0) {
		bedVar = ``;
	} else if (inputRoomTwo == 1) {
		bedVar = `, ${inputRoomTwo} кровать`;
	} else if (inputRoomTwo <= 4) {
		bedVar = `, ${inputRoomTwo} кровати`;
	} else if (inputRoomTwo > 4) {
		bedVar = `, ${inputRoomTwo} кроватей`;
	};
	let bathroomsVar;
	if (inputRoomThree == 0) {
		bathroomsVar = ``;
	} else if (inputRoomThree == 1) {
		bathroomsVar = `, ${inputRoomThree} ванная комната`;
	} else if (inputRoomThree <= 4) {
		bathroomsVar = `, ${inputRoomThree} ванные комнаты`;
	} else if (inputRoomThree > 4) {
		bathroomsVar = `, ${inputRoomThree} ванных комнат`;
	};
	let inputRoomSumm = inputRoomOne + inputRoomTwo + inputRoomThree;
	if (inputRoomSumm == 0) {
		inputDropRoom.value = inputRoomVar;
	} else {
		inputDropRoom.value = `${bedroomVar + bedVar + bathroomsVar}`
	};
	if (inputRoomThree >= 1) {
		roomMinusThree.style.borderColor = "rgba(31, 32, 65, 0.5)";
		roomMinusThree.style.color = "rgba(31, 32, 65, 0.5)";
	};
	event.preventDefault();
});

roomMinusThree.addEventListener("click", function (event) {
	inputRoomThree = inputRoomThree > 0 ? --inputRoomThree : 0;
	valueDropRoom[2].textContent = inputRoomThree;
	let bedroomVar;
	if (inputRoomOne == 0) {
		bedroomVar = `0 спален`;
	} else if (inputRoomOne == 1) {
		bedroomVar = `${inputRoomOne} спальня`;
	} else if (inputRoomOne <= 4) {
		bedroomVar = `${inputRoomOne} спальни`;
	} else if (inputRoomOne > 4) {
		bedroomVar = `${inputRoomOne} спален`;
	};
	let bedVar;
	if (inputRoomTwo == 0) {
		bedVar = ``;
	} else if (inputRoomTwo == 1) {
		bedVar = `, ${inputRoomTwo} кровать`;
	} else if (inputRoomTwo <= 4) {
		bedVar = `, ${inputRoomTwo} кровати`;
	} else if (inputRoomTwo > 4) {
		bedVar = `, ${inputRoomTwo} кроватей`;
	};
	let bathroomsVar;
	if (inputRoomThree == 0) {
		bathroomsVar = ``;
	} else if (inputRoomThree == 1) {
		bathroomsVar = `, ${inputRoomThree} ванная комната`;
	} else if (inputRoomThree <= 4) {
		bathroomsVar = `, ${inputRoomThree} ванные комнаты`;
	} else if (inputRoomThree > 4) {
		bathroomsVar = `, ${inputRoomThree} ванных комнат`;
	};
	let inputRoomSumm = inputRoomOne + inputRoomTwo + inputRoomThree;
	if (inputRoomSumm == 0) {
		inputDropRoom.value = inputRoomVar;
	} else {
		inputDropRoom.value = `${bedroomVar + bedVar + bathroomsVar}`
	};
	if (inputRoomThree == 0) {
		roomMinusThree.style.borderColor = "rgba(31, 32, 65, 0.25)";
		roomMinusThree.style.color = "rgba(31, 32, 65, 0.25)";
	};
	event.preventDefault();
})


// expading the list

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