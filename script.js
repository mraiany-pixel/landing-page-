const menuToggle = document.querySelector("#menuToggle");
const nav = document.querySelector("#nav");

const productCards = [
  ...document.querySelectorAll(".product-card")
];

const filters = [...document.querySelectorAll(".filter")];
const searchInput = document.querySelector("#productSearch");
const emptyState = document.querySelector("#emptyState");

const modal = document.querySelector("#productModal");
const modalTitle = document.querySelector("#modalTitle");
const modalDescription = document.querySelector("#modalDescription");
const modalClose = document.querySelector("#modalClose");
const modalContact = document.querySelector("#modalContact");

const year = document.querySelector("#year");

if (year) {
  year.textContent = new Date().getFullYear();
}

let selectedCategory = "Todos";

const productDescriptions = {
  "Organizador de console":
    "Organizador para manter seus objetos essenciais em ordem. Consulte as medidas e a compatibilidade com seu veículo.",

  "Iluminação ambiente LED":
    "Iluminação para personalizar o interior do carro com um visual moderno. Consulte a instalação e a compatibilidade.",

  "Tapete automotivo":
    "Acessório que ajuda a proteger o piso do veículo contra sujeira e desgaste. Verifique o modelo compatível.",

  "Detalhes externos":
    "Acessórios para valorizar o visual externo do seu carro. Consulte as opções disponíveis.",

  "Kit de personalização":
    "Detalhes automotivos para deixar o veículo com a sua identidade. Os itens dependem do kit disponível.",

  "Acessório de áudio":
    "Acessórios para complementar a experiência sonora no veículo. Consulte as especificações e a instalação."
};

// FILTROS E BUSCA DE PRODUTOS
function applyFilters() {
  const term = searchInput
    ? searchInput.value.trim().toLowerCase()
    : "";

  let count = 0;

  productCards.forEach((card) => {
    const category = card.dataset.category || "";
    const name = card.dataset.name || "";
    const text = card.textContent || "";

    const categoryMatches =
      selectedCategory === "Todos" ||
      category === selectedCategory;

    const searchMatches =
      !term ||
      name.toLowerCase().includes(term) ||
      text.toLowerCase().includes(term);

    const visible = categoryMatches && searchMatches;

    card.hidden = !visible;

    if (visible) {
      count++;
    }
  });

  if (emptyState) {
    emptyState.hidden = count !== 0;
  }
}

// CLIQUES NOS FILTROS
filters.forEach((button) => {
  button.addEventListener("click", () => {
    selectedCategory = button.dataset.filter || "Todos";

    filters.forEach((filter) => {
      filter.classList.toggle("active", filter === button);
    });

    applyFilters();
  });
});

// CAMPO DE PESQUISA
if (searchInput) {
  searchInput.addEventListener("input", applyFilters);
}

// CATEGORIAS DA PÁGINA INICIAL
document.querySelectorAll("[data-category-link]").forEach((link) => {
  link.addEventListener("click", () => {
    selectedCategory = link.dataset.categoryLink || "Todos";

    filters.forEach((filter) => {
      filter.classList.toggle(
        "active",
        filter.dataset.filter === selectedCategory
      );
    });

    applyFilters();
  });
});

// ABRIR DETALHES DO PRODUTO
function openModal(name) {
  if (!modal || !modalTitle || !modalDescription) {
    return;
  }

  modalTitle.textContent = name;

  modalDescription.textContent =
    productDescriptions[name] ||
    "Entre em contato com a loja para consultar detalhes, disponibilidade e compatibilidade.";

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";

  if (modalClose) {
    modalClose.focus();
  }
}

// FECHAR DETALHES DO PRODUTO
function closeModal() {
  if (!modal) {
    return;
  }

  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

// BOTÕES DOS PRODUTOS
document.querySelectorAll("[data-product]").forEach((button) => {
  button.addEventListener("click", () => {
    openModal(button.dataset.product || "Produto");
  });
});

if (modalClose) {
  modalClose.addEventListener("click", closeModal);
}

// FECHAR CLICANDO FORA DA JANELA
if (modal) {
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });
}

// FECHAR COM A TECLA ESC
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal();
  }
});

// BOTÃO DE CONTATO DA JANELA
if (modalContact) {
  modalContact.addEventListener("click", closeModal);
}

// MENU PARA CELULARES
if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");

    menuToggle.setAttribute(
      "aria-expanded",
      String(isOpen)
    );

    menuToggle.textContent = isOpen ? "×" : "☰";
  });

  // FECHAR MENU AO CLICAR EM UM LINK
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
}

// INICIAR CATÁLOGO
applyFilters();