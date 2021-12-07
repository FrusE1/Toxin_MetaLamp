import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';

new AirDatepicker('#calendar', {
	navTitles: {
		days: 'MMMM yyyy',
	},
	range: true,
});