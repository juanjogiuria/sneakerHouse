
//Recibo el array con los productos agregados al carrito
var productoEnCarrito = localStorage.getItem('miArray');
// Se parsea para poder ser usado en javascript con JSON.parse :)
productoEnCarrito = JSON.parse(productoEnCarrito);

console.log(productoEnCarrito);

function listarProductosDelCarrito(productoEnCarrito){

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
    </div>
    <div class="boton">
        <img src="../img/borrar.png" alt="eliminar">
    </div>`;
    
    contenedorDelCarrito.appendChild(divProducto);
    });
}

listarProductosDelCarrito(productoEnCarrito);