///////////////////////////////
//Modo oscuro
///////////////////////////////
document.getElementById('cambiarModo').addEventListener('click', function() {
    document.body.classList.toggle('modo-oscuro'); //Aplico a todos los elementos del body la clase modo-oscuro

    if (document.body.classList.contains('modo-oscuro')) { //Cambio los textos del boton
        this.textContent = 'Modo claro';
    } else {
        this.textContent = 'Modo oscuro';
    }
});


///////////////////////////////
// Ejercicio
///////////////////////////////
const clientes = [
    {dni: '12345678A', nombre: 'Javi', apellidos: 'Gonzalez', saldo: 1200},
    {dni: '87654321Z', nombre: 'Lucia', apellidos: 'Pérez', saldo: 5700},
    {dni: '19283746H', nombre: 'Carlos', apellidos: 'Lopez', saldo: 1000},
];
let clienteActual = null;


//Función para mostrar los datos del Cliente Actual
function mostrarDatos(cliente){
    const panel = document.getElementById('panel');

    if(cliente!=null){
        panel.innerHTML = `<p>Nombre: ${cliente.nombre} ${cliente.apellidos}</p> <p>Saldo: ${cliente.saldo}</p>`; //innerHTML me permite interpretar etiquetas html 
    }else{
        panel.textContent = 'Cliente no encontrado.';
    }
}

document.getElementById('ingresarBtn').addEventListener('click', function(){
    const dni = prompt('Introduzca el DNI:');

    for (let i = 0; i < clientes.length; i++) {
        if (clientes[i].dni === dni) {
            clienteActual = clientes[i];
            break;
        }
    }

    mostrarDatos(clienteActual);
});

document.getElementById('ingresoBtn').addEventListener('click', function(){
    const ingreso = parseFloat(prompt('Introduzca cantidad a ingresar (€):'));

    if(ingreso>0){
        clienteActual.saldo += ingreso;
    }else{
        alert('Cantidad no válida.');
    }

    mostrarDatos(clienteActual);
});

document.getElementById('retiradaBtn').addEventListener('click', function(){
    const retirada = parseFloat(prompt('Introduzca cantidad a retirar (€):'));

    if(retirada>0){
        if((clienteActual.saldo-retirada)>0){
            clienteActual.saldo -= retirada;
        }else{
            alert('Saldo insuficiente');
        }
    }else{
        alert('Cantidad no válida.');
    }

    mostrarDatos(clienteActual);
});

document.getElementById('nuevoBtn').addEventListener('click', function(){
    const nombre = prompt('Introduzca el Nombre:');
    const apellidos = prompt('Introduzca el Apellido:');

    let dniExiste;
    do {
        dni = prompt('Introduzca el DNI:');
        dniExiste = false; 

        for (let i = 0; i < clientes.length; i++) { // Compruebo si el DNI ya existe en el array de clientes          
            if (clientes[i].dni === dni) {
                dniExiste = true;
                alert('Ya existe un usuario con ese DNI, por favor introduzca otro.');
                break; 
            }
        }

    } while (dniExiste); // Repito el proceso si el DNI ya existe


    const saldo = parseFloat(prompt('Introduzca el Saldo inicial:'));

    const nuevoCliente = { dni, nombre, apellidos, saldo };
    clientes.push(nuevoCliente);

    clienteActual = clientes[clientes.length - 1]; //Actualizo clienteActual al nuevo cliente añadido (Será el último del array)

    mostrarDatos(clienteActual);
});

document.getElementById('listaBtn').addEventListener('click', function(){
    const panel = document.getElementById('panel');
    panel.textContent = ''; //Reseteo panel

    for (let i = 0; i < clientes.length; i++) {
        panel.innerHTML += `<p>${clientes[i].nombre} ${clientes[i].apellidos}, DNI: ${clientes[i].dni}</p>`;
    }
});
