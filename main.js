class Reservo {
    constructor(nombreCliente, apellidoCliente, numeroReserva, habitacion) {
      this.nombreCliente = nombreCliente;
      this.apellidoCliente = apellidoCliente;
      this.numeroReserva = numeroReserva;
      this.habitacion = habitacion;
    }
  }
  const nombreCliente = [];
  const apellidoCliente = [];
  const numeroReserva = [];
  const habitacion = [];
  const newReservo = [];
  const nuevaReserva = newReservo (nombreCliente, apellidoCliente, numeroReserva, habitacion);
  
  
  /*****************************/
  //Si el LocalStorage tiene datos, los agrego al Array de Reservas.
  
  if (localStorage.getItem('reservo')) {
    let reserva = JSON.parse(localStorage.getItem('reserva'));
    /* reservas.push(...reserva); */
    for (let i = 0; i < reserva.length; i++) {
      reservas.push(reserva[i]);
    }
  }
  
  /*****************************/
  
  const formulario = document.getElementById('formulario');
  
  formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    agregarReserva();
  });
  
  function agregarReserva() {
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const reserva = document.getElementById('reserva').value;
    const habitacion = document.getElementById('habitacion').value;
    const nuevaReserva = newReservo(nombre, apellido, reserva, habitacion); !!111111
    reservas.push(nuevaReserva);
    //Agrego al LocalStorage:
    localStorage.setItem('reserva', JSON.stringify(reservas));
    formulario.reset();
  }
  
  const contenedorReservas = document.getElementById('contenedorReservas');
  
  const verReservas = document.getElementById('verReservas');
  
  verReservas.addEventListener('click', () => {
    mostrarReservas();
  });
  
  function mostrarReservas() {
    contenedorReservas.innerHTML = '';
    reservas.forEach((reserva) => {
      const div = document.createElement('div');
      div.innerHTML = `
                        <div>
                            <p>Nombre del Cliente: ${reserva.nombreCliente}</p>
                            <p>Apellido del Cliente: ${reserva.apellidoCliente}</p>
                            <p>Número Reserva: ${reserva.numeroReserva}</p>
                            <p>Habitación: ${reserva.habitacion}</p>
                        </div>
        
                        `;
      contenedorReservas.appendChild(div);
    });
  }
  