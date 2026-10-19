// DADOS DE PRODUTOS E SERVIÇOS
const products = [
  { id: 1, name: "Jogo de Rodas Esportivas Liga Leve Aro 18\"", category: "rodas", price: 3890.00, tag: "Destaque", desc: "Rodas de alta resistência com acabamento diamantado e design aerodinâmico.", details: "Fabricadas em liga de alumínio injetado de alta performance. Compatível com furação padrão 4x100 e 5x100. Garantia estrutural de 3 anos.", img: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=600&auto=format&fit=crop" },
  { id: 2, name: "Escapamento Esportivo em Inox 304", category: "rodas", price: 1450.00, tag: "Performance", desc: "Ronco esportivo encorpado e ganho real de fluxo de exaustão.", details: "Construção 100% em aço inoxidável com ponteira dupla cortada a laser. Instalação padrão plug and play sem adaptações forçadas.", img: "https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=600&auto=format&fit=crop" },
  { id: 3, name: "Insulfilm Nanocerâmico Avançado G05", category: "películas", price: 680.00, tag: "Proteção UV", desc: "Retenção térmica de até 95% do calor solar com alta visibilidade interna.", details: "Película de altíssima tecnologia que não interfere em sinais de GPS ou celular. Bloqueio de raios UV nocivos e proteção antirrisco.", img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=600&auto=format&fit=crop" },
  { id: 4, name: "Envelopamento Automotivo Satin Fosco", category: "películas", price: 2900.00, tag: "Estética", desc: "Proteção de pintura original com acabamento acetinado de alto padrão.", details: "Vinil importado moldável de alta espessura com tecnologia de canaletas de ar para aplicação livre de bolhas. Durabilidade de até 7 anos.", img: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=600&auto=format&fit=crop" },
  { id: 5, name: "Central Multimídia Android 4K 10 polegadas", category: "internos", price: 1890.00, tag: "Tecnologia", desc: "Sistema fluido com CarPlay e Android Auto sem fio integrados.", details: "Tela antirreflexo IPS de alta definição, processador octa-core, GPS integrado, compatibilidade com comandos de som no volante originais.", img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=600&auto=format&fit=crop" },
  { id: 6, name: "Kit Iluminação LED Neon Ambiente RGB", category: "internos", price: 299.00, tag: "Estilo", desc: "Fitas de fibra óptica com controle total de cores via aplicativo Bluetooth.", details: "Módulos para painel, portas e assoalho com mais de 16 milhões de cores, modo rítmico sincronizado com a música e ajuste de intensidade.", img: "https://images.unsplash.com/photo-1508974239320-0a029497e820?q=80&w=600&auto=format&fit=crop" },
  { id: 7, name: "Capa de Banco Sob Medida em Couro Nappa", category: "capas", price: 1200.00, tag: "Exclusivo", desc: "Proteção e requinte com acabamento em couro nobre e costuras vermelhas.", details: "Modelagem exata para os bancos originais do veículo, mantendo o acionamento de airbags laterais e ajuste elétrico. Toque macio e fácil limpeza.", img: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?q=80&w=600&auto=format&fit=crop" },
  { id: 8, name: "Alinhamento 3D + Balanceamento Computadorizado", category: "oficina", price: 180.00, tag: "Serviço", desc: "Aferição milimétrica com tecnologia a laser de última geração.", details: "Serviço executado por profissionais especializados para garantir estabilidade máxima, direção firme e evitar o desgaste irregular de pneus.", img: "https://images.unsplash.com/photo-1486006920555-c77dce18193b?q=80&w=600&auto=format&fit=crop" }
];

let cart = [];

// RENDERIZAR PRODUTOS NA GRELHA COM FILTRO DE ABAS
function renderProducts(filter) {
  const container = document.getElementById('products-grid-container');
  if (!container) return;
  container.innerHTML = '';
  
  const filtered = filter === 'all' ? products : products.filter(p => p.category === filter);

  filtered.forEach(p => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <div class="product-img-box">
        <span class="product-badge">${p.tag}</span>
        <img src="${p.img}" alt="${p.name}" class="product-img">
      </div>
      <div class="product-body">
        <span class="product-category-tag">${p.category}</span>
        <h3 class="product-title">${p.name}</h3>
        <p class="product-desc">${p.desc}</p>
        <div class="product-price-box">
          R$ ${p.price.toLocaleString('pt-PT', {minimumFractionDigits: 2})}
          <span>Até 10x sem juros</span>
        </div>
        <div style="display: flex; gap: 8px;">
          <button class="btn-main" style="flex: 1; justify-content: center; font-size: 0.75rem;" onclick="addToCart(${p.id})"><i class="fa-solid fa-cart-plus"></i> Comprar</button>
          <button class="tab-btn" style="padding: 10px;" onclick="openModal(${p.id})"><i class="fa-solid fa-eye"></i></button>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

// GESTÃO DO CARRINHO
function addToCart(id) {
  const prod = products.find(p => p.id === id);
  cart.push(prod);
  updateCartUI();
  toggleCart(true);
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCartUI();
}

function updateCartUI() {
  document.getElementById('cart-counter').innerText = cart.length;
  const container = document.getElementById('cart-items-container');
  container.innerHTML = '';
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;
    container.innerHTML += `
      <div class="cart-item">
        <img src="${item.img}" alt="${item.name}">
        <div style="flex-grow:1;">
          <div style="font-size: 0.85rem; font-weight: 700;">${item.name}</div>
          <div style="color: var(--red-accent); font-weight: 700; font-size: 0.85rem; margin-top: 3px;">R$ ${item.price.toLocaleString('pt-PT', {minimumFractionDigits: 2})}</div>
          <button style="background:none; border:none; color:#ff4444; font-size: 0.75rem; cursor:pointer; margin-top:4px;" onclick="removeFromCart(${index})">Remover</button>
        </div>
      </div>
    `;
  });

  document.getElementById('cart-total-price').innerText = `R$ ${total.toLocaleString('pt-PT', {minimumFractionDigits: 2})}`;
}

function toggleCart(open) {
  const drawer = document.getElementById('cart-drawer');
  const overlay = document.getElementById('drawer-overlay');
  if(open) {
    drawer.classList.add('open');
    overlay.classList.add('active');
  } else {
    drawer.classList.remove('open');
    overlay.classList.remove('active');
  }
}

// MODAL DE DETALHES DO PRODUTO
function openModal(id) {
  const p = products.find(item => item.id === id);
  document.getElementById('modal-content').innerHTML = `
    <img src="${p.img}" alt="${p.name}" style="width:100%; height:220px; object-fit:cover; border-radius:4px; margin-bottom:15px;">
    <span style="color:var(--red-accent); font-size:0.75rem; font-weight:700; text-transform:uppercase;">${p.category}</span>
    <h2 style="font-family:var(--font-title); font-size:1.3rem; margin:5px 0 10px;">${p.name}</h2>
    <p style="color:var(--text-muted); font-size:0.9rem; margin-bottom:15px; line-height:1.5;">${p.details}</p>
    <div style="font-family:var(--font-title); font-size:1.4rem; font-weight:700; margin-bottom:20px;">R$ ${p.price.toLocaleString('pt-PT', {minimumFractionDigits: 2})}</div>
    <button class="btn-main" style="width:100%; justify-content:center;" onclick="addToCart(${p.id}); closeModal();"><i class="fa-solid fa-cart-plus"></i> Adicionar ao Carrinho</button>
  `;
  document.getElementById('product-modal').classList.add('active');
}

function closeModal() {
  document.getElementById('product-modal').classList.remove('active');
}

// INICIALIZAÇÃO DE EVENTOS
document.addEventListener('DOMContentLoaded', () => {
  renderProducts('all');

  // Abas de categorias
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      renderProducts(e.target.getAttribute('data-filter'));
    });
  });

  // Carrinho botões
  document.getElementById('open-cart').addEventListener('click', () => toggleCart(true));
  document.getElementById('close-cart').addEventListener('click', () => toggleCart(false));
  document.getElementById('drawer-overlay').addEventListener('click', () => toggleCart(false));

  // Modal fechar
  document.getElementById('close-modal').addEventListener('click', closeModal);
  document.getElementById('product-modal').addEventListener('click', (e) => {
    if(e.target === document.getElementById('product-modal')) closeModal();
  });

  // Finalizar no WhatsApp
  document.getElementById('checkout-whatsapp').addEventListener('click', () => {
    if(cart.length === 0) {
      alert("O carrinho está vazio!");
      return;
    }
    let msg = "Olá! Gostaria de fechar o pedido na Drive Zone:\n\n";
    let total = 0;
    cart.forEach((i, idx) => {
      msg += `${idx+1}. ${i.name} - R$ ${i.price.toLocaleString('pt-PT', {minimumFractionDigits: 2})}\n`;
      total += i.price;
    });
    msg += `\n*Total do Pedido: R$ ${total.toLocaleString('pt-PT', {minimumFractionDigits: 2})}*`;
    window.open(`https://wa.me/5541999999999?text=${encodeURIComponent(msg)}`, '_blank');
  });

  // Formulário de Agendamento
  document.getElementById('schedule-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('client-name').value;
    const car = document.getElementById('client-car').value;
    const service = document.getElementById('client-service').value;
    const text = `Olá! Gostaria de agendar um serviço na oficina da Drive Zone:\n\n*Cliente:* ${name}\n*Veículo:* ${car}\n*Serviço:* ${service}`;
    window.open(`https://wa.me/5541999999999?text=${encodeURIComponent(text)}`, '_blank');
  });
});
