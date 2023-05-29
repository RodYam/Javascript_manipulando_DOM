const tinta = document.querySelector('[data-tinta]');
const lista = document.querySelector('.lista');
const oculta = document.querySelector('[data-oculta]');

tinta.addEventListener('click', (evento) => {

    lista.style.visibility = "visible";
})

oculta.addEventListener('click', (evento) => {

    lista.style.visibility = "hidden";
})