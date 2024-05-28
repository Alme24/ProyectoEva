<x-app-plantilla>
   @section('title', 'APRENDE JUGANDO')

    <div class="piano-cuer">
      <div id="barraProgreso">
        <div></div>
      </div>
      <button class="btn-empezar" id="empezar">Empezar</button>
    <div class="piano2">
      <input type="text" class="invisible" />
      
      <div class="piano_body">
        <!-- <div class="piano_speaker"></div> -->
        <div class="piano_notas">
          <div class="piano_sub">
            <img
              class="cleff"
              src="https://sightreading.training/static/svg/clefs.G.svg"
            />
            <div class="lines">
              <div class="line1 line"></div>
              <div class="line2 line"></div>
              <div class="line3 line"></div>
              <div class="line4 line"></div>
              <div class="line5 line"></div>
            </div>

            <div class="staff_notes" id="palabraActual">
              <!-- S -->
            </div>
          </div>
        </div>
      </div>
      <div class="piano_keyboard"></div>
    </div>
    <div class="escondido" id="final">
      <p id="correctas">Notas Correctas: <span>0</span></p>
      <p id="incorrectas">Notas Incorrectas: <span>0</span></p>
      <button>Reiniciar</button>
    </div>
<script src="{{ asset('js/piano-solo.js') }}"></script>
<script src="{{ asset('js/piano-juego.js') }}"></script>

</x-app-plantilla>