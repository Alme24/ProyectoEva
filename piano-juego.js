/*const palabrasArray = [
    "of8wtw8",
    "wtfwdf7",
    "wrw7worf",
    "wdf 6wEw",
    "f 6wffEw",
    "dd60es060",
    "pe0g9ey",
    "e9peygfe",
];

const palabraAnteriorContainer = document.getElementById("palabraAnterior");
const input = document.querySelector("input");
const botonEmpezar = document.getElementById("empezar");
const barraProgreso = document.querySelector("#barraProgreso div");
const correctasElement = document.querySelector("#correctas span");
const incorrectasElement = document.querySelector("#incorrectas span");
const Final = document.querySelector("#final");
const botonReiniciar = document.querySelector("#final button");
const palabraContainer = document.getElementById("palabraActual");
const pianoKeyboard = document.querySelector(".piano_keyboard");
const staff = document.querySelector(".piano");

// variables
const tiempoJuego = 40;
let letrasCorrectas;
let letrasIncorrectas;
let listaLetras = [];
let indiceActual;
let indicePalabraActual = 0;

function empezar() {
    indicePalabraActual = 0;
    palabraContainer.classList.remove("escondido");
    nuevaPalabra();
    letrasCorrectas = 0;
    letrasIncorrectas = 0;
    indiceActual = 0;
    console.log("Empezar");
    Final.classList.toggle("escondido", true);
    listaLetras[0].classList.toggle("letraActual");
    barraProgreso.classList.toggle("completarTiempo", true);
    botonEmpezar.classList.toggle("escondido", true);
}

function nuevaPalabra() {
    if (listaLetras.length > 0)
        listaLetras.forEach((letra) => palabraContainer.removeChild(letra));

    const palabraElegida = palabrasArray[indicePalabraActual];
    listaLetras = [];
    indiceActual = 0;

    for (let i = 0; i < palabraElegida.length; i++) {
        const letrasElement = document.createElement("span");
        letrasElement.textContent = palabraElegida[i];
        palabraContainer.appendChild(letrasElement);
        listaLetras.push(letrasElement);
    }

    // Incrementar el índice para la próxima palabra, y resetear si llega al final del array
    indicePalabraActual = (indicePalabraActual + 1) % palabrasArray.length;
}

function crearLetraEfecto(element) {
    element.classList.toggle("invisible2", true);
    const letra = element.textContent;
    const posicionLetra = element.getBoundingClientRect();
    const nuevaLetra = document.createElement("span");
    nuevaLetra.style = `left: ${posicionLetra.left}px; top: ${posicionLetra.top}px;`;
    nuevaLetra.classList.add("desaparecer");
    nuevaLetra.textContent = letra;
    document.body.appendChild(nuevaLetra);
}

botonEmpezar.addEventListener("click", () => empezar());
botonReiniciar.addEventListener("click", () => empezar());

barraProgreso.addEventListener("animationend", () => {
    Final.classList.toggle("escondido", false);
    console.log("termino");
    barraProgreso.classList.toggle("completarTiempo", false);
    correctasElement.textContent = letrasCorrectas;
    incorrectasElement.textContent = letrasIncorrectas;
    palabraContainer.classList.toggle("escondido", true);
    // pianoKeyboard.classList.toggle("escondido", true);
    // staff.classList.toggle("escondido", true);
});

input.focus();
document.documentElement.style.setProperty("--tiempo", tiempoJuego + "s");

input.addEventListener("input", (event) => {
    if (event.data == listaLetras[indiceActual].textContent) {
        crearLetraEfecto(listaLetras[indiceActual]);
        indiceActual++;
        letrasCorrectas++;

        if (indiceActual == listaLetras.length) {
            nuevaPalabra();
        }
        listaLetras[indiceActual].classList.toggle("letraActual");
    } else {
        letrasIncorrectas++;
        // marcar que hubo un error
    }
});
input.addEventListener("blur", (event) => input.focus());*/

document.addEventListener("DOMContentLoaded", function () {
    const palabrasArray = JSON.parse(localStorage.getItem("canciones")) || [];
    const input = document.querySelector("input.invisible");
    const botonEmpezar = document.getElementById("empezar");
    const barraProgreso = document.querySelector("#barraProgreso div");
    const correctasElement = document.querySelector("#correctas span");
    const incorrectasElement = document.querySelector("#incorrectas span");
    const Final = document.querySelector("#final");
    const botonReiniciar = document.querySelector("#final button");
    const palabraContainer = document.getElementById("palabraActual");
    const nuevaCancionTextarea = document.getElementById("nuevaCancion");
    const guardarCancionBtn = document.getElementById("guardarCancion");
    const listaCancionesSelect = document.getElementById("listaCanciones");
    const seleccionarCancionBtn = document.getElementById("seleccionarCancion");

    let tiempoJuego = 40;
    let letrasCorrectas = 0;
    let letrasIncorrectas = 0;
    let listaLetras = [];
    let indiceActual = 0;
    let palabraActual = "";

    // Inicializar
    guardarCancionBtn.addEventListener("click", guardarCancion);
    seleccionarCancionBtn.addEventListener("click", seleccionarCancion);
    botonEmpezar.addEventListener("click", empezar);
    botonReiniciar.addEventListener("click", empezar);
    barraProgreso.addEventListener("animationend", finalizarJuego);
    input.addEventListener("input", manejarInput);
    //input.addEventListener("blur", () => input.focus());
    document.documentElement.style.setProperty("--tiempo", tiempoJuego + "s");

    cargarCanciones();
    
    barraProgreso.addEventListener("animationend", () => {
        
        Final.classList.toggle("escondido", false);
        console.log("termino");
        barraProgreso.classList.toggle("completarTiempo", false);
        correctasElement.textContent = letrasCorrectas;
        incorrectasElement.textContent = letrasIncorrectas;
        palabraContainer.classList.toggle("escondido", true);
        
    });
    
    input.focus();
    document.documentElement.style.setProperty("--tiempo", tiempoJuego + "s");


    function empezar() {
        window.scrollTo({top: 450, behavior: "smooth" });
        letrasCorrectas = 0;
        letrasIncorrectas = 0;
        indiceActual = 0;
        Final.classList.add("escondido");
        palabraContainer.classList.remove("escondido");
        if (listaCancionesSelect.value) { 
            palabraActual = listaCancionesSelect.value; 
            nuevaPalabra();
        }
        barraProgreso.classList.add("completarTiempo");
        botonEmpezar.classList.add("escondido");
        correctasElement.textContent = letrasCorrectas;
        incorrectasElement.textContent = letrasIncorrectas;
        input.focus();
    }
    function nuevaPalabra() {

        if (listaLetras.length > 0) {
            listaLetras.forEach(letra => palabraContainer.removeChild(letra));
        }
    
        listaLetras = [];
        indiceActual = 0;
    
        for (let i = 0; i < palabraActual.length; i++) {
            const letrasElement = document.createElement("span");
            letrasElement.textContent = palabraActual[i];
            palabraContainer.appendChild(letrasElement);
            listaLetras.push(letrasElement);
        }
        
        listaLetras[indiceActual].classList.add("letraActual");
        
    }
    

    function manejarInput(event) {
        
        if (event.data === listaLetras[indiceActual].textContent) {
            const teclaActual = listaLetras[indiceActual];
            const posicionTecla = teclaActual.getBoundingClientRect();
            crearLetraEfecto(listaLetras[indiceActual], posicionTecla);
            listaLetras[indiceActual].classList.remove("letraActual");
            indiceActual++;
            letrasCorrectas++;
            
            if (indiceActual < listaLetras.length) {
                listaLetras[indiceActual].classList.add("letraActual");
                
            } else {
                palabraActual = ""; 
                nuevaPalabra();
            }
        
        } else {
            letrasIncorrectas++;
        }
        correctasElement.textContent = letrasCorrectas;
        incorrectasElement.textContent = letrasIncorrectas;
        
    }

    function crearLetraEfecto(element, posicionTecla) {
        element.classList.add("invisible2");
        const letra = element.textContent;
        const nuevaLetra = document.createElement("span");
        nuevaLetra.classList.add("desaparecer");
        nuevaLetra.textContent = letra;
        
        nuevaLetra.style.left = `${posicionTecla.left}px`;
        nuevaLetra.style.top = `${posicionTecla.top}px`;
    
        document.body.appendChild(nuevaLetra);
        
    }

    function finalizarJuego() {
        Final.classList.remove("escondido");
        barraProgreso.classList.remove("completarTiempo");
        palabraContainer.classList.add("escondido");
        correctasElement.textContent = letrasCorrectas;
        incorrectasElement.textContent = letrasIncorrectas;
        alert("Juego terminado");
    }

    function guardarCancion() {
        const nuevaCancion = nuevaCancionTextarea.value.trim();
        if (nuevaCancion) {
            palabrasArray.push(nuevaCancion); 
            localStorage.setItem("canciones", JSON.stringify(palabrasArray)); 
            cargarCanciones();
            nuevaCancionTextarea.value = ""; 
            ventanaEmergente.style.display = "none";
        } else {
            alert("La canción no puede estar vacía.");
        }
    }
    

    function cargarCanciones() {
        listaCancionesSelect.innerHTML = "";
        palabrasArray.forEach((cancion, index) => {
            const option = document.createElement("option");
            option.value = cancion;
            option.textContent = `Canción ${index + 1}`;
            listaCancionesSelect.appendChild(option);
        });
    }

    function seleccionarCancion() {
        const seleccion = listaCancionesSelect.value;
        if (seleccion) {
            palabraActual = seleccion;
            empezar();
        }
    }
    //SCORM
    function initSCORM() {
        // Inicializar la API de SCORM
        var lmsAPI = parent;
        if (lmsAPI && lmsAPI.API) {
            lmsAPI.API.LMSInitialize("");
        }
    }
    
    function setSCORMScore(score) {
        var lmsAPI = parent;
        if (lmsAPI && lmsAPI.API) {
            lmsAPI.API.LMSSetValue("cmi.core.score.raw", score);
            lmsAPI.API.LMSSetValue("cmi.core.lesson_status", "completed");
            lmsAPI.API.LMSCommit("");
        }
    }
    
    function finishSCORM() {
        var lmsAPI = parent;
        if (lmsAPI && lmsAPI.API) {
            lmsAPI.API.LMSFinish("");
        }
    }
    
    // Llamar a initSCORM cuando se cargue la página
    window.onload = function() {
        initSCORM();
    }
    
    // Llamar a setSCORMScore cuando se quiera reportar la puntuación
    // Ejemplo: setSCORMScore(95);
    
    // Llamar a finishSCORM cuando se termine la lección
    // Ejemplo: finishSCORM();
    
});


const abrirEditorBtn = document.getElementById("abrirEditor");
const ventanaEmergente = document.getElementById("ventanaEmergente");
const cancelarBtn = document.getElementById("cancelar");
const terminarBtn = document.getElementById("terminar"); 

abrirEditorBtn.addEventListener("click", function() {
    ventanaEmergente.style.display = "block";
});

cancelarBtn.addEventListener("click", function() {
    ventanaEmergente.style.display = "none"; 
});
terminarBtn.addEventListener("click", function() {
    // Enviar la nota a Moodle utilizando el método SCORM (agregar tu lógica aquí)
    final.style.display = "none"; 
    setSCORMScore(letrasCorrectas);
    finishSCORM();
});

