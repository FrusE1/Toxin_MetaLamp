const btnReg = document.querySelectorAll('.button__item_default');
const cardReg = document.querySelector('.popup-reg');
const roomSelect = document.querySelector('.main-page__card');
const mainBackgroundOne = document.querySelector('.background-image-1');
const mainBackgroundTwo = document.querySelector('.background-image-2')

btnReg.forEach(btnRegItem => {
  btnRegItem.addEventListener("click", function (event) {
    cardReg.classList.toggle('popup_active');
    if (cardReg.classList.contains('popup_active')) {
      roomSelect.style.display = "none";
      mainBackgroundOne.style.display = "none";
      mainBackgroundTwo.style.display = "inline";
    } else {
      roomSelect.style.display = "inline-block";
      mainBackgroundOne.style.display = "inline";
      mainBackgroundTwo.style.display = "none";
    };
    event.preventDefault();
  });
});