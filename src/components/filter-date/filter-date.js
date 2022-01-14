import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';

if (document.querySelector('.filter-date__input')) { // проверка наличия filter-date
	const saveCalendarFilter = () => {
		const parentCalendarFilter = document.querySelector('.calendar-filter');
		const inputCalendarFilter = document.querySelector('.filter-date__input-calendar');
		parentCalendarFilter.style.display = "none";
		inputCalendarFilter.addEventListener("click", function () {
			parentCalendarFilter.style.display = "block";
		})
	};

	let buttonFilter = {
		content: 'Применить',
		className: 'custom-button',
		onClick: saveCalendarFilter,
	};

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
		dateFormat: "dd MMM",
		selectedDates: [],
		classes: "calendar-filter",
		selectedDates: ['2019-08-19', '2019-08-23'],
	});
};