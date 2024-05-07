<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="../resources/css/base.css>
  <title>Musingo</title>
</head>
<body>
  <header class="heder1">
      <div class="menu1">
        <div class="logo">
          <img src="../assets/imagenes/logoM.jpeg" alt="" class="imagen" />
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
          <a href="#">Inicio</a>
          <a href="#">Material</a>
          <a href="lecciones.html">Lecciones</a>
          <a href="#">Acerca de</a>
        </nav>
      </div>
    </header>
  <div class="container">
    @yield('content')
  </div>
  <script src="../resources/js/base.js"></script
</body>
</html>