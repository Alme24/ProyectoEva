<?php if (isset($component)) { $__componentOriginalc254754b9d5db91d5165876f9d051922ca0066f4 = $component; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'components.app-plantilla','data' => []] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? (array) $attributes->getIterator() : [])); ?>
<?php $component->withName('app-plantilla'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag && $constructor = (new ReflectionClass(Illuminate\View\AnonymousComponent::class))->getConstructor()): ?>
<?php $attributes = $attributes->except(collect($constructor->getParameters())->map->getName()->all()); ?>
<?php endif; ?>
<?php $component->withAttributes([]); ?>
 <?php $__env->startSection('title', 'NOTAS MUSICALES'); ?>
      <div class="carrucel">
        <div class="gallery">
          <div class="gallery-container">
            <img
              class="gallery-item gallery-item-1"
              src="<?php echo e(asset('imags/do.jpg')); ?>"
              data-index="1"
            />
            <img
              class="gallery-item gallery-item-2"
              src="<?php echo e(asset('imags/re.png')); ?>"
              data-index="2"
            />
            <img
              class="gallery-item gallery-item-3"
              src="<?php echo e(asset('imags/do.jpg')); ?>"
              data-index="3"
            />
            <img
              class="gallery-item gallery-item-4"
              src="<?php echo e(asset('imags/re.png')); ?>"
              data-index="4"
            />
            <img
              class="gallery-item gallery-item-5"
              src="<?php echo e(asset('imags/mii.jpg')); ?>"
              data-index="5"
            />
            <img
              class="gallery-item gallery-item-6"
              src="<?php echo e(asset('imags/do.jpg')); ?>"
              data-index="6"
            />
          </div>
          <div class="gallery-controls"></div>
        </div>
      </div>
    </div>

    <div class="hero-image">
      <div class="hero-opa">
        <div class="wrapper">
          <span class="icon-close">
            <ion-icon name="close"></ion-icon>
          </span>
          <div class="form-box login">
            <h2>Iniciar sesión</h2>
            <form action="#">
              <div class="input-box">
                <span class="icon">
                  <ion-icon name="mail"></ion-icon>
                </span>
                <input type="email" name="email" required />
                <div></div>
                <label>Correo electrónico</label>
              </div>
              <div class="input-box">
                <span class="icon">
                  <ion-icon name="lock-closed"></ion-icon>
                </span>
                <input type="password" name="password" id="pwd" required />
                <div></div>
                <label>Contraseña</label>
              </div>
              <div class="remember-forgot">
                <label for=""
                  ><input type="checkbox" onclick="showPwd()" /> Mostrar
                  contraseña</label
                >
              </div>
              <button type="submit" class="bth">Iniciar sesión</button>
              <div class="login-register">
                <p>
                  ¿No tienes una cuenta?
                  <a href="#" class="register-link">Registrate</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>

    <script src="<?php echo e(asset('js/home.js')); ?>"></script>
   <?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__componentOriginalc254754b9d5db91d5165876f9d051922ca0066f4)): ?>
<?php $component = $__componentOriginalc254754b9d5db91d5165876f9d051922ca0066f4; ?>
<?php unset($__componentOriginalc254754b9d5db91d5165876f9d051922ca0066f4); ?>
<?php endif; ?><?php /**PATH C:\xampp\htdocs\Eva\ProyectoEva\resources\views/home.blade.php ENDPATH**/ ?>