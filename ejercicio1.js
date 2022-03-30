//Calcular costo total de productos y/o servicios seleccionados por el usuario.
const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
const iva = x => x * 0.21;
let seleccion = prompt("SELECCION DE UN PRODUCTO \n 1 - CON DESCUENTO\n 2 - SIN DESCUENTO")
let valor = parseFloat(prompt("VALOR DEL PRODUCTO"))
let descuento = parseFloat(prompt("DESCUENTO"))
do {
switch (seleccion) {
    case "1":
        alert(resta(suma(valor, iva(valor)), descuento))
        break;
    case "2":
        alert(suma(valor, iva(valor)))
        break;
    default:
        alert("INGRESE UNA DE LAS 2 OPCIONES POR FAVOR")
        break;
}
    seleccion = prompt(`SELECCIONE OTRO PRODUCTO(SINO QUIERE CONTINUAR ESCRIBA "ESC")\n 1 - Con descuento\n 2 - SIN DESCUENTO`)
    valor = parseFloat(prompt("VALOR DEL PRODUCTO"))
    descuento = parseFloat(prompt("DESCUENTO"))
} while (seleccion !="ESC")