function openMenu(evt, paragraphName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(paragraphName).style.display = "block";
  evt.currentTarget.className += " active";
}
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  captionText.innerHTML = dots[slideIndex - 1].alt;
}

// var name = 'Ratmir';
// console.log(name);
// name = 'Ratmirchik';
// console.log(name);

// var age = '12';
// console.log(age);

// const user = {
//   name: 'Ratmir',
//   age: '12'
// }
// console.log (user)

// {var firstName = 'Ratmir'}

// firstName = 'Andrew'

// console.log (firstName);

//   case 'Andrew':
//   console.log('firstName is Andrew');
//   break;
//   case 'Ratmir':
//   console.log('firstName is Ratmir');
//   break;
//   default:// switch(firstName) {

//   console.log('default');
// }

// let number = 1;
// let second = 2;

// if (number > 0) {
//   second = number;
// } else {
//   b += 1;
// }
// console.log(second);

// function sayHello(firstName, lastName) {
//   console.log("Hello world");
//   console.log(firstName, lastName);
//   return `Hello ${firstName} ${lastName}`;
// }

// let res = sayHello("Ratmir", "Kasatkin") + "!";
// console.log(res);

// const user = {
//   name: "Ratmir",
//   age: 12,
// };

// function getObj(obj) {
//   console.log(obj);
//   obj.name = "Ratm";
// }

// getObj(user);

// const square = function (x) {
//   return x * x;
// };

// (function (msg) {
//   console.log(msg);
// })("Hello world");

// const numArr = [2, 32, 1234, 54, 323];

// let value;

// value = numArr.length;

// console.log(value, numArr);

// value = Array.isArray(numArr);
// value = numArr[2];
// numArr[2] = 12;
// value = numArr.indexOf(323);
// value = numArr.push(100);
// value = numArr.pop();
// value = numArr.unshift(111);
// value = numArr.shift();
// value = numArr.slice(0, 2);
// value = numArr.splice(1, 2, 'one', 'two');
// value = numArr.reverse();
// value = numArr.concat(1, 3);
// value = numArr.join(' ');
// value = 'Hello world'.split(' ');
// // value = 'Hello world'.length;

// console.log(value, numArr);

// alert('alert');

// var userName = prompt("enter your name");

// var userLast = prompt("enter your lastName");
var userAge = getAge();

checkAge();

function checkAge() {
  if (userAge < 0) {
    alert("you are not alive");
  } else if (userAge > 100) {
    alert("you are not alive");
    getAge();
  } else {
    alert(
      "your name is" +
        " " +
        userName +
        " , " +
        "your last name is" +
        " " +
        userLast +
        " , " +
        "your age is" +
        " " +
        userAge
    );
  }
}

function getAge() {
  return prompt("enter your age");
}
