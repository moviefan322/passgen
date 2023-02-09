var allowableCharacters = "abcdefghijklmnopqrstuvwxyz";
var uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specialCharacters = "~!@#$%^&*()_+[{]};:,<.>/?";
var passwordLength = "";
var upperCaseOption = "";
var numbersOption = "";
var password = "";

function getUpperCaseOption() {
  var upperCaseOption = confirm(
    "Would you like to include upper case characters in your password?"
  );
  return upperCaseOption;
}

function addUpperCase() {
  if (upperCaseOption) {
    allowableCharacters += uppercaseCharacters;
    return allowableCharacters;
  }
}

function getNumbersOption() {
  var numbersOption = confirm(
    "Would you like to include numerals in your password?"
  );
  return numbersOption;
}

function addNumbers() {
  if (numbersOption) {
    allowableCharacters += numbers;
    return allowableCharacters;
  }
}

function getSpecialCharactersOption() {
  var specialCharactersOption = confirm(
    "Would you like to include special characters in your password?"
  );
  return specialCharactersOption;
}

function addSpecialCharacters() {
  if (specialCharactersOption) {
    allowableCharacters += specialCharacters;
    return allowableCharacters;
  }
}

function getPasswordLength() {
  var passwordLength = prompt(
    "How many characters would you like your password to be?"
  );
  while (8 > passwordLength || passwordLength > 128) {
    alert("Your password must be between 8 and 128 characters");
    passwordLength = prompt(
      "How many characters would you like your password to be?"
    );
  }
  return passwordLength;
}

// function generatePassword() {
//   var password = "";
//   while (length < passwordLength) {
//     var password += allowableCharacters(Math.floor(Math.random() * passwordLength));
//     return password;
//   }
// }

function getRandomCharacter(string) {
  var randomIndex = Math.floor(Math.random() * allowableCharacters.length);
  return allowableCharacters[randomIndex];
}

function generatePassword(passwordLength) {
  var output = '';
  for (var i = 0; i < passwordLength; i++) {
    output += getRandomCharacter(allowableCharacters)
  }
  return output;
}

var upperCaseOption = getUpperCaseOption();
var addUpperCase = addUpperCase();
var numbersOption = getNumbersOption();
var addNumbers = addNumbers();
var specialCharactersOption = getSpecialCharactersOption();
var addSpecialCharacters = addSpecialCharacters();
var passwordLength = getPasswordLength();
var password = generatePassword(passwordLength);

console.log(upperCaseOption);
// console.log(allowableCharacters);
console.log(numbersOption);
// console.log(allowableCharacters);
console.log(specialCharactersOption);
console.log(allowableCharacters);
console.log(getPasswordLength);
console.log(password);
