@import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@500;600;700;800&family=Inter:wght@400;500;600;700;800&display=swap');

:root {
  --black: #101010;
  --dark: #171717;
  --red: #e32636;
  --white: #ffffff;
  --gray: #a3a3a3;
  --light: #f5f5f5;
  --border: #e7e7e7;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  scroll-padding-top: 90px;
}

body {
  font-family: 'Inter', sans-serif;
  color: var(--black);
  background: var(--white);
}

a {
  color: inherit;
  text-decoration: none;
}

button, input {
  font: inherit;
}

button {
  cursor: pointer;
}

.header {
  height: 82px;
  padding: 0 7%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--black);
  color: var(--white);
  position: sticky;
  top: 0;
  z-index: 20;
}

.logo {
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 30px;
  font-weight: 800;
  letter-spacing: 1px;
  line-height: 1;
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
}

.logo span {
  color: var(--red);
}

.logo small {
  display: block;
  flex-basis: 100%;
  margin-top: 5px;
  font: 9px 'Inter', sans-serif;
  letter-spacing: 2px;
  color: #bdbdbd;
}

.nav {
  display: flex;
  align-items: center;
  gap: 30px;
  font-size: 13px;
}

.nav a {
  color: #dedede;
  transition: color .2s;
}

.nav a:hover {
  color: var(--red);
}

.nav .nav-button {
  padding: 12px 18px;
  color: white;
  background: var(--red);
  font-weight: 700;
}

.menu-toggle {
  display: none;
  border: 0;
  background: transparent;
  color: white;
  font-size: 28px;
}

.hero {
  min-height: 520px;
  padding: 90px 9% 65px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  color: white;
  background:
    linear-gradient(90deg, rgba(9,9,9,.96) 0%, rgba(9,9,9,.85) 48%, rgba(9,9,9,.42) 100%),
    url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1800&q=85') center 55% / cover;
}

.hero-content {
  max-width: 620px;
}

.eyebrow {
  color: var(--red);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 2.5px;
  display: block;
  margin-bottom: 17px;
}

.hero h1, h2 {
  font-family: 'Barlow Condensed', sans-serif;
  text-transform: uppercase;
  line-height: .98;
}

.hero h1 {
  font-size: clamp(56px, 8vw, 92px);
  letter-spacing: -1px;
}

.hero h1 span, h2 span {
  color: var(--red);
}

.hero-content p {
  color: #d2d2d2;
  line-height: 1.8;
  font-size: 14px;
  max-width: 460px;
  margin: 23px 0 30px;
}

.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 18px;
  padding: 15px 22px;
  background: var(--red);
  color: white;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: .8px;
  border: 1px solid var(--red);
  transition: .2s;
}

.button:hover {
  background: #bd1727;
  border-color: #bd1727;
  transform: translateY(-2px);
}

.hero-label {
  position: absolute;
  bottom: 28px;
  right: 9%;
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 9px;
  letter-spacing: 1.5px;
  color: #d0d0d0;
}

.hero-line {
  width: 32px;
  height: 2px;
  background: var(--red);
}

.benefits {
  background: var(--red);
  color: white;
  padding: 24px 9%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px;
}

.benefits div {
  display: flex;
  align-items: center;
  gap: 14px;
}

.benefits span {
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 28px;
  font-weight: 800;
  color: rgba(255,255,255,.6);
}

.benefits p {
  font-size: 12px;
  font-weight: 600;
}

.section {
  padding: 85px 9%;
}

.section-heading {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 30px;
}

.section-heading h2, .about h2, .contact h2, .custom-banner h2 {
  font-size: clamp(35px, 5vw, 50px);
  margin-bottom: 12px;
}

.product-count {
  font-size: 12px;
  color: #777;
  padding-bottom: 14px;
}

.category-list {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.category {
  padding: 12px 17px;
  background: white;
  border: 1px solid var(--border);
  color: #444;
  font-size: 11px;
  font-weight: 700;
  transition: .2s;
}

.category:hover, .category.active {
  background: var(--black);
  color: white;
  border-color: var(--black);
}

.products-section {
  padding-top: 25px;
  background: var(--light);
}

.section-description {
  font-size: 13px;
  color: #777;
  margin-top: 10px;
  line-height: 1.7;
}

.search-bar {
  display: flex;
  align-items: center;
  gap: 12px;
  background: white;
  border: 1px solid var(--border);
  padding: 0 17px;
  margin-bottom: 28px;
  max-width: 460px;
  height: 48px;
}

.search-bar span {
  font-size: 25px;
  color: var(--red);
}

.search-bar input {
  width: 100%;
  height: 100%;
  border: 0;
  outline: 0;
  background: transparent;
  font-size: 12px;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 20px;
}

.product-card {
  background: white;
  border: 1px solid #ececec;
  min-width: 0;
  transition: transform .25s, box-shadow .25s;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 30px rgba(0,0,0,.08);
}

.product-image {
  height: 205px;
  position: relative;
  background: #e9e9e9;
  overflow: hidden;
}

.product-image img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  transition: transform .4s;
}

.product-card:hover .product-image img {
  transform: scale(1.05);
}

.product-tag {
  position: absolute;
  top: 12px;
  left: 12px;
  background: var(--red);
  color: white;
  padding: 6px 8px;
  font-size: 9px;
  font-weight: 800;
  text-transform: uppercase;
}

.product-info {
  padding: 18px;
}

.product-category {
  color: #858585;
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: .8px;
}

.product-info h3 {
  font-size: 14px;
  margin: 9px 0;
  line-height: 1.5;
}

.product-description {
  color: #777;
  font-size: 11px;
  line-height: 1.6;
  min-height: 36px;
}

.product-bottom {
  border-top: 1px solid #eee;
  margin-top: 16px;
  padding-top: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}

.product-price {
  font-size: 18px;
  font-weight: 800;
  white-space: nowrap;
}

.product-price small {
  display: block;
  font-size: 9px;
  color: #888;
  font-weight: 500;
  margin-bottom: 3px;
}

.details-button {
  border: 0;
  background: var(--black);
  color: white;
  padding: 10px 11px;
  font-size: 10px;
  font-weight: 700;
  white-space: nowrap;
  transition: .2s;
}

.details-button:hover {
  background: var(--red);
}

.empty-message {
  padding: 35px 0;
  color: #777;
  font-size: 14px;
}

.custom-banner {
  margin: 0 9%;
  padding: 48px;
  background: var(--black);
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
}

.custom-banner h2 {
  margin-bottom: 12px;
}

.custom-banner p {
  color: #bcbcbc;
  font-size: 12px;
  line-height: 1.8;
  max-width: 490px;
}

.button-light {
  flex-shrink: 0;
  background: white;
  border-color: white;
  color: var(--black);
}

.button-light:hover {
  background: var(--red);
  border-color: var(--red);
  color: white;
}

.about {
  max-width: 850px;
  margin: auto;
  text-align: center;
}

.about p {
  color: #707070;
  max-width: 650px;
  margin: 20px auto 0;
  font-size: 13px;
  line-height: 2;
}

.contact {
  background: #f2f2f2;
  padding: 55px 9%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
}

.contact > div {
  max-width: 650px;
}

.contact h2 {
  font-size: clamp(30px, 4vw, 43px);
}

.contact p {
  color: #777;
  font-size: 12px;
  line-height: 1.8;
  max-width: 560px;
}

.footer {
  background: var(--black);
  color: white;
  padding: 30px 9%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 25px;
}

.footer p, .footer > a:last-child {
  color: #aaa;
  font-size: 10px;
}

.footer > a:last-child:hover {
  color: var(--red);
}

.modal {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,.78);
  z-index: 50;
  display: none;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.modal.open {
  display: flex;
}

.modal-content {
  position: relative;
  background: white;
  width: 100%;
  max-width: 760px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-height: 90vh;
  overflow: auto;
}

.modal-content > img {
  width: 100%;
  height: 100%;
  min-height: 350px;
  object-fit: cover;
  background: #eee;
}

.modal-info {
  padding: 45px 30px;
  align-self: center;
}

.modal-info h2 {
  font-size: 34px;
  margin-bottom: 16px;
}

.modal-info > p {
  color: #666;
  font-size: 12px;
  line-height: 1.9;
}

.modal-price {
  display: block;
  margin: 22px 0;
  font-size: 26px;
}

.modal-info .compatibility-note {
  font-size: 10px;
  margin-bottom: 22px;
}

.modal-close {
  position: absolute;
  top: 10px;
  right: 12px;
  z-index: 2;
  border: 0;
  width: 34px;
  height: 34px;
  background: var(--black);
  color: white;
  font-size: 25px;
}

@media (max-width: 1000px) {
  .product-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .header, .section, .contact, .footer {
    padding-left: 5%;
    padding-right: 5%;
  }

  .hero {
    padding-left: 7%;
  }

  .custom-banner {
    margin-left: 5%;
    margin-right: 5%;
  }

  .nav {
    gap: 18px;
  }
}

@media (max-width: 720px) {
  .header {
    height: 72px;
  }

  .menu-toggle {
    display: block;
  }

  .nav {
    position: absolute;
    top: 72px;
    left: 0;
    right: 0;
    display: none;
    flex-direction: column;
    align-items: stretch;
    gap: 0;
    padding: 12px 5% 20px;
    background: var(--black);
  }

  .nav.open {
    display: flex;
  }

  .nav a {
    padding: 14px 0;
    border-bottom: 1px solid #292929;
  }

  .nav .nav-button {
    text-align: center;
    margin-top: 12px;
    padding: 14px;
  }

  .hero {
    min-height: 490px;
    padding: 65px 6%;
    background-position: 60% center;
  }

  .hero h1 {
    font-size: 65px;
  }

  .hero-label {
    right: 6%;
    font-size: 8px;
  }

  .benefits {
    grid-template-columns: 1fr;
    gap: 14px;
    padding: 25px 6%;
  }

  .section {
    padding: 60px 6%;
  }

  .section-heading {
    align-items: start;
  }

  .product-count {
    display: none;
  }

  .product-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 12px;
  }

  .product-image {
    height: 160px;
  }

  .product-info {
    padding: 12px;
  }

  .product-info h3 {
    font-size: 12px;
  }

  .product-price {
    font-size: 15px;
  }

  .product-bottom {
    align-items: start;
    flex-direction: column;
  }

  .details-button {
    width: 100%;
    padding: 11px 5px;
  }

  .custom-banner {
    margin: 0 6%;
    padding: 30px 22px;
    align-items: start;
    flex-direction: column;
  }

  .contact {
    padding: 45px 6%;
    align-items: start;
    flex-direction: column;
  }

  .footer {
    padding: 30px 6%;
    flex-direction: column;
    align-items: start;
  }

  .modal-content {
    grid-template-columns: 1fr;
    max-width: 430px;
  }

  .modal-content > img {
    height: 220px;
    min-height: 220px;
  }

  .modal-info {
    padding: 25px;
  }

  .modal-info h2 {
    font-size: 30px;
  }
}

@media (max-width: 360px) {
  .product-grid {
    grid-template-columns: 1fr;
  }

  .product-image {
    height: 230px;
  }
}