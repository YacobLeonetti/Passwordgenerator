// Assignment code here


function generatePassword() {
  var length = Number(prompt("Enter a password length between 8 and 128"))
  var lowercase = confirm("Would you like a lowercase")
  var uppercase = confirm("Would you like an uppercase")
  var special = confirm("Do you want any special characters")
  var numeric = confirm("Would you like numbers")

   var lowercasestr = 'abcdefghijklmnopqrstuvwxyz';
   var uppercasestr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
   var numericstr = '123456789';
   var specialstr = '!@#$%^&*()_-=+~`<,>.?/:;"[{]}';

   var possiblecharacters = ""
   if(lowercase) {
     possiblecharacters += lowercasestr;
   }
   if(uppercase) {
     possiblecharacters += uppercasestr;
   }
   if(special) {
     possiblecharacters += specialstr
   }
   if(numeric) {
     possiblecharacters += numericstr
   }
   console.log(possiblecharacters)

 
  
  var retVal = "";
  for (var i = 0; i < length; i++) {
    retVal += possiblecharacters.charAt(Math.floor(Math.random() * possiblecharacters.length));
  }
  return retVal
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

