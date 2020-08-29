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
