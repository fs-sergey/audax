$(document).ready(function () {
  var mySwiper = new Swiper(".is-slider-main", {
    direction: "horizontal",
    loop: false,
    slidesPerView: "auto",
    spaceBetween: 16,
    navigation: {
      nextEl: ".swiper-next",
      prevEl: ".swiper-prev",
    },
  });
  var mySwiper = new Swiper(".is-slider-controls", {
    direction: "horizontal",
    loop: false,
    slidesPerView: "auto",
    spaceBetween: 16,
    wrapperClass: 'swiper-wrapper', // specify your wrapper class here
    slideClass: 'swiper-slide', // specify your slide class here
    navigation: {
      nextEl: ".is-slider-controls .swiper-next",
      prevEl: ".is-slider-controls .swiper-prev",
    },
    pagination: {
      el: ".is-slider-controls .swiper-pagination",
      clickable: true,
    },
  });
});
