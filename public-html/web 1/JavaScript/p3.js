console.log("Hello there!");

const myRobot = document.getElementById("robot");
const myRobot2 = document.getElementById("robot2");


const antl = document.getElementById("antl");
const antr = document.getElementById("antr");

const antl2 = document.getElementById("antl2");
const antr2 = document.getElementById("antr2");
const santl2 = document.getElementById("santl2");
const santr2 = document.getElementById("santr2");

const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");
const upBtn = document.getElementById("up");
const downBtn = document.getElementById("down");
console.log(robotCoordX = " | " + robotCoordY);


myRobot.addEventListener("click", function() {
    let utterance = new SpeechSynthesisUtterance("Hey! No touching.");
    speechSynthesis.speak(utterance);

    antl.style.fill = "red"
    antr.style.fill = "red"

    this.classList.add("shake");

    setTimeout(() => {
    
        myRobot.classList.remove("shake");
        antl.style.fill=""
        antr.style.fill = ""

    }, 500); 
});

myRobot2.addEventListener("click", function() {

    antl2.style.fill = "pink"
    antr2.style.fill = "pink"
    santl2.style.fill = "pink"
    santr2.style.fill = "pink"

    this.classList.add("shake");

    setTimeout(() => {
    
        myRobot2.classList.remove("shake");
        santl2.style.fill=""
        santr2.style.fill = ""
        antl2.style.fill = ""
        antr2.style.fill = ""

    }, 500); 
});


let robotX = 0;
let robotY = 0;

function moveRobot () {
   myRobot.style.transform = "translateX(" + robotX + "px) translateY(" + robotY + "px)";
    robotSound.play();
}

function moveLeft() {
    robotX -= 30; 
    moveRobot();
}
function moveRight() {
    robotX += 20; 
    moveRobot();
}
function moveUp() {
    robotY -= 20;
    moveRobot();
}
function moveDown() {
    robotY += 20;
    moveRobot();
}

document.addEventListener("keydown", (e) => {
    e = e || window.event;
    if (e.key === "ArrowUp") {
        console.log("up arrow pressed");
        moveUp();
    } else if (e.key === "ArrowDown") {
        console.log("down arrow pressed");
        moveDown();
    } else if (e.key === "ArrowLeft") {
        console.log("left arrow pressed");
        moveLeft();
    } else if (e.key === "ArrowRight") {
        console.log("right arrow pressed");
        moveRight();
    }

})


let robotSound = new Audio("source of audio") //use a beep boop sound
robotSound.play();


leftBtn.addEventListener("click", moveLeft);
rightBtn.addEventListener("click", moveRight);
upBtn.addEventListener("click", moveUp);
downBtn.addEventListener("click", moveDown);

setInterval(() => {
let robotCoordX = myRobot.getBoundingClientRect().x;
let robotCoordY = myRobot.getBoundingClientRect().y;
