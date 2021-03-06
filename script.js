// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword()
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var charLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var charUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var sym = ['!', '\"', '£', '$', '%', '^', '&', '*', '>', '<', '\;', '(', ')', '+', '.', ',', '-', ':', '?', '[', ']', '_', '{', '}', '@', '\/', '\\'];
var choices;

function generatePassword() {
  // Asking how many characters the password should be //
  var pwdLength = parseInt(prompt("How long would you like your password to be? It can be between 8 - 128 characters"));
  if (pwdLength >= 8 && pwdLength <= 128) {

    //  Allows the other questions to be asked if it within the right amount of characters //
    var pwdLowercase = confirm("Would you like lowercase letters in your password?");
    var pwdUppercase = confirm("Would you like uppercase letters in your password?");
    var pwdNumbers = confirm("Would you like numbers in your password?");
    var pwdSymbol = confirm("Would you like special characters in your password?");
    // Alerts the user if no character types have been selected //
    if (pwdLowercase === false && pwdUppercase === false && pwdNumbers === false && pwdSymbol === false) {
      alert("You must choose at least one character, please try again!");
    }
  } else {
    // Alert if the password is too short or too long //
    alert("Your password must be between 8 and 128 characters, please try again!")
  }
  // If all 4 options are positive
  if (pwdLowercase && pwdUppercase && pwdNumbers && pwdSymbol) {
    choices = charLower.concat(charUpper, num, sym);
  }
  // If only 3 options are positive
  else if (pwdLowercase && pwdUppercase && pwdNumbers) {
    choices = charLower.concat(charUpper, num);
  }
  else if (pwdLowercase && pwdUppercase && pwdSymbol) {
    choices = charLower.concat(charUpper, sym);
  }
  else if (pwdLowercase && pwdNumbers && pwdSymbol) {
    choices = charLower.concat(num, sym);
  }
  else if (pwdUppercase && pwdNumbers && pwdSymbol) {
    choices = charUpper.concat(num, sym);
  }
  // If only two options are positive
  else if (pwdLowercase && pwdUppercase) {
    choices = charLower.concat(charUpper)
  }
  else if (pwdLowercase && pwdNumbers) {
    choices = charLower.concat(num)
  }
  else if (pwdLowercase && pwdSymbol) {
    choices = charLower.concat(sym)
  }
  else if (pwdUppercase && pwdNumbers) {
    choices = charUpper.concat(num)
  }
  else if (pwdUppercase && pwdSymbol) {
    choices = charUpper.concat(sym)
  }
  else if (pwdNumbers && pwdSymbol) {
    choices = num.concat(sym)
  }
  // If only one positive is selected
  else if (pwdLowercase) {
    choices = charLower;
  }
  else if (pwdUppercase) {
    choices = charUpper;
  }
  else if (pwdNumbers) {
    choices = num;
  }
  else if (pwdSymbol) {
    choices = sym;
  };

  // This variable is used when the below for loop needs to find the array length.
  var password = [];

  // The below loop will keep adding 1 character until it meets the characters specified by the user.
  // It will then select random choices from the arrays and as this has used the concat method it will add all of the strings together.
  for (var i = 0; i < pwdLength; i++) {
    var randomChoices = choices[Math.floor(Math.random() * choices.length)];
    password.push(randomChoices);
  }
  // The use of '.join()' is to make the arrays join and show as a string. As without this it means they show with commas between them.
  var showPW = password.join("");
  showPassword(showPW);
  // Return showPW makes the password we have generated show in the box on our webpage, but as we have ammended this to make it the variable showPW this joins the arrays and removes spacing.
  return showPW;
}
// This function asks for the password to be shown as text content rather than elements.
function showPassword(showPW) {
  document.getElementById("password").textContent = showPW;
}