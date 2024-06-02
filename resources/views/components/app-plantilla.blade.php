<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" rel="stylesheet">
    <link href="{{ asset('lib/fontawesome-free-6.4.2-web/css/all.min.css') }}" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap"
      rel="stylesheet"
    />
<link rel="stylesheet" href="{{ asset('css/home.css') }}" />
<link rel="stylesheet" href="{{ asset('css/login.css') }}" />
<link rel="stylesheet" href="{{ asset('css/lecciones.css') }}" />
<link rel="stylesheet" href="{{ asset('css/piano.css') }}" />
<link rel="stylesheet" href="{{ asset('css/piano-nivel2.css') }}" />
<link rel="stylesheet" href="{{ asset('css/piano-juego.css') }}" />
<link rel="stylesheet" href="{{ asset('css/practica.css') }}" />
<link rel="stylesheet" href="{{ asset('css/practica1.css') }}" />
<link rel="stylesheet" href="{{ asset('css/editor.css') }}" />

    <title>Musingo</title>
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
          <a href='/'>Inicio</a>
          <a href="editor-notas">Editor</a>
          <a href="actividades">Lecciones</a>
          <a href="piano">Piano</a>
          <a href="piano-nivel2">Piano Nivel 2</a>
          <a href="piano-juego">Aprende Jugando</a>
        </nav>
      </div>
    </header>
     <div class="titulo-carrucel">
      <h2>@yield('title')</h2>
    </div>
    <div class="principal">

     {{$slot}}

     </div>
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
