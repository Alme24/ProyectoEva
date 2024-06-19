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
        tiempoJuego = 1.5 * palabraActual.length;
        /* tiempoJuego = 40; */
        totalLetras = palabraActual.length;
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

    function procesarSubconjunto(subconjuntoIndex) {
        if (!palabraElegida[subconjuntoIndex]) return;

        while (palabraContainer.firstChild) {
            palabraContainer.removeChild(palabraContainer.firstChild);
        }

        const subconjunto = palabraElegida[subconjuntoIndex];
        subconjuntoDisplay.textContent = subconjunto;
        listaLetras = [];
        for (let i = 0; i < subconjunto.length; i++) {
            const letrasElement = document.createElement("span");

            if (
                subconjunto[i] === "q" ||
                subconjunto[i] === "w" ||
                subconjunto[i] === "e" ||
                subconjunto[i] === "r" ||
                subconjunto[i] === "t" ||
                subconjunto[i] === "y" ||
                subconjunto[i] === "u" ||
                subconjunto[i] === "i" ||
                subconjunto[i] === "o" ||
                subconjunto[i] === "p" ||
                subconjunto[i] === "a" ||
                subconjunto[i] === "s" ||
                subconjunto[i] === "d" ||
                subconjunto[i] === "f" ||
                subconjunto[i] === "g" ||
                subconjunto[i] === "h" ||
                subconjunto[i] === "j" ||
                subconjunto[i] === "k" ||
                subconjunto[i] === "l" ||
                subconjunto[i] === "z" ||
                subconjunto[i] === "x" ||
                subconjunto[i] === "c" ||
                subconjunto[i] === "v" ||
                subconjunto[i] === "b" ||
                subconjunto[i] === "n" ||
                subconjunto[i] === "Q" ||
                subconjunto[i] === "W" ||
                subconjunto[i] === "E" ||
                subconjunto[i] === "T" ||
                subconjunto[i] === "Y" ||
                subconjunto[i] === "I" ||
                subconjunto[i] === "O" ||
                subconjunto[i] === "P" ||
                subconjunto[i] === "S" ||
                subconjunto[i] === "D" ||
                subconjunto[i] === "G" ||
                subconjunto[i] === "H" ||
                subconjunto[i] === "J" ||
                subconjunto[i] === "L" ||
                subconjunto[i] === "Z" ||
                subconjunto[i] === "C" ||
                subconjunto[i] === "V" ||
                subconjunto[i] === "B" ||
                subconjunto[i] === "1" ||
                subconjunto[i] === "2" ||
                subconjunto[i] === "3" ||
                subconjunto[i] === "4" ||
                subconjunto[i] === "5" ||
                subconjunto[i] === "6" ||
                subconjunto[i] === "7" ||
                subconjunto[i] === "8" ||
                subconjunto[i] === "9" ||
                subconjunto[i] === "0"
            ) {
                const imgElement = document.createElement("img");
                imgElement.style.width = "50px";
                imgElement.style.height = "50px";
                imgElement.style.position = "absolute";
                if (subconjunto[i] === "s") {
                    imgElement.src = "quarterNoteExtra.png";
                    imgElement.style.left = "110px";
                    imgElement.style.top = "100px";
                } else if (subconjunto[i] === "d") {
                    imgElement.src = "quarterNote.png";
                    imgElement.style.left = "510px";
                    imgElement.style.top = "75px";
                } else if (subconjunto[i] === "f") {
                    imgElement.src = "quarterNote.png";
                    imgElement.style.left = "120px";
                    imgElement.style.top = "60px";
                } else if (subconjunto[i] === "g") {
                    imgElement.src = "quarterNote.png";
                    imgElement.style.left = "120px";
                    imgElement.style.top = "63px";
                } else if (subconjunto[i] === "s") {
                    imgElement.src = "quarterNoteExtra.png";
                    imgElement.style.left = "320px";
                    imgElement.style.top = "40px";
                } else if (subconjunto[i] === "d") {
                    imgElement.src = "quarterNoteExtra.png";
                    imgElement.style.left = "420px";
                    imgElement.style.top = "50px";
                } else if (subconjunto[i] === "f") {
                    imgElement.src = "quarterNoteExtra.png";
                    imgElement.style.left = "200px";
                    imgElement.style.top = "60px";
                } else if (subconjunto[i] === "g") {
                    imgElement.src = "quarterNoteExtra.png";
                    imgElement.style.left = "390px";
                    imgElement.style.top = "70px";
                } else if (subconjunto[i] === "h") {
                    imgElement.src = "quarterNote.png";
                    imgElement.style.left = "420px";
                    imgElement.style.top = "30px";
                } else if (subconjunto[i] === "j") {
                    imgElement.src = "quarterNote.png";
                    imgElement.style.left = "120px";
                    imgElement.style.top = "15px";
                } else if (subconjunto[i] === "k") {
                    imgElement.src = "quarterNote.png";
                    imgElement.style.left = "325px";
                    imgElement.style.top = "0px";
                } else if (subconjunto[i] === "l") {
                    imgElement.src = "quarterNote.png";
                    imgElement.style.left = "180px";
                    imgElement.style.top = "18px";
                } else if (subconjunto[i] === "z") {
                    imgElement.src = "quarterNote.png";
                    imgElement.style.left = "320px";
                    imgElement.style.top = "-15px";
                } else if (subconjunto[i] === "x") {
                    imgElement.src = "quarterNote.png";
                    imgElement.style.left = "220px";
                    imgElement.style.top = "-19px";
                } else if (subconjunto[i] === "c") {
                    imgElement.src = "quarterNote.png";
                    imgElement.style.left = "135px";
                    imgElement.style.top = "-10px";
                } else if (subconjunto[i] === "v") {
                    imgElement.src = "quarterNote.png";
                    imgElement.style.left = "142px";
                    imgElement.style.top = "20px";
                } else if (subconjunto[i] === "b") {
                    imgElement.src = "quarterNoteExtra.png";
                    imgElement.style.left = "250px";
                    imgElement.style.top = "45px";
                } else if (subconjunto[i] === "n") {
                    imgElement.src = "quarterNote.png";
                    imgElement.style.left = "350px";
                    imgElement.style.top = "50px";
                } else if (subconjunto[i] === "a") {
                    imgElement.src = "quarterNoteExtra.png";
                    imgElement.style.left = "333px";
                    imgElement.style.top = "10px";
                } else if (subconjunto[i] === "p") {
                    imgElement.src = "quarterNote.png";
                    imgElement.style.left = "160px";
                    imgElement.style.top = "60px";
                } else if (subconjunto[i] === "o") {
                    imgElement.src = "quarterNote.png";
                    imgElement.style.left = "210px";
                    imgElement.style.top = "65px";
                } else if (subconjunto[i] === "i") {
                    imgElement.src = "quarterNoteExtra.png";
                    imgElement.style.left = "249px";
                    imgElement.style.top = "-5px";
                } else if (subconjunto[i] === "u") {
                    imgElement.src = "quarterNote.png";
                    imgElement.style.left = "410px";
                    imgElement.style.top = "72px";
                } else if (subconjunto[i] === "y") {
                    imgElement.src = "quarterNote.png";
                    imgElement.style.left = "515px";
                    imgElement.style.top = "78px";
                } else if (subconjunto[i] === "t") {
                    imgElement.src = "quarterNote.png";
                    imgElement.style.left = "605px";
                    imgElement.style.top = "36px";
                } else if (subconjunto[i] === "r") {
                    imgElement.src = "quarterNote.png";
                    imgElement.style.left = "98px";
                    imgElement.style.top = "72px";
                } else if (subconjunto[i] === "e") {
                    imgElement.src = "quarterNoteExtra.png";
                    imgElement.style.left = "325px";
                    imgElement.style.top = "44px";
                } else if (subconjunto[i] === "w") {
                    imgElement.src = "quarterNoteExtra.png";
                    imgElement.style.left = "362px";
                    imgElement.style.top = "57px";
                } else if (subconjunto[i] === "9") {
                    imgElement.src = "quarterNoteExtra.png";
                    imgElement.style.left = "72px";
                    imgElement.style.top = "46px";
                } else if (subconjunto[i] === "8") {
                    imgElement.src = "quarterNoteExtra.png";
                    imgElement.style.left = "505px";
                    imgElement.style.top = "70px";
                } else if (subconjunto[i] === "q") {
                    imgElement.src = "quarterNote.png";
                    imgElement.style.left = "455px";
                    imgElement.style.top = "80px";
                } else if (subconjunto[i] === "0") {
                    imgElement.src = "quarterNote.png";
                    imgElement.style.left = "163px";
                    imgElement.style.top = "32px";
                } else if (subconjunto[i] === "7") {
                    imgElement.src = "quarterNote.png";
                    imgElement.style.left = "385px";
                    imgElement.style.top = "20px";
                } else if (subconjunto[i] === "6") {
                    imgElement.src = "quarterNote.png";
                    imgElement.style.left = "168px";
                    imgElement.style.top = "48px";
                } else if (subconjunto[i] === "5") {
                    imgElement.src = "quarterNote.png";
                    imgElement.style.left = "496px";
                    imgElement.style.top = "60px";
                } else if (subconjunto[i] === "4") {
                    imgElement.src = "quarterNote.png";
                    imgElement.style.left = "123px";
                    imgElement.style.top = "69px";
                } else if (subconjunto[i] === "3") {
                    imgElement.src = "quarterNoteExtra.png";
                    imgElement.style.left = "156px";
                    imgElement.style.top = "56px";
                } else if (subconjunto[i] === "2") {
                    imgElement.src = "quarterNote.png";
                    imgElement.style.left = "120px";
                    imgElement.style.top = "65px";
                } else if (subconjunto[i] === "1") {
                    imgElement.src = "quarterNoteExtra.png";
                    imgElement.style.left = "429px";
                    imgElement.style.top = "59px";
                } else if (subconjunto[i] === "Q") {
                    imgElement.src = "quarterNote.png";
                    imgElement.style.left = "412px";
                    imgElement.style.top = "46px";
                } else if (subconjunto[i] === "W") {
                    imgElement.src = "quarterNoteExtra.png";
                    imgElement.style.left = "333px";
                    imgElement.style.top = "80px";
                } else if (subconjunto[i] === "E") {
                    imgElement.src = "quarterNote.png";
                    imgElement.style.left = "530px";
                    imgElement.style.top = "69px";
                } else if (subconjunto[i] === "T") {
                    imgElement.src = "quarterNote.png";
                    imgElement.style.left = "336px";
                    imgElement.style.top = "65px";
                } else if (subconjunto[i] === "Y") {
                    imgElement.src = "quarterNoteExtra.png";
                    imgElement.style.left = "523px";
                    imgElement.style.top = "-5px";
                } else if (subconjunto[i] === "I") {
                    imgElement.src = "quarterNote.png";
                    imgElement.style.left = "495px";
                    imgElement.style.top = "82px";
                } else if (subconjunto[i] === "O") {
                    imgElement.src = "quarterNote.png";
                    imgElement.style.left = "469px";
                    imgElement.style.top = "73px";
                } else if (subconjunto[i] === "P") {
                    imgElement.src = "quarterNoteExtra.png";
                    imgElement.style.left = "542px";
                    imgElement.style.top = "65px";
                } else if (subconjunto[i] === "S") {
                    imgElement.src = "quarterNote.png";
                    imgElement.style.left = "555px";
                    imgElement.style.top = "46px";
                } else if (subconjunto[i] === "D") {
                    imgElement.src = "quarterNote.png";
                    imgElement.style.left = "475px";
                    imgElement.style.top = "49px";
                } else if (subconjunto[i] === "G") {
                    imgElement.src = "quarterNoteExtra.png";
                    imgElement.style.left = "555px";
                    imgElement.style.top = "55px";
                } else if (subconjunto[i] === "H") {
                    imgElement.src = "quarterNote.png";
                    imgElement.style.left = "600px";
                    imgElement.style.top = "62px";
                } else if (subconjunto[i] === "J") {
                    imgElement.src = "quarterNote.png";
                    imgElement.style.left = "583px";
                    imgElement.style.top = "42px";
                } else if (subconjunto[i] === "L") {
                    imgElement.src = "quarterNoteExtra.png";
                    imgElement.style.left = "620px";
                    imgElement.style.top = "50px";
                } else if (subconjunto[i] === "Z") {
                    imgElement.src = "quarterNote.png";
                    imgElement.style.left = "575px";
                    imgElement.style.top = "78px";
                } else if (subconjunto[i] === "C") {
                    imgElement.src = "quarterNote.png";
                    imgElement.style.left = "586px";
                    imgElement.style.top = "49px";
                } else if (subconjunto[i] === "V") {
                    imgElement.src = "quarterNoteExtra.png";
                    imgElement.style.left = "596px";
                    imgElement.style.top = "79px";
                } else if (subconjunto[i] === "B") {
                    imgElement.src = "quarterNote.png";
                    imgElement.style.left = "620px";
                    imgElement.style.top = "35px";
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

    function avanzarSubconjunto() {
        if (subconjuntoActual < palabraElegida.length - 1) {
            subconjuntoActual++;
            indiceActual = 0;
            procesarSubconjunto(subconjuntoActual);
        }
    }

    function nuevaPalabra() {
        palabraElegida = dividirEnSubconjuntos(palabraActual);
        subconjuntoActual = 0;
        indiceActual = 0;
        procesarSubconjunto(subconjuntoActual);
    }

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
                avanzarSubconjunto();
            }
        } else {
            letrasIncorrectas++;
        }
        correctasElement.textContent = letrasCorrectas;
        incorrectasElement.textContent = letrasIncorrectas;
    }

    // Inicializa la primera palabra
    nuevaPalabra();

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
