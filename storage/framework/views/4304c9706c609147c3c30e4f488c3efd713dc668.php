<?php if (isset($component)) { $__componentOriginalc254754b9d5db91d5165876f9d051922ca0066f4 = $component; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'components.app-plantilla','data' => []] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? (array) $attributes->getIterator() : [])); ?>
<?php $component->withName('app-plantilla'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag && $constructor = (new ReflectionClass(Illuminate\View\AnonymousComponent::class))->getConstructor()): ?>
<?php $attributes = $attributes->except(collect($constructor->getParameters())->map->getName()->all()); ?>
<?php endif; ?>
<?php $component->withAttributes([]); ?>
   <?php $__env->startSection('title', 'LECCIONES'); ?>
      <div class="cuerpo">
        <div class="faq-container">
          <div class="faq active">
            <h3 class="faq-title">Orden de Notas?</h3>
            <a href="actividades/practica1" class="prueba">Empezar prueba</a>

            <button class="faq-toggle">
              <i class="fas fa-chevron-down"></i>
              <i class="fas fa-times"></i>
            </button>
          </div>

          <div class="faq">
            <h3 class="faq-title">
              Equivalencia de nombre de las notas en cifrado americano?
            </h3>
            <a href="#" class="prueba">Empezar prueba</a>
            <button class="faq-toggle">
              <i class="fas fa-chevron-down"></i>
              <i class="fas fa-times"></i>
            </button>
          </div>

          <div class="faq">
            <h3 class="faq-title">orden de las notas en cifrado americano?</h3>
            <a href="#" class="prueba">Empezar prueba</a>
            <button class="faq-toggle">
              <i class="fas fa-chevron-down"></i>
              <i class="fas fa-times"></i>
            </button>
          </div>

          <div class="faq">
            <h3 class="faq-title">Orden de Pentagrmas?</h3>
            <a href="#" class="prueba">Empezar prueba</a>
            <button class="faq-toggle">
              <i class="fas fa-chevron-down"></i>
              <i class="fas fa-times"></i>
            </button>
          </div>

          <div class="faq">
            <h3 class="faq-title">Pentagramas avanzadas?</h3>
            <a href="#" class="prueba">Empezar prueba</a>
            <button class="faq-toggle">
              <i class="fas fa-chevron-down"></i>
              <i class="fas fa-times"></i>
            </button>
          </div>
        </div>
      </div>
      <script src="<?php echo e(asset('js/lecciones.js')); ?>"></script
 <?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__componentOriginalc254754b9d5db91d5165876f9d051922ca0066f4)): ?>
<?php $component = $__componentOriginalc254754b9d5db91d5165876f9d051922ca0066f4; ?>
<?php unset($__componentOriginalc254754b9d5db91d5165876f9d051922ca0066f4); ?>
<?php endif; ?>

<?php /**PATH C:\xampp\htdocs\Eva\ProyectoEva\resources\views/lecciones.blade.php ENDPATH**/ ?>