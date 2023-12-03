var swiper = new Swiper(".home__popular-slider", {
  slidesPerView:
    window.innerWidth >= 2000
      ? 4
      : window.innerWidth >= 1500
      ? 3
      : window.innerWidth >= 1300
      ? 2.2
      : window.innerWidth >= 1100
      ? 1.8
      : innerWidth >= 490
      ? 1.1
      : 1.1,
  spaceBetween: 20,
  loop: true,

  navigation: {
    nextEl: ".home__next",
    prevEl: ".home__prev",
  },
});

console.log(window.innerWidth >= 2000 ? 4 : 2);
