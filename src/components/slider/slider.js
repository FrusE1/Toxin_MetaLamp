import * as noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';
if (document.querySelector('.slider__price')) { // проверка наличия slider
	const rangeSlider = document.getElementById('slider-block');

	if (rangeSlider) {
		noUiSlider.create(rangeSlider, {
			start: [5000, 10000],
			connect: true,
			step: 1,
			range: {
				'min': [1000],
				'max': [15000]
			}
		});
	};

	const input0 = document.getElementById("input-0");
	const input1 = document.getElementById("input-1");
	const inputs = [input0, input1];

	rangeSlider.noUiSlider.on('update', function (values, handle) {
		inputs[handle].value = Math.round(values[handle]);
	});

	const setRangeSlider = (i, value) => {
		let arr = [null, null];
		arr[i] = value;
		rangeSlider.noUiSlider.set(arr)
	};
	inputs.forEach((elem, index) => {
		elem.addEventListener('change', (e) => {
			setRangeSlider(index, e.currentTarget.value)
		})
	});
}