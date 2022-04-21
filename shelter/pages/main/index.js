const burgerClosed = document.querySelector(".burger-closed");
const burgerHeader = document.querySelector(".burger-header");
const body = document.querySelector("body");

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

// const createPopup = (petName) => {
// const node = document.createElement("li");
// }
