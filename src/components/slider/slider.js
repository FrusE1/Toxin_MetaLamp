import * as noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';
import wNumb from 'wnumb';

if (document.querySelector('.slider')) { // проверка наличия slider
	const rangeSlider = document.querySelector('.slider__filter');

	if (rangeSlider) {
		noUiSlider.create(rangeSlider, {
			start: [5000, 10000],
			connect: true,
			range: {
				'min': [1000, 100],
				'31.3%': [5000, 100],
				'63.3%': [10000, 100],
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