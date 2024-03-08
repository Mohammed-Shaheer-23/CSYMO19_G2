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

function myInterval() {
    var element = document.getElementById('circle');
    var positionLeft = element.offsetLeft;
    element.style.left = positionLeft - 10 + 'px';
   }
   function myClickEvent() {
    setInterval(myInterval, 10);
   }
   function myLoadEvent() {
    var element = document.getElementById('circle');
    element.addEventListener('click', myClickEvent);
    element.style.opacity = 1;
   }
   document.addEventListener('DOMContentLoaded', myLoadEvent);
