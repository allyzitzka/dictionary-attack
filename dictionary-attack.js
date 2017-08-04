var wordsList = [];



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
  document.getElementById("results").innerHTML = "Results here";
  var check = false
  var pass = document.getElementById("pw").value;
  for (var i = 0; i < wordsList.length; i++) {
     var word = wordsList[i];
     var n = word.includes(pass);
     if (pass == wordsList[i] || n == true) {
        var check = true
        break;
      }
  }
if (check == true) {
  document.getElementById("results").innerHTML = "Your password is weak";
}
  else {
document.getElementById("results").innerHTML = "Not bad";
  }
}
