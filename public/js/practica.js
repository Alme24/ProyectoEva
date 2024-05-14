document.addEventListener("DOMContentLoaded", function () {
    const movPag = document.querySelector(".movPag");
    const btn_adelante2 = document.querySelector(".sigPag");

    const btn_atras1 = document.querySelector(".volver-pag1");
    const btn_adelante3 = document.querySelector(".adelante-pag3");
    const btn_atras2 = document.querySelector(".volver-pag2");
    const btn_adelante4 = document.querySelector(".adelante-pag4");
    const btn_atras3 = document.querySelector(".volver-pag3");
    const btn_adelante5 = document.querySelector(".adelante-pag5");
    const btn_atras4 = document.querySelector(".volver-pag4");
    const btn_final = document.querySelector(".Fin");

    const progressText = document.querySelectorAll(".paso p");
    const num = document.querySelectorAll(".paso .num");

    let max = 5;
    let cont = 0;

    // Añadir clase 'active' al primer número
    num[0].classList.add("active");

    function removeActiveFromButtons() {
        num.forEach((button) => {
            button.classList.remove("active");
        });
    }

    btn_adelante2.addEventListener("click", function (e) {
        e.preventDefault();
        movPag.style.marginLeft = "-20%";
        removeActiveFromButtons();
        num[1].classList.add("active");
    });

    btn_adelante3.addEventListener("click", function (e) {
        e.preventDefault();
        movPag.style.marginLeft = "-40%";
        removeActiveFromButtons();
        num[2].classList.add("active");
    });

    btn_adelante4.addEventListener("click", function (e) {
        e.preventDefault();
        movPag.style.marginLeft = "-60%";
        removeActiveFromButtons();
        num[3].classList.add("active");
    });

    btn_adelante5.addEventListener("click", function (e) {
        e.preventDefault();
        movPag.style.marginLeft = "-80%";
        removeActiveFromButtons();
        num[4].classList.add("active");
    });

    btn_final.addEventListener("click", function (e) {
        e.preventDefault();
    });

    btn_atras1.addEventListener("click", function (e) {
        e.preventDefault();
        movPag.style.marginLeft = "0%";
        removeActiveFromButtons();
        num[0].classList.add("active");
        cont = 0;
    });

    btn_atras2.addEventListener("click", function (e) {
        e.preventDefault();
        movPag.style.marginLeft = "-20%";
        removeActiveFromButtons();
        num[1].classList.add("active");
        cont = 1;
    });

    btn_atras3.addEventListener("click", function (e) {
        e.preventDefault();
        movPag.style.marginLeft = "-40%";
        removeActiveFromButtons();
        num[2].classList.add("active");
        cont = 2;
    });

    btn_atras4.addEventListener("click", function (e) {
        e.preventDefault();
        movPag.style.marginLeft = "-60%";
        removeActiveFromButtons();
        num[3].classList.add("active");
        cont = 3;
    });
});
