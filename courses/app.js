const mobileBurger = document.querySelector(".mobile__burger");
const mobileNav = document.querySelector(".mobile__nav");

mobileBurger.addEventListener("click", () => {
  mobileBurger.classList.toggle("active");
  mobileNav.classList.toggle("active");
});

const options = document.querySelectorAll(".option");
const btns = document.querySelectorAll(".option__btns");

window.addEventListener("load", () => {
  if (window.screen.width >= 1050) {
    hideVisibility();
    mouseLeave();
    mouseEnter();
  } else if (window.screen.width <= 1040) {
    addVisibility();
  }
});

window.addEventListener("resize", () => {
  if (window.screen.width >= 1050) {
    hideVisibility();
    mouseLeave();
    mouseEnter();
  } else if (window.screen.width <= 1040) {
    addVisibility();
  }
});

const mouseLeave = () => {
  options.forEach((option) => {
    option.addEventListener("mouseleave", () => {
      option.childNodes[13].classList.toggle("show");
      option.classList.remove("extend");

      if (option.childNodes[13].classList.contains("show")) {
        option.childNodes[13].parentElement.classList.toggle("extend");
      }
    });
  });
};

const mouseEnter = () => {
  options.forEach((option) => {
    option.addEventListener("mouseenter", (index) => {
      option.childNodes[13].classList.toggle("show");
      option.classList.remove("extend");
      if (option.childNodes[13].classList.contains("show")) {
        option.childNodes[13].parentElement.classList.toggle("extend");
      }
    });
  });
};

const addVisibility = () => {
  options.forEach((option) => {
    option.classList.add("extend");
    option.childNodes[13].classList.add("show");
  });
};

const hideVisibility = () => {
  options.forEach((option) => {
    option.classList.remove("extend");
    option.childNodes[13].classList.remove("show");
  });
};
