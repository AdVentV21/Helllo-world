// let startJs = document.getElementById("startJs");
// startJs.onclick = checkData;
// var userName;
// var userLast;
// var userAge;
// function checkData() {
//   userName = prompt("enter your name");
//   userLast = prompt("enter your lastName");
//   userAge = getAge();

//   checkAge();
// }

// function getAge() {
//   return prompt("enter your age");
// }
// function checkAge() {
//   if (userAge < 0) {
//     alert("you are not alive");
//   } else if (userAge > 100) {
//     alert("you are not alive");
//     checkData();
//   } else {
//     var sum = Number(userAge) + 20;
//     alert(
//       "your name is" +
//         " " +
//         userName +
//         " , " +
//         "your last name is" +
//         " " +
//         userLast +
//         " , " +
//         "your age after 20 years is" +
//         " " +
//         sum
//     );
//   }
// }

var block = document.getElementById('block');

document.addEventListener('keydown', pressHandler);

function pressHandler(event) {
    if (event.code == 'ArrowRight' && (parseInt(getComputedStyle(block)['left'])) < 300) {
        rightMoving();
    } else if (event.code == 'ArrowLeft' && (parseInt(getComputedStyle(block)['left'])) > 40) {
        leftmoving();
    } else if (event.code == 'ArrowDown' && (parseInt(getComputedStyle(block)['top'])) < 600) {
        downMoving();
    } else if (event.code == 'ArrowUp' && (parseInt(getComputedStyle(block)['top'])) > 400) {
        upMoving();
    }
}
function rightMoving() {
    block.style.left = (parseInt(block.style.left || getComputedStyle(block)['left'], 10) + 104) + 'px';
    // block.style.left += 1;
}
function leftmoving() {
    block.style.left = (parseInt(block.style.left || getComputedStyle(block)['left'], 10) - 104) + 'px';
    // block.style.left += 1;
}
function downMoving() {
    block.style.top = (parseInt(block.style.top || getComputedStyle(block)['top'], 10) + 104) + 'px';
}
function upMoving() {
    block.style.top = (parseInt(block.style.top || getComputedStyle(block)['top'], 10) - 104) + 'px';
}

let star = document.getElementById('star');

document.addEventListener('keydown', starGetPos);

function starGetPos(events) {
    if (events.code == 'NumpadMultiply') {
        random();
    }
}
function random() {
    star.style.left = (parseInt(getRandomInt(1, 9) * 52 )) + 'px';
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}