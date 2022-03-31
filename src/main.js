const h3 = document.getElementById("juli")
let cantidades = document.getElementsByClassName("cantidades")
let valorCantidadExterna ;
let valorCantidadInterna ;
let valorCantidadEstrategica ;



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

function capturarCantidadExterna (e) {
    valorCantidadExterna = e.target.value
    valorCantidadExterna = parseInt(valorCantidadExterna)
}
function capturarCantidadInterna (e) {
    valorCantidadInterna = e.target.value
}
function capturarCantidadEstrategica (e) {
    valorCantidadEstrategica = e.target.value
}



function comprar (){
    const msg = document.querySelector("#msgCompra")
    msg.innerHTML = `Usted adquirió ${valorCantidadInterna} Manuales de Comunicación Interna por ${valorCantidadInterna * array[0].precio} 
    <br> Usted adquirió ${valorCantidadExterna} Manuales de Comunicación Externa por ${valorCantidadExterna * array[1].precio}
    <br> Usted adquirió ${valorCantidadEstrategica} Manuales de Comunicación Estratégica por ${valorCantidadEstrategica * array[2].precio}`
}



localStorage.setItem("productos",JSON.stringify(array)) // Guardar un objeto 
const array2 = JSON.parse(localStorage.getItem("productos"))
console.log(array2)
