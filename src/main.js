const TITLE_URL = 'ecommerceComunicacion';
const nombre = 'Manuales de Comunicaciones Estrategica';agregarAlCarrito('Manual de Comunicacion Estrategica');
function agregarAlCarrito(nombreDeProducto, precioProducto, stockProducto, cantidadPedida) {
    const tieneStock = validarStock(stockProducto, cantidadPedida);
    if(tieneStock)
    {console.log(`Agregaste al carrito ${nombreDeProducto} a ${precioProducto}`);}
    else{console.log('No tenemos mas para ofrecerte, intenta mas tarde');}}
    function validarStock(stockProducto, cantidadPedida) {
        return (stockProducto > cantidadPedida);}