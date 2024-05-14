<x-app-plantilla>
 @section('title', 'NOTAS MUSICALES')
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

    <script src="{{ asset('js/home.js') }}"></script>
  </x-app-plantilla>