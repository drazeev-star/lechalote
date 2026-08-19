import Link from "next/link";

export default function CartaEnglishPage() {
  return (
    <main className="carta-page">

      {/* HEADER */}
      <header className="carta-header">
        <div className="carta-header-container">

          <Link href="/en" className="carta-logo">
            L&apos;Échalote
          </Link>

          <nav className="carta-navigation">
            <Link href="/en">HOME</Link>
            <Link href="/en/historia">OUR STORY</Link>
            <Link href="/en/carta" className="active">
              MENU
            </Link>

            <a href="mailto:lechalotegastrobar@gmail.com">
              RESERVATIONS
            </a>

            <Link href="/en#contacto">
              CONTACT
            </Link>
          </nav>

        </div>
      </header>


      {/* HERO */}
      <section className="carta-hero">
        <span className="section-kicker">
          GASTRO BAR L&apos;ÉCHALOTE
        </span>

        <h1>Our Menu</h1>

        <p>
          International cuisine · JÁVEA
        </p>
      </section>


      {/* QUICK NAVIGATION */}
      <nav className="carta-categories">
        <a href="#breakfast">BREAKFAST</a>
        <a href="#lunch">LUNCH &amp; TAPAS</a>
        <a href="#starters">STARTERS</a>
        <a href="#mains">MAIN COURSES</a>
        <a href="#desserts">DESSERTS</a>
        <a href="#kids">KIDS MENU</a>
      </nav>


      {/* BREAKFAST */}
      <section id="breakfast" className="menu-section">
        <span className="section-kicker">
          BREAKFAST
        </span>

        <h2>Special Breakfasts &amp; Coffee</h2>

        <p className="menu-note">
          Breakfast hours: 9:30 to 12:30
        </p>

        <p className="menu-intro">
          Special breakfasts include orange juice and coffee.
        </p>

        <div className="menu-group">
          <h3>Special Breakfasts</h3>

          <MenuItem
            name="English Breakfast"
            price="12,50 €"
            description="Fried eggs, sliced tomato, mushrooms, sausage, bacon, beans and toast."
          />

          <MenuItem
            name="Eos Breakfast"
            price="8,90 €"
            description="Poached eggs, York ham, Edam cheese and toast."
          />

          <MenuItem
            name="Lechalote Breakfast"
            price="14,50 €"
            description="Rocket, lamb's lettuce, feta cheese with Dijon mustard and honey vinaigrette, duck pâté, fig jam and toast."
          />
        </div>

        <div className="menu-group">
          <h3>Scrambled Eggs</h3>

          <MenuItem name="Traditional" price="5,50 €" />
          <MenuItem name="With Vegetables" price="7,00 €" />
          <MenuItem name="With Mushrooms" price="5,90 €" />
          <MenuItem name="With Bacon" price="6,00 €" />
        </div>

        <div className="menu-group">
          <h3>Sandwiches &amp; Fitness</h3>

          <MenuItem
            name="Vegetable Sandwich"
            price="5,00 €"
            description="Vegan option. Lettuce, tomato, white asparagus, pickles, carrot and sweetcorn."
          />

          <MenuItem
            name="Club Petanca Sandwich"
            price="5,50 €"
            description="York ham, fried egg and cheddar cheese."
          />

          <MenuItem
            name="Tutankhamun Porridge"
            price="6,80 €"
            description="Rolled oats, yoghurt, berries and rosemary honey."
          />

          <MenuItem
            name="Fitness Quinoa"
            price="6,00 €"
            description="Quinoa with yoghurt and fresh seasonal fruit."
          />
        </div>

        <div className="menu-group">
          <h3>Special Toasts</h3>

          <MenuItem
            name="Lea Toast"
            price="8,50 €"
            description="Avocado, smoked salmon, poached egg, grated tomato and fresh lime."
          />

          <MenuItem
            name="Catalan Toast"
            price="6,00 €"
            description="Sourdough bread, grated tomato and Serrano ham."
          />
        </div>
      </section>


      {/* LUNCH & TAPAS */}
      <section id="lunch" className="menu-section menu-section-dark">
        <span className="section-kicker">
          KITCHEN OPEN
        </span>

        <h2>Lunch &amp; Tapas</h2>

        <p className="menu-note">
          Hours: 12:30 to 15:30
        </p>

        <p className="menu-intro">
          Our kitchen prepares dishes to order using fresh market ingredients.
        </p>

        <div className="menu-group">
          <h3>Our Sandwiches</h3>

          <MenuItem
            name="Iberian Ham & Manchego Cheese Sandwich"
            price="7,00 €"
            description="A timeless classic made with the best ham from the house."
          />

          <MenuItem
            name="Roast Beef Sandwich"
            price="8,00 €"
            description="Grana Padano cheese and romesco sauce."
          />

          <MenuItem
            name="Chicken Breast Sandwich"
            price="6,00 €"
            description="Sun-dried tomato and fried green pepper."
          />

          <MenuItem
            name="Marrakech Sandwich"
            price="7,00 €"
            description="Lettuce, black olives, grated carrot, tuna, French fries and homemade mayonnaise."
          />

          <MenuItem
            name="Smoked Palometa Sandwich"
            price="6,90 €"
            description="Crispy artisan bread with fresh cheese."
          />

          <MenuItem
            name="Beef Pepito Sandwich"
            price="8,00 €"
            description="Roasted green pepper and caramelised onion."
          />
        </div>

        <div className="menu-group">
          <h3>Tapas &amp; Sharing</h3>

          <MenuItem
            name="Thai-Style Mussels"
            price="8,00 €"
          />

          <MenuItem
            name="Iberian Surprise"
            price="7,90 €"
          />

          <MenuItem
            name="Chicken Wings"
            price="5,90 €"
            description="Spicy marinated or crispy."
          />

          <MenuItem
            name="Amal Beef Meatballs"
            price="7,00 €"
          />

          <MenuItem
            name="Aubergine Cannelloni"
            price="8,00 €"
          />

          <MenuItem
            name="Fresh Squid with Tartare Sauce"
            price="9,00 €"
          />
        </div>
      </section>


      {/* STARTERS */}
      <section id="starters" className="menu-section">
        <span className="section-kicker">
          DINNER MENU
        </span>

        <h2>Starters</h2>

        <div className="menu-group">
          <h3>Cold Starters</h3>

          <MenuItem
            name="Tuna Tataki"
            price="13,50 €"
            description="Bluefin tuna with wakame, pink ginger and its sauce."
          />

          <MenuItem
            name="Salmon Sashimi"
            price="15,90 €"
            description="Homemade marinated salmon with pickled radish and sesame oil."
          />

          <MenuItem
            name="Capellanes Salad"
            price="12,90 €"
            description="Capellán fish, Valencian tomato, black olives and spring onion."
          />

          <MenuItem
            name="Sea Bass Ceviche"
            price="16,90 €"
            description="Diced sea bass marinated in Peruvian style with lime, lemon and onion."
          />

          <MenuItem
            name="Salmon Tartare"
            price="17,80 €"
            description="Smoked salmon, fresh onion, mango, avocado and black caviar."
          />
        </div>

        <div className="menu-group">
          <h3>Salads</h3>

          <MenuItem
            name="Lechalote Salad"
            price="14,50 €"
            description="Rocket, lamb's lettuce, carrot, sweetcorn, white asparagus, shallot onion and smoked palometa with vinaigrette."
          />

          <MenuItem
            name="Fresh Seasonal Vegan Salad"
            price="9,00 €"
            description="Mixed leaves, Valencian tomato, green apple, nuts and homemade vinaigrette."
          />

          <MenuItem
            name="Hummus"
            price="7,40 €"
            description="Homemade chickpea hummus served with fresh vegetables."
          />
        </div>

        <div className="menu-group">
          <h3>Hot Starters</h3>

          <MenuItem
            name="Fried Camembert"
            price="11,50 €"
            description="Served with a red berry emulsion."
          />

          <MenuItem
            name="Prestige Aubergine"
            price="14,00 €"
            description="Diced aubergine with foie micuit, rosemary honey and sun-dried tomato."
          />

          <MenuItem
            name="Garlic Squid"
            price="13,00 €"
            description="Fresh squid with garlic and chilli."
          />

          <MenuItem
            name="Grilled Octopus"
            price="17,00 €"
            description="Octopus leg with smoked paprika, Maldon salt and potato."
          />

          <MenuItem
            name="Iberian Charcuterie Board"
            price="15,00 €"
            description="Five varieties of Iberian cured meats, tomato and toasted bread."
          />

          <MenuItem
            name="Spanish Sausage Grill"
            price="12,80 €"
            description="A selection of traditional sausages and cured meats with roasted potatoes."
          />

          <MenuItem
            name="Artisan Cheese Board"
            price="15,00 €"
            description="Selection of artisan cheeses with jam and nuts."
          />
        </div>
      </section>


      {/* MAIN COURSES */}
      <section id="mains" className="menu-section menu-section-dark">
        <span className="section-kicker">
          MAIN COURSES
        </span>

        <h2>Meat &amp; Fish</h2>

        <div className="menu-group">
          <h3>Meat</h3>

          <MenuItem
            name="Galician Beef Entrecôte (300g)"
            price="22,00 €"
            description="Galician beef entrecôte with green peppercorn sauce."
          />

          <MenuItem
            name="Iberian Pork Secreto"
            price="18,50 €"
            description="Grilled and served with chimichurri sauce."
          />

          <MenuItem
            name="Red Curry Chicken"
            price="12,50 €"
            description="Chicken cooked in a red curry sauce."
          />
        </div>

        <div className="menu-group">
          <h3>Fish</h3>

          <MenuItem
            name="Cod Loin"
            price="17,50 €"
            description="Perfectly prepared cod loin."
          />

          <MenuItem
            name="Lechalote Sea Bass"
            price="18,00 €"
            description="Sea bass prepared in our house style."
          />

          <MenuItem
            name="Curry or Grilled Salmon"
            price="15,30 €"
            description="Grilled salmon fillet or served with a mild curry sauce."
          />
        </div>

        <p className="menu-note">
          All our main courses are served with rice,
          vegetables and potatoes.
        </p>
      </section>


      {/* DESSERTS */}
      <section id="desserts" className="menu-section">
        <span className="section-kicker">
          DESSERTS
        </span>

        <h2>Something Sweet</h2>

        <div className="menu-group">
          <MenuItem
            name="Pistachio Cheesecake"
            price="6,50 €"
            description="Creamy cheesecake with a touch of pistachio."
          />

          <MenuItem
            name="Chocolate Coulant"
            price="6,00 €"
            description="Chocolate cake with a molten centre."
          />

          <MenuItem
            name="Tarte Tatin"
            price="5,00 €"
            description="Classic French tart with caramelised apples."
          />

          <MenuItem
            name="Apple Half Moon"
            price="5,50 €"
            description="Crispy puff pastry filled with baked apple."
          />

          <MenuItem
            name="Artisan Ice Cream"
            price="2,50 €"
            description="Price per scoop. Pistachio, strawberry, vanilla, chocolate or turrón."
          />
        </div>
      </section>


      {/* VEGAN / KIDS */}
      <section id="kids" className="menu-section menu-section-light">
        <div className="menu-columns">

          <div>
            <span className="section-kicker">
              VEGAN OPTIONS
            </span>

            <h2>Vegan</h2>

            <MenuItem
              name="Vegan Burger"
              price="10,50 €"
              description="Served with sweet potato fries."
            />
          </div>

          <div>
            <span className="section-kicker">
              KIDS MENU
            </span>

            <h2>For the Little Ones</h2>

            <MenuItem
              name="Chicken Fingers with French Fries"
              price="6,90 €"
            />

            <MenuItem
              name="Cheeseburger with French Fries"
              price="6,90 €"
            />

            <MenuItem
              name="Fish Shapes with French Fries"
              price="6,90 €"
            />
          </div>

        </div>
      </section>


      {/* RESERVATION */}
      <section className="carta-reservation">
        <div>
          <h2>Book your table</h2>
          <p>We are ready to welcome you.</p>
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
        © 2025 L&apos;Échalote International Café Gastrobar.
        All rights reserved.
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