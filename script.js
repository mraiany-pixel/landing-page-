// DADOS DE PRODUTOS
const products = [
  { id: 1, name: "Jogo de Rodas Esportivas Liga Leve Aro 18\"", category: "rodas", price: 3890.00, tag: "Destaque", desc: "Rodas com acabamento diamantado e liga de alta resistência.", details: "Desenvolvidas para garantir máxima leveza e resistência estrutural. Compatível com furações 4x100 e 5x100.", img: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=600&auto=format&fit=crop" },
  { id: 2, name: "Capa de Banco Sob Medida Couro Nappa", category: "internos", price: 1200.00, tag: "Exclusivo", desc: "Revestimento em couro nobre com costuras esportivas vermelhas.", details: "Modelagem sob medida mantendo o acionamento de airbags e funções elétricas dos bancos originais.", img: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?q=80&w=600&auto=format&fit=crop" },
  { id: 3, name: "Central Multimídia Android 4K 10\"", category: "internos", price: 1890.00, tag: "Tecnologia", desc: "CarPlay e Android Auto sem fio com tela IPS antirreflexo.", details: "Processador octa-core rápido, GPS offline, Bluetooth 5.0 e total integração com comandos do volante.", img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=600&auto=format&fit=crop" },
  { id: 4, name: "Kit Iluminação LED Neon RGB Fibra Óptica", category: "iluminacao", price: 299.00, tag: "Estilo", desc: "Fitas de LED para painel e portas com controle via App.", details: "Mais de 16 milhões de cores ativadas por aplicativo Bluetooth ou sincronização com a música.", img: "https://images.unsplash.com/photo-1508974239320-0a029497e820?q=80&w=600&auto=format&fit=crop" },
  { id: 5, name: "Suporte Magnético Magsafe Articulado", category: "organizacao", price: 119.00, tag: "Praticidade", desc: "Fixação ultra forte para saídas de ar ou painel com rotação 360°.", details: "Compatível com todos os smartphones, acompanha placas magnéticas de alta aderência.", img: "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?q=80&w=600&auto=format&fit=crop" },
  { id: 6, name: "Capa para Volante Couro Costurado à Mão", category: "internos", price: 149.00, tag: "Personalização", desc: "Revestimento em Couro / Alcantara com linha de costura vermelha.", details: "Garante pegada firme e protege o volante original contra o desgaste solar e suor.", img: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=600&auto=format&fit=crop" },
  { id: 7, name: "Kit Cuidados Auto: Microfibra + Aromatizante Premium", category: "cuidados", price: 89.00, tag: "Cuidados", desc: "Toalhas de microfibra gramatura alta + odorizador de cabine.", details: "Panos de secagem rápida livre de riscos para pintura e cheiro exclusivo Drive Zone.", img: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?q=80&w=600&auto=format&fit=crop" },
  { id: 8, name: "Escapamento Esportivo Inox 304 Ponteira Dupla", category: "rodas", price: 1450.00, tag: "Performance", desc: "Ronco encorpado esportivo e acabamento em Inox polido.", details: "Construção plug & play sem necessidade de soldas complexas no escapamento original.", img: "https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=600&auto=format&fit=crop" }
];

// DADOS DE SERVIÇOS VARIADOS
const servicesData = [
  { id: 's1', name: 'Alinhamento 3D + Balanceamento Laser', category: 'mecanica', price: 180.00, desc: 'Calibragem precisa para máxima durabilidade dos pneus.' },
  { id: 's2', name: 'Instalação de Insulfilm Nanocerâmico', category: 'estetica', price: 650.00, desc: 'Proteção contra 95% do calor solar UV.' },
  { id: 's3', name: 'Instalação de Central Multimídia / Som', category: 'eletronica', price: 250.00, desc: 'Passagem limpa de cabos e configuração de comandos de volante.' },
  { id: 's4', name: 'Revisão e Troca de Pastilhas de Freio', category: 'mecanica', price: 220.00, desc: 'Inspeção completa do sistema de travamento.' },
  { id: 's5', name: 'Instalação de Kit LED Neon RGB Interno', category: 'interna', price: 180.00, desc: 'Fixação embutida sem fios expostos.' },
  { id: 's6', name: 'Envelopamento Parcial ou Total (PPF / Satin)', category: 'estetica', price: 1500.00, desc: 'Proteção de pintura contra pedriscos e riscos.' },
  { id: 's7', name: 'Revestimento de Volante e Bancos em Couro', category: 'interna', price: 850.00, desc: 'Instalação profissional com acabamento sob medida.' },
  { id: 's8', name: 'Diagnóstico Eletrônico via Scanner 3D', category: 'eletronica', price: 150.00, desc: 'Leitura de erros do painel e injeção eletrônica.' }
];

let cart = [];
let selectedServices = [];

// RENDERIZAR PRODUTOS
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
          R$ ${p.price.toLocaleString('pt-BR', {minimumFractionDigits: 2})}
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

// RENDERIZAR SERVIÇOS
function renderServices(filter = 'all') {
  const container = document.getElementById('services-grid-container');
  if(!container) return;
  container.innerHTML = '';

  const filtered = filter === 'all' ? servicesData : servicesData.filter(s => s.category === filter);

  filtered.forEach(s => {
    const isChecked = selectedServices.some(item => item.id === s.id);
    const card = document.createElement('div');
    card.className = `service-item-card ${isChecked ? 'selected' : ''}`;
    card.onclick = () => toggleServiceSelect(s);

    card.innerHTML = `
      <input type="checkbox" class="service-checkbox" ${isChecked ? 'checked' : ''} onclick="event.stopPropagation(); toggleServiceSelectById('${s.id}')">
      <div>
        <div style="font-weight: 700; font-size: 0.95rem;">${s.name}</div>
        <div style="font-size: 0.8rem; color: var(--text-muted); margin: 4px 0;">${s.desc}</div>
        <div style="color: var(--red-accent); font-weight: 700; font-size: 0.9rem;">Estimado: R$ ${s.price.toLocaleString('pt-BR', {minimumFractionDigits: 2})}</div>
      </div>
    `;
    container.appendChild(card);
  });
}

function toggleServiceSelect(service) {
  const idx = selectedServices.findIndex(item => item.id === service.id);
  if(idx > -1) {
    selectedServices.splice(idx, 1);
  } else {
    selectedServices.push(service);
  }
  updateServicesSummary();
  renderServices(document.querySelector('.service-tab-btn.active')?.getAttribute('data-service-filter') || 'all');
}

function toggleServiceSelectById(id) {
  const service = servicesData.find(s => s.id === id);
  if(service) toggleServiceSelect(service);
}

function updateServicesSummary() {
  document.getElementById('selected-services-count').innerText = selectedServices.length;
  const total = selectedServices.reduce((acc, curr) => acc + curr.price, 0);
  document.getElementById('selected-services-total').innerText = `R$ ${total.toLocaleString('pt-BR', {minimumFractionDigits: 2})}`;
}

// CARRINHO
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
          <div style="color: var(--red-accent); font-weight: 700; font-size: 0.85rem; margin-top: 3px;">R$ ${item.price.toLocaleString('pt-BR', {minimumFractionDigits: 2})}</div>
          <button style="background:none; border:none; color:#ff4444; font-size: 0.75rem; cursor:pointer; margin-top:4px;" onclick="removeFromCart(${index})">Remover</button>
        </div>
      </div>
    `;
  });

  document.getElementById('cart-total-price').innerText = `R$ ${total.toLocaleString('pt-BR', {minimumFractionDigits: 2})}`;
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

// MODAL DETALHES
function openModal(id) {
  const p = products.find(item => item.id === id);
  document.getElementById('modal-content').innerHTML = `
    <img src="${p.img}" alt="${p.name}" style="width:100%; height:220px; object-fit:cover; border-radius:4px; margin-bottom:15px;">
    <span style="color:var(--red-accent); font-size:0.75rem; font-weight:700; text-transform:uppercase;">${p.category}</span>
    <h2 style="font-family:var(--font-title); font-size:1.3rem; margin:5px 0 10px;">${p.name}</h2>
    <p style="color:var(--text-muted); font-size:0.9rem; margin-bottom:15px; line-height:1.5;">${p.details}</p>
    <div style="font-family:var(--font-title); font-size:1.4rem; font-weight:700; margin-bottom:20px;">R$ ${p.price.toLocaleString('pt-BR', {minimumFractionDigits: 2})}</div>
    <button class="btn-main" style="width:100%; justify-content:center;" onclick="addToCart(${p.id}); closeModal();"><i class="fa-solid fa-cart-plus"></i> Adicionar ao Carrinho</button>
  `;
  document.getElementById('product-modal').classList.add('active');
}

function closeModal() {
  document.getElementById('product-modal').classList.remove('active');
}

// EVENTOS
document.addEventListener('DOMContentLoaded', () => {
  renderProducts('all');
  renderServices('all');

  // Abas do catálogo
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      renderProducts(e.target.getAttribute('data-filter'));
    });
  });

  // Abas de serviços
  document.querySelectorAll('.service-tab-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.service-tab-btn').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      renderServices(e.target.getAttribute('data-service-filter'));
    });
  });

  // Carrinho
  document.getElementById('open-cart').addEventListener('click', () => toggleCart(true));
  document.getElementById('close-cart').addEventListener('click', () => toggleCart(false));
  document.getElementById('drawer-overlay').addEventListener('click', () => toggleCart(false));

  // Modal
  document.getElementById('close-modal').addEventListener('click', closeModal);
  document.getElementById('product-modal').addEventListener('click', (e) => {
    if(e.target === document.getElementById('product-modal')) closeModal();
  });

  // Checkout no WhatsApp
  document.getElementById('checkout-whatsapp').addEventListener('click', () => {
    if(cart.length === 0) {
      alert("O carrinho está vazio!");
      return;
    }
    let msg = "Olá! Gostaria de fechar o pedido na Drive Zone:\n\n";
    let total = 0;
    cart.forEach((i, idx) => {
      msg += `${idx+1}. ${i.name} - R$ ${i.price.toLocaleString('pt-BR', {minimumFractionDigits: 2})}\n`;
      total += i.price;
    });
    msg += `\n*Total do Pedido: R$ ${total.toLocaleString('pt-BR', {minimumFractionDigits: 2})}*`;
    window.open(`https://wa.me/5541999999999?text=${encodeURIComponent(msg)}`, '_blank');
  });

  // Enviar Serviços no WhatsApp
  document.getElementById('send-services-whatsapp').addEventListener('click', () => {
    if(selectedServices.length === 0) {
      alert("Selecione pelo menos um serviço da lista!");
      return;
    }
    let msg = "Olá! Gostaria de um orçamento para os seguintes serviços na Drive Zone:\n\n";
    let total = 0;
    selectedServices.forEach((s, idx) => {
      msg += `${idx+1}. ${s.name} - Estimado: R$ ${s.price.toLocaleString('pt-BR', {minimumFractionDigits: 2})}\n`;
      total += s.price;
    });
    msg += `\n*Valor Total Estimado: R$ ${total.toLocaleString('pt-BR', {minimumFractionDigits: 2})}*`;
    window.open(`https://wa.me/5541999999999?text=${encodeURIComponent(msg)}`, '_blank');
  });

  // Agendamento Form
  document.getElementById('schedule-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('client-name').value;
    const car = document.getElementById('client-car').value;
    const service = document.getElementById('client-service').value;
    const text = `Olá! Gostaria de agendar um serviço na oficina da Drive Zone:\n\n*Cliente:* ${name}\n*Veículo:* ${car}\n*Serviço:* ${service}`;
    window.open(`https://wa.me/5541999999999?text=${encodeURIComponent(text)}`, '_blank');
  });
});