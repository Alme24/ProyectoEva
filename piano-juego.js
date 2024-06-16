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
    let tiempoJuego =0;
    let totalLetras=0;
    let puntajeFinal = 0;
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

    function terminar(){
        Final.classList.add("escondido");
        fetch('archivo.txt')
        .then(response => response.text())
        .then(text => {
            if (text.trim() === "") {
                window.scrollTo({top: 0, behavior: "smooth" });
                botonEmpezar.classList.remove("escondido");
                abrirEditorBtn.classList.remove("escondido");
                seleccionarCancionBtn.classList.remove("escondido");
                listaCancionesSelect.classList.remove("escondido");
            }
        })
        // Enviar la nota a Moodle utilizando el método SCORM (agregar tu lógica aquí)
        setSCORMScore(puntajeFinal);
        finishSCORM();
    }

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
        tiempoJuego= 1.5 * listaLetras.length;
        totalLetras = listaLetras.length;
        document.documentElement.style.setProperty("--tiempo", tiempoJuego + "s");
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
        let diferencia = 0;
        
        if (letrasIncorrectas > letrasCorrectas){
            puntajeFinal=0;
        }else{
            diferencia= letrasCorrectas - letrasIncorrectas;
            puntajeFinal= (diferencia*100)/totalLetras;
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
        fetch('archivo.txt')
        .then(response => response.text())
        .then(text => {
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
        .catch(error => {
            console.error('Error al cargar archivo.txt', error);
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
    
    abrirEditorBtn.addEventListener("click", abrirEditor);
    cancelarBtn.addEventListener("click", cancelar);

    function abrirEditor() {
        ventanaEmergente.style.display = "block";
    }

    function cancelar(){
        ventanaEmergente.style.display = "none"; 
    }
});

