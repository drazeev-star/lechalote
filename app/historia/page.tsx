import Image from "next/image";
import Link from "next/link";

export default function HistoriaPage() {
  return (
    <main className="historia-page">

      {/* HEADER */}
      <header className="carta-header">
        <div className="carta-header-container">

          <Link href="/" className="carta-logo">
            L&apos;Échalote
          </Link>

          <nav className="carta-navigation">
            <Link href="/">INICIO</Link>

            <Link href="/historia" className="active">
              HISTORIA
            </Link>

            <Link href="/carta">
              CARTA
            </Link>

            <a href="mailto:lechalotegastrobar@gmail.com">
              RESERVAS
            </a>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Carretera+de+la+Guardia+146%2C+Jávea%2C+Alicante"
              target="_blank"
              rel="noopener noreferrer"
            >
              CONTACTO
            </a>
          </nav>

        </div>
      </header>


      {/* HISTORIA */}
      <section className="historia-main">

        <div className="historia-text">

          <span className="section-kicker">
            NUESTRA HISTORIA
          </span>

          <h1>L&apos;Échalote</h1>

          <p>
            Un espacio pensado para disfrutar de la cocina
            mediterránea, compartir buenos momentos y
            sentirse como en casa.
          </p>

          <p>
            Ingredientes frescos, un ambiente acogedor y
            una experiencia para disfrutar con amigos y familia.
          </p>

          <div className="historia-contact">
            <p>Te esperamos en L&apos;Échalote</p>

            <a href="tel:+34865451182">
              +34 865 451 182
            </a>

            <a href="mailto:lechalotegastrobar@gmail.com">
              lechalotegastrobar@gmail.com
            </a>
          </div>

          <a href="mailto:lechalotegastrobar@gmail.com" className="btn btn-primary">
            RESERVAR MESA
          </a>

        </div>


        <div className="historia-image">

          <Image
            src="/images/interior-1.jpg"
            alt="Interior de L'Échalote"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
          />

        </div>

      </section>


      {/* FOOTER */}
      <footer className="carta-footer">
        © 2025 L&apos;Échalote Mediterranean Café Gastrobar.
        Todos los derechos reservados.
      </footer>

    </main>
  );
}