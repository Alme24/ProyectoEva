<?php if (isset($component)) { $__componentOriginalc254754b9d5db91d5165876f9d051922ca0066f4 = $component; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'components.app-plantilla','data' => []] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? (array) $attributes->getIterator() : [])); ?>
<?php $component->withName('app-plantilla'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag && $constructor = (new ReflectionClass(Illuminate\View\AnonymousComponent::class))->getConstructor()): ?>
<?php $attributes = $attributes->except(collect($constructor->getParameters())->map->getName()->all()); ?>
<?php endif; ?>
<?php $component->withAttributes([]); ?>
   <?php $__env->startSection('title', 'APRENDE A TOCAR EL PIANO'); ?>

    <div class="piano-table">
      <div class="piano">
      <header>
        <h2>MUSINGO PIANO</h2>
        <div class="column volume-slider">
          <span>Volume</span
          ><input type="range" min="0" max="1" value="0.5" step="any" />
        </div>
        <div class="column keys-checkbox">
          <span>Show Keys</span><input type="checkbox" checked />
        </div>
      </header>
      <ul class="piano-keys">
        <li class="key white" data-key="a"><span>a</span></li>
        <li class="key black" data-key="w"><span>w</span></li>
        <li class="key white" data-key="s"><span>s</span></li>
        <li class="key black" data-key="e"><span>e</span></li>
        <li class="key white" data-key="d"><span>d</span></li>
        <li class="key white" data-key="f"><span>f</span></li>
        <li class="key black" data-key="t"><span>t</span></li>
        <li class="key white" data-key="g"><span>g</span></li>
        <li class="key black" data-key="y"><span>y</span></li>
        <li class="key white" data-key="h"><span>h</span></li>
        <li class="key black" data-key="u"><span>u</span></li>
        <li class="key white" data-key="j"><span>j</span></li>
        <li class="key white" data-key="k"><span>k</span></li>
        <li class="key black" data-key="o"><span>o</span></li>
        <li class="key white" data-key="l"><span>l</span></li>
        <li class="key black" data-key="p"><span>p</span></li>
        <li class="key white" data-key=";"><span>;</span></li>
      </ul>
    </div>
    </div>
<script src="<?php echo e(asset('js/piano.js')); ?>"></script>

 <?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__componentOriginalc254754b9d5db91d5165876f9d051922ca0066f4)): ?>
<?php $component = $__componentOriginalc254754b9d5db91d5165876f9d051922ca0066f4; ?>
<?php unset($__componentOriginalc254754b9d5db91d5165876f9d051922ca0066f4); ?>
<?php endif; ?><?php /**PATH C:\xampp\htdocs\Eva\ProyectoEva\resources\views/piano.blade.php ENDPATH**/ ?>