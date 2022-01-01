import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';

if (document.querySelector('.calendar-card__input')) { // проверка наличия calendar-card component
	const saveCalendar = () => {
		const parentCalendar = document.querySelector('.calendar__card');
		const inputCalendar = document.querySelector('.calendar-card__input');
		parentCalendar.style.display = "none";
		inputCalendar.addEventListener("click", function () {
			parentCalendar.style.display = "block";
		});
	};

	let btnCard = {
		content: 'Применить',
		className: 'custom-button',
		onClick: saveCalendar,
	}

	new AirDatepicker('#calendar-card', {
		navTitles: {
			days: 'MMMM yyyy',
		},
		range: true,
		dynamicRange: true,
		buttons: ['clear', btnCard],
		prevHtml: `<span class="calendar__arrow calendar__arrow_prev icon-arrow"></span>`,
		nextHtml: `<span class="calendar__arrow calendar__arrow_next icon-arrow"></span>`,
		multipleDatesSeparator: ' - ',
		classes: 'calendar__card',
		inline: true,
		selectedDates: ['2019-08-19', '2019-08-23'],
	});
};