import Image from "next/image";

export default function Home() {
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
            <a href="#" className="logo">
              <Image
                src="/images/logo.png"
                alt="L'Échalote Café Gastrobar"
                width={190}
                height={80}
              />
            </a>

            <nav className="navigation">
  <a href="#inicio" className="active">
    INICIO
  </a>
  <a href="/historia">HISTORIA</a>
  <a href="/carta">CARTA</a>
  <a href="mailto:lechalotegastrobar@gmail.com">
    RESERVAS
  </a>
  <a
  href="https://www.google.com/maps/search/?api=1&query=Carretera+de+la+Guardia+146%2C+J%C3%A1vea%2C+Alicante"
  target="_blank"
  rel="noopener noreferrer"
>
  CONTACTO
</a>
</nav>
          </div>
        </header>

        <div className="hero-content" id="inicio">
          <span className="hero-kicker">
            MEDITERRANEAN CAFÉ GASTROBAR
          </span>

          <h1>L&apos;Échalote</h1>

          <p>
            Cocina mediterránea, ingredientes frescos
            <br />
            y una experiencia para compartir.
          </p>

          <div className="hero-buttons">
  <a
    href="tel:+34865451182"
    className="btn btn-primary"
  >
    RESERVAR MESA · +34 865 451 182
  </a>
</div>
        </div>
      </section>

      {/* BIENVENIDOS */}
      <section className="welcome" id="historia">
        <div className="welcome-text">
          <span className="section-kicker">BIENVENIDOS</span>

          <h2>
            Bienvenidos a
            <br />
            L&apos;Échalote
          </h2>

          <p>
            Donde la cocina mediterránea se encuentra
            con un ambiente luminoso, relajado y elegante.
          </p>

          <p>
            Un lugar para disfrutar, compartir y crear
            recuerdos inolvidables.
          </p>

          <a href="/historia" className="text-link">
  Conoce nuestra historia →
</a>
        </div>

        <div className="welcome-images">
          <div className="welcome-image">
            <Image
              src="/images/interior-1.jpg"
              alt="Interior de L'Échalote"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          <div className="welcome-image">
            <Image
              src="/images/terrace-1.jpg"
              alt="Terraza de L'Échalote"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>


     {/* COCINA */}

<section className="cuisine">

  <div className="cuisine-text">
    <span className="section-kicker">NUESTRA COCINA</span>

    <p>
      Sabores que nacen del Mediterráneo.
      <br />
      Ingredientes frescos,
      <br />
      platos hechos para disfrutar.
    </p>

    <a href="/carta" className="text-link">
  Ver toda la carta →
</a>
  </div>

  <div className="cuisine-gallery">

    <div className="food-image food-large">
  <Image
    src="/images/food-1.jpg"
    alt="Cocina mediterránea"
    fill
    sizes="(max-width: 768px) 100vw, 60vw"
  />
</div>

    <div className="food-image">
      <Image
        src="/images/food-2.jpg"
        alt="Plato mediterráneo"
        fill
        sizes="(max-width: 768px) 100vw, 60vw"
      />
    </div>

    <div className="food-image wine-image">
      <Image
        src="/images/vine.jpg"
        alt="Vino"
        fill
        sizes="(max-width: 768px) 100vw, 60vw"
      />
    </div>

  </div>

</section>

      {/* RESERVA */}
      {/* RESERVA */}

<section className="reservation">

  <div className="reservation-text">
    <h2>Reserva tu mesa</h2>
    <p>Estamos listos para recibirte.</p>
  </div>

  <div className="reservation-contact">
    <p>+34 865 123 456</p>
    <p>lechalotegastrobar@gmail.com</p>
  </div>

</section>

      {/* CONTACTO */}
      <section className="contact" id="contacto">
        <div className="contact-info">
          <span className="section-kicker">CONTACTO</span>

          <p>Carretera de La Guardia, 146</p>
          <p>03730 Jávea, Alicante</p>
          <p>+34 865 451 182</p>
          <p>Lun – Dom · 9:30 – 22:30</p>
          <p>lechalotegastrobar@gmail.com</p>
        </div>

        <a
  href="https://www.google.com/maps/search/?api=1&query=Carretera+de+la+Guardia+146%2C+Jávea%2C+Alicante"
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
        © 2025 L&apos;Échalote Mediterranean Café Gastrobar.
        Todos los derechos reservados.
      </footer>
    </main>
  );
}