<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap"
      rel="stylesheet"
    />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"
      integrity="sha512-1PKOgIY59xJ8Co8+NE6FZ+LOAZKjy+KY8iq0G4B3CyeY6wYHN3yt9PW0XpSriVlkMXe40PTKnXrLnZ9+fkDaog=="
      crossorigin="anonymous"
    />
   <link rel="stylesheet" href="{{ asset('css/home.css') }}" />
    <link rel="stylesheet" href="{{ asset('css/lecciones.css') }}" />
    <title>Document</title>
  </head>
  <body>
    <header class="heder1">
      <div class="menu1">
        <div class="logo">
          <img src="{{ asset('imags/logoM.jpeg') }}" alt="" class="imagen" />
        </div>
        <div class="titulo"><h1 class="titulo">MUSINGO</h1></div>
        <div class="btn-title">
          <button class="bthLogin-popup">Iniciar sesión</button>
        </div>
      </div>
    </header>
    <header class="header2">
      <div class="menu2">
        <nav class="navigation">
          <a href="login.html">Inicio</a>
          <a href="#">Material</a>
          <a href="lecciones.html">Lecciones</a>
          <a href="#">Acerca de</a>
        </nav>
      </div>
    </header>

    <div class="titulo-carrucel">
      <h2>Aprende Jugando</h2>
    </div>
    <div class="principal">
      <div class="cuerpo">
        <div class="faq-container">
          <div class="faq active">
            <h3 class="faq-title">Orden de Notas?</h3>

            <p class="faq-text">Ir a leccion</p>

            <button class="faq-toggle">
              <i class="fas fa-chevron-down"></i>
              <i class="fas fa-times"></i>
            </button>
          </div>

          <div class="faq">
            <h3 class="faq-title">
              Equivalencia de nombre de las notas en cifrado americano?
            </h3>
            <p class="faq-text">Ir a leccion.</p>
            <button class="faq-toggle">
              <i class="fas fa-chevron-down"></i>
              <i class="fas fa-times"></i>
            </button>
          </div>

          <div class="faq">
            <h3 class="faq-title">orden de las notas en cifrado americano?</h3>
            <p class="faq-text">Ir a leccion.</p>
            <button class="faq-toggle">
              <i class="fas fa-chevron-down"></i>
              <i class="fas fa-times"></i>
            </button>
          </div>

          <div class="faq">
            <h3 class="faq-title">Orden de Pentagrmas?</h3>
            <p class="faq-text">Ir a leccion</p>
            <button class="faq-toggle">
              <i class="fas fa-chevron-down"></i>
              <i class="fas fa-times"></i>
            </button>
          </div>

          <div class="faq">
            <h3 class="faq-title">Pentagramas avanzadas?</h3>
            <p class="faq-text">Ir a leccion</p>
            <button class="faq-toggle">
              <i class="fas fa-chevron-down"></i>
              <i class="fas fa-times"></i>
            </button>
          </div>
        </div>
      </div>
    </div>

    <script src="{{ asset('js/home.js') }}"></script>
    <script src="{{ asset('js/lecciones.js') }}"></script>
    <script
      type="module"
      src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
    ></script>
    <script
      nomodule
      src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"
    ></script>
  </body>
</html>