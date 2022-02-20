// Assignment code here
var length = Number(prompt("Enter a password length between 8 and 128")),
charType = prompt("Enter a charecter type: special, numeric, uppercase, lowercase"),
password = generatePassword();
document.getElementById("display").value = password;

function writePassword() {
  var charset = {
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    numeric: '123456789',
    special: '!@#$%^&*()_-=+~`<,>.?/:;"[{]}'
  };
  var chartset = charSets[charType.toLowerCase()] || charsets.lowercase;
  var retVal = "";
  for (var i = 0; i < length; i++) {
    retVal += charset.charAt(Math.floor(Math.random() * charset.length));
  }
  return retVal
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
document.getElementById("generateBtn").addEventListener("click", generatePassword);


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
document.getElementById("click").addEventListener(writePassword)
