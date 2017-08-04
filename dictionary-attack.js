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
  while (number == true) {
      var number = pass.includes("1" || "3" || "4" || "5" || "0" || "8")
      var e = pass.replace("3", "e");
      var a = e.replace("4", "a");
      var i = a.replace("1", "i");
      var o = i.replace("0", "o");
      var s = o.replace("5", "s");
      var b = s.replace("8", "b");
      pass = b
  }

  for (var i = 0; i < wordsList.length; i++) {
     if (pass == wordsList[i]) {
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
