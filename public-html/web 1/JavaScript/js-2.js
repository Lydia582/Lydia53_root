console.log("Scripts are loaded LOL");
const myBox = document.getElementById("box");
const myBG = document.getElementsByTagName("body");

myBox.style.backgroundColor = "#090735";

// myBox.classList.add("fancy"); 


myBox.addEventListener("click", function() { 
    myBox.classList.toggle("fancy"); 
    myBG[0].style.background = "#0D73A6";
});

myBox.addEventListener("dblclick", myCoolAction);

function myCoolAction() {
    //Actions
    top.location.href = "https://google.com";
}




// myCoolAction();