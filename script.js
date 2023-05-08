"use strict";

const strength = document.querySelector(".medium");
const passwordLength = document.querySelector(".password-length");
const copy = document.querySelector(".copy-image");

const checkBox = document.querySelector(".checkbox-container");

const optionUppercase = document.querySelector("#option1");
const optionLowercase = document.querySelector("#option2");
const optionNumber = document.querySelector("#option3");
const optionSymbol = document.querySelector("#option4");

const passwordContent = document.querySelector("#password");

const generateButton = document.querySelector("#button");

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

// const uppercaseArray = Array.from(Array(26)).map((e, i) => i + 65);
// const alphabet = uppercaseArray.map((x) => String.fromCharCode(x));

const randomUppercaseChar = String.fromCharCode(
  65 + Math.floor(Math.random() * 26)
);

// this function generates random uppercase sententces from ASCII //
function generateRandomUppercase(length) {
  let sentence = "";
  for (let i = 0; i < length; i++) {
    const charCode = String.fromCharCode(65 + Math.floor(Math.random() * 26)); // convert the ASCII code to a character
    sentence += charCode; // append the character to the sentence
  }
  return sentence;
}
// this function generates random lowercase sententces from ASCII //
function generateRandomLowercase(length) {
  let sentence = "";
  for (let i = 0; i < length; i++) {
    const charCode = String.fromCharCode(97 + Math.floor(Math.random() * 26)); // convert the ASCII code to a character
    sentence += charCode; // append the character to the sentence
  }
  return sentence;
}
// this function generates random numbers //
function generateNumber(length) {
  let number = "";
  for (let i = 0; i < length; i++) {
    let randomNumber = Math.floor(Math.random() * 9) + 1;
    number += randomNumber;
  }
  return number;
}

// this function generates random symbols //
function generateSymbols(length) {
  let symbols = "";
  for (let i = 0; i < length; i++) {
    const symbol = '!@#$%^&*()_+-={}[]|:;"<>,.?/~`';
    const randomIndex = Math.floor(Math.random() * symbol.length);
    const randomSymbol = symbol[randomIndex];
    symbols += randomSymbol;
  }
  return symbols;
}

let mixedArray = [];
mixedArray.push(optionUppercase);
mixedArray.push(optionLowercase);
mixedArray.push(optionNumber);
mixedArray.push(optionSymbol);
console.log(mixedArray);

button.addEventListener("click", function () {
  document.querySelector(".copied").style.display = "none";
  document.querySelector(".path").setAttribute("fill", "#a4ffaf");
  if (optionUppercase.checked) {
    passwordContent.value = generateRandomUppercase(passwordLength.textContent);
  } else if (optionLowercase.checked) {
    passwordContent.value = generateRandomLowercase(passwordLength.textContent);
  } else if (optionNumber.checked) {
    passwordContent.value = generateNumber(passwordLength.textContent);
  } else if (optionSymbol.checked) {
    passwordContent.value = generateSymbols(passwordLength.textContent);
  }
});

copy.addEventListener("click", function () {
  const password = passwordContent.value;
  navigator.clipboard.writeText(password).then(() => {
    document.querySelector(".path").setAttribute("fill", "#fff");
    document.querySelector(".copied").style.display = "block";
    // if (!passwordContent.value) {
    //   document.querySelector(".copied").textContent = "empty";
    // }
  });
});
