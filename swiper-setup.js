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
  //swiper 1
  $(".is-slider-controls").each(function () {
    var swiper = new Swiper($(this).find(".swiper-wrapper")[0], {
        direction: "horizontal",
        loop: false,
        slidesPerView: "auto",
        spaceBetween: 16,
        navigation: {
            nextEl: $(this).find(".swiper-button-next")[0],
            prevEl: $(this).find(".swiper-button-prev")[0],
        },
        pagination: {
            el: $(this).find(".swiper-pagination")[0],
            clickable: true,
        },
        // Add other configurations as needed
    });
});

});
