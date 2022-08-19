class Producto {
    constructor(nombre, imagen, tipo, color, precio) {
        this.nombre = nombre;
        this.imagen = imagen;
        this.tipo = tipo;
        this.color = color;
        this.precio = precio;
    }
}

const producto1 = new Producto("AirForce 1", "img/01-nike.webp", "moda", "Blanca y negra", 29999);
const producto2 = new Producto("Air Max 90", "img/02-nike.webp", "moda", "Blanca, azul y naranja", 24999);
const producto3 = new Producto("Air Max 270", "img/03-nike.webp", "moda", "Negra, roja y blanca", 51999);
const producto4 = new Producto("Air Max 97", "img/04-nike.webp", "moda", "Blanca y negra", 45999);
const producto5 = new Producto("Nike Huarache", "img/05-nike.webp", "moda", "Animal Print", 41999);
const producto6 = new Producto("AirForce 1", "img/06-nike.webp", "moda", "Blanca y negra charol", 30999);
const producto7 = new Producto("KD 15", "img/07-nike.webp", "baloncesto", "Violeta y verde", 52999);
const producto8 = new Producto("Air Jordan XXXVI Loworce 1", "img/08-nike.webp", "baloncesto", "Roja y blanca", 54999);
const producto9 = new Producto("Air Jordan 1 mid", "img/09-nike.webp", "baloncesto", "Negra, roja y blanca", 35999);
const producto10 = new Producto("Metcon 8", "img/10-nike.webp", "entrenamiento", "Verde y turquesa", 49999);
const producto11 = new Producto("LeBron 19 Low", "img/11-nike.webp", "baloncesto", "Violeta, amarilla y rosa", 56999);
const producto12 = new Producto("Nike SB Dunk High", "img/12-nike.webp", "moda", "Gris, azul y rojo", 31999);
const producto13 = new Producto("Nike SB Force 58", "img/13-nike.webp", "moda", "Gris, negro y verde", 22999);
const producto14 = new Producto("Nike Savaleos", "img/14-nike.webp", "moda", "Gris, verde y naranja", 50999);
const producto15 = new Producto("PG 6", "img/15-nike.webp", "baloncesto", "Blanca y negra", 54999);
const producto16 = new Producto("Kyrie Infinity", "img/16-nike.webp", "baloncesto", "Naranja y verde", 55999);
const producto17 = new Producto("Air Jordan 1 Utility Q", "img/17-nike.webp", "baloncesto", "Azul, blanca y roja", 49999);
const producto18 = new Producto("Air Jordan 6 Retro", "img/18-nike.webp", "baloncesto", "Azul y blanca", 53999);
const producto19 = new Producto("Jordan Delta 3 SP", "img/19-nike.webp", "baloncesto", "Lila y gris", 53999);
const producto20 = new Producto("Jordan Air 200E", "img/20-nike.webp", "baloncesto", "Azul y negra", 39999);
const producto21 = new Producto("Nike Air Zoom Alphafly", "img/21-nike.webp", "running", "Celeste y verde", 84999);
const producto22 = new Producto("Zoom Fly 5", "img/22-nike.webp", "running", "Celeste y verde", 54999);
const producto23 = new Producto("ZoomX Invincible Run", "img/23-nike.webp", "running", "Blanca", 58999);
const producto24 = new Producto("ZoomX Vaporfly NEXT% 2", "img/24-nike.webp", "running", "Roja y negra", 68999);
const producto25 = new Producto("Pegasus 39", "img/25-nike.webp", "running", "Verde y blanca", 36299);

const productos = []

productos.push(producto1);
productos.push(producto2);
productos.push(producto3);
productos.push(producto4);
productos.push(producto5);
productos.push(producto6);
productos.push(producto7);
productos.push(producto8);
productos.push(producto9);
productos.push(producto10);
productos.push(producto11);
productos.push(producto12);
productos.push(producto13);
productos.push(producto14);
productos.push(producto15);
productos.push(producto16);
productos.push(producto17);
productos.push(producto18);
productos.push(producto19);
productos.push(producto20);
productos.push(producto21);
productos.push(producto22);
productos.push(producto23);
productos.push(producto24);
productos.push(producto25);

console.log(productos);


//localStorage.clear();

let contador_carrito = 0;
let productoEnCarrito = [];

if(localStorage.getItem('miArray')){
    productoEnCarrito = localStorage.getItem('miArray');
    productoEnCarrito = JSON.parse(productoEnCarrito);
}

if(localStorage.getItem('miArrayLength')){
    contador_carrito = localStorage.getItem('miArrayLength');
    document.getElementById("add-to-cart").innerHTML = contador_carrito;
}
//localStorage.removeItem('filtro');

function actualizarContador(i) {
    document.getElementById("add-to-cart").innerHTML = i;
}

function sumaAlCarrito() {
    actualizarContador(++contador_carrito);

    console.log('hiciste click')
}


function mostrarProducto(productos) {

    const contenedorDeProductos = document.getElementById("contenedor-de-productos");
    contenedorDeProductos.innerHTML = "";

    productos.forEach(producto => {
        const divProducto = document.createElement("div");
        divProducto.classList.add("producto");
        divProducto.innerHTML = `<div class="foto-zapatilla">
        <img src="${producto.imagen}" alt="${producto.nombre}">
    </div>
    <div class="info-zapatilla">
        <p class="nombre">${producto.nombre}</p>
        <p class="color">${producto.color}</p>
        <p class="precio">$${producto.precio}</p>
    </div>`;

        const botonAgregarAlCarrito = document.createElement("div");
        botonAgregarAlCarrito.classList.add("boton-carrito");
        botonAgregarAlCarrito.innerHTML = `<img src="img/mini-carrito.png" alt="">
    <p>Add to Cart</p>`;
        botonAgregarAlCarrito.addEventListener("click", () => {
            actualizarContador(++contador_carrito);

            productoEnCarrito.push(producto);

            //almaceno en localStorage el array con los productos agregados al carrito
            localStorage.setItem('miArray', JSON.stringify(productoEnCarrito));
            //almaceno en el localStorage el length del array para mostrar articulos en el carrito
            localStorage.setItem('miArrayLength', productoEnCarrito.length);
            console.log('hiciste click');
            console.log(productoEnCarrito);
        })

        divProducto.appendChild(botonAgregarAlCarrito);
        contenedorDeProductos.appendChild(divProducto);
    });
}

function mostrarProductosFiltrados(productos, filtro) {
    const contenedorDeProductos = document.getElementById("contenedor-de-productos");
    contenedorDeProductos.innerHTML = "";

    productos.forEach(producto => {
        if (producto.tipo == filtro) {
            const divProducto = document.createElement("div");
            divProducto.classList.add("producto");
            divProducto.innerHTML = `<div class="foto-zapatilla">
        <img src="../${producto.imagen}" alt="${producto.nombre}">
    </div>
    <div class="info-zapatilla">
        <p class="nombre">${producto.nombre}</p>
        <p class="color">${producto.color}</p>
        <p class="precio">$${producto.precio}</p>
    </div>`;

            const botonAgregarAlCarrito = document.createElement("div");
            botonAgregarAlCarrito.classList.add("boton-carrito");
            botonAgregarAlCarrito.innerHTML = `<img src="../img/mini-carrito.png" alt="">
    <p>Add to Cart</p>`;
            botonAgregarAlCarrito.addEventListener("click", () => {
                actualizarContador(++contador_carrito);

                productoEnCarrito.push(producto);

                //almaceno en localStorage el array con los productos agregados al carrito
                localStorage.setItem('miArray', JSON.stringify(productoEnCarrito));
                //almaceno en el localStorage el length del array para mostrar articulos en el carrito
                localStorage.setItem('miArrayLength', productoEnCarrito.length);
                console.log('hiciste click');
                console.log(productoEnCarrito);
            })

            divProducto.appendChild(botonAgregarAlCarrito);
            contenedorDeProductos.appendChild(divProducto);
        }
    });
}

let filtro = localStorage.getItem('filtro');

if(filtro){
    mostrarProductosFiltrados(productos, filtro);
}else{
    mostrarProducto(productos);
}


