let seguir = true;
let ingresarProductos;
let cuotas;
let porcentaje;
let precioFinal;
let precioCuotas;
let productoElegido;

class productos {
    constructor(nombre, precio){
        this.nombre = nombre
        this.precio = precio
    }
}
    const buzo = new productos ("buzo", 30000)
    const remera = new productos ("remera", 25000)
    const pantalon = new productos ("pantalon", 20000)

while (seguir){

    ingresarProductos = prompt("Ingrese el producto que desea comprar: \nBuzo: $30.000 \nRemera: $25.000 \nPantalon: $20.000");
    if(ingresarProductos === "buzo" || ingresarProductos === "remera" || ingresarProductos === "pantalon" ){
        

        if(ingresarProductos === "buzo"){
            productoElegido = buzo;
        }else if (ingresarProductos === "remera"){
            productoElegido = remera;
        }else if (ingresarProductos === "pantalon"){
            productoElegido = pantalon
        }
        cuotas = parseInt(prompt("Ingrese el metodo de pago: \n0: Transferecia Bancaria: -5% \n1: Tarjeta Debito: -5% \n \nCon Tarjeta Credito  \n2: Pago: Igual \n3: 3 Cuotas: +15% \n6: 6 Cuotas: +25% \n12: 12 Cuotas: +40%"));

        if(cuotas === 0){
            porcentaje = (5/100) * productoElegido.precio;
            precioFinal = productoElegido.precio - porcentaje;
            alert("El metodo de pago es: Transferencia bancaria \nProducto: " + ingresarProductos + "\nPrecio Final: " + precioFinal )
        }
        if(cuotas === 1){
            porcentaje = (5/100) * productoElegido.precio;
            precioFinal = productoElegido.precio - porcentaje;
            alert("El metodo de pago es: Tarjeta de Debito \nProducto: " + ingresarProductos + "\nPrecio Final: " + precioFinal )
        }
        if(cuotas === 2){
            precioFinal = productoElegido.precio;
            alert("El metodo de pago es: Tarjeta de Credito \nProducto: " + ingresarProductos + "\nPrecio Final: " + precioFinal )
        }
        if(cuotas === 3){
            porcentaje = (15/100) * productoElegido.precio;
            precioFinal = productoElegido.precio + porcentaje;
            precioCuotas = precioFinal / 3;
            alert("El metodo de pago es: Tarjeta de Credito \nProducto: " + ingresarProductos + "\nPrecio Final: " + precioFinal +  "( 3 x " + precioCuotas + ")")
        }
        if(cuotas === 6){
            porcentaje = (25/100) * productoElegido.precio;
            precioFinal = productoElegido.precio + porcentaje;
            precioCuotas = precioFinal / 6;
            alert("El metodo de pago es: Tarjeta de Credito \nProducto: " + ingresarProductos + "\nPrecio Final: " + precioFinal +  "( 6 x " + precioCuotas + ")")
        }
        if(cuotas === 12){
            porcentaje = (40/100) * productoElegido.precio;
            precioFinal = productoElegido.precio + porcentaje;
            precioCuotas = precioFinal / 12;
            alert("El metodo de pago es: Tarjeta de Credito \nProducto: " + ingresarProductos + "\nPrecio Final: " + precioFinal +  "( 12 x " + precioCuotas + ")")
        }
        
    }
}
