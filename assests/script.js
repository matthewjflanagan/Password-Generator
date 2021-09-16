// Assignment Code
var generateBtn = document.querySelector("#generate");


var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var symbol = "!#$%&'()*+,-./:;<=>?@[^_`{|}~ ";
var number = "0123456789";

// Write password to the #password input
function writePassword() {
  var password = generatePassword()    
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


function generatePassword() {

  var options = ""
  var passwordLength = prompt('Please select the length of your password', 'Select a number between 8 and 128');
  if ( passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength) ) {
    alert('Please select a number between 8 and 128');
    return; 
  }

  var lowercaseConfirm = confirm('Would you like to use lowercase letters?');
  if (lowercaseConfirm) {
      options += lowercase [Math.floor(Math.random() * lowercase.length)];
  }

  var uppercaseConfirm = confirm('Would you like to use uppercase letters?');
  if (uppercaseConfirm) {
      options += uppercase [Math.floor(Math.random() * uppercase.length)];
  }
  
  var numberConfirm = confirm('Would you like to use numbers?');
  if (numberConfirm) {
    options += number [Math.floor(Math.random() * number.length)];
  }
  
  var specialCharConfirm = confirm('Would you like to use special characters?');
  if (specialCharConfirm) {
    options += symbol [Math.floor(Math.random() * symbol.length)];
  }

  if (!lowercaseConfirm && !uppercaseConfirm && !numberConfirm && !specialCharConfirm) {
    alert('You must select at least one type of character!');
  }

  var passwordString = ''
  for (i = 0; i <= passwordLength; i++) {
  passwordString += options.charAt(Math.floor(Math.random() * options.length));
  }
  
  return passwordString;



}   
    

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);