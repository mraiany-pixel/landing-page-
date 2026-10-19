// DADOS DOS PRODUTOS
const products = [
  { id: 1, name: "Jogo de Rodas Liga Leve Aro 18\" Sports", category: "rodas", price: 3890.00, tag: "Mais Vendido", quality: "Garantia de 3 Anos • Alumínio Injetado", img: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=600&auto=format&fit=crop" },
  { id: 2, name: "Escapamento Esportivo Performance Inox", category: "rodas", price: 1450.00, tag: "Alta Ronco", quality: "Aço Inox 304 • Plug and Play", img: "https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=600&auto=format&fit=crop" },
  { id: 3, name: "Película Nanocerâmica G05 Termo Rejeição", category: "películas", price: 680.00, tag: "Premium", quality: "Proteção UV 99% • Rejeição Térmica", img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=600&auto=format&fit=crop" },
  { id: 4, name: "Envelopamento All Black Satin Fosco", category: "películas", price: 2900.00, tag: "Custom", quality: "Vinil Importado • Proteção de Pintura", img: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=600&auto=format&fit=crop" },
  { id: 5, name: "Central Multimídia Android 4K 10\"", category: "interiores", price: 1890.00, tag: "Lançamento", quality: "Apple CarPlay & Android Auto Sem Fio", img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=600&auto=format&fit=crop" },
  { id: 6, name: "Kit Fita LED Neon Neons Painel e Assoalho", category: "interiores", price: 299.00, tag: "Estilo", quality: "Controle por Aplicativo / Bluetooth", img: "https://images.unsplash.com/photo-1508974239320-0a029497e820?q=80&w=600&auto=format&fit=crop" },
  { id: 7, name: "Alinhamento 3D + Balanceamento Computadorizado", category: "serviços", price: 180.00, tag: "Oficina", quality: "Aferição de Precisão Laser", img: "https://images.unsplash.com/photo-1486006920555-c77dce18193b?q=80&w=600&auto=format&fit=crop" },
  { id: 8, name: "Capa de Volante em Couro Esportivo Costurado", category: "interiores", price: 140.00, tag: "Conforto", quality: "Acabamento em Linha Vermelha Premium", img: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?q=80&w=600&auto=format&fit=crop" }
];

let cart = [];

// CARREGAR PRODUTOS NA TELA
function renderProducts(items) {
  const container = document.getElementById('products-container');
  if (!container) return;
  
  container.innerHTML = '';

  items.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <span class="product-tag">${product.tag}</span>
      <img src="${product.img}" alt="${product.name}" class="product-img">
      <div class="product-info">
        <span class="product-category">${product.category}</span>
        <h3 class="product-title">${product.name}</h3>
        <div class="product-quality"><i class="fa-solid fa-circle-check" style="color: var(--red-primary);"></i> ${product.quality}</div>
        <div class="product-price">
          R$ ${product.price.toLocaleString('pt-BR', {minimumFractionDigits: 2})}
          <span>Em até 10x sem juros</span>
        </div>
        <button class="btn-primary btn-block" onclick="addToCart(${product.id})">
          <i class="fa-solid fa-cart-plus"></i> Adicionar ao Carrinho
        </button>
      </div>
    `;
    container.appendChild(card);
  });
}

// ADICIONAR AO CARRINHO
function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (product) {
    cart.push(product);
    updateCart();
    toggleCart(true);
  }
}

// REMOVER DO CARRINHO
function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
}

// ATUALIZAR INTERFACE DO CARRINHO
function updateCart() {
  document.getElementById('cart-count').innerText = cart.length;
  const container = document.getElementById('cart-items-container');
  container.innerHTML = '';

  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;
    const itemEl = document.createElement('div');
    itemEl.className = 'cart-item';
    itemEl.innerHTML = `
      <img src="${item.img}" class="cart-item-img" alt="${item.name}">
      <div class="cart-item-details">
        <div class="cart-item-title">${item.name}</div>
        <div class="cart-item-price">R$ ${item.price.toLocaleString('pt-BR', {minimumFractionDigits: 2})}</div>
        <button class="cart-remove-btn" onclick="removeFromCart(${index})">Remover</button>
      </div>
    `;
    container.appendChild(itemEl);
  });

  document.getElementById('cart-total-price').innerText = `R$ ${total.toLocaleString('pt-BR', {minimumFractionDigits: 2})}`;
}

// ABRIR/FECHAR CARRINHO
function toggleCart(forceOpen = false) {
  const drawer = document.getElementById('cart-drawer');
  const overlay = document.getElementById('overlay');
  if (forceOpen || !drawer.classList.contains('open')) {
    drawer.classList.add('open');
    overlay.classList.add('active');
  } else {
    drawer.classList.remove('open');
    overlay.classList.remove('active');
  }
}

// CALCULADORA DE PELÍCULAS
function calculateFilm() {
  const car = parseFloat(document.getElementById('car-type').value);
  const film = parseFloat(document.getElementById('film-type').value);
  const coverage = parseFloat(document.getElementById('coverage-type').value);
  const total = car * film * coverage;
  document.getElementById('calc-total').innerText = `R$ ${total.toLocaleString('pt-BR', {minimumFractionDigits: 2})}`;
}

// ADICIONAR PELÍCULA CALCULADA AO CARRINHO
function addCustomFilmToCart() {
  const priceText = document.getElementById('calc-total').innerText.replace('R$ ', '').replace('.', '').replace(',', '.');
  const customProduct = {
    id: Date.now(),
    name: "Serviço Personalizado de Insulfilm Nanocerâmico",
    category: "películas",
    price: parseFloat(priceText),
    tag: "Personalizado",
    quality: "Instalação Certificada Drive Zone",
    img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=600&auto=format&fit=crop"
  };
  cart.push(customProduct);
  updateCart();
  toggleCart(true);
}

// FINALIZAR PEDIDO NO WHATSAPP
function sendOrderWhatsApp() {
  if (cart.length === 0) {
    alert("Seu carrinho está vazio!");
    return;
  }
  let text = "Olá! Gostaria de finalizar o meu pedido na Drive Zone:\n\n";
  let total = 0;
  cart.forEach((item, i) => {
    text += `${i + 1}. ${item.name} - R$ ${item.price.toLocaleString('pt-BR', {minimumFractionDigits: 2})}\n`;
    total += item.price;
  });
  text += `\n*Total: R$ ${total.toLocaleString('pt-BR', {minimumFractionDigits: 2})}*`;
  window.open(`https://wa.me/5541999999999?text=${encodeURIComponent(text)}`, '_blank');
}

// EVENT LISTENERS E INICIALIZAÇÃO
document.addEventListener('DOMContentLoaded', () => {
  renderProducts(products);

  // Botões de abrir/fechar carrinho
  document.getElementById('cart-toggle-btn').addEventListener('click', () => toggleCart());
  document.getElementById('close-cart-btn').addEventListener('click', () => toggleCart());
  document.getElementById('overlay').addEventListener('click', () => toggleCart());

  // Eventos das abas de categorias
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      const category = e.target.getAttribute('data-category');
      
      if (category === 'all') {
        renderProducts(products);
      } else {
        const filtered = products.filter(p => p.category === category);
        renderProducts(filtered);
      }
    });
  });

  // Eventos da calculadora
  document.getElementById('car-type').addEventListener('change', calculateFilm);
  document.getElementById('film-type').addEventListener('change', calculateFilm);
  document.getElementById('coverage-type').addEventListener('change', calculateFilm);
  document.getElementById('add-film-btn').addEventListener('click', addCustomFilmToCart);

  // Finalizar no WhatsApp
  document.getElementById('checkout-whatsapp-btn').addEventListener('click', sendOrderWhatsApp);

  // Form de agendamento
  document.getElementById('appointment-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert("Agendamento pré-confirmado! Redirecionando para o nosso WhatsApp.");
    window.open("https://wa.me/5541999999999?text=Olá!%20Gostaria%20de%20confirmar%20meu%20agendamento%20de%20oficina.", "_blank");
  });
});