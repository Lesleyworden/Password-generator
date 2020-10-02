// Assignment Code
// gererateBtn creates a link between the html id and the JavaScript so when it is clicked it begins the write password function//

var generateBtn = document.querySelector("#generate");
var copyBtn = document.querySelector("#copyBtn");
var passwordFinal = document.querySelector("#password");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
