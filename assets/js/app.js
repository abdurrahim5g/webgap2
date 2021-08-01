$(document).ready(function () {
  // slick nav
  $("#menu").slicknav();

  // happyUser slider
  $("#happyUser").owlCarousel({
    items: 2,
    loop: true,
    nav: true,
    navText: [
      "<img src='assets/images/arrow/arrow-left.png'>",
      "<img src='assets/images/arrow/arrow-right.png'>",
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
    navText: [
      "<img src='assets/images/arrow/c-arrow-left.png'>",
      "<img src='assets/images/arrow/c-arrow-right.png'>",
    ],
    autoPlay: true,
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
