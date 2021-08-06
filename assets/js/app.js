$(document).ready(function () {
  // slick nav
  $("#menu").slicknav();

  // happyUser slider
  $("#happyUser").owlCarousel({
    items: 2,
    loop: true,
    nav: true,
    autoplay: true,
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
    items: 6,
    loop: true,
    nav: true,
    // autoplay: true,
    navText: [
      "<img src='assets/images/svg_icons/slider_arrow_blue.svg'>",
      "<img src='assets/images/svg_icons/slider_arrow_blue.svg'>",
    ],
    responsive: {
      0: {
        items: 2,
      },
      480: {
        items: 3,
      },
      768: {
        items: 4,
      },
      1000: {
        items: 6,
      },
    },
  });
});
