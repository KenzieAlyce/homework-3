// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// Write password to the #password input
function writePassword() {

  do {
    var passwordLength = prompt("How many characters would you like your password  to have?");
      if (passwordLength < 8 || passwordLength > 129) {
      alert("Please only input a whole number that is between 8 and 128.");
      return;
    }  
  }
  while (passwordLength < 8 || passwordLength > 129);
  var lowercase = confirm("Would you like to include lowercase letters?");
  var uppercase = confirm("Would you like to include uppercase letters?");
  var numbers = confirm("Would you like to include numbers?");
  var specialChars = confirm("Would you like to include special characters?")


//Character Arrays

  var criteria = [];
  var lowercaseArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var uppercaseArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var numbersArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var specialCharsArray = ['!', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', ':', ';', '<', '=', '>', '?', '@', '^', '_', '|', '~'];
  var passwordString = "";
  var count = 0;


  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
