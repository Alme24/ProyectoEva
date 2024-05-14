
<x-app-plantilla>
    @section('title', 'PRACTICAS')
    <x-practica>
        @section('pagina1')
            <div class="pagina-ins movPag">
              
              <div class="titulo-form">Registro de Equipo</div>
           
             <div class="pag1">
               <div class="empty">
              <div class="fill" draggable="true"></div>
              </div>
              <div class="empty"></div>
              <div class="empty"></div>
              <div class="empty"></div>
              <div class="empty"></div>

              <script src="{{ asset('js/practica1.js') }}"></script>
             </div>
              <div class="campo btns sigPag">
                <button>Volver</button>
                <button class="adelante">Siguiente</button>
              </div>
            </div>
        @endsection

            @section('pagina2')
            <div class="pagina-ins movPag">
          
            <div class="pag2">
    <audio id="applause" src="{{ asset('sounds/applause.mp3') }}"></audio>
    <audio id="boo" src="{{ asset('sounds/boo.mp3') }}"></audio>
    <audio id="gasp" src="{{ asset('sounds/gasp.mp3') }}"></audio>
    <audio id="tada" src="{{ asset('sounds/tada.mp3') }}"></audio>
    <audio id="victory" src="{{ asset('sounds/victory.mp3') }}"></audio>
    <audio id="wrong" src="{{ asset('sounds/wrong.mp3') }}"></audio>

    <div id="buttons"></div>

    <script src="{{ asset('js/pregunta2.js') }}"></script>
</div>

              <div class="campo btns">
                <button class="volver-pag1 volver">Anterior</button>
                <button class="adelante-pag3 adelante">Siguiente</button>
              </div>
            </div>
            @endsection

            @section('pagina3')
            <div class="pagina-ins movPag">

              <div class="campo btns">
                <button class="volver-pag2 volver">Anterior</button>
                <button class="adelante-pag4 adelante">Siguiente</button>
              </div>
            </div>
            @endsection

           @section('pagina4')->
            <div class="pagina-ins movPag">
              <div class="campo btns">
                <button class="volver-pag3 volver">Anterior</button>
                <button class="adelante-pag5 adelante">Siguiente</button>
              </div>
            </div>
            @endsection

            @section('pagina5')>
            <div class="pagina-ins movPag">
              <div class="campo btns">
                <button class="volver-pag4 volver">Anterior</button>
                <button class="Fin adelante">Registrar</button>
              </div>
            </div>
            @endsection

          </form>
        </div>
      </div>
    </div>    
    {{-- <script src="{{ asset('js/practica1.js') }}"></script> --}}
    </x-practica>
</x-app-plantilla>