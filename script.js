
const lengthEl = document.querySelector(".length"); 
const lettersEl = document.querySelector(".letters"); 
const numbersEl = document.querySelector(".numbers"); 
const symbolsEl = document.querySelector(".symbols");
const generateBtn = document.querySelector(".generate");
const passwordEl = document.querySelector(".password"); 


const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+[]{}|;:,.<>?";


generateBtn.addEventListener("click", () => {
  let chars = "";


  if (lettersEl.checked) {
    chars = chars + letters;
  }


  if (numbersEl.checked) {
    chars = chars + numbers;
  }

  
  if (symbolsEl.checked) {
    chars = chars + symbols;
  }

  
  if (chars === "") {
    passwordEl.textContent = "Please select at least one option!";
    return;
  }


  let password = "";
  const length = parseInt(lengthEl.value);

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    password = password + chars[randomIndex]; 
  }


  passwordEl.textContent = password;
});
