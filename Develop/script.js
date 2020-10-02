// Assignment Code
// gererateBtn creates a link between the html id and the JavaScript so when it is clicked it begins the write password function//

var generateBtn = document.querySelector("#generate");
var copyBtn = document.querySelector("#copyBtn");
var passwordFinal = document.querySelector("#password");

// Write password to the #password input
function writePassword() {
  // passwordArray is the variable which the password will be written as the randomizers return their values.//
  passwordArray = [];
  passwordLength = 0;

  userLengthChoice = '';
  userUpperChoice = false;
  userLowerChoice = false;
  userNumericChoice = false;
  userSpecialChoice = false;

  var password = generatePassword();
  password = passwordArray.join("");

  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
