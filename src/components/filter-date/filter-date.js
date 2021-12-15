import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';

const saveCalendarFilter = () => {
	const parentCalendarFilter = document.querySelector('.calendar-filter');
	const inputCalendarFilter = document.querySelector('.filter-date__input-calendar');
	parentCalendarFilter.style.display = "none";
	inputCalendarFilter.addEventListener("click", function () {
		parentCalendarFilter.style.display = "block";
	})
}

let buttonFilter = {
	content: 'Применить',
	className: 'custom-button',
	onClick: saveCalendarFilter,
}

new AirDatepicker('#calendar-filter', {
	navTitles: {
		days: 'MMMM yyyy',
	},
	range: true,
	dynamicRange: true,
	buttons: ['clear', buttonFilter],
	prevHtml: `<span class="calender__arrow calender__arrow_prev icon-arrow"></span>`,
	nextHtml: `<span class="calender__arrow calender__arrow_next icon-arrow"></span>`,
	multipleDatesSeparator: ' - ',
	dateFormat(date) {
		return date.toLocaleString('ru', {
			day: '2-digit',
			month: 'short'
		});
	},
	classes: "calendar-filter",
});