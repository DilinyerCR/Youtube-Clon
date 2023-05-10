const container = document.querySelector('#container');
const hide = document.querySelector('#hide');

const suscripciones = document.getElementById('suscripciones');

document.querySelector('#menu-button').addEventListener('click', () => {
    container.classList.toggle('active');

    if(container.classList.contains('active')) {
        suscripciones.style.display = 'block';
    } else {
        suscripciones.style.display = "none";
    }
});




