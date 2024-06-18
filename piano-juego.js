document.addEventListener("DOMContentLoaded", function () {
    const palabrasArray = JSON.parse(localStorage.getItem("canciones")) || [];
    const input = document.querySelector("input.invisible");
    const botonEmpezar = document.getElementById("empezar");
    const barraProgreso = document.querySelector("#barraProgreso div");
    const correctasElement = document.querySelector("#correctas span");
    const incorrectasElement = document.querySelector("#incorrectas span");
    const Final = document.querySelector("#final");
    const botonReiniciar = document.querySelector("#final button");
    const terminarBtn = document.getElementById("terminar");
    const palabraContainer = document.getElementById("palabraActual");
    const nuevaCancionTextarea = document.getElementById("nuevaCancion");
    const guardarCancionBtn = document.getElementById("guardarCancion");
    const listaCancionesSelect = document.getElementById("listaCanciones");
    const seleccionarCancionBtn = document.getElementById("seleccionarCancion");
    const abrirEditorBtn = document.getElementById("abrirEditor");
    const ventanaEmergente = document.getElementById("ventanaEmergente");
    const cancelarBtn = document.getElementById("cancelar");
    //localStorage.removeItem("canciones");
    let letrasCorrectas = 0;
    let letrasIncorrectas = 0;
    let listaLetras = [];
    let indiceActual = 0;
    let palabraActual = "";
    let tiempoJuego = 0;
    let totalLetras = 0;
    let puntajeFinal = 0;

    let subconjuntos = [];
    let subconjuntoActual = 0;

    // Inicializar
    guardarCancionBtn.addEventListener("click", guardarCancion);
    seleccionarCancionBtn.addEventListener("click", seleccionarCancion);
    botonEmpezar.addEventListener("click", empezar);
    botonReiniciar.addEventListener("click", empezar);
    terminarBtn.addEventListener("click", terminar);
    barraProgreso.addEventListener("animationend", finalizarJuego);
    input.addEventListener("input", manejarInput);

    cargarCanciones();

    barraProgreso.addEventListener("animationend", () => {
        Final.classList.toggle("escondido", false);
        barraProgreso.classList.toggle("completarTiempo", false);
        correctasElement.textContent = letrasCorrectas;
        incorrectasElement.textContent = letrasIncorrectas;

        palabraContainer.classList.toggle("escondido", true);
    });

    function terminar() {
        Final.classList.add("escondido");
        fetch("archivo.txt")
            .then((response) => response.text())
            .then((text) => {
                if (text.trim() === "") {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                    botonEmpezar.classList.remove("escondido");
                    abrirEditorBtn.classList.remove("escondido");
                    seleccionarCancionBtn.classList.remove("escondido");
                    listaCancionesSelect.classList.remove("escondido");
                }
            });
        // Enviar la nota a Moodle utilizando el método SCORM (agregar tu lógica aquí)
        setSCORMScore(puntajeFinal);
        finishSCORM();
    }

    function empezar() {
        window.scrollTo({ top: 450, behavior: "smooth" });
        letrasCorrectas = 0;
        letrasIncorrectas = 0;
        indiceActual = 0;
        Final.classList.add("escondido");
        palabraContainer.classList.remove("escondido");
        if (listaCancionesSelect.value) {
            palabraActual = listaCancionesSelect.value;
            nuevaPalabra();
        }
        /* tiempoJuego = 1.5 * listaLetras.length; */
        tiempoJuego = 40;
        totalLetras = listaLetras.length;
        document.documentElement.style.setProperty(
            "--tiempo",
            tiempoJuego + "s"
        );
        console.log(`El tiempo de juego es: ${tiempoJuego} segundos`);
        barraProgreso.classList.add("completarTiempo");
        botonEmpezar.classList.add("escondido");
        abrirEditorBtn.classList.add("escondido");
        seleccionarCancionBtn.classList.add("escondido");
        listaCancionesSelect.classList.add("escondido");
        correctasElement.textContent = letrasCorrectas;
        incorrectasElement.textContent = letrasIncorrectas;
        //input.classList.remove("invisible");
        input.focus();
    }

    function dividirEnSubconjuntos(cadena) {
        const tamaño = 4;
        const subconjuntos = [];
        for (let i = 0; i < cadena.length; i += tamaño) {
            subconjuntos.push(cadena.slice(i, i + tamaño));
        }
        return subconjuntos;
    }

    function nuevaPalabra() {
        if (listaLetras.length > 0) {
            listaLetras.forEach((letra) => palabraContainer.removeChild(letra));
        }
        listaLetras = [];
        indiceActual = 0;

        const palabraElegida = dividirEnSubconjuntos(palabraActual);
        let subconjuntoActual = 0;

        function procesarSubconjunto(subconjuntoIndex) {
            while (palabraContainer.firstChild) {
                palabraContainer.removeChild(palabraContainer.firstChild);
            }

            const subconjunto = palabraElegida[subconjuntoIndex];

            for (let i = 0; i < subconjunto.length; i++) {
                const letrasElement = document.createElement("span");

                if (
                    subconjunto[i] === "p" ||
                    subconjunto[i] === "y" ||
                    subconjunto[i] === "i" ||
                    subconjunto[i] === "a" ||
                    subconjunto[i] === "s" ||
                    subconjunto[i] === "d" ||
                    subconjunto[i] === "f" ||
                    subconjunto[i] === "g" ||
                    subconjunto[i] === "h"
                ) {
                    const imgElement = document.createElement("img");
                    imgElement.style.width = "50px";
                    imgElement.style.height = "50px";
                    imgElement.style.position = "absolute";

                    if (subconjunto[i] === "p") {
                        imgElement.src = "notas/quarterNote.png";
                        imgElement.style.left = "70px";
                        imgElement.style.top = "40px";
                    } else if (subconjunto[i] === "y") {
                        imgElement.src = "notas/quarterNoteExtra.png";
                        imgElement.style.left = "150px";
                        imgElement.style.top = "50px";
                    } else if (subconjunto[i] === "i") {
                        imgElement.src = "notas/quarterNote.png";
                        imgElement.style.left = "450px";
                        imgElement.style.top = "60px";
                    } else if (subconjunto[i] === "a") {
                        imgElement.src = "notas/quarterNoteExtra.png";
                        imgElement.style.left = "280px";
                        imgElement.style.top = "70px";
                    } else if (subconjunto[i] === "s") {
                        imgElement.src = "notas/quarterNoteExtra.png";
                        imgElement.style.left = "320px";
                        imgElement.style.top = "40px";
                    } else if (subconjunto[i] === "d") {
                        imgElement.src = "notas/quarterNoteExtra.png";
                        imgElement.style.left = "420px";
                        imgElement.style.top = "50px";
                    } else if (subconjunto[i] === "f") {
                        imgElement.src = "notas/quarterNoteExtra.png";
                        imgElement.style.left = "200px";
                        imgElement.style.top = "60px";
                    } else if (subconjunto[i] === "g") {
                        imgElement.src = "notas/quarterNoteExtra.png";
                        imgElement.style.left = "390px";
                        imgElement.style.top = "70px";
                    } else if (subconjunto[i] === "h") {
                        imgElement.src = "notas/quarterNote.png";
                        imgElement.style.left = "370px";
                        imgElement.style.top = "60px";
                    }

                    letrasElement.appendChild(imgElement);
                    letrasElement.dataset.letra = subconjunto[i];
                    listaLetras.push(letrasElement);
                } else {
                    letrasElement.textContent = subconjunto[i];
                    listaLetras.push(letrasElement);
                }

                palabraContainer.appendChild(letrasElement);
            }

            if (listaLetras[indiceActual]) {
                listaLetras[indiceActual].classList.add("letraActual");
            }
        }

        procesarSubconjunto(subconjuntoActual);

        function avanzarSubconjunto() {
            if (subconjuntoActual < palabraElegida.length - 1) {
                subconjuntoActual++;
                indiceActual = 0;
                procesarSubconjunto(subconjuntoActual);
            }
        }

        return avanzarSubconjunto;
    }

    // En manejarInput, llamar a avanzarSubconjunto después de validar la letra
    function manejarInput(event) {
        const letraActual = listaLetras[indiceActual];
        const letraCorrecta = letraActual.dataset.letra;

        if (event.data === letraCorrecta) {
            const posicionTecla = letraActual.getBoundingClientRect();
            crearLetraEfecto(letraActual, posicionTecla);
            letraActual.classList.remove("letraActual");
            letraActual.style.display = "none";
            indiceActual++;
            letrasCorrectas++;
            if (indiceActual < listaLetras.length) {
                listaLetras[indiceActual].classList.add("letraActual");
            } else {
                const avanzarSubconjunto = nuevaPalabra();
                avanzarSubconjunto();
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
        let diferencia = 0;

        if (letrasIncorrectas > letrasCorrectas) {
            puntajeFinal = 0;
        } else {
            diferencia = letrasCorrectas - letrasIncorrectas;
            puntajeFinal = (diferencia * 100) / totalLetras;
        }
        Final.classList.remove("escondido");
        barraProgreso.classList.remove("completarTiempo");
        palabraContainer.classList.add("escondido");
        correctasElement.textContent = letrasCorrectas;
        incorrectasElement.textContent = letrasIncorrectas;
        console.log(`el puntaje sobre 100 es: ${puntajeFinal} puntos`);
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
        fetch("archivo.txt")
            .then((response) => response.text())
            .then((text) => {
                if (text.trim().length > 0) {
                    const nuevaCancion = text.trim();
                    palabrasArray.push(nuevaCancion); // Agregar la canción al arreglo de canciones
                    listaCancionesSelect.value = nuevaCancion; // Seleccionar automáticamente la nueva canción
                    abrirEditorBtn.classList.add("escondido");
                    seleccionarCancionBtn.classList.add("escondido");
                    listaCancionesSelect.classList.add("escondido");
                }
                // Actualizar siempre el select de canciones después de intentar cargar desde archivo.txt
                listaCancionesSelect.innerHTML = "";
                palabrasArray.forEach((cancion, index) => {
                    const option = document.createElement("option");
                    option.value = cancion;
                    option.textContent = `Canción ${index + 1}`;
                    listaCancionesSelect.appendChild(option);
                });
            })
            .catch((error) => {
                console.error("Error al cargar archivo.txt", error);
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
    window.onload = function () {
        initSCORM();
    };

    // Llamar a setSCORMScore cuando se quiera reportar la puntuación
    // Ejemplo: setSCORMScore(95);

    // Llamar a finishSCORM cuando se termine la lección
    // Ejemplo: finishSCORM();

    abrirEditorBtn.addEventListener("click", abrirEditor);
    cancelarBtn.addEventListener("click", cancelar);

    function abrirEditor() {
        ventanaEmergente.style.display = "block";
    }

    function cancelar() {
        ventanaEmergente.style.display = "none";
    }
});
