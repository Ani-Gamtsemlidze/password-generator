"strict mode";

let strength = document.querySelector(".medium");
let passwordLength = document.querySelector(".password-length");

const range = document.querySelector("#range");

const passwordStrength = document.querySelector(".medium");

passwordLength.textContent = range.value;

range.addEventListener("input", (event) => {
  passwordLength.textContent = event.target.value;
  if (range.value >= 1 && range.value <= 4) {
    passwordStrength.textContent = "TOO WEAK!";
  } else if (range.value >= 5 && range.value <= 10) {
    passwordStrength.textContent = "WEAK";
  } else if (range.value >= 10 && range.value <= 30) {
    passwordStrength.textContent = "MEDIUM";
  } else {
    passwordStrength.textContent = "STRONG";
  }
});
