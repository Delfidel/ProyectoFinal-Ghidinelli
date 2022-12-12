


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




//**array o arreglo */

//*let arrayHabitaciones = ["King", "Doble", "Triple" ];console.log("Elija el tamaño de su pieza deseada: 1 = King, 2 = Doble, 3 = Triple");console.log(arrayHabitaciones);

//*let arraySemana = [1, 2, 3 ];
/**console.log("Por Favor, elija el tiempo que va a pasar en nuestra estancia.");
/**console.log(arraySemana);**/


class reserva {
    constructor(pieza, tamaño, precio) {
        this.pieza = pieza;
        this.tamaño= tamaño;
        this.precio = precio;
    }
}

const reservaHabi1 = new reserva("Classic", "King", 5000);
const reservaHabi2 = new reserva("Classic", "Doble", 8000);
const reservaHabi3 = new reserva("Classic", "Triple", 10000);
const reservaHabi4 = new reserva("Premium", "King", 15000);
const reservaHabi5 = new reserva("Premium", "Doble", 17000);
const reservaHabi6 = new reserva("Premium", "Triple", 20000);

const arrayCliente = [];

arrayCliente.push(reservaHabi1);
arrayCliente.push(reservaHabi2);
arrayCliente.push(reservaHabi3);
arrayCliente.push(reservaHabi4);
arrayCliente.push(reservaHabi5);
arrayCliente.push(reservaHabi6);

console.log(arrayCliente);




function menu() {
    alert("Ingrese el tamaño preferido de su habitacion!");
    let opcion = parseInt(prompt("Ingrese una opción: \n 1) King\n 2) Doble \n 3) Triple \n "));
    return opcion;
}

function altaReserva() {
    let nombre = prompt("Ingrese su nombre: ");
    let apellido = prompt("Ingrese su apellido: ");
    let dni = parseInt(prompt("Ingrese su DNI: "));
    let cliente = new Huesped(nombre, apellido, dni, habitacion);
    arrayClientes.push(huesped);
    console.log(arrayCliente);
}
function bajaReserva() {
    let dni = parseInt(prompt("Ingrese su DNI: "));
    let cliente = arrayReserva.find(huesped => huesped.dni === dni);
    let indice = arrayReserva.indexOf(huesped);
    arrayClientes.splice(indice, 1);
    console.log(arrayCliente);
}


function salir() {
    alert("Gracias por reservar en Baok!");
}


let opcion = menu();
switch (opcion) {
    case 1:
        altaReserva();
        break;
    case 2:
        bajaReserva();
        break;
    case 3:
        salir();
        break;
    default:
        alert("Opción incorrecta!");
        break;
}