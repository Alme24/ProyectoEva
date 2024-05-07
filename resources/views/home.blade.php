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
  <link rel="stylesheet" href="{{ asset('css/home.css') }}" />




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
          <a href="#">Inicio</a>
          <a href="#">Material</a>
          <a href="lecciones.html">Lecciones</a>
          <a href="#">Acerca de</a>
        </nav>
      </div>
    </header>

    <div class="titulo-carrucel">
      <h2>NOTAS MUSICALES</h2>
    </div>
    <div class="principal">
      <div class="carrucel">
        <div class="gallery">
          <div class="gallery-container">
            <img
              class="gallery-item gallery-item-1"
              src="{{ asset('imags/do.jpg') }}"
              data-index="1"
            />
            <img
              class="gallery-item gallery-item-2"
              src="{{ asset('imags/re.png') }}"
              data-index="2"
            />
            <img
              class="gallery-item gallery-item-3"
              src="{{ asset('imags/do.jpg') }}"
              data-index="3"
            />
            <img
              class="gallery-item gallery-item-4"
              src="{{ asset('imags/re.png') }}"
              data-index="4"
            />
            <img
              class="gallery-item gallery-item-5"
              src="{{ asset('imags/mii.jpg') }}"
              data-index="5"
            />
            <img
              class="gallery-item gallery-item-6"
              src="{{ asset('imags/do.jpg') }}"
              data-index="6"
            />
          </div>
          <div class="gallery-controls"></div>
        </div>
      </div>
    </div>

    <div class="hero-image">
      <div class="hero-opa">
        <div class="wrapper">
          <span class="icon-close">
            <ion-icon name="close"></ion-icon>
          </span>
          <div class="form-box login">
            <h2>Iniciar sesión</h2>
            <form action="#">
              <div class="input-box">
                <span class="icon">
                  <ion-icon name="mail"></ion-icon>
                </span>
                <input type="email" name="email" required />
                <div></div>
                <label>Correo electrónico</label>
              </div>
              <div class="input-box">
                <span class="icon">
                  <ion-icon name="lock-closed"></ion-icon>
                </span>
                <input type="password" name="password" id="pwd" required />
                <div></div>
                <label>Contraseña</label>
              </div>
              <div class="remember-forgot">
                <label for=""
                  ><input type="checkbox" onclick="showPwd()" /> Mostrar
                  contraseña</label
                >
              </div>
              <button type="submit" class="bth">Iniciar sesión</button>
              <div class="login-register">
                <p>
                  ¿No tienes una cuenta?
                  <a href="#" class="register-link">Registrate</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    <script src="{{ asset('js/home.js') }}"></script>
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
