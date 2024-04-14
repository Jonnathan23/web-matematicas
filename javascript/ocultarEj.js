//* Cick
const verSumar = document.querySelector('#click-sumar');
const verRestar = document.querySelector('#click-restar');
const verMulti = document.querySelector('#click-multi');
const verDiv = document.querySelector('#click-div');

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

console.log(verSumar);
console.log(verRestar);
console.log(verMulti);
console.log(verDiv);

contSumar.addEventListener('click', e => {
    verSumar.classList.toggle('ocultar');
    imgSumar.classList.toggle('mostrar');
});

contRestar.addEventListener('click', e => {
    verRestar.classList.toggle('ocultar');
    imgRestar.classList.toggle('mostrar');
});
contMulti.addEventListener('click', e => {
    verMulti.classList.toggle('ocultar');
    imgMulti.classList.toggle('mostrar');
});
contDiv.addEventListener('click', e => {
    verDiv.classList.toggle('ocultar');
    imgDiv.classList.toggle('mostrar');
});
