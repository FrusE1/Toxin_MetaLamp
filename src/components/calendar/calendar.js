import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';


const saveCalendar = () => {
	const parentCalendar = document.querySelector('.calendar-birth');
	const inputCalendar = document.querySelector('.calendar__input-birth');
	parentCalendar.style.display = "none";
	inputCalendar.addEventListener("click", function () {
		parentCalendar.style.display = "block";
	})
}

let button = {
	content: 'Применить',
	className: 'custom-button',
	onClick: saveCalendar,
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
	classes: 'calendar-birth',
});