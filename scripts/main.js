const cssPhone = 'input[name="phone"';
new phoneMask().init(cssPhone);

const headerMenu = document.querySelector(".header__menu");
const headerBurger = document.querySelector(".header__burger");

const toggleMenu = () => {
  if (headerMenu.classList.contains("active")) {
    headerMenu.classList.remove("active");
    document.body.style.overflow = "auto";
  } else {
    headerMenu.classList.add("active");
    document.body.style.overflow = "hidden";
  }
};
