import * as noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';

const rangeSlider = document.getElementById('slider-block');

if (rangeSlider) {
	noUiSlider.create(rangeSlider, {
		start: [1000, 15000],
		connect: true,
		step: 1,
		range: {
			'min': [1000],
			'max': [15000]
		}
	});
}