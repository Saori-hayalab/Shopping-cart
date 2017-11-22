'use strict'

let removeBtns = document.getElementsByClassName("removeButton");
let itemPicBoxes = document.querySelectorAll(".item-pic");

for (var i = 0; i < removeBtns.length; i++) {
    var active_button = removeBtns[i];
    active_button.addEventListener("click", function(event) {
        // this is the button in the loop
        event.target.parentNode.outerHTML = "";
    });
}


// for (var i = 0; i < itemPicBoxes.length; i++) {
//     itemPicBoxes[i].addEventListener("mouseenter", function(event) {
//       event.target.parentNode.style.background = "blue"; 
//     });
// }

// var numbers = [1, 5, 10, 15];
// var doubles = numbers.map(function(x) {
//   return x * 2;
// });

// make DOM node elements into an array with [...elements] or Array.from(elements)
[...itemPicBoxes].map(function(itemPicBox) {
    itemPicBox.addEventListener("mouseenter", function(event) {
        event.target.parentNode.style.background = "blue";
    });
});
