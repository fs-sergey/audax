//slider hero
function numberWithZero(num) {
  if (num < 10) {
    return "0" + num;
  } else {
    return num;
  }
}

$(".slider-gallery_component").each(function (index) {
  let totalSlides = numberWithZero(
    $(this).find(".swiper-slide.is-slider-thumbs").length
  );
  $(".swiper-number-total").text(totalSlides);

  const bgSwiper = new Swiper($(this).find(".swiper.is-slider-bg")[0], {
    slidesPerView: 1,
    speed: 400,
    effect: "fade",
    allowTouchMove: false,
  });

  const thumbsSwiper = new Swiper($(this).find(".swiper.is-slider-thumbs")[0], {
    slidesPerView: 1,
    speed: 600,
    loop: true,
    loopedSlides: 8,
    slideToClickedSlide: true,
  });

  const textSwiper = new Swiper($(this).find(".swiper.is-slider-titles")[0], {
    slidesPerView: "auto",
    speed: 600,
    loop: true,
    loopedSlides: 8,
    slideToClickedSlide: true,
    mousewheel: false,
    keyboard: true,
    centeredSlides: true,
    slideActiveClass: "is-active",
    slideDuplicateActiveClass: "is-active",
    thumbs: {
      swiper: bgSwiper,
    },
    navigation: {
      nextEl: $(this).find(".swiper-next")[0],
      prevEl: $(this).find(".swiper-prev")[0],
    },
  });

  textSwiper.controller.control = thumbsSwiper;
  thumbsSwiper.controller.control = textSwiper;

  textSwiper.on("slideChange", function (e) {
    let slideNumber = numberWithZero(e.realIndex + 1);
    $(".swiper-number-current").text(slideNumber);
  });
});

//slider instances

$(".slider-main_component").each(function (index) {
  let loopMode = false;
  if ($(this).attr("loop-mode") === "true") {
    loopMode = true;
  }
  let sliderDuration = 300;
  if ($(this).attr("slider-duration") !== undefined) {
    sliderDuration = +$(this).attr("slider-duration");
  }
  const swiper = new Swiper($(this).find(".swiper")[0], {
    speed: sliderDuration,
    loop: loopMode,
    autoHeight: false,
    centeredSlides: loopMode,
    followFinger: true,
    freeMode: false,
    slideToClickedSlide: false,
    slidesPerView: 1,
    spaceBetween: "10%",
    rewind: false,
    mousewheel: {
      forceToAxis: true,
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    breakpoints: {
      // mobile landscape
      480: {
        slidesPerView: 1,
        spaceBetween: "2%",
      },
      // tablet
      768: {
        slidesPerView: 2,
        spaceBetween: "4%",
      },
      // desktop
      992: {
        slidesPerView: 3,
        spaceBetween: "2%",
      },
    },
    pagination: {
      el: $(this).find(".swiper-bullet-wrapper")[0],
      bulletActiveClass: "is-active",
      bulletClass: "swiper-bullet",
      bulletElement: "button",
      clickable: true,
    },
    navigation: {
      nextEl: $(this).find(".swiper-next")[0],
      prevEl: $(this).find(".swiper-prev")[0],
      disabledClass: "is-disabled",
    },
    scrollbar: {
      el: $(this).find(".swiper-drag-wrapper")[0],
      draggable: true,
      dragClass: "swiper-drag",
      snapOnRelease: true,
    },
    slideActiveClass: "is-active",
    slideDuplicateActiveClass: "is-active",
  });
});
