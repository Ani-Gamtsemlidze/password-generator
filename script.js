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

passwordLength.textContent = range.value;

const passwordStrength = document.querySelector(".medium");

const scale1Strength = document.querySelector(".scale1");
const scale2Strength = document.querySelector(".scale2");
const scale3Strength = document.querySelector(".scale3");
const scale4Strength = document.querySelector(".scale4");
scale1Strength.style.backgroundColor = "#F8CD65";
scale2Strength.style.backgroundColor = "#F8CD65";
scale3Strength.style.backgroundColor = "#F8CD65";
scale4Strength.style.backgroundColor = "unset";
range.addEventListener("input", (event) => {
  passwordLength.textContent = event.target.value;
  if (range.value >= 1 && range.value <= 4) {
    passwordStrength.textContent = "TOO WEAK!";
    scale1Strength.style.backgroundColor = "#F64A4A";
    scale2Strength.style.backgroundColor = "unset";
    scale3Strength.style.backgroundColor = "unset";
    scale4Strength.style.backgroundColor = "unset";
  } else if (range.value >= 5 && range.value <= 10) {
    passwordStrength.textContent = "WEAK";
    scale1Strength.style.backgroundColor = "#FB7C58";
    scale2Strength.style.backgroundColor = "#FB7C58";
    scale3Strength.style.backgroundColor = "unset";
    scale4Strength.style.backgroundColor = "unset";
  } else if (range.value >= 10 && range.value <= 30) {
    passwordStrength.textContent = "MEDIUM";
    scale1Strength.style.backgroundColor = "#F8CD65";
    scale2Strength.style.backgroundColor = "#F8CD65";
    scale3Strength.style.backgroundColor = "#F8CD65";
    scale4Strength.style.backgroundColor = "unset";
  } else {
    passwordStrength.textContent = "STRONG";
    scale1Strength.style.backgroundColor = "#A4FFAF";
    scale2Strength.style.backgroundColor = "#A4FFAF";
    scale3Strength.style.backgroundColor = "#A4FFAF";
    scale4Strength.style.backgroundColor = "#A4FFAF";
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

// let mixedArray = [];
// mixedArray.push(optionUppercase);
// mixedArray.push(optionLowercase);
// mixedArray.push(optionNumber);
// mixedArray.push(optionSymbol);
// console.log(mixedArray);

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
