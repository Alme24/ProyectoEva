
<?php if (isset($component)) { $__componentOriginalc254754b9d5db91d5165876f9d051922ca0066f4 = $component; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'components.app-plantilla','data' => []] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? (array) $attributes->getIterator() : [])); ?>
<?php $component->withName('app-plantilla'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag && $constructor = (new ReflectionClass(Illuminate\View\AnonymousComponent::class))->getConstructor()): ?>
<?php $attributes = $attributes->except(collect($constructor->getParameters())->map->getName()->all()); ?>
<?php endif; ?>
<?php $component->withAttributes([]); ?>
    <?php $__env->startSection('title', 'PRACTICAS'); ?>
    <?php if (isset($component)) { $__componentOriginalc254754b9d5db91d5165876f9d051922ca0066f4 = $component; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'components.practica','data' => []] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? (array) $attributes->getIterator() : [])); ?>
<?php $component->withName('practica'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag && $constructor = (new ReflectionClass(Illuminate\View\AnonymousComponent::class))->getConstructor()): ?>
<?php $attributes = $attributes->except(collect($constructor->getParameters())->map->getName()->all()); ?>
<?php endif; ?>
<?php $component->withAttributes([]); ?>
        <?php $__env->startSection('pagina1'); ?>
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

              <script src="<?php echo e(asset('js/practica1.js')); ?>"></script>
             </div>
              <div class="campo btns sigPag">
                <button>Volver</button>
                <button class="adelante">Siguiente</button>
              </div>
            </div>
        <?php $__env->stopSection(); ?>

            <?php $__env->startSection('pagina2'); ?>
            <div class="pagina-ins movPag">
          
            <div class="pag2">
    <audio id="applause" src="<?php echo e(asset('sounds/applause.mp3')); ?>"></audio>
    <audio id="boo" src="<?php echo e(asset('sounds/boo.mp3')); ?>"></audio>
    <audio id="gasp" src="<?php echo e(asset('sounds/gasp.mp3')); ?>"></audio>
    <audio id="tada" src="<?php echo e(asset('sounds/tada.mp3')); ?>"></audio>
    <audio id="victory" src="<?php echo e(asset('sounds/victory.mp3')); ?>"></audio>
    <audio id="wrong" src="<?php echo e(asset('sounds/wrong.mp3')); ?>"></audio>

    <div id="buttons"></div>

    <script src="<?php echo e(asset('js/pregunta2.js')); ?>"></script>
</div>

              <div class="campo btns">
                <button class="volver-pag1 volver">Anterior</button>
                <button class="adelante-pag3 adelante">Siguiente</button>
              </div>
            </div>
            <?php $__env->stopSection(); ?>

            <?php $__env->startSection('pagina3'); ?>
            <div class="pagina-ins movPag">

              <div class="campo btns">
                <button class="volver-pag2 volver">Anterior</button>
                <button class="adelante-pag4 adelante">Siguiente</button>
              </div>
            </div>
            <?php $__env->stopSection(); ?>

           <?php $__env->startSection('pagina4'); ?>->
            <div class="pagina-ins movPag">
              <div class="campo btns">
                <button class="volver-pag3 volver">Anterior</button>
                <button class="adelante-pag5 adelante">Siguiente</button>
              </div>
            </div>
            <?php $__env->stopSection(); ?>

            <?php $__env->startSection('pagina5'); ?>>
            <div class="pagina-ins movPag">
              <div class="campo btns">
                <button class="volver-pag4 volver">Anterior</button>
                <button class="Fin adelante">Registrar</button>
              </div>
            </div>
            <?php $__env->stopSection(); ?>

          </form>
        </div>
      </div>
    </div>    
    
     <?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__componentOriginalc254754b9d5db91d5165876f9d051922ca0066f4)): ?>
<?php $component = $__componentOriginalc254754b9d5db91d5165876f9d051922ca0066f4; ?>
<?php unset($__componentOriginalc254754b9d5db91d5165876f9d051922ca0066f4); ?>
<?php endif; ?>
 <?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__componentOriginalc254754b9d5db91d5165876f9d051922ca0066f4)): ?>
<?php $component = $__componentOriginalc254754b9d5db91d5165876f9d051922ca0066f4; ?>
<?php unset($__componentOriginalc254754b9d5db91d5165876f9d051922ca0066f4); ?>
<?php endif; ?><?php /**PATH C:\xampp\htdocs\Eva\ProyectoEva\resources\views/practica1.blade.php ENDPATH**/ ?>