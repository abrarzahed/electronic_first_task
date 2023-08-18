// imports
import "./styles/style.scss";

// selectors
const menuItems = document.querySelectorAll(".navbar-menu__items-item");
const dropdown = document.querySelector(".dropdown");
const dropdownCloseBtn = document.querySelector(".dropdown-close-btn");
const searchBarCloseBtn = document.querySelector(".search-bar__close");
const searchBar = document.querySelector(".navbar-menu__items-search");
const searchBarIcon = document.querySelector(".search-bar__icon");
// const hero = document.querySelector(".hero");

const openDropdown = () => {
  dropdown.classList.remove("hidden");
};

const closeDropdown = () => {
  dropdown.classList.add("hidden");
};

menuItems.forEach((item) => {
  item.addEventListener("click", openDropdown);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeDropdown();
  }
});
dropdownCloseBtn.addEventListener("click", closeDropdown);

searchBarCloseBtn.addEventListener("click", () => {
  searchBar.classList.remove("active");
});
searchBarIcon.addEventListener("click", () => {
  searchBar.classList.add("active");
  searchBarCloseBtn.classList.remove("hidden");
});
searchBarCloseBtn.addEventListener("click", () => {
  searchBarCloseBtn.classList.add("hidden");
});
