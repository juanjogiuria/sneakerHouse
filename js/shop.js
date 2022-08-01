let contador_carrito = 0;

function actualizarContador(i) {
    document.getElementById("add-to-cart").innerHTML = i;
}

function sumaAlCarrito(){
    actualizarContador(++contador_carrito);
    console.log('hiciste click')
}
