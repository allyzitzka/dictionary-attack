var wordsList = [];

var match = False;

function init() {
  // Load the words from the dictionary text file to wordsList
  var wordsFile = "https://raw.githubusercontent.com/GirlsFirst/SIP-2017/master/Unit2_Applications/dictionary-attack/dictionary.txt?token=ADcVhZjRMd86ZdhPE2jVvIaJdQdzLA6Yks5YvvVSwA%3D%3D";
  $.get(wordsFile, function(data) {
    document.getElementById("btnSubmit").disabled = true; 
    wordsList = data.split('\n');
    document.getElementById("btnSubmit").disabled = false; 
  });
}

window.onload = init;

/* ADD YOUR CODE BELOW */

function checkPassword() {
 for (dict in wordsList) {
  while (match == False) {
    if (dict == pw) {
      var str = document.getElementById("pw").innerHTML;
      var res = str.replace(pw, "Your password is weak");
      document.getElementById("pw").innerHTML = res;
    }
   }
 }
}


 

    
