// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];
let nombreIngresado;

function ingresoDeDatos(elemento,texto) {
    let ingresoDeDatos=document.querySelector(elemento); //Utilizar document.querySelector para obtener el texto ingresado por el usuario.
        ingresoDeDatos.innerHTML=texto;
}

function agregarAmigo() { //validación para asegurarse de que el campo no esté vacío
    nombreIngresado=document.getElementById('amigo').value;
     if (nombreIngresado==''){
        ingresoDeDatos('H2','Por favor, inserte un nombre ');

    }else{
        ingresoDeDatos('h2','Ingresa el nombre de tu amigo');
        listaAmigos.push(nombreIngresado);
    }
    limpiarCaja();
}

function sortearAmigo(){
    let indiceSorteo=Math.floor(Math.random()*listaAmigos.length);
        ingresoDeDatos('#resultado',`Tu amigo secreto es: ${(listaAmigos[indiceSorteo])}`);
}

function condicionesIniciales() {
        ingresoDeDatos('h1','Bienvenido al amigo secreto');
        ingresoDeDatos('h2','Ingresa el nombre de tu amigo');
}

function limpiarCaja() {
        document.getElementById('amigo').value='';
}


condicionesIniciales();
