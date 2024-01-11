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
$(document).ready(function () {
  var mySwiper = new Swiper(".is-slider-controls", {
    direction: "horizontal",
    loop: false,
    slidesPerView: "auto",
    spaceBetween: 16,
    wrapperClass: 'swiper-wrapper is-slider-main',
    navigation: {
      nextEl: ".swiper-next",
      prevEl: ".swiper-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
});

});
