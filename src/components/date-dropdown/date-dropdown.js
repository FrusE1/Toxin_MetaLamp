import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';

if (document.querySelector('.date-dropdown__input')) { // проверка наличия date-dropdown component
	const saveCalendarDrop = () => {
		const parentCalendarDrop = document.querySelector('.calendar-drop');
		const inputCalendarDrop = document.querySelector('.date-dropdown__input-one');
		parentCalendarDrop.style.display = "none";
		inputCalendarDrop.addEventListener("click", function () {
			parentCalendarDrop.style.display = "block";
		});
	};

	let buttonDrop = {
		content: 'Применить',
		className: 'custom-button',
		onClick: saveCalendarDrop,
	};

	new AirDatepicker('#calendar-drop', {
		navTitles: {
			days: 'MMMM yyyy',
		},
		range: true,
		dynamicRange: true,
		buttons: ['clear', buttonDrop],
		prevHtml: `<span class="calendar__arrow calendar__arrow_prev icon-arrow"></span>`,
		nextHtml: `<span class="calendar__arrow calendar__arrow_next icon-arrow"></span>`,
		classes: "calendar-drop",
		onSelect: function (fd, d, picker) {
			document.querySelector(".date-dropdown__input-one").value = fd.formattedDate[0];
			document.querySelector(".date-dropdown__input-two").value = fd.formattedDate[1];
			document.querySelectorAll(".date-dropdown__input").forEach(element => {
				if (element.value == 'undefined') {
					element.value = '';
				}
			})
		},
		multipleDates: 2,
	});
};