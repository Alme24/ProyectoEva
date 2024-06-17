
# MUSINGO 🐧

Musingo es un juego interactivo diseñado para niños de 14 años en adelante que desean aprender a tocar el piano de manera divertida y efectiva. Este material de e-learning está extendido con SCORM, lo que permite su integración en plataformas educativas como Moodle.



## 📝 Características
* Piano Digital 🎹 Musingo incluye un piano digital que permite a los usuarios   practicar tocando canciones.
* Carga de Canciones 🎶 Los usuarios pueden agregar sus propias canciones para practicar, ofreciendo una experiencia personalizada y adaptativa.
* Evaluación para Profesores 🧑‍🏫 Los profesores pueden utilizar Musingo para evaluar a sus estudiantes. Pueden asignar canciones específicas para la evaluación, y el juego proporciona una calificación basada en la precisión y desempeño del estudiante.
* Integración con SCORM 📦 Gracias a su extensión SCORM, los puntajes y el progreso de los usuarios se pueden reportar directamente a plataformas LMS como Moodle, facilitando el seguimiento y la gestión del aprendizaje.
## 📋 Requisitos 
### 🌐 Navegador web compatibles 
![Google Chrome](https://img.shields.io/badge/Google%20Chrome-4285F4?style=for-the-badge&logo=GoogleChrome&logoColor=white)
![Edge](https://img.shields.io/badge/Edge-0078D7?style=for-the-badge&logo=Microsoft-edge&logoColor=white)
![Firefox](https://img.shields.io/badge/Firefox-FF7139?style=for-the-badge&logo=Firefox-Browser&logoColor=white)
![Safari](https://img.shields.io/badge/Safari-000000?style=for-the-badge&logo=Safari&logoColor=white)
### LMS compatible con SCORM 1.2 version 2.5.6
![Moodle](https://img.shields.io/badge/Moodle-FF7139?style=for-the-badge&logo=moodle&logoColor=white)
![Blackboard Learn](https://img.shields.io/badge/Blackboard%20Learn-000000?style=for-the-badge&logo=BlackboardLearn&logoColor=white)
![Litmos](https://img.shields.io/badge/Litmos-94cb3b?style=for-the-badge&logo=Litmos&logoColor=white)
##  🔧 Instalación

1. Clona el repositorio:

```bash
git clone https://github.com/Alme24/ProyectoEva.git
```
2. Navega al directorio donde clonaste el proyecto:

```bash
cd /tu_directorio
```
3. Convierte el repositorio en .zip
En windows:
```bash
compact /c "./ProyectoEva"
```
En Linux:
```bash
zip -r ProyectoEva.zip ProyectoEva
```
4. Sube el ProyectoEva.zip como un scorm a tu curso.
Puedes seguir el tutotial de como subir a la plataforma moodle que esta en ComoSubir.pdf
## 👟 Correr Localmente

1. Clonar este proyecto:

```bash
  git clone https://github.com/Alme24/ProyectoEva.git
```
2. Ir al directorio del proyecto:

```bash
  cd mi-directorio
```

3. Abre index.html en tu navegador:

```bash
  open index.html
```
## Diagrama de flujo

```flow
st=>start: Inicio
cond=>condition: ¿archivo.txt está vacío?
op=>operation: Empezar
rest=>operation: Reiniciar
e=>end: Fin
set=>inputoutput: Agregar canción
guar=>operation: Guardar canción
select=>operation: Seleccionar canción
ini=>operation: Iniciar a tocar

fin=>operation: Terminar
error=>operation: Manejar error

st->cond
cond(yes)->set
cond(no)->op
set->guar->select->op
op->ini
ini->rest
rest->op
op->fin
fin->e
error->e
```
## 👆 Uso
* Para profesor:
    
    Si quiere usar el paquete scorm como una evaluación, agrege una canción en notación en cifrado americano al archivo.txt.
    
    Si quiere utlizarlo para que los estudiantes de su curso practiquen, suba el paquete scorm asegurese que el archivo.txt este vacio.


## 🛠 Herramientas
![Javascript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![html](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![Css](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
## 🖋 Autores

* **Gualberto Choque Choque** - [Pai-De-Limon69](https://github.com/Pai-De-Limon69)
* **Jael Alejandra Avendaño Fernandez** - [Alme24](https://github.com/Alme24)
* **Ezequiel Gerstel Bodoha** - [EzeGB](https://github.com/EzeGB)

