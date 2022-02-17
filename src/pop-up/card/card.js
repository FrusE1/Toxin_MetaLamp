import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

if (document.querySelector('.slider-card')) { // проверка наличия slider-card
  const swiper = new Swiper('.swiper', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    loop: true,
  });
};