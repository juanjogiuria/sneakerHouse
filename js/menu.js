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

    if(rutaActual == 'img/logo-menu.png'){
        e.target.setAttribute('src', 'img/logo-menu2.png');
    }else if(rutaActual == 'img/logo-menu2.png'){
        e.target.setAttribute('src', 'img/logo-menu.png');
    }else if(rutaActual == '../img/logo-menu.png'){
        e.target.setAttribute('src', '../img/logo-menu2.png');
    }else{
        e.target.setAttribute('src', '../img/logo-menu.png');
    }
})

