const buttonLogin = document.getElementById("loginForm");
const emailInput = document.getElementById("exampleInputEmail1");

document.addEventListener("DOMContentLoaded", () => {
  const savedEmail = localStorage.getItem("savedEmail");
  if (savedEmail) {
    emailInput.value = savedEmail;
  }
});

buttonLogin.addEventListener("click", (event) => {
  event.preventDefault();

  const email = emailInput.value;
  if (email) {
    localStorage.setItem("savedEmail", email);
  }
});
