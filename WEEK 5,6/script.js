//Exercise 1
// function myClickEvent() {
//     alert('The button was pressed');
//    }
//    function myLoadFunction() {
//     var element = document.getElementById('circle');
//     element.addEventListener('click', myClickEvent);
//    }
//    document.addEventListener('DOMContentLoaded', myLoadFunction);
   

//Exercise 2
// function myClickEvent() {
//     var element = document.getElementById('circle');
//     element.style.backgroundColor = 'blue';
//    }
//    function myLoadEvent() {
//     var element = document.getElementById('circle');
//     element.addEventListener('click', myClickEvent);
//    }
//    document.addEventListener('DOMContentLoaded', myLoadEvent);

//Exercise 3
// function myLoadEvent() {
//     var element = document.getElementById('circle');
//     element.style.opacity = 0.5;
//    }
//    document.addEventListener('DOMContentLoaded', myLoadEvent);


//Exercise 4
// function myClickEvent() {
//     var element = document.getElementById('circle');
//     element.style.opacity = 1;
//    }
//    function myLoadEvent() {
//     var element = document.getElementById('circle');
//     element.addEventListener('click', myClickEvent);
//     element.style.opacity = 0.5;
//    }
//    document.addEventListener('DOMContentLoaded', myLoadEvent);


//Exercise 5
// function myClickEvent() {
//     var element = document.getElementById('circle');
//     var circleOpacity = parseFloat(element.style.opacity);
//     element.style.opacity = circleOpacity - 0.1;
//    }
//    function myLoadEvent() {
//     var element = document.getElementById('circle');
//     element.addEventListener('click', myClickEvent);
//     element.style.opacity = '0.5';
//    }
//    document.addEventListener('DOMContentLoaded', myLoadEvent);


//Exercise 6
// function myInterval() {
//     var element = document.getElementById('circle');
//     var circleOpacity = element.style.opacity;
//     element.style.opacity = circleOpacity - 0.01;
//    }
//    function myClickEvent() {
//     setInterval(myInterval, 10);
//    }
//    function myLoadEvent() {
//     var element = document.getElementById('circle');
//     element.addEventListener('click', myClickEvent);
//     element.style.opacity = 1;
//    }
//    document.addEventListener('DOMContentLoaded', myLoadEvent);

//Exercise 7
// function myInterval() {
//     var element = document.getElementById('circle');
//     var positionLeft = element.offsetLeft;
//     element.style.left = positionLeft - 10 + 'px';
//    }
//    function myClickEvent() {
//     setInterval(myInterval, 10);
//    }
//    function myLoadEvent() {
//     var element = document.getElementById('circle');
//     element.addEventListener('click', myClickEvent);
//     element.style.opacity = 1;
//    }
//    document.addEventListener('DOMContentLoaded', myLoadEvent);

   //Exercise 8
//    function myKeyDown(event) {
//     console.log("Key code:", event.keyCode);
// }

// function myLoadEvent() {
//     document.addEventListener('keydown', myKeyDown);
// }

// document.addEventListener('DOMContentLoaded', myLoadEvent);

//    //Exercise 9
//    var leftInterval, upInterval, rightInterval, downInterval;

//    function moveLeft() {
//        var element = document.getElementById('circle');
//        var positionLeft = element.offsetLeft;
//        element.style.left = (positionLeft - 1) + 'px';
//    }
   
//    function moveUp() {
//        var element = document.getElementById('circle');
//        var positionTop = element.offsetTop;
//        element.style.top = (positionTop - 1) + 'px';
//    }
   
//    function moveRight() {
//        var element = document.getElementById('circle');
//        var positionLeft = element.offsetLeft;
//        element.style.left = (positionLeft + 1) + 'px';
//    }
   
//    function moveDown() {
//        var element = document.getElementById('circle');
//        var positionTop = element.offsetTop;
//        element.style.top = (positionTop + 1) + 'px';
//    }
   
//    function myKeyDown(event) {
//        if (event.keyCode === 37) { // Left arrow key
//            leftInterval = setInterval(moveLeft, 10);
//        }
//        if (event.keyCode === 38) { // Up arrow key
//            upInterval = setInterval(moveUp, 10);
//        }
//        if (event.keyCode === 39) { // Right arrow key
//            rightInterval = setInterval(moveRight, 10);
//        }
//        if (event.keyCode === 40) { // Down arrow key
//            downInterval = setInterval(moveDown, 10);
//        }
//    }
   
//    function myKeyUp(event) {
//        if (event.keyCode === 37) { // Left arrow key
//            clearInterval(leftInterval);
//        }
//        if (event.keyCode === 38) { // Up arrow key
//            clearInterval(upInterval);
//        }
//        if (event.keyCode === 39) { // Right arrow key
//            clearInterval(rightInterval);
//        }
//        if (event.keyCode === 40) { // Down arrow key
//            clearInterval(downInterval);
//        }
//    }
   
//    function myLoadEvent() {
//        document.addEventListener('keydown', myKeyDown);
//        document.addEventListener('keyup', myKeyUp);
//    }
   
//    document.addEventListener('DOMContentLoaded', myLoadEvent);
   

//Exercise 10
var myVariable = 0; // Declare myVariable with global scope

var leftInterval, upInterval, rightInterval, downInterval;

function moveLeft() {
    var element = document.getElementById('circle');
    var positionLeft = element.offsetLeft;
    element.style.left = (positionLeft - 1) + 'px';
    console.log("Moving left: ", myVariable++);
}

function moveUp() {
    var element = document.getElementById('circle');
    var positionTop = element.offsetTop;
    element.style.top = (positionTop - 1) + 'px';
    console.log("Moving up: ", myVariable++);
}

function moveRight() {
    var element = document.getElementById('circle');
    var positionLeft = element.offsetLeft;
    element.style.left = (positionLeft + 1) + 'px';
    console.log("Moving right: ", myVariable++);
}

function moveDown() {
    var element = document.getElementById('circle');
    var positionTop = element.offsetTop;
    element.style.top = (positionTop + 1) + 'px';
    console.log("Moving down: ", myVariable++);
}

function myKeyDown(event) {
    if (event.keyCode === 37) { // Left arrow key
        leftInterval = setInterval(moveLeft, 10);
    }
    if (event.keyCode === 38) { // Up arrow key
        upInterval = setInterval(moveUp, 10);
    }
    if (event.keyCode === 39) { // Right arrow key
        rightInterval = setInterval(moveRight, 10);
    }
    if (event.keyCode === 40) { // Down arrow key
        downInterval = setInterval(moveDown, 10);
    }
}

function myKeyUp(event) {
    if (event.keyCode === 37) { // Left arrow key
        clearInterval(leftInterval);
    }
    if (event.keyCode === 38) { // Up arrow key
        clearInterval(upInterval);
    }
    if (event.keyCode === 39) { // Right arrow key
        clearInterval(rightInterval);
    }
    if (event.keyCode === 40) { // Down arrow key
        clearInterval(downInterval);
    }
}

function myLoadEvent() {
    document.addEventListener('keydown', myKeyDown);
    document.addEventListener('keyup', myKeyUp);
}

document.addEventListener('DOMContentLoaded', myLoadEvent);
