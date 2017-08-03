var wordsList = [];

var pass = document.getElementById("pw");

var match = false;

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
  for (int i = 0; i < wordsList.length; i++) {
    while (match == false) {
      if (pass == wordsList[i]) {
        match = true;
        break;
      }
    }
  }
  if (match == true) {
    document.getElementById("result").innerHTML = "Your password is weak";
  }
  else {
    document.getElementById("result").innerHTML = "Your password is strong";
  }
}


 

    
