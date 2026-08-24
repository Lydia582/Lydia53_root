let cases = document.querySelectorAll(".box");
let replayBtn = document.querySelector("#rejouer");
let paneauMessage = document.querySelector("#message");


let joueurX = true; 
let gagnant = '';
const patrons = [ 
[0, 1, 2, 9, 10, 11, 18, 19, 20],
[3, 4, 5, 12, 13, 14, 21, 22, 23],
[6, 7, 8, 15, 16, 17, 24, 25, 26],
[27, 28, 29, 36, 37, 38, 44, 45, 46],
[30, 31, 32, 39, 40, 41, 48, 49, 50],
[33, 34, 35, 42, 43, 44, 51, 52, 53],
[54, 55, 56, 62, 64, 65, 72, 73, 74],
[57, 58, 59, 66, 67, 68, 75, 76, 77],
[60, 61, 62, 69, 70, 71, 78, 79, 80],
[0, 3, 6, 27, 30, 33, 54, 57, 60],
[1, 4, 7, 28, 31, 34, 55, 58, 61],
[2, 5, 8, 29, 32, 35, 56, 59, 62],
[9, 12, 15, 36, 39, 42, 63, 66, 69],
[10, 13, 16, 37, 40, 43, 64, 67, 70],
[11, 14, 17, 38, 41, 44, 65, 68, 71],
[18, 21, 24, 45, 48, 51, 72, 75, 78],
[19, 22, 25, 46, 49, 52, 73, 76, 79],
[20, 23, 26, 47, 50, 53, 74, 77, 80],
[0, 4, 8, 36, 40, 44, 72, 76, 80],
[20, 22, 24, 38, 40, 42, 56, 58, 60]
];

for(let boite of cases){
boite.active = true;
    boite.addEventListener("click", function() {
    if (boite.active){
       if (joueurX) {
            boite.innerText = "X"; 
            joueurX = false;
            
        }
        else {
            boite.innerText = "O";
            joueurX = true;
        }
    }
    boite.active = false
    valide();
    });
}

const valide = function (){
for (let patron of patrons) {
     let val1 = cases [patron [0]].innerText;
     let val2 = cases [patron [1]].innerText;
     let val3 = cases [patron [2]].innerText;
     let val4 = cases [patron [3]].innerText;
     let val5 = cases [patron [4]].innerText;
     let val6 = cases [patron [5]].innerText;
     let val7 = cases [patron [6]].innerText;
     let val8 = cases [patron [7]].innerText;
     let val9 = cases [patron [8]].innerText;

     if (val1 &&
        val1 === val2 &&
        val1 === val3 &&
        val1 === val4 &&
        val1 === val5 &&
        val1 === val6 &&
        val1 === val7 &&
        val1 === val8 &&
        val1 === val9) {
            console.log(`Le gagnant est ${val1}`);
            window.alert(`Le gagnant est ${val1}`);
            for (let boite of cases) {
                boite.active = false;
            }
        }
}
}


replayBtn.addEventListener("click", function () {
 for (let boite of cases) {
    boite.active = true;
    boite.innerText = "";
    joueurX = true;
 }
});
