
const cantidadEnCarrito = localStorage.getItem('miArrayLength')
//Recibo el array con los productos agregados al carrito
var productoEnCarrito = localStorage.getItem('miArray');
// Se parsea para poder ser usado en javascript con JSON.parse :)
productoEnCarrito = JSON.parse(productoEnCarrito);

console.log(productoEnCarrito);

function mostrarCarrito(i) {
    const carrito = document.getElementById('add-to-cart');
    carrito.innerHTML = i;
}

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

    //Creas una variable y llamas por id al div padre creado en el html
    const contenedorDelCarrito = document.getElementById("contenedor-de-carrito");

    //Con el forEach recorres el array que recibis por parametro
    productoEnCarrito.forEach(producto => {

        //Creo desde js un div y lo asigno a la variable divProducto

        //INFO DEL PRODUCTO
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
        //BOTON ELIMINAR PRODUCTO
        const botonBorrarDelCarrito = document.createElement("div");
        botonBorrarDelCarrito.classList.add("boton");
        botonBorrarDelCarrito.innerHTML = `<img src="../img/borrar.png" alt="eliminar">`;
        botonBorrarDelCarrito.addEventListener("click", () => {

            Swal.fire({
                title: 'Estas seguro?',
                text: 'Confirma si quiere eliminar el producto.',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si, eliminar!',
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                },
                customClass: {
                    popup: 'popup-alert',
                    title: 'title-alert'
                }
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire(
                        'Eliminado!',
                        'El producto fue eliminado del carrito.',
                        'success'
                    )
                    productoEnCarrito.splice(productoEnCarrito.indexOf(producto), 1);
                    contenedorDelCarrito.innerHTML = "";
                    listarProductosDelCarrito(productoEnCarrito);
                    mostrarTotal();

                    console.log("Eliminaste: " + producto.nombre);
                    console.log("indice: " + productoEnCarrito.indexOf(producto));
                    console.log(productoEnCarrito);
                }
            })

        })

        //SUMAR, RESTAR Y MOSTRAR UNIDADES
        //CREO UN DIV CONTENEDOR DE LOS BOTONES DE UNIDADES








        document.getElementById("add-to-cart").innerHTML = productoEnCarrito.length;
        divProducto.appendChild(botonBorrarDelCarrito);
        contenedorDelCarrito.appendChild(divProducto);

    });
}

listarProductosDelCarrito(productoEnCarrito);
mostrarTotal();