import Link from "next/link";

export default function CartaPage() {
  return (
    <main className="carta-page">

      {/* HEADER */}
      <header className="carta-header">
        <div className="carta-header-container">

          <Link href="/" className="carta-logo">
            L&apos;Échalote
          </Link>

          <nav className="carta-navigation">
            <Link href="/">INICIO</Link>
            <Link href="/#historia">HISTORIA</Link>
            <Link href="/carta" className="active">
              CARTA
            </Link>
            <a href="mailto:lechalotegastrobar@gmail.com">
              RESERVAS
            </a>
            <Link href="/#contacto">CONTACTO</Link>
          </nav>

        </div>
      </header>


      {/* HERO */}
      <section className="carta-hero">
        <span className="section-kicker">
          GASTRO BAR LECHALOTE
        </span>

        <h1>Nuestra Carta</h1>

        <p>
          Cocina mediterránea · JÁVEA
        </p>
      </section>


      {/* QUICK NAVIGATION */}
      <nav className="carta-categories">
        <a href="#desayunos">DESAYUNOS</a>
        <a href="#almuerzos">ALMUERZOS &amp; TAPAS</a>
        <a href="#entradas">ENTRADAS</a>
        <a href="#principales">PLATOS PRINCIPALES</a>
        <a href="#postres">POSTRES</a>
        <a href="#infantil">MENÚ INFANTIL</a>
      </nav>


      {/* DESAYUNOS */}
      <section id="desayunos" className="menu-section">
        <span className="section-kicker">
          DESAYUNOS
        </span>

        <h2>Desayunos Especiales &amp; Cafetería</h2>

        <p className="menu-note">
          Horario de desayunos: 9:30 a 12:30
        </p>

        <p className="menu-intro">
          Los desayunos especiales incluyen zumo de naranja y café.
        </p>

        <div className="menu-group">
          <h3>Desayunos Especiales</h3>

          <MenuItem
            name="Desayuno Inglés"
            price="12,50 €"
            description="Huevos fritos, tomate en rodajas, champiñones, salchicha, bacon, beans (alubias) y tostadas."
          />

          <MenuItem
            name="Desayuno Eos"
            price="8,90 €"
            description="Huevos ponchados, jamón York, queso Edam y tostadas."
          />

          <MenuItem
            name="Desayuno Lechalote"
            price="14,50 €"
            description="Rúcula, canónigos, queso feta con vinagreta de mostaza de Dijon y miel, paté de pato, mermelada de higo y tostadas."
          />
        </div>

        <div className="menu-group">
          <h3>Huevos Revueltos</h3>

          <MenuItem name="Tradicionales" price="5,50 €" />
          <MenuItem name="Con Verduras" price="7,00 €" />
          <MenuItem name="Con Champiñones" price="5,90 €" />
          <MenuItem name="Con Bacon" price="6,00 €" />
        </div>

        <div className="menu-group">
          <h3>Sándwiches &amp; Fitness</h3>

          <MenuItem
            name="Sándwich Vegetal"
            price="5,00 €"
            description="Opción vegana. Lechuga, tomate, espárrago blanco, pepinillo, zanahoria y maíz."
          />

          <MenuItem
            name="Sándwich Club Petanca"
            price="5,50 €"
            description="Jamón York, huevo frito y queso cheddar."
          />

          <MenuItem
            name="Porridge de Tutankamón"
            price="6,80 €"
            description="Avena en hojuelas, yogur, frutos rojos y miel de romero."
          />

          <MenuItem
            name="Quinoa Fitness"
            price="6,00 €"
            description="Quinoa con yogur y frutas frescas de temporada."
          />
        </div>

        <div className="menu-group">
          <h3>Tostadas Especiales</h3>

          <MenuItem
            name="Tostada Lea"
            price="8,50 €"
            description="Aguacate, salmón ahumado, huevo ponchado, tomate rallado y lima fresca."
          />

          <MenuItem
            name="Tostada Catalana"
            price="6,00 €"
            description="Pan de masa madre, tomate rallado y jamón serrano."
          />
        </div>
      </section>


      {/* ALMUERZOS & TAPAS */}
      <section id="almuerzos" className="menu-section menu-section-dark">
        <span className="section-kicker">
          COCINA ABIERTA
        </span>

        <h2>Almuerzos &amp; Tapas</h2>

        <p className="menu-note">
          Horario: 12:30 a 15:30
        </p>

        <p className="menu-intro">
          Nuestra cocina elabora platos al momento con ingredientes frescos del mercado.
        </p>

        <div className="menu-group">
          <h3>Nuestros Bocadillos</h3>

          <MenuItem
            name="Bocadillo de Jamón Ibérico y Queso Manchego"
            price="7,00 €"
            description="El clásico de siempre con el mejor jamón de la casa."
          />

          <MenuItem
            name="Bocadillo de Roast Beef"
            price="8,00 €"
            description="Queso Grana Padano y salsa romesco."
          />

          <MenuItem
            name="Bocadillo de Pechuga de Pollo"
            price="6,00 €"
            description="Tomate seco y pimiento verde frito."
          />

          <MenuItem
            name="Bocadillo Marrakech"
            price="7,00 €"
            description="Lechuga, aceitunas negras, zanahoria rallada, atún, patatas fritas y mayonesa de la casa."
          />

          <MenuItem
            name="Bocadillo de Palometa Ahumada"
            price="6,90 €"
            description="Pan artesanal crujiente con queso fresco."
          />

          <MenuItem
            name="Bocadillo Pepito de Ternera"
            price="8,00 €"
            description="Pimiento verde asado y cebolla caramelizada."
          />
        </div>

        <div className="menu-group">
          <h3>Tapas &amp; Compartir</h3>

          <MenuItem name="Mejillones estilo Thai" price="8,00 €" />
          <MenuItem name="Sorpresa Ibérica" price="7,90 €" />
          <MenuItem
            name="Alitas de Pollo"
            price="5,90 €"
            description="Adobadas picantes o crujientes."
          />
          <MenuItem name="Albóndigas de Ternera Amal" price="7,00 €" />
          <MenuItem name="Canelones de Berenjena" price="8,00 €" />
          <MenuItem
            name="Rabas de Calamar Fresco y Salsa Tártara"
            price="9,00 €"
          />
        </div>
      </section>


      {/* ENTRADAS */}
      <section id="entradas" className="menu-section">
        <span className="section-kicker">
          CARTA DE CENA
        </span>

        <h2>Entradas</h2>

        <div className="menu-group">
          <h3>Entradas Frías</h3>

          <MenuItem
            name="Tataki de Atún"
            price="13,50 €"
            description="Atún rojo con wakame, jengibre rosa y su salsa."
          />

          <MenuItem
            name="Sashimi de Salmón"
            price="15,90 €"
            description="Salmón marinado casero con rábano avinagrado y aceite de sésamo."
          />

          <MenuItem
            name="Ensalada de Capellanes"
            price="12,90 €"
            description="Pescado capellán, tomate valenciano, aceitunas negras y cebolla tierna."
          />

          <MenuItem
            name="Ceviche de Lubina"
            price="16,90 €"
            description="Lubina en tacos macerada estilo peruano con lima, limón y cebolla."
          />

          <MenuItem
            name="Tartar de Salmón"
            price="17,80 €"
            description="Salmón ahumado, cebolla fresca, mango, aguacate y caviar negro."
          />
        </div>

        <div className="menu-group">
          <h3>Ensaladas</h3>

          <MenuItem
            name="Ensalada Lechalote"
            price="14,50 €"
            description="Rúcula, canónigos, zanahoria, maíz, espárrago blanco, cebolla chalota y palometa ahumada con vinagreta."
          />

          <MenuItem
            name="Ensalada Fresca de Temporada para Veganos"
            price="9,00 €"
            description="Mezclum, tomate valenciano, manzana verde, frutos secos y vinagreta de la casa."
          />

          <MenuItem
            name="Hummus"
            price="7,40 €"
            description="Hummus de garbanzo casero acompañado de verdura fresca."
          />
        </div>

        <div className="menu-group">
          <h3>Entradas Calientes</h3>

          <MenuItem
            name="Camembert Frito"
            price="11,50 €"
            description="Acompañado de emulsión de frutos rojos."
          />

          <MenuItem
            name="Berenjena Prestige"
            price="14,00 €"
            description="Dados de berenjena con foie micuit, miel de romero y tomate seco."
          />

          <MenuItem
            name="Chipirones al Ajillo"
            price="13,00 €"
            description="Chipirones frescos con ajo y guindillas."
          />

          <MenuItem
            name="Pulpo a la Brasa"
            price="17,00 €"
            description="Pata de pulpo con pimentón ahumado, sal Maldon y patata."
          />

          <MenuItem
            name="Tabla de Embutidos Ibéricos"
            price="15,00 €"
            description="Cinco variedades de embutidos ibéricos, tomate y pan tostado."
          />

          <MenuItem
            name="Parrillada de Salchichas Típicas Españolas"
            price="12,80 €"
            description="Variedad de salchichas y embutidos tradicionales con patatas al horno."
          />

          <MenuItem
            name="Tabla de Quesos Artesanales"
            price="15,00 €"
            description="Selección de quesos artesanales con mermelada y frutos secos."
          />
        </div>
      </section>


      {/* PRINCIPALES */}
      <section id="principales" className="menu-section menu-section-dark">
        <span className="section-kicker">
          PLATOS PRINCIPALES
        </span>

        <h2>Carne &amp; Pescado</h2>

        <div className="menu-group">
          <h3>Carnes</h3>

          <MenuItem
            name="Entrecot de Ternera Gallega (300g)"
            price="22,00 €"
            description="Entrecot de origen gallego con salsa de pimienta verde."
          />

          <MenuItem
            name="Secreto Ibérico"
            price="18,50 €"
            description="A la parrilla acompañado de salsa chimichurri."
          />

          <MenuItem
            name="Pollo al Curry Rojo"
            price="12,50 €"
            description="Pollo cocinado en salsa de curry rojo."
          />
        </div>

        <div className="menu-group">
          <h3>Pescados</h3>

          <MenuItem
            name="Suprema de Bacalao"
            price="17,50 €"
            description="Suprema de bacalao preparada al punto."
          />

          <MenuItem
            name="Lubina Lechalote"
            price="18,00 €"
            description="Lubina al estilo de la casa."
          />

          <MenuItem
            name="Salmón al Curry o a la Plancha"
            price="15,30 €"
            description="Filete de salmón a la plancha o con suave salsa de curry."
          />
        </div>

        <p className="menu-note">
          Todos nuestros platos principales van acompañados de arroz,
          verduras y patatas.
        </p>
      </section>


      {/* POSTRES */}
      <section id="postres" className="menu-section">
        <span className="section-kicker">
          POSTRES
        </span>

        <h2>Algo Dulce</h2>

        <div className="menu-group">
          <MenuItem
            name="Tarta de Queso con Pistacho"
            price="6,50 €"
            description="Tarta de queso cremosa con un toque de pistacho."
          />

          <MenuItem
            name="Coulant de Chocolate"
            price="6,00 €"
            description="Bizcocho de chocolate con corazón fundido."
          />

          <MenuItem
            name="Tarta Tatin"
            price="5,00 €"
            description="Clásica tarta francesa de manzanas caramelizadas."
          />

          <MenuItem
            name="Media Luna de Manzana"
            price="5,50 €"
            description="Crujiente hojaldre relleno de manzana asada."
          />

          <MenuItem
            name="Helado Artesanal"
            price="2,50 €"
            description="Precio por bola. Pistacho, fresa, vainilla, chocolate o turrón."
          />
        </div>
      </section>


      {/* VEGAN / INFANTIL */}
      <section id="infantil" className="menu-section menu-section-light">
        <div className="menu-columns">

          <div>
            <span className="section-kicker">
              OPCIONES VEGANAS
            </span>

            <h2>Vegano</h2>

            <MenuItem
              name="Hamburguesa Vegana"
              price="10,50 €"
              description="Acompañada de patatas fritas de boniato."
            />
          </div>

          <div>
            <span className="section-kicker">
              MENÚ INFANTIL
            </span>

            <h2>Para los Peques</h2>

            <MenuItem
              name="Fingers de Pollo con Patatas Fritas"
              price="6,90 €"
            />

            <MenuItem
              name="Hamburguesa con Queso y Patatas Fritas"
              price="6,90 €"
            />

            <MenuItem
              name="Figuritas de Pescado con Patatas Fritas"
              price="6,90 €"
            />
          </div>

        </div>
      </section>


      {/* RESERVA */}
      <section className="carta-reservation">
        <div>
          <h2>Reserva tu mesa</h2>
          <p>Estamos listos para recibirte.</p>
        </div>

        <div className="carta-contact">
          <a href="tel:+34865123456">
            +34 865 123 456
          </a>

          <a href="mailto:lechalotegastrobar@gmail.com">
            lechalotegastrobar@gmail.com
          </a>
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


function MenuItem({
  name,
  price,
  description,
}: {
  name: string;
  price: string;
  description?: string;
}) {
  return (
    <div className="menu-item">
      <div className="menu-item-top">
        <h4>{name}</h4>
        <span>{price}</span>
      </div>

      {description && (
        <p>{description}</p>
      )}
    </div>
  );
}