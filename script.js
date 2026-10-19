/* =========================================================
   DRIVE ZONE — CONFIGURAÇÕES DA LOJA
   Preencha os contatos reais antes de publicar.
   WhatsApp: código do país + DDD + número, somente dígitos.
   Exemplo de formato: 5541999999999
   ========================================================= */

const STORE = {
  name: "DRIVE ZONE",
  email: "contato@drivezone.com.br",
  whatsapp: "" // Coloque aqui o número real da loja.
};

const products = [
  {
    id: 1,
    name: "Capa para volante esportiva",
    category: "Interior",
    label: "MAIS PROCURADO",
    price: 49.90,
    description: "Acabamento esportivo para renovar o interior do veículo. Confira o diâmetro do volante antes da compra.",
    image: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=800&q=85"
  },
  {
    id: 2,
    name: "Tapete automotivo",
    category: "Interior",
    label: "ESSENCIAL",
    price: 89.90,
    description: "Tapetes para ajudar a proteger o piso do veículo. Consulte medidas, fixação e compatibilidade.",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=85"
  },
  {
    id: 3,
    name: "Organizador para banco",
    category: "Interior",
    label: "PRATICIDADE",
    price: 39.90,
    description: "Organizador para manter pequenos objetos acessíveis e deixar o interior mais organizado.",
    image: "https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=800&q=85"
  },
  {
    id: 4,
    name: "Manopla de câmbio esportiva",
    category: "Interior",
    label: "ESTILO",
    price: 59.90,
    description: "Acessório de acabamento esportivo. Verifique o encaixe e a compatibilidade com o câmbio do seu veículo.",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=800&q=85"
  },
  {
    id: 5,
    name: "Fita LED para interior",
    category: "Iluminação",
    label: "PERSONALIZAÇÃO",
    price: 69.90,
    description: "Iluminação decorativa para o interior. Confira alimentação, instalação e compatibilidade elétrica.",
    image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=800&q=85"
  },
  {
    id: 6,
    name: "Lâmpadas automotivas",
    category: "Iluminação",
    label: "ILUMINAÇÃO",
    price: 79.90,
    description: "Opção para reposição ou atualização da iluminação. Confirme o encaixe, as especificações e as regras aplicáveis ao veículo.",
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=800&q=85"
  },
  {
    id: 7,
    name: "Carregador veicular USB",
    category: "Tecnologia",
    label: "DIA A DIA",
    price: 34.90,
    description: "Carregador para dispositivos compatíveis durante o trajeto. Confira os conectores e a potência suportada.",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=85"
  },
  {
    id: 8,
    name: "Suporte para celular",
    category: "Tecnologia",
    label: "PRATICIDADE",
    price: 29.90,
    description: "Suporte para posicionar o celular com praticidade. Escolha um tipo de fixação compatível com seu painel.",
    image: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&w=800&q=85"
  },
  {
    id: 9,
    name: "Capa para retrovisor",
    category: "Exterior",
    label: "VISUAL",
    price: 79.90,
    description: "Acessório para personalizar os retrovisores. Confira o formato e as medidas do modelo do veículo.",
    image: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=800&q=85"
  },
  {
    id: 10,
    name: "Friso decorativo",
    category: "Exterior",
    label: "DETALHES",
    price: 44.90,
    description: "Detalhe decorativo para acabamento externo. Confirme as medidas e a superfície indicada para aplicação.",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=800&q=85"
  },
  {
    id: 11,
    name: "Pano de microfibra",
    category: "Limpeza",
    label: "CUIDADOS",
    price: 19.90,
    description: "Pano macio para ajudar na limpeza e secagem de superfícies automotivas.",
    image: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=800&q=85"
  },
  {
    id: 12,
    name: "Kit de escovas automotivas",
    category: "Limpeza",
    label: "KIT",
    price: 39.90,
    description: "Escovas para auxiliar na limpeza de áreas de difícil acesso. Utilize conforme a superfície e as orientações do fabricante.",
    image: "https://images.unsplash.com/photo-1605164599901-0b1f7b4f6e3b?auto=format&fit=crop&w=800&q=85"
  }
];

/* ELEMENTOS */

const $ = (selector) => document.querySelector(selector);

const productGrid = $("#productGrid");
const searchInput = $("#searchInput");
const productCount = $("#productCount");
const emptyMessage = $("#emptyMessage");

const cartDrawer = $("#cartDrawer");
const cartBackdrop = $("#cartBackdrop");
const cartItems = $("#cartItems");
const cartCount = $("#cartCount");
const cartTitleCount = $("#cartTitleCount");
const cartSubtotal = $("#cartSubtotal");
const cartEmpty = $("#cartEmpty");
const cartFooter = $("#cartFooter");

const checkoutModal = $("#checkoutModal");
const checkoutTotal = $("#checkoutTotal");

let selectedCategory = "Todos";
let cart = loadCart();
let toastTimer;

/* FUNÇÕES AUXILIARES */

function money(value) {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });
}

function categoryName(category) {
  const names = {
    Interior: "Acessórios internos",
    Exterior: "Personalização externa",
    Tecnologia: "Tecnologia e utilidades",
    Iluminação: "Som e iluminação",
    Limpeza: "Estética e cuidado"
  };

  return names[category] || category;
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[char]);
}

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2800);
}

function loadCart() {
  try {
    const saved = JSON.parse(localStorage.getItem("driveZoneCart") || "[]");

    if (!Array.isArray(saved)) return [];

    return saved
      .filter(item =>
        products.some(product => product.id === item.id) &&
        Number.isInteger(item.quantity) &&
        item.quantity > 0 &&
        item.quantity <= 99
      )
      .map(item => ({
        id: item.id,
        quantity: item.quantity
      }));
  } catch {
    return [];
  }
}

function saveCart() {
  try {
    localStorage.setItem("driveZoneCart", JSON.stringify(cart));
  } catch {
    // O carrinho continua funcionando durante esta sessão.
  }
}

function cartQuantity() {
  return cart.reduce((total, item) => total + item.quantity, 0);
}

function cartTotal() {
  return cart.reduce((total, item) => {
    const product = products.find(product => product.id === item.id);
    return total + (product ? product.price * item.quantity : 0);
  }, 0);
}

/* CATÁLOGO */

function renderProducts() {
  const term = searchInput.value.trim().toLocaleLowerCase("pt-BR");

  const filtered = products.filter(product => {
    const categoryMatches =
      selectedCategory === "Todos" ||
      product.category === selectedCategory;

    const text = [
      product.name,
      product.description,
      categoryName(product.category)
    ].join(" ").toLocaleLowerCase("pt-BR");

    return categoryMatches && text.includes(term);
  });

  productGrid.innerHTML = filtered.map(product => `
    <article class="product-card">
      <div class="product-photo">
        <img
          src="${escapeHTML(product.image)}"
          alt="${escapeHTML(product.name)}"
          loading="lazy"
          onerror="this.onerror=null;this.src='https://placehold.co/600x500/eeeeee/222222?text=Produto+automotivo';"
        >
        <span class="product-label">${escapeHTML(product.label)}</span>
      </div>
      <div class="product-info">
        <span class="product-category">${escapeHTML(categoryName(product.category))}</span>
        <h3>${escapeHTML(product.name)}</h3>
        <p class="product-description">${escapeHTML(product.description)}</p>
        <div class="product-buy">
          <div class="product-price">
            <span class="price-caption">Preço demonstrativo</span>
            ${money(product.price)}
          </div>
          <button class="add-button" data-add="${product.id}">
            + ADICIONAR
          </button>
        </div>
      </div>
    </article>
  `).join("");

  productCount.textContent = `${filtered.length} produtos`;
  emptyMessage.hidden = filtered.length > 0;
}

function selectCategory(category) {
  selectedCategory = category;

  document.querySelectorAll(".filter").forEach(button => {
    button.classList.toggle("active", button.dataset.category === category);
  });

  renderProducts();
}

productGrid.addEventListener("click", event => {
  const button = event.target.closest("[data-add]");
  if (!button) return;

  addToCart(Number(button.dataset.add));
});

searchInput.addEventListener("input", renderProducts);

document.querySelectorAll(".filter").forEach(button => {
  button.addEventListener("click", () => {
    selectCategory(button.dataset.category);
  });
});

document.querySelectorAll(".category-card").forEach(button => {
  button.addEventListener("click", () => {
    selectCategory(button.dataset.category);
    $("#colecao").scrollIntoView({ behavior: "smooth" });
  });
});

/* CARRINHO */

function addToCart(id) {
  const product = products.find(item => item.id === id);
  if (!product) return;

  const existing = cart.find(item => item.id === id);

  if (existing) {
    if (existing.quantity >= 99) {
      showToast("Limite de quantidade atingido.");
      return;
    }
    existing.quantity += 1;
  } else {
    cart.push({ id, quantity: 1 });
  }

  saveCart();
  renderCart();
  showToast(`${product.name} adicionado à sacola.`);
}

function changeQuantity(id, amount) {
  const item = cart.find(entry => entry.id === id);
  if (!item) return;

  item.quantity += amount;

  if (item.quantity <= 0) {
    cart = cart.filter(entry => entry.id !== id);
  } else if (item.quantity > 99) {
    item.quantity = 99;
    showToast("Limite de quantidade atingido.");
  }

  saveCart();
  renderCart();
}

function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  saveCart();
  renderCart();
  showToast("Produto removido da sacola.");
}

function renderCart() {
  const quantity = cartQuantity();
  const total = cartTotal();

  cartCount.textContent = quantity;
  cartTitleCount.textContent = `(${quantity})`;
  cartSubtotal.textContent = money(total);
  checkoutTotal.textContent = money(total);

  cartEmpty.hidden = quantity > 0;
  cartFooter.hidden = quantity === 0;

  cartItems.innerHTML = cart.map(item => {
    const product = products.find(entry => entry.id === item.id);
    if (!product) return "";

    return `
      <article class="cart-item">
        <img src="${escapeHTML(product.image)}" alt="${escapeHTML(product.name)}">
        <div>
          <h3>${escapeHTML(product.name)}</h3>
          <div class="cart-item-price">${money(product.price * item.quantity)}</div>
          <div class="quantity-controls">
            <button data-minus="${product.id}" aria-label="Diminuir quantidade">−</button>
            <span>${item.quantity}</span>
            <button data-plus="${product.id}" aria-label="Aumentar quantidade">+</button>
          </div>
        </div>
        <button class="remove-item" data-remove="${product.id}" aria-label="Remover ${escapeHTML(product.name)}">×</button>
      </article>
    `;
  }).join("");
}

cartItems.addEventListener("click", event => {
  const minus = event.target.closest("[data-minus]");
  const plus = event.target.closest("[data-plus]");
  const remove = event.target.closest("[data-remove]");

  if (minus) changeQuantity(Number(minus.dataset.minus), -1);
  if (plus) changeQuantity(Number(plus.dataset.plus), 1);
  if (remove) removeFromCart(Number(remove.dataset.remove));
});

function openCart() {
  cartDrawer.classList.add("open");
  cartBackdrop.classList.add("show");
  cartDrawer.setAttribute("aria-hidden", "false");
  document.body.classList.add("locked");
}

function closeCart() {
  cartDrawer.classList.remove("open");
  cartBackdrop.classList.remove("show");
  cartDrawer.setAttribute("aria-hidden", "true");
  document.body.classList.remove("locked");
}

$("#openCart").addEventListener("click", openCart);
$("#closeCart").addEventListener("click", closeCart);
cartBackdrop.addEventListener("click", closeCart);

$("#continueShopping").addEventListener("click", () => {
  closeCart();
  $("#colecao").scrollIntoView({ behavior: "smooth" });
});

/* FINALIZAÇÃO DO PEDIDO */

$("#checkoutButton").addEventListener("click", () => {
  if (cart.length === 0) {
    showToast("Adicione um produto antes de continuar.");
    return;
  }

  checkoutTotal.textContent = money(cartTotal());
  checkoutModal.classList.add("open");
  checkoutModal.setAttribute("aria-hidden", "false");
});

function closeCheckout() {
  checkoutModal.classList.remove("open");
  checkoutModal.setAttribute("aria-hidden", "true");
}

$("#closeCheckout").addEventListener("click", closeCheckout);

checkoutModal.addEventListener("click", event => {
  if (event.target === checkoutModal) closeCheckout();
});

function buildOrderMessage(customer) {
  const lines = cart.map(item => {
    const product = products.find(entry => entry.id === item.id);
    return `${item.quantity} x ${product.name} — ${money(product.price * item.quantity)}`;
  });

  return [
    `PEDIDO — ${STORE.name}`,
    "",
    ...lines,
    "",
    `Subtotal demonstrativo: ${money(cartTotal())}`,
    "Frete: a confirmar",
    "",
    `Nome: ${customer.customerName}`,
    `E-mail: ${customer.customerEmail}`,
    `Telefone: ${customer.customerPhone}`,
    `Cidade/Estado: ${customer.customerCity}`,
    `Observações: ${customer.notes || "Nenhuma"}`,
    "",
    "Gostaria de confirmar disponibilidade, compatibilidade, frete e formas de pagamento."
  ].join("\n");
}

function openEmail(subject, body, recipient = STORE.email) {
  const url = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = url;
}

$("#checkoutForm").addEventListener("submit", event => {
  event.preventDefault();

  if (cart.length === 0) {
    closeCheckout();
    showToast("Sua sacola está vazia.");
    return;
  }

  const formData = new FormData(event.currentTarget);
  const customer = Object.fromEntries(formData.entries());
  const message = buildOrderMessage(customer);

  if (customer.contactMethod === "WhatsApp" && STORE.whatsapp.trim()) {
    const number = STORE.whatsapp.replace(/\D/g, "");

    if (number.length >= 12 && number.length <= 13) {
      const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
      window.open(url, "_blank", "noopener,noreferrer");
      showToast("Pedido preparado. Confira e envie a mensagem no WhatsApp.");
    } else {
      openEmail("Pedido DRIVE ZONE", message);
      showToast("Configure o número de WhatsApp. Abrimos o e-mail como alternativa.");
    }
  } else {
    openEmail("Pedido DRIVE ZONE", message, customer.customerEmail);
    showToast("Mensagem preparada. Confira o aplicativo de e-mail para enviar.");
  }

  closeCheckout();
});

/* FORMULÁRIO DE CONTATO */

$("#contactForm").addEventListener("submit", event => {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
  const name = formData.get("name");
  const email = formData.get("email");
  const subject = formData.get("subject");
  const message = formData.get("message");

  const body = [
    `Nome: ${name}`,
    `E-mail para resposta: ${email}`,
    `Assunto: ${subject}`,
    "",
    message
  ].join("\n");

  openEmail(`Contato pelo site — ${subject}`, body);
  showToast("Mensagem preparada. Confira seu aplicativo de e-mail.");
});

const whatsappContact = $("#whatsappContact");

function configureWhatsAppLink() {
  const number = STORE.whatsapp.replace(/\D/g, "");

  if (number.length >= 12 && number.length <= 13) {
    whatsappContact.href =
      `https://wa.me/${number}?text=${encodeURIComponent("Olá! Gostaria de informações sobre os produtos da DRIVE ZONE.")}`;
  } else {
    whatsappContact.href = "#";
    whatsappContact.addEventListener("click", event => {
      event.preventDefault();
      showToast("Adicione o número oficial da loja nas configurações do script.js.");
    });
  }
}

/* MENU MOBILE E TECLADO */

const menuToggle = $("#menuToggle");
const nav = $("#nav");

menuToggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
});

nav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    closeCart();
    closeCheckout();
  }
});

/* INICIALIZAÇÃO */

configureWhatsAppLink();
renderProducts();
renderCart();