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
  
  const nuevaReservo = new Reservo (nombreCliente, apellidoCliente, numeroReserva, habitacion);
  
  
  /*****************************/
  
  const reservas = [];



  if (localStorage.getItem('reservo')) {
    let reservo = JSON.parse(localStorage.getItem('reservo'));
    /* reservas.push(...reserva); */
    for (let i = 0; i < reservo.length; i++) {
      reservas.push(reservo[i]);
    }
  }
  
  /*****************************/
  
  const formulario = document.getElementById('formulario');
  
  formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    agregarReservo();
  });
  
  function agregarReservo() {
    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let numero = document.getElementById('reservo').value;
    let habitacion = document.getElementById('habitacion').value;
    const nuevaReservo = new Reservo (nombre, apellido, numero, habitacion);
    
    
    reservas.push(nuevaReservo);
    //Agrego al LocalStorage:
    localStorage.setItem('reservo', JSON.stringify(reservas));
    formulario.reset();
  }

  
  
  const contenedorReservas = document.getElementById('contenedorReservas');
  
  const verReservas = document.getElementById('verReservas');
  
  verReservas.addEventListener('click', () => {
    mostrarReservas();
  });
  
  function mostrarReservas() {
    contenedorReservas.innerHTML = '';
    reservas.forEach((reservo) => {
      const div = document.createElement('div');
      div.innerHTML = `
                        <div>
                            <p>Nombre del Cliente: ${reservo.nombreCliente}</p>
                            <p>Apellido del Cliente: ${reservo.apellidoCliente}</p>
                            <p>Número Reserva: ${reservo.numeroReserva}</p>
                            <p>Habitación: ${reservo.habitacion}</p>
                        </div>
        
                        `;
      contenedorReservas.appendChild(div);
    });
  }
  