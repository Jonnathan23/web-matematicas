
//* Ejemplos
const contSumar = document.querySelector('#cont-sumar');
const contRestar = document.querySelector('#cont-restar');
const contMulti = document.querySelector('#cont-multi');
const contDiv = document.querySelector('#cont-div');

//* Imagenes
const imgSumar = document.querySelector('#suma');
const imgRestar = document.querySelector('#resta');
const imgMulti = document.querySelector('#multiplicacion');
const imgDiv = document.querySelector('#division');

console.log(imgSumar);
console.log(imgRestar);
console.log(imgMulti);
console.log(imgDiv);

contSumar.addEventListener('click', e => imgSumar.classList.toggle('mostrar'));
contRestar.addEventListener('click', e => imgRestar.classList.toggle('mostrar'));
contMulti.addEventListener('click', e => imgMulti.classList.toggle('mostrar'));
contDiv.addEventListener('click', e => imgDiv.classList.toggle('mostrar'));
