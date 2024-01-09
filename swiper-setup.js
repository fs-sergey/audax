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
});
