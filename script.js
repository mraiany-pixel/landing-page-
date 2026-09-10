// ==========================================
// ELITE MOTORS — JAVASCRIPT
// ==========================================


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
// HEADER AO ROLAR
// ================================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});


// ================================
// FILTRO DOS CARROS
// ================================

const tabs = document.querySelectorAll(".collection-tabs button");
const cars = document.querySelectorAll(".car");

tabs.forEach(tab => {

    tab.addEventListener("click", () => {

        // Remove o active
        tabs.forEach(button => {
            button.classList.remove("active");
        });

        // Ativa o botão clicado
        tab.classList.add("active");

        const selected = tab.textContent
            .trim()
            .toLowerCase();

        cars.forEach(car => {

            const category =
                car.querySelector(".car-info span")
                    ?.textContent
                    .trim()
                    .toLowerCase();

            // Mostrar todos
            if (selected === "all") {

                car.style.display = "block";

            }

            // Supercars
            else if (
                selected === "supercars" &&
                ["ferrari", "lamborghini"].includes(category)
            ) {

                car.style.display = "block";

            }

            // Hypercars
            else if (
                selected === "hypercars" &&
                ["bugatti", "pagani"].includes(category)
            ) {

                car.style.display = "block";

            }

            // Luxury
            else if (
                selected === "luxury" &&
                ["rolls-royce", "bentley"].includes(category)
            ) {

                car.style.display = "block";

            }

            // Esconder
            else {

                car.style.display = "none";

            }

        });

    });

});


// ================================
// ANIMAÇÃO DOS CARDS
// ================================

const carCards = document.querySelectorAll(".car");

const cardObserver = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform =
                    "translateY(0)";

            }

        });

    },
    {
        threshold: 0.15
    }
);


carCards.forEach(card => {

    card.style.opacity = "0";

    card.style.transform =
        "translateY(30px)";

    card.style.transition =
        "opacity 0.8s ease, transform 0.8s ease";

    cardObserver.observe(card);

});


// ================================
// EFEITO NOS CARDS
// ================================

carCards.forEach(card => {

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
            `perspective(1000px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-5px)`;

    });


    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)";

    });

});


// ================================
// CONTADOR DE PERFORMANCE
// ================================

const performanceSection =
    document.querySelector("#performance");

const performanceNumbers =
    document.querySelectorAll(
        ".performance-item strong"
    );

let countersStarted = false;


function startCounters() {

    if (countersStarted) return;

    countersStarted = true;

    performanceNumbers.forEach(number => {

        const finalValue =
            number.textContent.trim();

        if (finalValue === "∞") return;

        const numericValue =
            parseInt(finalValue);

        if (isNaN(numericValue)) return;

        const suffix =
            finalValue.replace(numericValue, "");

        let current = 0;

        const duration = 1200;

        const steps = 50;

        const increment =
            numericValue / steps;

        const intervalTime =
            duration / steps;

        const counter =
            setInterval(() => {

                current += increment;

                if (current >= numericValue) {

                    current = numericValue;

                    clearInterval(counter);

                }

                number.textContent =
                    Math.floor(current) + suffix;

            }, intervalTime);

    });

}


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

    performanceObserver.observe(
        performanceSection
    );

}


// ================================
// PARALLAX DO HERO
// ================================

const heroImage =
    document.querySelector(".hero-image");


window.addEventListener("scroll", () => {

    if (!heroImage) return;

    const scroll =
        window.scrollY;

    if (scroll < window.innerHeight) {

        heroImage.style.transform =
            `translateY(${scroll * 0.08}px)`;

    }

});


// ================================
// BOTÃO VIEW MODEL
// ================================

document.querySelectorAll(".car-info a")
    .forEach(button => {

        button.addEventListener(
            "click",
            function (event) {

                const targetId =
                    this.getAttribute("href");

                const target =
                    document.querySelector(targetId);

                if (target) {

                    event.preventDefault();

                    target.scrollIntoView({
                        behavior: "smooth"
                    });

                }

            }
        );

    });


// ================================
// CONSOLE
// ================================

console.log(
    "ELITE MOTORS — Website loaded successfully."
);