import Image from "next/image";
import LanguageSwitcher from "@/app/components/LanguageSwitcher";

export default function HomeEnglish() {
  return (
    <main>
      {/* HERO */}
      <section className="hero">
        <Image
          src="/images/hero.jpg"
          alt="L'Échalote"
          fill
          priority
          className="hero-image"
        />

        <div className="hero-overlay" />

        <header className="header">
          <div className="header-container">
  <a href="/en" className="logo">
    <Image
      src="/images/logo.png"
      alt="L'Échalote Café Gastrobar"
      width={190}
      height={80}
    />
  </a>

  <nav className="navigation">
    <a href="/en#inicio" className="active">
      HOME
    </a>

    <a href="/en/historia">OUR STORY</a>

    <a href="/en/carta">MENU</a>

    <a href="mailto:lechalotegastrobar@gmail.com">
      RESERVATIONS
    </a>

    <a
      href="https://maps.app.goo.gl/9EzZZW3GN9BAgceq8"
      target="_blank"
      rel="noopener noreferrer"
    >
      CONTACT
    </a>
  </nav>

  <LanguageSwitcher current="en" />
</div>
        </header>

        <div className="hero-content" id="inicio">
          <span className="hero-kicker">
            INTERNATIONAL CAFÉ GASTROBAR
          </span>

          <h1>L&apos;Échalote</h1>

          <p>
            International cuisine, fresh ingredients
            <br />
            and an experience to share.
          </p>

          <div className="hero-buttons">
            <a
              href="tel:+34865451182"
              className="btn btn-primary"
            >
              BOOK A TABLE · +34 865 451 182
            </a>
          </div>
        </div>
      </section>

      {/* WELCOME */}
      <section className="welcome" id="historia">
        <div className="welcome-text">
          <span className="section-kicker">WELCOME</span>

          <h2>
            Welcome to
            <br />
            L&apos;Échalote
          </h2>

          <p>
            In Jávea, on the way to the picturesque Granadella Beach,
            you will find our welcoming restaurant-gastrobar.
          </p>

          <p>
            We look forward to welcoming you for breakfast from 9:30
            to 12:30, tapas from 12:30 to 15:30, and dinner from 18:30
            to 22:30.
          </p>

          <p>
            Enjoy our spacious dining room with high ceilings and a
            large sunny terrace, perfect for a pleasant and relaxed
            atmosphere.
          </p>

          <a href="/en/historia" className="text-link">
            Discover our story →
          </a>
        </div>

        <div className="welcome-images">
          <div className="welcome-image">
            <Image
              src="/images/interior-1.jpg"
              alt="Interior of L'Échalote"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          <div className="welcome-image">
            <Image
              src="/images/terrace-1.jpg"
              alt="Terrace at L'Échalote"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* CUISINE */}
      <section className="cuisine">
        <div className="cuisine-text">
          <span className="section-kicker">OUR CUISINE</span>

          <p>
            Flavours inspired by the Mediterranean.
            <br />
            Fresh ingredients,
            <br />
            dishes made to be enjoyed.
          </p>

          <a href="/en/carta" className="text-link">
            View the full menu →
          </a>
        </div>

        <div className="cuisine-gallery">
          <div className="food-image food-large">
            <Image
              src="/images/food-1.jpg"
              alt="Cuisine at L'Échalote"
              fill
              sizes="(max-width: 768px) 100vw, 60vw"
            />
          </div>

          <div className="food-image">
            <Image
              src="/images/food-2.jpg"
              alt="Dish at L'Échalote"
              fill
              sizes="(max-width: 768px) 100vw, 60vw"
            />
          </div>

          <div className="food-image wine-image">
            <Image
              src="/images/vine.jpg"
              alt="Wine at L'Échalote"
              fill
              sizes="(max-width: 768px) 100vw, 60vw"
            />
          </div>
        </div>
      </section>

      {/* RESERVATION */}
      <section className="reservation">
        <div className="reservation-text">
          <h2>Book your table</h2>
          <p>We are ready to welcome you.</p>
        </div>

        <div className="reservation-contact">
          <p>+34 865 451 182</p>
          <p>lechalotegastrobar@gmail.com</p>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact" id="contacto">
        <div className="contact-info">
          <span className="section-kicker">CONTACT</span>

          <p>Carretera de La Guardia, 146</p>
          <p>03730 Jávea, Alicante</p>
          <p>+34 865 451 182</p>
          <p>Mon – Sun · 9:30 – 22:30</p>
          <p>lechalotegastrobar@gmail.com</p>
        </div>

        <a
          href="https://maps.app.goo.gl/9EzZZW3GN9BAgceq8"
          target="_blank"
          rel="noopener noreferrer"
          className="map-placeholder"
        >
          <span>📍 L&apos;Échalote</span>
          <small>Jávea</small>
        </a>
      </section>

      {/* FOOTER */}
      <footer>
        © 2025 L&apos;Échalote International Café Gastrobar.
        All rights reserved.
      </footer>
    </main>
  );
}