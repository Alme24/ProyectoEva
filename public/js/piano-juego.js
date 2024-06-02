/* const palabrasArray = ["pyiypyip", "ptitpPp", "otutotuP", "PyuyPyop"]; */
/* const palabrasArray = [
    "fDfDfadspe",
    "tupa0",
    "uOase",
    "ufDfDfadspe",
    "tupa0",
    "usape",
    "asdtf",
    "ogfrd",
    "ifdse",
    "udsaW",
    "fDfDfadspe",
    "tupa0",
    "uOase",
    "ufDfDfadspe",
    "tupa0",
    "usaupe6",
]; */

const palabrasArray = [
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
input.addEventListener("blur", (event) => input.focus());
