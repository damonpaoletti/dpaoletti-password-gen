// Assignment Code
var generateBtn = document.querySelector('#generate');

function generatePassword() {
  var numofChars = prompt(
    'How many characters would you like your password to contain?'
  );

  if (!isNaN(numofChars)) {
    // if num of char is equal to a number then run the below
    if (numofChars >= 8 && numofChars <= 128) {
      // If the numofchars is between 8-128 then it will run the next prompt asking for special characters etc..
    } else {
      // if the numbofchars is in between 8 and 128 then it will run this alert
      alert('Please enter numbers between 8-128');
    }
  } else {
    // if num of char is not equal to a number then run the below
    alert('Please enter numbers and no letters or special characters');
    return;
  }
  
  var passwordArray = [];

  var lowerCaseArray = ['a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z'];
  var upperCaseArray = ['A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z'];
  var numericArray= ['0,1,2,3,4,5,6,7,8,9'];
  var specialCharArray = ['!,",#,$,%,&,(,),*,-,.,/,:,<,>,@,{,},[,]?,^,~'];

  if (confirm('Please select OK if you would like lowercase letters')) {
    passwordArray = passwordArray.concat (lowerCaseArray);

  }
  if (confirm('Please select OK if you would like uppercase letters')) {
    passwordArray = passwordArray.concat (upperCaseArray);
    
  }

  if (confirm('Please select OK if you would like numeric characters')) {
    passwordArray = passwordArray.concat (numericArray);
    
  }

  if (confirm('Please select OK if you would like special characters')) {
    passwordArray = passwordArray.concat (specialCharArray);
    
  }
  return true;


 
    
 }

  
  

  
  


// Write password to the #password input
function writePassword() {
  var correctprompt = generatePassword ();
  
  if(correctprompt) 
    var password = generatePassword();
    var passwordText = document.querySelector('#password');

    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
