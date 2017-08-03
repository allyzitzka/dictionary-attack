var wordsList = [];

document.getElementById("pw").innerHTML = var pass;

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
      if (dict == pass) {
        match = True;
      }
    }
  }
  if (match == True) {
    return "Your password is weak");
  }
  else {
    return "Your password is strong");
  }
}


 

    
