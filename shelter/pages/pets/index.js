const burgerClosed = document.querySelector(".burger-closed");
const burgerHeader = document.querySelector(".burger-header");
const body = document.querySelector("body");
const menuLinks = burgerHeader.querySelectorAll("li");

const openBurgerMenu = () => {
  burgerClosed.style.display = "none";
  burgerHeader.style.display = "flex";
  body.style.position = "fixed";
};

const closeBurgerMenu = () => {
  burgerClosed.style.display = "block";
  burgerHeader.style.display = "none";
  body.style.position = "static";
};

// const addClickEventListenerToLinks = () => {
//   for (let i = 0; i < menuLinks.length; i++) {
//     menuLinks[i].addEventListener("click", closeBurgerMenu);
//   }
// };
