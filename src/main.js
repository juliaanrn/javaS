const TITLE_URL = 'ecommerceComunicacion';
const nombre = 'Manuales de Comunicaciones'; agregarAlCarrito('Manual de Comunicacion');

function agregarAlCarrito(producto) {
    console.log(producto)
    const textoAMostrar = `Agregas al carrito ${producto.titulo} ${producto.precio}`;
    console.log(textoAMostrar);
}


const producto1 = {
    id: 1,
    nombre: "Manual de Comunicación Interna",
    precio: 1500
}

const producto2 = {
    id: 2,
    nombre: "Manual de Comunicación Externa",
    precio: 2500
}

const producto3 = {
    id: 3,
    nombre: "Manual de Comunicación Estrategica",
    precio: 4500
}

const array = [
    {
        id: 1,
        nombre: "Manual de Comunicación Interna",
        precio: 1500
    },
    {
        id: 2,
        nombre: "Manual de Comunicación Externa",
        precio: 2500
    },
    {
        id: 3,
        nombre: "Manual de Comunicación Estrategica",
        precio: 4500
    }
]

document.write(`<h2>
Adquiera nuestros productos
</h2>`)

for (element of array)

    document.write(`
<h3>${element.nombre}</h3>
<p>${element.precio}</p>
<button>Comprar este producto</button>
`)



let comprar;
let total = 0;

do {
    const productoSeleccionado = prompt(`
Seleccione el producto que desea comprar 
1. ${producto1.nombre} $${producto1.precio} 
2. ${producto2.nombre} $${producto2.precio}
3. ${producto1.nombre} $${producto3.precio}
`)

    switch (productoSeleccionado) {
        case "1":
            alert(`Usted ha agregado ${producto1.nombre} al carrito`);
            total += producto1.precio;
            break;
        case "2":
            alert(`Usted ha agregado ${producto2.nombre} al carrito`);
            total += producto2.precio;
            break;
        case "3":
            alert(`Usted ha agregado ${producto3.nombre} al carrito`);
            total += producto3.precio;
            break;
        default:
            alert("No existe tal opción");
            break;
    }
    comprar = prompt("¿Usted desea comprar mas? s/n")
    alert("El total adquirido es $ " + total);
} while (comprar !== "n")

