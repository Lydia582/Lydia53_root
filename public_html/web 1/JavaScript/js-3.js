
// Step 1: Select all the circles
/* querySelectorAll */

const myCircles = document.querySelectorAll(".circles");

// Step2: changing BG color of the 3rd circle using [] and index number

myCircles[2].style.backgroundColor = "#0D73A6";

//NEW: msgBox
const msgBox = document.querySelector("#msg");

// Step 3: Looping through each element in myCircles
myCircles.forEach(function(item, index, array) {
    item.addEventListener("click", function() {
        item.classList.toggle("nice");
         // Step 4: Conditionals
        if(index == 2) {
            displayMsg();
        } else {
            //do nothing
            msgBox.innerHTML = "";

        }
    });
});

function displayMsg() {
    msgBox.innerHTML = "found me :)";
}