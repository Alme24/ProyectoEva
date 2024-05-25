<x-app-plantilla>
   @section('title', 'APRENDE A TOCAR EL PIANO NIVEL 2')

    <div class="piano-cuer">
      <div class="piano2">
      <div class="piano_body">
        <div class="piano_speaker"></div>
        <div class="piano_interface">
          <div class="piano_controls">
            <h4 class="paino_heading">PIANO</h4>
            <label
              ><input
                type="radio"
                class="piano_control_option"
                name="control"
                value="letterNote"
                checked
              />Notas</label
            >
            <label
              ><input
                type="radio"
                class="piano_control_option"
                name="control"
                value="keyboard"
              />Teclado</label
            >
            <label
              ><input
                type="radio"
                class="piano_control_option"
                name="control"
                value="none"
              />Ninguno</label
            >
          </div>
          <div class="piano_autoplay">
            <h4 class="paino_heading">AUTOPLAY</h4>
            <select class="piano_song_list">
              <option value="1">Jingle Bells</option>
              <option value="2">Set fire to the rain</option>
            </select>
            <label
              >Tempo:
              <select class="piano_tempo">
                <option value="1">Lento</option>
                <option value="2" selected>Normal</option>
                <option value="3">Rapido</option>
              </select>
            </label>
            <button class="piano_play_btn">Play</button>
          </div>
        </div>
        <div class="piano_speaker"></div>
      </div>
      <div class="piano_keyboard">
        <!-- <button class="piano_key piano_key_white">C1</button>
        <div class="empty_space">
          <button class="piano_key piano_key_black">C#1</button>
        </div>
        <button class="piano_key piano_key_white">D1</button>
        <div class="empty_space">
          <button class="piano_key piano_key_black">D#1</button>
        </div>

        <button class="piano_key piano_key_white">E</button>

        <button class="piano_key piano_key_white">F</butto -->n>
      </div>
    </div>  
    </div>
<script src="{{ asset('js/piano-nivel2.js') }}"></script>

</x-app-plantilla>