<?php if (isset($component)) { $__componentOriginalc254754b9d5db91d5165876f9d051922ca0066f4 = $component; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'components.app-plantilla','data' => []] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? (array) $attributes->getIterator() : [])); ?>
<?php $component->withName('app-plantilla'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag && $constructor = (new ReflectionClass(Illuminate\View\AnonymousComponent::class))->getConstructor()): ?>
<?php $attributes = $attributes->except(collect($constructor->getParameters())->map->getName()->all()); ?>
<?php endif; ?>
<?php $component->withAttributes([]); ?>
   <?php $__env->startSection('title', 'APRENDE JUGANDO'); ?>

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
<script src="<?php echo e(asset('js/piano-solo.js')); ?>"></script>
<script src="<?php echo e(asset('js/piano-juego.js')); ?>"></script>

 <?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__componentOriginalc254754b9d5db91d5165876f9d051922ca0066f4)): ?>
<?php $component = $__componentOriginalc254754b9d5db91d5165876f9d051922ca0066f4; ?>
<?php unset($__componentOriginalc254754b9d5db91d5165876f9d051922ca0066f4); ?>
<?php endif; ?><?php /**PATH C:\xampp\htdocs\Eva\ProyectoEva\resources\views/piano-juego.blade.php ENDPATH**/ ?>