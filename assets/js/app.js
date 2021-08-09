$(document).ready(function () {
  // header-sticky
  $(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    if (scrollTop > 0) {
      $("#sticky").addClass("is-sticky");
    } else {
      $("#sticky").removeClass("is-sticky");
    }
  });

  // slick nav
  $("#menu").slicknav();

  // happyUser slider
  $("#happyUser").owlCarousel({
    items: 2,
    loop: true,
    nav: true,
    autoplay: true,
    smartSpeed: 500,

    navText: [
      "<img src='assets/images/svg_icons/slider_arrow_white.svg'>",
      "<img src='assets/images/svg_icons/slider_arrow_white.svg'>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
    },
  });

  // client logo
  $("#clientSlide").owlCarousel({
    items: 5,
    loop: true,
    nav: true,
    center: true,
    autoplay: true,
    smartSpeed: 500,

    navText: [
      "<img src='assets/images/svg_icons/slider_arrow_blue.svg'>",
      "<img src='assets/images/svg_icons/slider_arrow_blue.svg'>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      480: {
        items: 1,
      },
      768: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  });

  // parallax
  $("#happyUserParallax").parallaxie({
    speed: 0.5,
    offset: 0,
    repeat: "repeat-y",
  });
  $("#signUpParallax").parallaxie({
    speed: 0.5,
    offset: 0,
    repeat: "repeat-y",
  });
});
