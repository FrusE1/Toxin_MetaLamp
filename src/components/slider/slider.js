import * as noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';
import wNumb from 'wnumb';

if (document.querySelector('.slider')) { // проверка наличия slider
	const rangeSlider = document.querySelector('.slider__filter');

	if (rangeSlider) {
		noUiSlider.create(rangeSlider, {
			start: [5000, 10000],
			connect: true,
			step: 100,
			range: {
				'min': [1000],
				'31.1%': [5000],
				'63.2%': [10000],
				'max': [15000]
			},
			format: wNumb({
				decimals: 0,
				thousand: ' ',
				suffix: '₽',
			})
		});
	};
	var nonLinearStepSliderValueElement = document.querySelector('.slider-header__value');

	rangeSlider.noUiSlider.on('update', function (values) {
		nonLinearStepSliderValueElement.innerHTML = values.join(' - ');
	});
}