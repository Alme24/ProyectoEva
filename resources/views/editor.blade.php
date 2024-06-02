<x-app-plantilla>
   @section('title', 'EDITA TUS CANCIONES')
    <div class="edi">
        <button class="add" id="add">
        <i class="fas fa-plus"></i> Add note
      </button>
    
      <script src="https://cdnjs.cloudflare.com/ajax/libs/marked/1.2.2/marked.min.js"></script>
      <script src="{{ asset('js/editor.js') }}"></script>
    </div>
     
</x-app-plantilla>