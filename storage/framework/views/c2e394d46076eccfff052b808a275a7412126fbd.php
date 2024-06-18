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
            <!--  pagina-ins 1 -->
            <div class="pagina-ins movPag">
              <div class="titulo-form">Registro de Equipo</div>
           
              <div class="campo btns sigPag">
                <button>Volver</button>
                <button class="adelante">Siguiente</button>
              </div>
            </div>
            <!--  pagina-ins 2 -->
            <div class="pagina-ins movPag">
          
              <div class="campo btns">
                <button class="volver-pag1 volver">Anterior</button>
                <button class="adelante-pag3 adelante">Siguiente</button>
              </div>
            </div>
            <!--  pagina-ins 3 -->
            <div class="pagina-ins movPag">

              <div class="campo btns">
                <button class="volver-pag2 volver">Anterior</button>
                <button class="adelante-pag4 adelante">Siguiente</button>
              </div>
            </div>
            <!--  pagina-ins 4 -->
            <div class="pagina-ins movPag">
              <div class="campo btns">
                <button class="volver-pag3 volver">Anterior</button>
                <button class="adelante-pag5 adelante">Siguiente</button>
              </div>
            </div>
            <!--  pagina-ins 5 -->
            <div class="pagina-ins movPag">
              <div class="campo btns">
                <button class="volver-pag4 volver">Anterior</button>
                <button class="Fin adelante">Registrar</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>    
<script src="<?php echo e(asset('js/practica.js')); ?>"></script

 <?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__componentOriginalc254754b9d5db91d5165876f9d051922ca0066f4)): ?>
<?php $component = $__componentOriginalc254754b9d5db91d5165876f9d051922ca0066f4; ?>
<?php unset($__componentOriginalc254754b9d5db91d5165876f9d051922ca0066f4); ?>
<?php endif; ?><?php /**PATH C:\xampp\htdocs\Eva\ProyectoEva\resources\views/practica.blade.php ENDPATH**/ ?>