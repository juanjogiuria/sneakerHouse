//LLamo al icono del menu
const iconoMenu = document.querySelector('#icono-menu');

//Llamo al menu
const menu = document.querySelector('#menu');

iconoMenu.addEventListener('click', (e) => {

    //Alternamos estilos para el menu y body
    menu.classList.toggle('active');
    document.body.classList.toggle('opacity');

    //Alternamos su atributo 'src' para el icono del menu
    const rutaActual = e.target.getAttribute('src');

    if (rutaActual == 'img/logo-menu.png') {
        e.target.setAttribute('src', 'img/logo-menu2.png');
    } else if (rutaActual == 'img/logo-menu2.png') {
        e.target.setAttribute('src', 'img/logo-menu.png');
    } else if (rutaActual == '../img/logo-menu.png') {
        e.target.setAttribute('src', '../img/logo-menu2.png');
    } else {
        e.target.setAttribute('src', '../img/logo-menu.png');
    }
})

let tipo;
const todo = document.querySelector('#index-link');
const indexLogo = document.querySelector('#index-link2');
const moda = document.querySelector('#moda');
const running = document.querySelector('#running');
const baloncesto = document.querySelector('#baloncesto');
const entrenamiento = document.querySelector('#entrenamiento');

todo.addEventListener('click', () => {
    localStorage.removeItem('filtro');
})

indexLogo.addEventListener('click', () => {
    localStorage.removeItem('filtro');
})


moda.addEventListener('click', () => {
    let tipo = "moda";
    localStorage.removeItem('filtro')
    localStorage.setItem('filtro', tipo);
});

running.addEventListener('click', () => {
    let tipo = "running";
    localStorage.removeItem('filtro')
    localStorage.setItem('filtro', tipo);
});

baloncesto.addEventListener('click', () => {
    let tipo = "baloncesto";
    localStorage.removeItem('filtro')
    localStorage.setItem('filtro', tipo);
});

entrenamiento.addEventListener('click', () => {
    let tipo = "entrenamiento";
    localStorage.removeItem('filtro')
    localStorage.setItem('filtro', tipo);
});
