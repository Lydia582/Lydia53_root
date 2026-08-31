let cases = document.querySelectorAll(".case");
let replayBtn = document.querySelector("#replay");
let panneauMessage = document.querySelector("#message");


let joueurX = true; 
let gagnant = ''; 
const patrons = [ 
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];


for (let boite of cases) {
    boite.active = true;
    boite.addEventListener("click",function () {
        if (boite.active) {
            if (joueurX) { 
                boite.innerText = "X";
                joueurX = false;
            }
            else { //tour du jour O
                boite.innerText = "O";
                joueurX = true;
            }
            boite.active = false;
            valide();
        }
     });
}

const valide = function () {
    if ([...cases].every((boite)  => boite.active === false)) {
        afficheMessage("Partie nulle");
    }
    else { 
        for (let patron of patrons) {
            let val1 = cases[patron[0]].innerText;
            let val2 = cases[patron[1]].innerText;
            let val3 = cases[patron[2]].innerText;

            if (val1 &&
                val1 === val2 &&
                val1 === val3) {  
                afficheMessage(`Le gagnant est ${val1}`);
                for (let boite of cases) {
                    boite.active = false;
                }
            }
        }
    }
};



const videCases = function () {
    for (let boite of cases) {
        boite.innerText = '';
    }
};

const afficheMessage = function (msg) {
        panneauMessage.innerText = msg;
};


replayBtn.addEventListener("click", function() {
    videCases();
    afficheMessage("");
    joueurX = true;
    for (let boite of cases) {
        boite.active = true;
    }
});