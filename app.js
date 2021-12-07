const mobileBurger = document.querySelector(".mobile__burger");
const mobileNav = document.querySelector(".mobile__nav");

mobileBurger.addEventListener("click", () => {
  mobileBurger.classList.toggle("active");
  mobileNav.classList.toggle("active");
});

const offers = document.querySelectorAll(".offer-filter");

offers.forEach((offer) => {
  offer.addEventListener("click", () => {
    offer.classList.toggle("offer-active");
  });
});
