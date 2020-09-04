let startJs = document.getElementById("startJs");
startJs.onclick = checkData;
var userName;
var userLast;
var userAge;
function checkData() {
  userName = prompt("enter your name");
  userLast = prompt("enter your lastName");
  userAge = getAge();

  checkAge();
}

function getAge() {
  return prompt("enter your age");
}
function checkAge() {
  if (userAge < 0) {
    alert("you are not alive");
  } else if (userAge > 100) {
    alert("you are not alive");
    checkData();
  } else {
    var sum = Number(userAge) + 20;
    alert(
      "your name is" +
        " " +
        userName +
        " , " +
        "your last name is" +
        " " +
        userLast +
        " , " +
        "your age after 20 years is" +
        " " +
        sum
    );
  }
}
