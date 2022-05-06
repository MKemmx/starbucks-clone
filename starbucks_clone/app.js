const hamburgerMenu = document.getElementById("hamburger");

const menuList = document.querySelector(".header-list");
const buttonList = document.querySelector(".header-right");

hamburgerMenu.addEventListener("click", () => {
  menuList.classList.toggle("active");
  buttonList.classList.toggle("active");
});
