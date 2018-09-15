/* JS File for Sign Up Form
Author: Richa Sharma,
Creation Date: 16 July 2018
*/
const passwordStrength = function() {
  let userInput = document.getElementById("password");
  let messageField = document.getElementById("cross");
  messageField.style.visibility = "visible";
  messageField.innerText = "X";
  messageField.style.color = " #ff2323";
  const passwordCheck = /^([a-zA-Z0-9]{8,12})$/;
  if (userInput.value.match(passwordCheck)) {
    messageField.innerText = ":)";
    messageField.style.color = "#297730";
  }
};

$("button").click(function() {
  $(".wrapper").fadeOut("slow");
  $(".button").fadeOut("fast");
});




