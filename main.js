// Hamburger Menu
const openMenu = document.querySelector(".open");
const closeMenu = document.querySelector(".close");
const nav = document.querySelector(".nav-list");
const navItems = document.getElementById("nav-items");
const navItem = document.getElementById("nav-item");
const navIte = document.getElementById("nav-ite");
const navIt = document.getElementById("nav-it");

openMenu.addEventListener("click", () => {
  nav.style.display = "flex";
  nav.style.top = "0";
});
closeMenu.addEventListener("click", () => {
  nav.style.top = "-150%";
});
const hide = () => {
  nav.style.top = "-150%";
};
navItems.addEventListener("click", hide);
navItem.addEventListener("click", hide);
navIte.addEventListener("click", hide);
navIt.addEventListener("click", hide);
// Contact form

var form = document.getElementById("my-form");

async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("my-form-status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      status.innerHTML = "Thanks for your submission!";
      form.reset();
    })
    .catch((error) => {
      status.innerHTML = "Oops! There was a problem submitting your form";
    });
}
form.addEventListener("submit", handleSubmit);
