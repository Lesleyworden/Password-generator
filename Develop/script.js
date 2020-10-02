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
//Stores variable selection made by user for generatePassword //
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

function copyPassword() {
  passwordFinal.select();
  document.execCommand("Copy");
  }

function generatePassword() {
  userInput();

  function userInput() {
    userLengthChoice = prompt ("Please select a password length between 8 and 128 characters long.");
      if (userLengthChoice === null) {
        return;
      }
      passwordLength = parseInt(userLengthChoice, 10);
      
        if(passwordLength < 8 || passwordLength > 128){
          alert("This selection is not valid. Please try again.");
          userInput();
          return;
        }
        var isLetter = Number(userLowerChoice);
          if (isNaN(isLetter)) {
              alert ("This selection is not valid. Please try again.");
              userInput();
              return;
          }

        userUpperChoice = confirm ("Would you like to use upper case letters? Ok for yes, cancel for no.");
        userLowerChoice = confirm ('Would you like to use lower case letters? Ok for yes, cancel for no');
        userNumericChoice = confirm ("Would you like to use numeric characters? Ok for yes, cancel for no");
        userSpecialChoice = confirm ("Would you like to use special characters? Ok for yes, cancel for no");
  }



}


generateBtn.addEventListener("click", writePassword);
