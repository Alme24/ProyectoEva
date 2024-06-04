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
              <div class="line line"></div>
              <div class="line2 line"></div>
              <div class="line3 line"></div>
              <div class="line4 line"></div>
              <div class="line5 line"></div>
            </div>
<!-- aqui van canciones -->
            <div class="dis_note">

            <!-- DESCOMENTAR PARA QUE APAREZCA  -->
            <!-- arpegio mi menor -->

            <!-- <div class="dis_note note_one e4">
                <img src="{{ asset('imags/quarterNote.png') }}" class="imagen" />
              </div>

              <div class="dis_note note_two g4">
                <img src="{{ asset('imags/quarterNote.png') }}" class="imagen" />
              </div>

              <div class="dis_note note_three b4">
                <img src="{{ asset('imags/quarterNote.png') }}" class="imagen" />
              </div>

              <div class="dis_note note_four d5">
                <img src="{{ asset('imags/quarterNote.png') }}" class="imagen" />
              </div>

              <div class="dis_note note_five b5">
                <img src="{{ asset('imags/quarterNote.png') }}" class="imagen" />
              </div>

              <div class="dis_note note_six d4">
                <img src="{{ asset('imags/quarterNote.png') }}" class="imagen" />
              </div>

              <div class="dis_note note_seven e4">
                <img src="{{ asset('imags/quarterNote.png') }}" class="imagen" />
              </div> -->

              <!-- #################################################################### -->
              <!-- vi-ii-V-I en F -->

              <!-- <div class="dis_note note_one a4">
                <img src="{{ asset('imags/quarterNote.png') }}" class="imagen" />
              </div>
              <div class="dis_note note_one c5">
                <img src="{{ asset('imags/quarterNote.png') }}" class="imagen" />
              </div>
              <div class="dis_note note_one e5">
                <img src="{{ asset('imags/quarterNote.png') }}" class="imagen" />
              </div>

              <div class="dis_note note_three e4">
                <img src="{{ asset('imags/quarterNote.png') }}" class="imagen" />
              </div>
              <div class="dis_note note_three g4">
                <img src="{{ asset('imags/quarterNote.png') }}" class="imagen" />
              </div>
              <div class="dis_note note_three b4">
                <img src="{{ asset('imags/quarterNote.png') }}" class="imagen" />
              </div>

              <div class="dis_note note_five c5">
                <img src="{{ asset('imags/quarterNote.png') }}" class="imagen" />
              </div>
              <div class="dis_note note_five e5">
                <img src="{{ asset('imags/quarterNote.png') }}" class="imagen" />
              </div>
              <div class="dis_note note_five g5">
                <img src="{{ asset('imags/quarterNote.png') }}" class="imagen" />
              </div>

              <div class="dis_note note_seven f4">
                <img src="{{ asset('imags/quarterNote.png') }}" class="imagen" />
              </div>
              <div class="dis_note note_seven a4">
                <img src="{{ asset('imags/quarterNote.png') }}" class="imagen" />
              </div>
              <div class="dis_note note_seven c5">
                <img src="{{ asset('imags/quarterNote.png') }}" class="imagen" />
              </div> -->

              <!-- ################################################################ -->
              <!-- ESCALA MAYOR DE DO -->

              <div class="dis_note note_one c4">
                <img src="{{ asset('imags/quarterNoteExtra.png') }}" class="imagen" />
              </div>

              <div class="dis_note note_two d4">
                <img src="{{ asset('imags/quarterNote.png') }}" class="imagen" />
              </div>

              <div class="dis_note note_three e4">
                <img src="{{ asset('imags/quarterNote.png') }}" class="imagen" />
              </div>

              <div class="dis_note note_four f4">
                <img src="{{ asset('imags/quarterNote.png') }}" class="imagen" />
              </div>

              <div class="dis_note note_five g4">
                <img src="{{ asset('imags/quarterNote.png') }}" class="imagen" />
              </div>

              <div class="dis_note note_six a4">
                <img src="{{ asset('imags/quarterNote.png') }}" class="imagen" />
              </div>

              <div class="dis_note note_seven b4">
                <img src="{{ asset('imags/quarterNote.png') }}" class="imagen" />
              </div>

              <div class="dis_note note_eight c5">
                <img src="{{ asset('imags/quarterNote.png') }}" class="imagen" />
              </div>

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