import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';

const saveCalendarDrop = () => {
	const parentCalendarDrop = document.querySelector('.calendar-drop');
	const inputCalendarDrop = document.querySelector('.date-dropdown__input-dropdown');
	parentCalendarDrop.style.display = "none";
	inputCalendarDrop.addEventListener("click", function () {
		parentCalendarDrop.style.display = "block";
	})
}

let buttonDrop = {
	content: 'Применить',
	className: 'custom-button',
	onClick: saveCalendarDrop,
}

new AirDatepicker('#calendar-drop', {
	navTitles: {
		days: 'MMMM yyyy',
	},
	range: true,
	dynamicRange: true,
	buttons: ['clear', buttonDrop],
	prevHtml: `<span class="calender__arrow calender__arrow_prev icon-arrow"></span>`,
	nextHtml: `<span class="calender__arrow calender__arrow_next icon-arrow"></span>`,
	multipleDatesSeparator: ' - ',
	classes: "calendar-drop",
});