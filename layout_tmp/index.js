const headerNav = document.querySelector(".header__navigation");
const headerMenuIcon = document.querySelector(".header__sticky__menu");
const contentMask = document.querySelector(".mask");

headerMenuIcon.addEventListener("click", () => {
  headerNav.classList.toggle("open");
  headerMenuIcon.classList.toggle("open");
});
