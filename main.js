
/**IF condicional */
let edad = parseInt(prompt("Ingrese su edad:"))


if(edad < 18) {
    alert("Aviso! Solo mayores de 18 años pueden realizar reservas");
}
else if (edad >= 18) {
    alert("Edad habilitada para realizar reservas");
}
//*ciclo*/






//*for*/
console.log("Contraseña")

const contraAceptada = 1234;


for(let i = 0; i < 2; i++) {
    let contraUsuario = parseInt(prompt("Ingrese su contraseña para gestionar la reserva: "));
    if(contraUsuario === contraAceptada) {
        console.log("Contraseña correcta");
        break;
    } else {
        contraUsuario = parseInt(prompt("Contraseña incorrecta, vuelva a intentar"));
    }
}

















//*funcion */



function holis() {
    console.log("¡Bienvenidos a Baok!");
}
holis()
















