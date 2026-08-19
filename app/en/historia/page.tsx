import Image from "next/image";

export default function HistoriaEnglish() {
  return (
    <main>
      {/* HEADER */}
      <header className="carta-header">
        <div className="carta-header-container">
          <a href="/en" className="carta-logo">
            L&apos;Échalote
          </a>

          <nav className="carta-navigation">
            <a href="/en">HOME</a>
            <a href="/en/historia" className="active">
              OUR STORY
            </a>
            <a href="/en/carta">MENU</a>
            <a href="mailto:lechalotegastrobar@gmail.com">
              RESERVATIONS
            </a>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Carretera+de+la+Guardia+146%2C+Jávea%2C+Alicante"
              target="_blank"
              rel="noopener noreferrer"
            >
              CONTACT
            </a>
          </nav>
        </div>
      </header>

      {/* STORY */}
      <section className="welcome">
        <div className="welcome-text">
          <span className="section-kicker">OUR STORY</span>

          <h1>
            L&apos;Échalote
          </h1>

          <p>
            In Jávea, on the way to the picturesque Granadella Beach,
            you will find our welcoming restaurant-gastrobar.
          </p>

          <p>
            A place to enjoy good food, share moments and relax in a
            bright and welcoming atmosphere.
          </p>

          <p>
            We offer a spacious dining room with high ceilings and a
            large sunny terrace, perfect for enjoying a pleasant and
            relaxed atmosphere.
          </p>

          <p>
            We look forward to welcoming you at{" "}
            <strong>Carretera de la Guardia, 146</strong>, just a short
            distance from one of the most beautiful beaches on the
            Costa Blanca.
          </p>
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
              alt="Terrace of L'Échalote"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        © 2025 L&apos;Échalote International Café Gastrobar.
        All rights reserved.
      </footer>
    </main>
  );
}