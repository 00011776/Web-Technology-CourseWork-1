const mobileBurger = document.querySelector(".mobile__burger");
const mobileNav = document.querySelector(".mobile__nav");

mobileBurger.addEventListener("click", () => {
  mobileBurger.classList.toggle("active");
  mobileNav.classList.toggle("active");
});

const userName = document.getElementById("qa__name");
const userMessage = document.getElementById("qa__text");
const btn = document.getElementById("qa__btn");
const qa = document.getElementById("qa__comments");

const insertComment = () => {
  if (userName.value.trim() && userMessage.value.trim()) {
    let commentWrapper = document.createElement("div");
    commentWrapper.className = "qa__comment";
    commentWrapper.innerHTML = `
    <h4 class='qa__user--name'>@${userName.value}</h4>
    <p class="qa__user--massage">${userMessage.value}</p>`;

    qa.appendChild(commentWrapper);
    userName.value = "";
    userMessage.value = "";
  } else if (userName.value.trim() && !userMessage.value.trim()) {
    alert("Your message can not be empty");
  } else if (!userName.value.trim() && userMessage.value.trim()) {
    alert("Please enter a valid user name");
  }
};

btn.addEventListener("click", insertComment);
