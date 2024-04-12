

const resultado = document.getElementById('resultado');                                 
const botones = document.querySelectorAll('input[type="button"]');


botones.forEach(boton => {
    boton.addEventListener('click', (event) => {
        // obtiene el valor del botón presionado
        const valorBoton = event.target.value;

        // operacion del boton
        switch (valorBoton) {
            case '=':
                resultado.value = eval(resultado.value);
                break;
            case 'C': //borra la pantalla
                resultado.value = '';
                break;
            default:
                resultado.value += valorBoton;
                break;
        }
    });
});
