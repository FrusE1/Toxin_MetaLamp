import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';

if (document.querySelector('.calendar__input')) { // проверка наличия calendar component
	const saveCalendar = () => {
		const parentCalendar = document.querySelector('.calendar-birth');
		const inputCalendar = document.querySelector('.calendar__input-birth');
		parentCalendar.style.display = "none";
		inputCalendar.addEventListener("click", function () {
			parentCalendar.style.display = "block";
		});
	};

	let button = {
		content: 'Применить',
		className: 'custom-button',
		onClick: saveCalendar,
	}

	new AirDatepicker('#calendar', {
		navTitles: {
			days: 'MMMM yyyy',
		},
		buttons: ['clear', button],
		prevHtml: `<span class="calendar__arrow calendar__arrow_prev icon-arrow"></span>`,
		nextHtml: `<span class="calendar__arrow calendar__arrow_next icon-arrow"></span>`,
		classes: 'calendar-birth',
	});
};