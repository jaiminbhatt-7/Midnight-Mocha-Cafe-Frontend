import { useState } from "react";

export default function Index() {
  const [activeCategoryFilter, setActiveCategoryFilter] = useState("all");

  const menuItems = [
    {
      id: 1,
      name: "Midnight Espresso",
      category: "coffee",
      price: "$3.50",
      description: "Bold and rich espresso shot",
      image: "☕",
    },
    {
      id: 2,
      name: "Mocha Dream",
      category: "coffee",
      price: "$5.00",
      description: "Espresso with steamed milk and chocolate",
      image: "🍫",
    },
    {
      id: 3,
      name: "Caramel Latte",
      category: "coffee",
      price: "$4.75",
      description: "Smooth latte with caramel drizzle",
      image: "☕",
    },
    {
      id: 4,
      name: "Iced Americano",
      category: "cold",
      price: "$4.00",
      description: "Chilled espresso with cold water",
      image: "🧊",
    },
    {
      id: 5,
      name: "Cold Brew",
      category: "cold",
      price: "$4.50",
      description: "Smooth, naturally sweet cold brew",
      image: "🧊",
    },
    {
      id: 6,
      name: "Matcha Latte",
      category: "specialty",
      price: "$5.50",
      description: "Green matcha with steamed milk",
      image: "💚",
    },
    {
      id: 7,
      name: "Vanilla Cappuccino",
      category: "coffee",
      price: "$4.75",
      description: "Classic cappuccino with vanilla",
      image: "☕",
    },
    {
      id: 8,
      name: "Iced Oat Milk Latte",
      category: "cold",
      price: "$4.75",
      description: "Creamy oat milk iced latte",
      image: "🥛",
    },
  ];

  const filteredItems =
    activeCategoryFilter === "all"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategoryFilter);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex items-center justify-between h-16 px-4 md:px-6">
          <div className="flex items-center gap-2">
            <div className="text-2xl font-bold text-primary">🌙</div>
            <span className="text-xl font-bold text-primary hidden sm:inline">
              Midnight Mocha
            </span>
          </div>
          <div className="flex gap-8">
            <a
              href="#menu"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Menu
            </a>
            <a
              href="#about"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-primary/80 py-24 md:py-32">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-10 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        </div>
        <div className="container relative z-10 px-4 md:px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            Midnight Mocha
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
            Your favorite student-run café. Great coffee, great vibes, great
            prices.
          </p>
          <button className="inline-block bg-accent hover:bg-accent/90 text-foreground font-semibold py-3 px-8 rounded-lg transition-all duration-200 transform hover:scale-105">
            Order Now
          </button>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 md:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Menu</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Crafted with care and student budgets in mind. Every cup is made
              fresh to order.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {[
              { id: "all", label: "All" },
              { id: "coffee", label: "☕ Coffee" },
              { id: "cold", label: "🧊 Cold Drinks" },
              { id: "specialty", label: "✨ Specialty" },
            ].map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategoryFilter(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                  activeCategoryFilter === category.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Menu Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-card rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-border hover:border-accent"
              >
                <div className="text-5xl mb-4">{item.image}</div>
                <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {item.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-accent">
                    {item.price}
                  </span>
                  <button className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold py-2 px-4 rounded-lg transition-all duration-200 text-sm">
                    Add
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Dishes Section */}
      <section className="py-20 md:py-32 bg-secondary/30 border-t border-border">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Student Favorites
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These are our most-loved drinks, trusted by students across
              campus.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "The Midnight Special",
                desc: "Our signature espresso blend with a touch of cinnamon",
                icon: "🌟",
              },
              {
                title: "Late Night Study Session",
                desc: "Triple shot espresso with honey and almond milk",
                icon: "📚",
              },
              {
                title: "The Energizer",
                desc: "Double espresso with a splash of cream. Fast and strong.",
                icon: "⚡",
              },
              {
                title: "Chill & Study",
                desc: "Iced vanilla latte perfect for those long study sessions",
                icon: "❄️",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-border group"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-base">{item.desc}</p>
                <button className="mt-6 text-primary font-semibold hover:text-primary/80 transition-colors">
                  Learn More →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                About Midnight Mocha
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                Started by students, for students. We believe the best café is
                one that understands your life—late night study sessions, early
                morning classes, and everything in between.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                Our mission is to provide quality coffee at prices that won't
                break a student budget. Every cup is made with care and passion.
              </p>
              <p className="text-lg text-muted-foreground">
                Whether you need a quick caffeine boost or a cozy spot to study,
                we've got you covered.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary via-primary/90 to-accent rounded-3xl p-8 text-center text-white">
              <div className="text-7xl mb-4">☕</div>
              <h3 className="text-3xl font-bold mb-4">Fresh. Quality. Fast.</h3>
              <p className="text-lg text-white/90">
                Every drink made fresh. Every order matters. Every student
                welcome.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Contact Section */}
      <section
        id="contact"
        className="py-20 md:py-32 bg-primary/5 border-t border-border"
      >
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Visit Us</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Stop by and grab your favorite drink. We're right here on campus.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Location Card */}
            <div className="bg-card rounded-2xl p-8 border border-border">
              <div className="text-5xl mb-4">📍</div>
              <h3 className="text-2xl font-bold mb-4">Location</h3>
              <p className="text-muted-foreground mb-4">
                Campus Center, Building A
                <br />
                123 Student Lane
                <br />
                Your City, ST 12345
              </p>
              <button className="text-primary font-semibold hover:text-primary/80 transition-colors">
                Get Directions →
              </button>
            </div>

            {/* Contact Card */}
            <div className="bg-card rounded-2xl p-8 border border-border">
              <div className="text-5xl mb-4">☎️</div>
              <h3 className="text-2xl font-bold mb-4">Hours & Contact</h3>
              <p className="text-muted-foreground mb-4">
                Monday - Friday: 7AM - 9PM
                <br />
                Saturday - Sunday: 9AM - 6PM
                <br />
                <br />
                📧 hello@midnightmocha.cafe
                <br />
                📱 (555) 123-4567
              </p>
              <button className="text-primary font-semibold hover:text-primary/80 transition-colors">
                Send Message →
              </button>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="mt-12 bg-secondary/50 rounded-2xl overflow-hidden border border-border h-96 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">🗺️</div>
              <p className="text-lg font-semibold text-muted-foreground">
                Campus Center, Building A
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12 border-t border-border">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="text-2xl">🌙</div>
                <span className="text-lg font-bold">Midnight Mocha</span>
              </div>
              <p className="text-background/70">
                Student-run café with the best coffee and vibes on campus.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-background/70">
                <li>
                  <a
                    href="#menu"
                    className="hover:text-background transition-colors"
                  >
                    Menu
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="hover:text-background transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:text-background transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <button className="text-background/70 hover:text-background transition-colors">
                  Instagram
                </button>
                <button className="text-background/70 hover:text-background transition-colors">
                  Twitter
                </button>
                <button className="text-background/70 hover:text-background transition-colors">
                  Facebook
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-background/20 pt-8 text-center text-background/60">
            <p>© 2024 Midnight Mocha. Made by students, for students. ☕</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
