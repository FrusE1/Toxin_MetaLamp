// const counter = function () {
// 	const btns = document.querySelectorAll('.dropdown-guests__btn');

// 	btns.forEach(btn => {
// 		btn.addEventListener('click', function (event) {
// 			const direction = this.dataset.direction;
// 			const inp = this.parentElement.querySelector('.dropdown-guests__value');
// 			const currentValue = +inp.value;
// 			let newValue;
// 			if (direction === 'plus') {
// 				newValue = currentValue + 1;
// 			} else {
// 				newValue = currentValue - 1 > 0 ? currentValue - 1 : 0;
// 			}
// 			inp.value = newValue;
// 			event.preventDefault();
// 		})
// 	})
// }
// counter();

const btnPlus = document.querySelectorAll('.dropdown-guests__btn_plus');
const btnMinus = document.querySelectorAll('.dropdown-guests__btn_minus');

const valueSpan = document.querySelector('.dropdown-guests__value');

let spanVar = +valueSpan.innerText;

console.log(spanVar);
btnPlus.forEach(btnsPlusElement => {
	btnsPlusElement.addEventListener("click", function (event) {
		spanVar++;
		valueSpan.innerHTML = `${spanVar}`;
		event.preventDefault();
	})
})
btnMinus.forEach(btnMinusElement => {
	btnMinusElement.addEventListener("click", function (event) {
		spanVar = spanVar - 1 > 0 ? spanVar - 1 : 0;
		valueSpan.innerHTML = `${spanVar}`;
		event.preventDefault();
	})
})
// const valueInput = document.querySelector('.dropdown-guests__value');

// let valueVar = valueInput.value;

// console.log(valueVar);

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


// ......


