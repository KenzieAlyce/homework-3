// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Password length
var passwordLength = prompt ("How many characters would you like your password to have?") 

if (passwordLength< 129) {

///???????

}

else alert ("This password is too large. Must be under 129 characters.")

if (passwordLength > 7) {

///???????

}

else alert ("This password is too short. Must be at least 8 characters.")

// Special Characters

var specialChar = confirm ("Would you like it to contain special characters?")
//Numbers

var numbers = confirm ("Would you like it to include numbers?")

//Uppercase

var uppercase = confirm ("Would you like it to include uppercase letters?")

//Lowercase

var lowercase = confirm ("Would you like it to include lowercase letters?")