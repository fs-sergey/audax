$(document).ready(function () {
  var mySwiper = new Swiper(".is-slider-main", {
    // Optional parameters
    direction: "horizontal", // 'vertical' for vertical slider
    loop: true, // Enable continuous loop mode

    // If you want to add pagination
    pagination: {
      el: ".swiper-pagination",
      clickable: true, // So you can click on the pagination bullets
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // And if you need a scrollbar
    scrollbar: {
      el: ".swiper-scrollbar",
    },
  });
});
