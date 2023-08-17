// imports
import "./styles/style.scss";

// selectors
const menuItems = document.querySelectorAll(".navbar-menu__items-item");
const overlay = document.querySelector(".overlay");
const dropdown = document.querySelector(".dropdown");
const hero = document.querySelector(".hero");

menuItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    if (
      e.target.classList.contains("search-icon") ||
      e.target.classList.contains("fa-magnifying-glass")
    )
      return;
    dropdown.classList.remove("hidden");
  });
});

hero.addEventListener("click", (e) => {
  if (!e.target.classList.contains("hero")) return;
  dropdown.classList.add("hidden");
});
