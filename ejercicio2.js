//Calcular pagos en cuotas sobre un monto determinado.
let datoIngresado = parseFloat(prompt("INGRESE MONTO (PRÉSTAMO)"));
console.log(datoIngresado)
if(!Number.isNaN(datoIngresado)) {
let seleccion = prompt(`SELECCIONE UNA DE LAS CUOTAS:
1 - 1 AÑO POR 12 CUOTAS
2 - 6 MESES POR 6 CUOTAS
3 - 6 MESES POR 3 CUOTAS
4 - 2 AÑOS POR 24 CUOTAS 
5 - 2 AÑOS POR 12 CUOTAS`);
let interes = x => x * 0.24;
let division = (a, b) => a / b;
let monto = (a, b) => a + b;
while (seleccion == "1" || seleccion == "2" || seleccion == "3" || seleccion == "4" || seleccion == "5"){
   
    switch (seleccion) {
        case "1":
           let acum1 = "";
            for ( i = 1 ; i<=12 ; i++){
               acum1 = `${acum1}
               cuota d/c mes ${i}: ${(division(datoIngresado, 12))} + ${division(interes(datoIngresado), 12)}`
            }
            alert(`${acum1}
               MONTO TOTAL: ${(monto(datoIngresado, interes(datoIngresado)))}`);
            break;
         case "2":
            let acum2 = "";
            for ( i = 1 ; i<=6 ; i++) {
               acum2 = `${acum2}
               cuota d/c mes ${i}: ${division(datoIngresado, 6)} + ${division(interes(datoIngresado), 6)}`
            }      
             alert(`${acum2}
               MONTO TOTAL: ${(monto(datoIngresado, interes(datoIngresado)))}`);
               break;
         case "3":
            let acum3 = "";
            for ( i = 1 ; i<=3 ; i++) {
            acum3 = `${acum3}
            cuota d/c 2 meses ${i}: ${division(datoIngresado, 3)} + ${division(interes(datoIngresado), 3)}`
            }
            alert(`${acum3}
              MONTO TOTAL: ${(monto(datoIngresado, interes(datoIngresado)))}`);
              break;
         case "4":
            let acum4 = "";
            for (i = 1; i <=24; i++) {
               acum4 = `${acum4}
               cuota d/c mes ${i}: ${division(datoIngresado, 24)} + ${division(interes(datoIngresado), 24)}`
            }
            alert(`${acum4}
              MONTO TOTAL: ${(monto(datoIngresado, interes(datoIngresado)))}`);
              break;
         case "5":
            let acum5 = "";
            for (i = 1; i<=12 ; i++) {
               acum5 = `${acum5}
               cuota d/C 2 meses ${i}: ${division(datoIngresado, 12)} + ${division(interes(datoIngresado), 12)}`
            }
            alert(`${acum5}
              MONTO TOTAL: ${(monto(datoIngresado, interes(datoIngresado)))}`);
              break;
         default:
            alert(`INGRESE UNA DE LAS OPCIONES PORFAVOR`)
            break;
    }
    datoIngresado = parseFloat(prompt("INGRESE OTRO MONTO (PRÉSTAMO)"));
    seleccion = prompt(`SELECCIONE UNA DE LAS CUOTAS:
   1 - 1 AÑO POR 12 CUOTAS
   2 - 6 MESES POR 6 CUOTAS
   3 - 6 MESES POR 3 CUOTAS
   4 - 2 AÑOS POR 24 CUOTAS 
   5 - 2 AÑOS POR 12 CUOTAS`);
   }
alert(`INGRESE UNA DE LAS OPCIONES POR FAVOR`) 
}
alert(`INGRESE UN NUMERO POR FAVOR`)