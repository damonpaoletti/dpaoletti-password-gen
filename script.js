var charactersLength = 8;
var choiceArray = [];
var lowercaseArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','r','s','t','u','v','w','x','y','z'];
var uppercaseArray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','R','S','T','U','V','W','X','Y','Z'];
var numericArray = ['0','1','2','3','4','5','6','7','8','9'];
var specialCharacterArray = ['!','@','#','$','#','&','%','}','{','*','?','/'];

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


function generatePassword () {

}

function callPrompts (){
  charactersLength = parseInt(prompt('Please input the length of your desired password numerically. Must be between 8-128 characters'));
// checking to make sure all the information is correct
  if(isNaN(charactersLength) || charactersLength < 8 || charactersLength > 128) {
    alert('Character length must be a number and in between 8-128 characters')
    return false;

  }

  if (confirm('Press OK if you would like lowercase letters')) {
    choiceArray = choiceArray.concat(lowercaseArray);
  }
  if (confirm('Press OK if you would like UPPERCASE letters')) {
    choiceArray = choiceArray.concat(uppercaseArray);
  }
  if (confirm('Press OK if you would like numeric characters')) {
    choiceArray = choiceArray.concat(numericArray);
  }

  if (confirm('Press OK if you would like special characters')) {
    choiceArray = choiceArray.concat(specialCharacterArray);
  }

}
