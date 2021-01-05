// Assignment Code


var characters = ['!','"','#','$','%','&', "'",'(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','[','\\',']','^','_','`','{','|','}','~'];
var numbers = ['0','1','2','3','4','5','6','7','8','9'];
var uppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']; 
var lowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var generateBtn = document.querySelector("#generate");





// Write password to the #password input
  () => {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

  }
 

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword() {

  var charset=
  "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+?><:{}[]~"
  var passwordlenght=8
  var password="";
  for (var i=o;i<passwordlenght;i++){
       var randomnum = Math.floor(Math.random()*charset.lenght);
       password +=charset.substring(randomnum,randomnum+1);
  }
  document.getElementById("input").value=password;
}
  

  