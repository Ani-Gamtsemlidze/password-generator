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

const mediumScaleColor = () => {
  scale1Strength.style.backgroundColor = "#F8CD65";
  scale2Strength.style.backgroundColor = "#F8CD65";
  scale3Strength.style.backgroundColor = "#F8CD65";
  scale4Strength.style.backgroundColor = "unset";
};
mediumScaleColor();

const weakerScaleColor = () => {
  scale1Strength.style.backgroundColor = "#F64A4A";
  scale2Strength.style.backgroundColor = "unset";
  scale3Strength.style.backgroundColor = "unset";
  scale4Strength.style.backgroundColor = "unset";
};

const weakScaleColor = () => {
  scale1Strength.style.backgroundColor = "#FB7C58";
  scale2Strength.style.backgroundColor = "#FB7C58";
  scale3Strength.style.backgroundColor = "unset";
  scale4Strength.style.backgroundColor = "unset";
};
const strongScaleColor = () => {
  scale1Strength.style.backgroundColor = "#A4FFAF";
  scale2Strength.style.backgroundColor = "#A4FFAF";
  scale3Strength.style.backgroundColor = "#A4FFAF";
  scale4Strength.style.backgroundColor = "#A4FFAF";
};

range.addEventListener("input", (event) => {
  if (passwordStrength.textContent.includes("TOO WEAK!")) {
    weakerScaleColor();
  } else if (passwordStrength.textContent.includes("WEAK")) {
    weakScaleColor();
  } else if (passwordStrength.textContent.includes("MEDIUM")) {
    mediumScaleColor();
  } else if (passwordStrength.textContent.includes("STRONG")) {
    strongScaleColor();
  }
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

let selectedOptions = [];

generateButton.addEventListener("click", function () {
  selectedOptions = [];

  if (optionUppercase.checked) {
    selectedOptions.push("uppercase");
    // passwordContent.value = generateRandomUppercase(passwordLength.textContent);
  }
  if (optionLowercase.checked) {
    selectedOptions.push("lowercase");
    console.log(selectedOptions);
    // passwordContent.value = generateRandomLowercase(passwordLength.textContent);
  }
  if (optionNumber.checked) {
    selectedOptions.push("number");
    console.log(selectedOptions);

    // passwordContent.value = generateNumber(passwordLength.textContent);
  }
  if (optionSymbol.checked) {
    selectedOptions.push("symbol");
    console.log(selectedOptions);

    // passwordContent.value = generateSymbols(passwordLength.textContent);
  }

  passwordContent.value = generateMixPassword(passwordLength.textContent);
});

function generateMixPassword(length) {
  let mixPassword = "";
  for (let i = 0; i < length; i++) {
    const selectedOption =
      selectedOptions[Math.floor(Math.random() * selectedOptions.length)];
    if (selectedOption === "uppercase") {
      mixPassword += generateRandomUppercase(1);
    }
    if (selectedOption === "lowercase") {
      mixPassword += generateRandomLowercase(1);
    }
    if (selectedOption === "number") {
      mixPassword += generateNumber(1);
    }
    if (selectedOption === "symbol") {
      mixPassword += generateSymbols(1);
    }
  }
  console.log(mixPassword);
  return mixPassword;
}

copy.addEventListener("click", function () {
  const password = passwordContent.value;
  navigator.clipboard.writeText(password).then(() => {
    document.querySelector(".path").setAttribute("fill", "#fff");
    document.querySelector(".copied").style.display = "block";
    setTimeout(() => {
      document.querySelector(".copied").style.display = "none";
      document.querySelector(".path").setAttribute("fill", "#a4ffaf");
    }, 1000);
  });
});
