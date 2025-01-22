console.log('2d_transform.js loaded');

let gecko = document.querySelector("#gecko");

gecko.addEventListener('click', function (event) {
  //console.log(this.id);
  this.classList.toggle('move-right');
})

let info = document.querySelector('#info-transform nav');

info.addEventListener('click', toggleInfo);

function toggleInfo(event) {
  console.log('toggleInfo');
  this.parentNode.classList.toggle('visible');
}

let two = document.querySelector('#two nav');

two.addEventListener('click', toggleTwo);

function toggleTwo(event) {
  console.log('toggleTwo');
  this.parentNode.classList.toggle('visible');
}

let three = document.querySelector('#three nav');

three.addEventListener('click', toggleThree);

function toggleThree(event) {
  console.log('toggleThree');
  this.parentNode.classList.toggle('visible');
}