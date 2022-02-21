const btnRegElems = document.querySelectorAll('.active-reg');
const cardReg = document.querySelector('.popup-reg');

btnRegElems.forEach(btnRegElem => {
  btnRegElem.addEventListener("click", function (event) {
    if (cardReg.classList.closest('.popup-active')) {
      cardReg.classList.toggle('popup-active');
    }
    event.preventDefault();
  });
});