import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';

const save = (but) => {
	const value = $(but.$altField).val();
	const container = $(but.$el).closest('.calendar');
	const input = container.find('.calendar__input')
	if (value.split('-').lenght <= 1) { return false }
	if (input.lenght > 1) {
		input.each((i, element) => {
			$(element).val(moment(Number(value.split('-')[i])).format(DD.MM.YYYY))
		})
	}
}

let button = {
	content: 'Применить',
	className: 'custom-button-classname',
	onClick: save,
}

new AirDatepicker('#calendar', {
	navTitles: {
		days: 'MMMM yyyy',
	},
	range: true,
	dynamicRange: true,
	buttons: ['clear', button],
	prevHtml: `<span class="calender__arrow calender__arrow_prev icon-arrow"></span>`,
	nextHtml: `<span class="calender__arrow calender__arrow_next icon-arrow"></span>`,
	multipleDatesSeparator: ' - ',
});