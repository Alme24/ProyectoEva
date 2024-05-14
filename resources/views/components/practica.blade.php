  <div class="cuerpo-prac">
      <div class="conten">
        <div class="titulo-conten">
          <h2>PRACTICA #</h2>
        </div>
        <div class="progress-bar">
          <div class="paso">
            <div class="num">
              <span>1</span>
            </div>
            <p>Pregunta<sub>1</sub></p>
          </div>
          <div class="paso">
            <div class="num">
              <span>2</span>
            </div>
            <p>Pregunta <sub>2</sub></p>
          </div>
          <div class="paso">
            <div class="num">
              <span>3</span>
            </div>
            <p>Pregunta <sub>3</sub></p>
          </div>
          <div class="paso">
            <div class="num">
              <span>4</span>
            </div>
            <p>Pregunta <sub>4</sub></p>
          </div>
          <div class="paso">
            <div class="num">
              <span>5</span>
            </div>
            <p>Pregunta <sub>5</sub></p>
          </div>
        </div>
        <div class="form-prin">
          <form action="#">
                @yield('pagina1')
                @yield('pagina2')
                @yield('pagina3')
                @yield('pagina4')
                @yield('pagina5')
            </form>
        </div>
      </div>
    </div>    
<script src="{{ asset('js/practica.js') }}"></script
