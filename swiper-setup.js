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
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<div class="' + className + '"></div>';
      }
    },
    navigation: {
      nextEl: ".swiper-next",
      prevEl: ".swiper-prev",
    },
  });
});
