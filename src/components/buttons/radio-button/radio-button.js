const radioBtn = document.querySelectorAll('.radio-button__input');

radioBtn[0].parentNode.style.color = "rgba(31, 32, 65, 0.75)"

radioBtn[0].addEventListener("click", function () {
	radioBtn[0].parentNode.style.color = "rgba(31, 32, 65, 0.75)"
	radioBtn[1].parentNode.style.color = "rgba(31, 32, 65, 0.5)"
})

radioBtn[1].addEventListener("click", function () {
	radioBtn[1].parentNode.style.color = "rgba(31, 32, 65, 0.75)"
	radioBtn[0].parentNode.style.color = "rgba(31, 32, 65, 0.5)"
})