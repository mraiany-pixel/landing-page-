// ================================
// ELITE MOTORS — JAVASCRIPT
// ================================


// MENU / NAVEGAÇÃO
const menuButton = document.querySelector(".menu-button");

if (menuButton) {
    menuButton.addEventListener("click", () => {
        document.querySelector("#colecao").scrollIntoView({
            behavior: "smooth"
        });
    });
}


// ================================
// SCROLL SUAVE
// ================================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        if (targetId === "#") return;

        const target = document.querySelector(targetId);

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }

    });

});


// ================================
// FILTRO DA COLEÇÃO
// ================================

const tabs = document.querySelectorAll(".collection-tabs button");
const cars = document.querySelectorAll(".car");

tabs.forEach(tab => {

    tab.addEventListener("click", () => {

        // Remove seleção dos outros botões
        tabs.forEach(button => {
            button.classList.remove("active");
        });

        // Ativa o botão clicado
        tab.classList.add("active");

        const category = tab.textContent.trim().toLowerCase();

        cars.forEach(car => {

            const categoryText =
                car.querySelector("span")?.textContent
                .trim()
                .toLowerCase();

            if (category === "todos") {

                car.style.display = "block";

            } else if (
                categoryText &&
                categoryText.includes(category)
            ) {

                car.style.display = "block";

            } else {

                car.style.display = "none";

            }

        });

    });

});


// Deixa "Todos" selecionado inicialmente
if (tabs.length > 0) {
    tabs[0].classList.add("active");
}


// ================================
// ANIMAÇÃO AO APARECER NA TELA
// ================================

const animatedElements = document.querySelectorAll(
    "section, .car, .brands > div, .luxury-details article, .technology article, .timeline article, .performance-data > div"
);

const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },

    {
        threshold: 0.12
    }

);

animatedElements.forEach(element => {
    element.classList.add("hidden");
    observer.observe(element);
});


// ================================
// BOTÃO DE CONTATO
// ================================

const contactButton = document.querySelector('#contato a');

if (contactButton) {

    contactButton.addEventListener("click", function(event) {

        event.preventDefault();

        alert(
            "Obrigado pelo seu interesse na Elite Motors.\n\n" +
            "Nossa equipe entrará em contato para apresentar " +
            "nossa experiência exclusiva."
        );

    });

}


// ================================
// EFEITO NO HEADER
// ================================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});


// ================================
// CONTADOR DE PERFORMANCE
// ================================

const performanceNumbers = document.querySelectorAll(
    ".performance-data strong"
);

const performanceSection =
    document.querySelector("#performance");

let counterStarted = false;

function startCounters() {

    if (counterStarted) return;

    counterStarted = true;

    performanceNumbers.forEach(number => {

        const originalText = number.textContent.trim();

        // Ignora o símbolo infinito
        if (originalText === "∞") return;

        const match = originalText.match(/\d+/);

        if (!match) return;

        const target = Number(match[0]);

        const suffix = originalText.replace(match[0], "");

        let current = 0;

        const increment = Math.max(
            1,
            Math.ceil(target / 50)
        );

        const counter = setInterval(() => {

            current += increment;

            if (current >= target) {

                current = target;
                clearInterval(counter);

            }

            number.textContent =
                current + suffix;

        }, 30);

    });

}


// Observa a seção de performance
if (performanceSection) {

    const performanceObserver =
        new IntersectionObserver(

            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {
                        startCounters();
                    }

                });

            },

            {
                threshold: 0.4
            }

        );

    performanceObserver.observe(performanceSection);

}


// ================================
// EFEITO PARALLAX NO HERO
// ================================

const heroImage =
    document.querySelector(".hero-image");

window.addEventListener("scroll", () => {

    if (!heroImage) return;

    const scrollPosition = window.scrollY;

    if (scrollPosition < window.innerHeight) {

        heroImage.style.transform =
            `translateY(${scrollPosition * 0.12}px)`;

    }

});


// ================================
// BOTÃO "CONHECER MODELO"
// ================================

document.querySelectorAll(".car a").forEach(button => {

    button.addEventListener("click", function(event) {

        const targetId =
            this.getAttribute("href");

        const target =
            document.querySelector(targetId);

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        }

    });

});


// ================================
// VOLTAR AO TOPO
// ================================

const topButton =
    document.querySelector('.footer-bottom a[href="#inicio"]');

if (topButton) {

    topButton.addEventListener("click", function(event) {

        event.preventDefault();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


// ================================
// CURSOR / EFEITO NOS CARDS
// ================================

document.querySelectorAll(".car").forEach(card => {

    card.addEventListener("mousemove", event => {

        const rect = card.getBoundingClientRect();

        const x =
            event.clientX - rect.left;

        const y =
            event.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX =
            ((y - centerY) / centerY) * -2;

        const rotateY =
            ((x - centerX) / centerX) * 2;

        card.style.transform =
            `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "perspective(900px) rotateX(0) rotateY(0) translateY(0)";

    });

});


// ================================
// MENSAGEM NO CONSOLE
// ================================

console.log(
    "ELITE MOTORS — The art of automotive."
);

console.log(
    "Website carregado com sucesso."
);