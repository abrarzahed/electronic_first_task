// imports
import "./styles/style.scss";

// selectors
const menuItems = document.querySelectorAll(".navbar-menu__items-item");
const dropdown = document.querySelector(".dropdown");
const btnClose = document.querySelector(".dropdown-close-btn");
// const hero = document.querySelector(".hero");

const openDropdown = () => {
  dropdown.classList.remove("hidden");
};

const closeDropdown = () => {
  dropdown.classList.add("hidden");
};

menuItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    if (
      e.target.classList.contains("search-icon") ||
      e.target.classList.contains("fa-magnifying-glass")
    ) {
      return;
    }
    openDropdown();
  });
});

/*
hero.addEventListener("click", (e) => {
  if (!e.target.classList.contains("hero")) return;
  closeDropdown();
});
*/

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeDropdown();
  }
});
btnClose.addEventListener("click", closeDropdown);
