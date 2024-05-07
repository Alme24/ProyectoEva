const hero = document.querySelector(".hero-image");
const bthPopup = document.querySelector(".bthLogin-popup");
const iconClose = document.querySelector(".icon-close");

bthPopup.addEventListener("click", () => hero.classList.add("active-popup"));
iconClose.addEventListener("click", () =>
      hero.classList.remove("active-popup")
);

const showPwd = () => {
      let input = document.querySelector("#pwd");
      if (input.type === "password") {
            input.type = "text";
      } else {
            input.type = "password";
      }
};
/* validaciones */

const emailField = document.querySelector("[name=email]");
const passwordField = document.querySelector("[name=password]");

const setErrors = (message, field, isError = true) => {
      if (isError) {
            field.classList.add("invalid");
            field.nextElementSibling.classList.add("errorMensaje");
            field.nextElementSibling.innerText = message;
      } else {
            field.classList.remove("invalid");
            field.nextElementSibling.classList.remove("errorMensaje");
            field.nextElementSibling.innerText = "";
      }
};

const validateEmptyField = (message, e) => {
      const field = e.target;
      const fielValue = e.target.value;
      const label = field.nextElementSibling.nextElementSibling;
      if (fielValue.trim().length == 0) {
            setErrors(message, field);
            label.style.top = "";
      } else {
            setErrors("", field, false);
            label.style.top = "-5px";
      }
};

const validateEmailFormat = (e) => {
      const field = e.target;
      const fielValue = e.target.value;
      const regex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
      if (fielValue.trim().length > 5 && !regex.test(fielValue)) {
            setErrors("Introdusca un Correo valido", field);
      } else {
            setErrors("", field, false);
      }
};

const validatePasswordLength = (e) => {
      const field = e.target;
      const fieldValue = e.target.value;
      const minLength = 5;
      const maxLength = 12;

      if (
            fieldValue.trim().length < minLength ||
            fieldValue.trim().length > maxLength
      ) {
            setErrors(
                  `La contraseña debe tener entre ${minLength} y ${maxLength} caracteres`,
                  field
            );
      } else {
            setErrors("", field, false);
      }
};

emailField.addEventListener("blur", (e) =>
      validateEmptyField("Email es requerido", e)
);
passwordField.addEventListener("blur", (e) =>
      validateEmptyField("Contraseña es requerido", e)
);

emailField.addEventListener("input", validateEmailFormat);
passwordField.addEventListener("input", (e) => validatePasswordLength(e));

/* carrucel */

const galleryContainer = document.querySelector(`.gallery-container`);
const galleryControlsContainer = document.querySelector(`.gallery-controls`);
const galleryControls = [`anterior`, `siguiente`];
const galleryItems = document.querySelectorAll(`.gallery-item`);
class Carousel {
      constructor(container, items, controls) {
            this.carouselContainer = container;
            this.carouselControls = controls;
            this.carouselArray = [...items];
      }
      updateGallery() {
            this.carouselArray.forEach((el) => {
                  el.classList.remove(`gallery-item-1`);
                  el.classList.remove(`gallery-item-2`);
                  el.classList.remove(`gallery-item-3`);
                  el.classList.remove(`gallery-item-4`);
                  el.classList.remove(`gallery-item-5`);
            });
            this.carouselArray.slice(0, 5).forEach((el, i) => {
                  el.classList.add(`gallery-item-${i + 1}`);
            });
      }
      setCurrentState(direction) {
            if (direction.className == `gallery-controls-anterior`) {
                  this.carouselArray.unshift(this.carouselArray.pop());
            } else {
                  this.carouselArray.push(this.carouselArray.shift());
            }
            this.updateGallery();
      }
      setControls() {
            this.carouselControls.forEach((control) => {
                  galleryControlsContainer.appendChild(
                        document.createElement(`button`)
                  ).className = `gallery-controls-${control}`;
                  document.querySelector(`.gallery-controls-${control}`).innerText =
                        control;
            });
      }

      useControls() {
            const triggers = [...galleryControlsContainer.childNodes];
            triggers.forEach((control) => {
                  control.addEventListener(`click`, (e) => {
                        e.preventDefault();
                        this.setCurrentState(control);
                  });
            });
      }
}

const exampleCarousel = new Carousel(
      galleryContainer,
      galleryItems,
      galleryControls
);

exampleCarousel.setControls();
exampleCarousel.useControls();
