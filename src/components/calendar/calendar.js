import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';

let button = {
	content: 'Применить',
	className: 'custom-button-classname',
	onClick: () => {
		let date = new Date('');
		dp.selectDate(date);
		dp.setViewDate(date);
	}
}

new AirDatepicker('#calendar', {
	navTitles: {
		days: 'MMMM yyyy',
	},
	range: true,
	dynamicRange: true,
	buttons: ['clear', button],
	prevHtml: `<span class="calender__arrow calender__arrow_prev icon-arrow"></span>`,
	nextHtml: `<span class="calender__arrow calender__arrow_next icon-arrow"></span>`
});