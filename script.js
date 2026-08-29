// =========================
// MENU MOBILE
// =========================

const menuButton = document.getElementById("menu-button");
const navMenu = document.getElementById("nav-menu");

menuButton.addEventListener("click", function () {

    navMenu.classList.toggle("active");

});


// =========================
// BOTÃO PRINCIPAL
// =========================

const actionButton = document.getElementById("action-button");
const message = document.getElementById("message");

actionButton.addEventListener("click", function () {

    message.textContent =
        "Excelente! Você deu o primeiro passo. 🚀";

    actionButton.textContent =
        "Vamos começar!";

});


// =========================
// BOTÃO SOBRE
// =========================

const learnButton = document.getElementById("learn-button");

learnButton.addEventListener("click", function () {

    alert(
        "Prepare-se para aprender, criar e experimentar!"
    );

});
