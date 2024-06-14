function iniciar(){
    let botonSeleccionar = document.querySelector("#seleccion-abatar");
    botonSeleccionar.addEventListener("click", seleccionarAbatar);
}

function seleccionarAbatar(){
    let nombreJugador = document.querySelector("#nombre-jugador").value;
    let mostrarJugadores = document.querySelector("#mostrar-parrafo");
    let vegueta = document.querySelector("#vegueta");
    let goku = document.querySelector("#goku");
    let broly = document.querySelector("#broly");

    if(nombreJugador==""){
        alert("Ingrese su nombre");
    }else{
        if(vegueta.checked){
            mostrarJugadores.innerHTML="Hola "+ nombreJugador+ " has seleccionado a "+ "Vegueta";
        }else if(goku.checked){
            mostrarJugadores.innerHTML="Hola "+ nombreJugador+ " has seleccionado a "+ "Goku";
        }else if(broly.checked){
            mostrarJugadores.innerHTML="Hola "+ nombreJugador+ " has seleccionado a "+ "Broly";
        }else{
            alert("seleccione un jugador");
        }
    }
    enemigoAleatorio();
}

function enemigoAleatorio(){
    let ataqueAleatorio=aleatorio(3,1);
    let mostrarMensajeEnemigo=document.querySelector("#mostrar-parrafo-enemigo");

    if(ataqueAleatorio==1){
        mostrarMensajeEnemigo.innerHTML="El enemigo ha seleccionado Vegueta";
    }else if(ataqueAleatorio==2){
        mostrarMensajeEnemigo.innerHTML="El enemigo ha seleccionado Goku";
    }else {
        mostrarMensajeEnemigo.innerHTML="El enemigo ha seleccionado Broly";
    }
}

function aleatorio(max, min){
    return Math.floor(Math.random()*(max-min+1)+min);
}

window.addEventListener("load", iniciar);