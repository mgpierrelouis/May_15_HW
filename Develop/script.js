// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordLen;
var lowercase;
var uppercase;
var numbers;
var symbols;
var lcChars = "abcdefghijklmnopqrstuvwxyz";
var ucChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberChars = "0123456789";
var symbolChars = "!@#$%*&+";
var LOWER    = 0;
var UPPER    = 1;
var NUMBER  = 2;
var SYMBOL  = 3;
var charTypenames = ["\nlowercase letters", "\nuppercase letters", "\nnumbers", "\nsymbol" ];

// Write password to the #password input
function writePassword() {
  passwordLen = getPasswordLen();
  getCharTypes();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password; 
}

function getPasswordLen() {
  var choice;
  var length;

  for (;;){
    choice = prompt("Choose Password Length (between 8 and 128 characters)");
    if (choice == "") {
      alert("You must choose a password length!");
    }else { 
      length = parseInt(choice);
      if (Number.isNaN(length)) {
        alert("You need to input a number!");
      }
      else {
        if (length < 8 || length > 128) {
          alert("Choice invalid. Choose a number between 8 and 128.");
        } else {
          break;
        }
      }
    }
  }
  return length;
}

function getCharTypes() {
  for (;;) {
    lowercase = confirm("Include lowercase characters?");
    uppercase = confirm("Include uppercase characters?");
    numbers = confirm("Include numbers?");
    symbols = confirm("Include special characters?");
    if(!lowercase && !uppercase && !numbers && !symbols) {
      alert("Must select at least 1 character type");
    }else {
      break;
    }

  }
  alert("Chosen character types:" + "\n" + (lowercase ? charTypenames[0] : "") + (uppercase ? charTypenames[1] : "") + (numbers ? charTypenames[2] : "" ) + (symbols ? charTypenames[3] : ""));
  

}

function getCharacter(type) {
  var character;
  if(type == LOWER) {
    character = lcChars[Math.floor(Math.random()*lcChars.length)];
  }else if(type == UPPER) {
    character = ucChars[Math.floor(Math.random()*ucChars.length)];
  }else if (type == NUMBER) {
    character = numberChars[Math.floor(Math.random()*numberChars.length)];
  }else if (type == SYMBOL) {
    character = symbolChars[Math.floor(Math.random()*symbolChars.length)];
  }
  
  return character;
} 

function generatePassword() { 
  var generatedPassword= [];

  for (i=0;;) {
      if (lowercase) {
             generatedPassword[i]= getCharacter(LOWER);
             i++;
             if (i==passwordLen)
                break;
      }
      if (uppercase) {
             generatedPassword[i]= getCharacter(UPPER);
             i++;
             if (i==passwordLen)
                break;
      }
      if (numbers) {
             generatedPassword[i]= getCharacter(NUMBER);
             i++;
             if (i==passwordLen)
                break;
      }
      if (symbols) {
             generatedPassword[i]= getCharacter(SYMBOL);
             i++;
             if (i==passwordLen)
                break;
      }
    
  }   
  
  return generatedPassword.join("");

}

generateBtn.addEventListener("click", writePassword);
