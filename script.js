const menuToggle = document.querySelector("#menuToggle");
const nav = document.querySelector("#nav");
const modal = document.querySelector("#carModal");
const modalTitle = document.querySelector("#modalTitle");
const modalText = document.querySelector("#modalText");
const modalClose = document.querySelector("#modalClose");

// Atualiza o ano automaticamente no rodapé
document.querySelector("#year").textContent =
  new Date().getFullYear();

// Menu para celular
menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");

  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "×" : "☰";
});

// Fecha o menu ao clicar em uma seção
nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");

    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";

    nav.querySelectorAll("a").forEach((item) => {
      item.classList.remove("active");
    });

    link.classList.add("active");
  });
});

// Informações dos carros
const descriptions = {
  "Porsche 911":
    "Um ícone de engenharia e design. O Porsche 911 combina linhas clássicas, agilidade e uma experiência de condução envolvente.",

  "Lamborghini":
    "Design provocante, proporções marcantes e personalidade inconfundível. A Lamborghini representa ousadia em cada detalhe.",

  "Ferrari":
    "Uma história construída nas pistas e traduzida em carros emocionantes, com design italiano e espírito competitivo."
};

// Abre a janela de informações de cada modelo
document.querySelectorAll("[data-car]").forEach((button) => {
  button.addEventListener("click", () => {
    const car = button.dataset.car;

    modalTitle.textContent = car;

    modalText.textContent =
      descriptions[car] ||
      "Explore o design, a história e a personalidade deste ícone automotivo.";

    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");

    document.body.style.overflow = "hidden";

    modalClose.focus();
  });
});

// Fecha a janela de informações
function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");

  document.body.style.overflow = "";
}

modalClose.addEventListener("click", closeModal);

// Fecha ao clicar fora da janela
modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModal();
  }
});

// Fecha ao pressionar ESC
document.addEventListener("keydown", (event) => {
  if (
    event.key === "Escape" &&
    modal.classList.contains("open")
  ) {
    closeModal();
  }
});

// Fecha a janela ao ir para a seção de contato
document.querySelector("#modalContact").addEventListener(
  "click",
  closeModal
);