const body = document.querySelector("body");
const themeBtn = document.querySelector(".theme-btn");
const signUpForm = document.querySelector("#sign-up-form");
const closeBtn = document.querySelector(".close-btn");
const inputs = document.querySelectorAll("input");

themeBtn.addEventListener("click", () => (body.dataset.bsTheme = body.dataset.bsTheme === "light" ? "dark" : "light"));
signUpForm.addEventListener("submit", (e) => {
  e.preventDefault();
  closeBtn.click();
  inputs.forEach((input) => (input.value = ""));
});
