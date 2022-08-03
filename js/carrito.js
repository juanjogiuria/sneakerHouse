
//Recibo el array con los productos agregados al carrito
var productoEnCarrito = localStorage.getItem('miArray');
// Se parsea para poder ser usado en javascript con JSON.parse :)
productoEnCarrito = JSON.parse(productoEnCarrito);

console.log(productoEnCarrito);

function calcularTotal(productoEnCarrito) {
    let resultado = 0;

    productoEnCarrito.forEach(producto => {
        resultado = resultado + producto.precio;
    })

    console.log("$" + resultado);
    return resultado;
}

function mostrarTotal() {
    const montoTotal = document.getElementById("monto-total");
    montoTotal.innerHTML = "$" + (calcularTotal(productoEnCarrito));

}

function listarProductosDelCarrito(productoEnCarrito) {

    console.log('hiciste click');

    const contenedorDelCarrito = document.getElementById("contenedor-de-carrito");

    productoEnCarrito.forEach(producto => {
        const divProducto = document.createElement("div");
        divProducto.classList.add("producto-en-carrito");
        divProducto.innerHTML = `<div class="imagen">
        <img src="../${producto.imagen}" alt="${producto.nombre}">
    </div>
    <div class="informacion">
        <p class="nombre">${producto.nombre}</p>
        <p class="color">${producto.color}</p>
        <p class="precio">$${producto.precio}</p>
    </div>`;

        const botonBorrarDelCarrito = document.createElement("div");
        botonBorrarDelCarrito.classList.add("boton");
        botonBorrarDelCarrito.innerHTML = `<img src="../img/borrar.png" alt="eliminar">`;
        botonBorrarDelCarrito.addEventListener("click", () => {


            productoEnCarrito.splice(productoEnCarrito.indexOf(producto), 1);
            contenedorDelCarrito.innerHTML = "";
            listarProductosDelCarrito(productoEnCarrito);
            mostrarTotal();

            console.log("Eliminaste: " + producto.nombre);
            console.log("indice: " + productoEnCarrito.indexOf(producto));
            console.log(productoEnCarrito);

        })


        divProducto.appendChild(botonBorrarDelCarrito);
        contenedorDelCarrito.appendChild(divProducto);
    });
}


listarProductosDelCarrito(productoEnCarrito);
mostrarTotal();