"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  BadgeCheck,
  Factory,
  Globe,
  Headset,
  Languages,
  Menu,
  Moon,
  Search,
  ShieldCheck,
  Sun,
  Truck,
  X,
} from "lucide-react";

type Product = {
  name: string;
  category: string;
  description: string;
  image: string;
};

const navItems = [
  "Home",
  "Products",
  "Industries",
  "About Us",
  "Catalog",
  "Resources",
  "News",
  "Contact",
];

const products: Product[] = [
  {
    name: "Alternators",
    category: "Core Components",
    description: "High-output charging systems engineered for OEM-level performance.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/a/a5/Automotive_alternator.jpg",
  },
  {
    name: "Starters",
    category: "Core Components",
    description: "Reliable cold-start performance for passenger and heavy-duty engines.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/8/83/Automobile_starter.JPG",
  },
  {
    name: "Voltage Regulators",
    category: "Electronics",
    description: "Precision voltage control for stable charging systems.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/ce/7812_voltage_regulator.jpg",
  },
  {
    name: "Solenoids",
    category: "Electronics",
    description: "Heavy-cycle switching designed for durable engagement.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/a/a5/Towngas_China_solenoid_cut-off_valve_%281%29.jpg",
  },
  {
    name: "Rectifiers",
    category: "Electronics",
    description: "Efficient AC-to-DC conversion modules with thermal stability.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/0/0d/3PM4_diode_bridge%2C_IPRS_Baneasa_1988_%2801%29.jpg",
  },
  {
    name: "Brush Holders",
    category: "Electronics",
    description: "Long-life brush systems optimized for reduced wear.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/65/Commutator_-_Crocker-Wheeler_Carbon_Brush_Gear_%28600dpi%29.png",
  },
  {
    name: "Armatures",
    category: "Rotating",
    description: "Balanced copper windings for dependable torque transfer.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/48/377._Armature_of_British_Westinghouse_Electric_and_Manufacturing_Co.%27s_150_h.-p._Single-Phase_Railway_Motor._Single-Phase_Railway_Motor.jpg",
  },
  {
    name: "Rotors",
    category: "Rotating",
    description: "High-speed rotor assemblies with tight tolerance standards.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/31/Stick_blender_Electrolux_AEG_HB_9807_-_rotor_of_the_electric_motor-4312.jpg",
  },
  {
    name: "Stators",
    category: "Rotating",
    description: "Durable stator cores designed for heat and vibration resistance.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/0/0f/Stator_Winding_of_a_BLDC_Motor.jpg",
  },
  {
    name: "Repair Kits",
    category: "Service Kits",
    description: "All-in-one rebuild kits that accelerate workshop turnaround.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/9/97/Toolkits.jpg",
  },
  {
    name: "Heavy Duty Components",
    category: "Specialized",
    description: "Extreme-duty electrical parts for vocational fleets.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/39/US_Army_51931_CAMP_TAJI%2C_Iraq-Before_removing_an_engine_from_a_fuel_truck%2C_Spc._Austin_Hunt_%28left%29%2C_from_Odessa%2C_Texas%2C_and_Spc._Paul_Aragon_%28right%29%2C_from_El_Paso%2C_Texas%2C_both_light_wheeled_mechanics_in_Company_E.jpg",
  },
  {
    name: "Agricultural Equipment Parts",
    category: "Specialized",
    description: "Field-ready electrical systems for tractors and harvesters.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/8/85/Ford_8N.jpg",
  },
  {
    name: "Marine Electrical Components",
    category: "Specialized",
    description: "Corrosion-resistant marine charging and starting solutions.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/1/13/B%C3%A5tgenerator.jpg",
  },
];

const productCategories = [
  "All",
  "Core Components",
  "Electronics",
  "Rotating",
  "Service Kits",
  "Specialized",
];

const whyChooseUs = [
  { title: "OEM Quality", icon: BadgeCheck },
  { title: "ISO Certified", icon: ShieldCheck },
  { title: "Global Distribution", icon: Globe },
  { title: "Extensive Product Catalog", icon: Factory },
  { title: "Fast Shipping", icon: Truck },
  { title: "Engineering Expertise", icon: Factory },
  { title: "Technical Support", icon: Headset },
  { title: "Warranty Protection", icon: ShieldCheck },
];

const industries = [
  "Passenger Vehicles",
  "Commercial Trucks",
  "Heavy Duty Equipment",
  "Agriculture",
  "Marine",
  "Industrial Equipment",
  "Construction",
  "Fleet Operations",
];

const featuredProducts = [
  {
    sku: "ALT-9802HD",
    description: "220A smart alternator with integrated thermal management",
    brands: "Ford, GM, Freightliner",
    image:
      "https://images.unsplash.com/photo-1486006920555-c77dcf18193c?auto=format&fit=crop&w=1000&q=80",
  },
  {
    sku: "STR-4210X",
    description: "Gear-reduction starter for high-compression diesel platforms",
    brands: "Cummins, Volvo, Scania",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1000&q=80",
  },
  {
    sku: "REG-3380EV",
    description: "Voltage regulator module with adaptive charging profile",
    brands: "Toyota, Hyundai, Nissan",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1000&q=80",
  },
  {
    sku: "MRN-7725S",
    description: "Salt-resistant marine starter with sealed bearing system",
    brands: "Yamaha, Mercury, Suzuki",
    image:
      "https://images.unsplash.com/photo-1530268729831-4b0b9e170218?auto=format&fit=crop&w=1000&q=80",
  },
];

const stats = [
  { label: "Years Experience", value: 30, suffix: "+" },
  { label: "Products", value: 15000, suffix: "+" },
  { label: "Countries Served", value: 80, suffix: "+" },
  { label: "Distribution Partners", value: 500, suffix: "+" },
  { label: "Customer Satisfaction", value: 99, suffix: "%" },
];

const certifications = ["ISO 9001", "IATF 16949", "CE", "RoHS"];

const resources = [
  {
    title: "Industry News",
    description: "Supply chain, EV transition, and aftermarket demand analysis.",
  },
  {
    title: "Product Updates",
    description: "New SKU launches, supersessions, and compatibility updates.",
  },
  {
    title: "Technical Articles",
    description: "Deep dives on diagnostics, charging systems, and durability.",
  },
  {
    title: "Installation Guides",
    description: "Step-by-step service guidance for workshop technicians.",
  },
];

const testimonials = [
  {
    quote:
      "Their alternator line reduced our return rate by 28% while improving on-time availability.",
    author: "Director of Sourcing, North American Distributor",
  },
  {
    quote:
      "We rely on their engineering support for complex fleet applications and custom fitments.",
    author: "OEM Program Manager, Commercial Vehicle Brand",
  },
  {
    quote:
      "Exceptional documentation, responsive support, and product quality that matches OEM expectations.",
    author: "Regional Purchasing Lead, Global Wholesaler",
  },
];

const mapPoints = [
  { name: "Headquarters", x: "28%", y: "36%" },
  { name: "Distribution Center", x: "44%", y: "34%" },
  { name: "Distribution Center", x: "58%", y: "44%" },
  { name: "International Partner", x: "72%", y: "38%" },
  { name: "International Partner", x: "81%", y: "60%" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

function SectionHeading({
  eyebrow,
  title,
  subtitle,
  className,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  className?: string;
}) {
  return (
    <div className={`mx-auto mb-10 max-w-3xl text-center ${className ?? ""}`}>
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-[var(--color-heading)] md:text-4xl">
        {title}
      </h2>
      <p className="mt-3 text-base text-[var(--color-muted)] md:text-lg">{subtitle}</p>
    </div>
  );
}

function CountUp({ value, suffix }: { value: number; suffix: string }) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const duration = 1000;
    const start = performance.now();
    let frame = 0;

    const tick = (time: number) => {
      const progress = Math.min((time - start) / duration, 1);
      const eased = 1 - (1 - progress) * (1 - progress);
      setDisplayValue(Math.floor(value * eased));

      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [value]);

  return (
    <span>
      {displayValue.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function AutomotiveSite() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window === "undefined") {
      return "light";
    }
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    return savedTheme === "dark" || (!savedTheme && prefersDark) ? "dark" : "light";
  });
  const [language, setLanguage] = useState("EN");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [featuredIndex, setFeaturedIndex] = useState(0);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [dealerQuery, setDealerQuery] = useState("");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const id = setInterval(() => {
      setFeaturedIndex((prev) => (prev + 1) % featuredProducts.length);
    }, 4200);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 5200);
    return () => clearInterval(id);
  }, []);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const byCategory = selectedCategory === "All" || product.category === selectedCategory;
      const bySearch =
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase());
      return byCategory && bySearch;
    });
  }, [searchTerm, selectedCategory]);

  const dealerLocations = [
    "Detroit, USA",
    "Monterrey, Mexico",
    "Sao Paulo, Brazil",
    "Rotterdam, Netherlands",
    "Dubai, UAE",
    "Singapore",
  ];

  const filteredDealers = dealerLocations.filter((location) =>
    location.toLowerCase().includes(dealerQuery.toLowerCase()),
  );

  return (
    <div className="bg-[var(--color-bg)] text-[var(--color-body)]">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[var(--color-surface)]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
          <a href="#" className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-[var(--color-accent)] text-white shadow-lg">
              AX
            </div>
            <div>
              <p className="surface-muted text-xs uppercase tracking-[0.2em]">Automotive Electrical</p>
              <p className="font-heading surface-text text-xl font-bold">Axion Drive Systems</p>
            </div>
          </a>

          <nav className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => {
              const isProducts = item === "Products";
              return (
                <div
                  key={item}
                  onMouseEnter={() => isProducts && setShowMegaMenu(true)}
                  onMouseLeave={() => isProducts && setShowMegaMenu(false)}
                  className="relative"
                >
                  <a href={`#${item.toLowerCase().replace(/\s+/g, "-")}`} className="nav-link">
                    {item}
                  </a>
                  {isProducts && showMegaMenu && (
                    <div className="absolute left-1/2 top-full mt-5 w-[680px] -translate-x-1/2 rounded-2xl border border-white/15 bg-[var(--color-surface)] p-6 shadow-2xl">
                      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-accent)]">
                        Product Navigation
                      </p>
                      <div className="grid grid-cols-3 gap-3">
                        {products.slice(0, 9).map((product) => (
                          <a key={product.name} href="#products" className="mega-link">
                            {product.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <label className="surface-text flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-2 text-sm">
              <Languages className="h-4 w-4" />
              <select
                aria-label="Language selector"
                value={language}
                onChange={(event) => setLanguage(event.target.value)}
                className="surface-text bg-transparent text-sm outline-none"
              >
                <option value="EN">EN</option>
                <option value="ES">ES</option>
                <option value="FR">FR</option>
              </select>
            </label>
            <button
              type="button"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="rounded-full border border-white/15 bg-white/5 p-2"
              aria-label="Toggle dark mode"
            >
              {theme === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
            </button>
          </div>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="rounded-lg border border-white/15 p-2 lg:hidden"
            aria-label="Toggle mobile navigation"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="border-t border-white/10 px-4 py-4 lg:hidden">
            <div className="grid gap-2">
              {navItems.map((item) => (
                <a key={item} href={`#${item.toLowerCase().replace(/\s+/g, "-")}`} className="nav-link block py-2">
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <main>
        <section id="home" className="relative overflow-hidden">
          <div className="hero-pattern" aria-hidden="true" />
          <Image
            src="https://images.unsplash.com/photo-1504215680853-026ed2a45def?auto=format&fit=crop&w=2200&q=80"
            alt="Automotive manufacturing facility"
            fill
            priority
            className="object-cover opacity-20"
          />
          <div className="relative mx-auto grid min-h-[76vh] max-w-7xl items-center gap-10 px-4 py-20 md:grid-cols-2 md:px-8">
            <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.55 }}>
              <p className="mb-5 inline-flex rounded-full border border-white/35 bg-[rgba(5,12,22,0.5)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-[0_4px_14px_rgba(0,0,0,0.28)]">
                Premium Automotive Electrical Manufacturing
              </p>
              <h1 className="font-heading text-4xl font-bold tracking-tight text-white md:text-6xl">
                Powering Automotive Excellence Worldwide
              </h1>
              <p className="mt-5 max-w-xl text-lg text-white/85">
                Premium alternators, starters, electrical components, and aftermarket solutions trusted by
                distributors and manufacturers across the globe.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#products" className="btn-primary">
                  Explore Products
                </a>
                <a href="#contact" className="btn-secondary">
                  Become a Distributor
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative mx-auto w-full max-w-md"
            >
              <div className="glass-card p-5">
                <Image
                  src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=1000&q=80"
                  alt="Featured automotive electrical component"
                  width={500}
                  height={340}
                  className="rounded-xl object-cover"
                />
              </div>
              <div className="floating-orb floating-orb-1" aria-hidden="true" />
              <div className="floating-orb floating-orb-2" aria-hidden="true" />
            </motion.div>
          </div>
        </section>

        <motion.section
          id="products"
          className="section-shell"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
        >
          <SectionHeading
            eyebrow="Products"
            title="Comprehensive Electrical Parts Portfolio"
            subtitle="Engineered for fit, durability, and consistent aftermarket performance across platforms."
          />

          <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <label className="flex items-center gap-2 rounded-xl border border-[var(--color-line)] bg-[var(--color-panel)] px-4 py-3 md:max-w-md md:flex-1">
              <Search className="h-4 w-4 text-[var(--color-muted)]" />
              <input
                type="search"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Search by product name or function"
                className="w-full bg-transparent text-sm outline-none"
                aria-label="Product search"
              />
            </label>
            <div className="flex flex-wrap gap-2">
              {productCategories.map((category) => (
                <button
                  type="button"
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? "pill-active" : "pill"}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {filteredProducts.map((product, index) => (
              <motion.article
                key={product.name}
                className="product-card group"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.03 }}
              >
                <div className="relative h-44 overflow-hidden rounded-xl">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    unoptimized
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="mt-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-accent)]">{product.category}</p>
                  <h3 className="mt-2 text-xl font-semibold text-[var(--color-heading)]">{product.name}</h3>
                  <p className="mt-2 text-sm text-[var(--color-muted)]">{product.description}</p>
                  <a href="#contact" className="mt-4 inline-block text-sm font-semibold text-[var(--color-accent)]">
                    Learn More
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <section id="industries" className="section-shell">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Built for Enterprise Procurement Confidence"
            subtitle="Process-driven manufacturing, global logistics, and engineering-backed support from RFQ to fulfillment."
          />
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {whyChooseUs.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="feature-card">
                  <Icon className="h-6 w-6 text-[var(--color-accent)]" />
                  <h3 className="mt-3 font-semibold text-[var(--color-heading)]">{item.title}</h3>
                </div>
              );
            })}
          </div>

          <SectionHeading
            className="mt-16"
            eyebrow="Industries Served"
            title="Multi-Sector Coverage"
            subtitle="Application-tested electrical solutions for automotive, industrial, and off-highway ecosystems."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((industry) => (
              <article key={industry} className="industry-card">
                <h3 className="font-semibold text-[var(--color-heading)]">{industry}</h3>
              </article>
            ))}
          </div>
        </section>

        <section className="section-shell" id="catalog">
          <SectionHeading
            eyebrow="Featured"
            title="Featured Products Carousel"
            subtitle="Flagship SKUs optimized for durability, fitment consistency, and broad application coverage."
          />

          <div className="relative overflow-hidden rounded-3xl border border-[var(--color-line)] bg-[var(--color-panel)] p-4 md:p-8">
            <div
              className="flex transition-transform duration-700"
              style={{ transform: `translateX(-${featuredIndex * 100}%)` }}
            >
              {featuredProducts.map((product) => (
                <article key={product.sku} className="w-full shrink-0 md:grid md:grid-cols-2 md:gap-8">
                  <div className="relative h-60 overflow-hidden rounded-2xl md:h-80">
                    <Image src={product.image} alt={product.sku} fill className="object-cover" />
                  </div>
                  <div className="mt-6 md:mt-0">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-accent)]">SKU {product.sku}</p>
                    <h3 className="mt-2 text-2xl font-bold text-[var(--color-heading)]">{product.description}</h3>
                    <p className="mt-3 text-[var(--color-muted)]">Compatible vehicle brands: {product.brands}</p>
                    <a href="/catalogs/master-catalog.pdf" className="btn-primary mt-6 inline-flex" download>
                      Download Datasheet
                    </a>
                  </div>
                </article>
              ))}
            </div>
            <div className="mt-6 flex items-center justify-center gap-2">
              {featuredProducts.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setFeaturedIndex(index)}
                  className={index === featuredIndex ? "dot-active" : "dot"}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell" id="about-us">
          <SectionHeading
            eyebrow="Performance Metrics"
            title="Company Statistics"
            subtitle="Measurable scale, supply reliability, and long-term partner retention."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {stats.map((stat) => (
              <article key={stat.label} className="stat-card">
                <p className="text-4xl font-bold text-[var(--color-heading)]">
                  <CountUp value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-2 text-sm text-[var(--color-muted)]">{stat.label}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-shell" id="resources">
          <div className="grid gap-8 rounded-3xl border border-[var(--color-line)] bg-[var(--color-panel)] p-6 md:grid-cols-2 md:p-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-accent)]">Distributor Program</p>
              <h3 className="mt-3 text-3xl font-bold text-[var(--color-heading)]">Become an Authorized Distributor</h3>
              <p className="mt-3 text-[var(--color-muted)]">
                Expand your portfolio with high-demand automotive electrical SKUs, engineering-backed sales
                support, and accelerated logistics programs.
              </p>
              <ul className="mt-5 space-y-2 text-sm text-[var(--color-muted)]">
                <li>Volume pricing and territory support</li>
                <li>Marketing assets and technical training</li>
                <li>Dedicated account and warranty assistance</li>
              </ul>
              <a href="#contact" className="btn-primary mt-6 inline-flex">
                Become an Authorized Distributor
              </a>
            </div>
            <div className="relative h-72 overflow-hidden rounded-2xl">
              <Image
                src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1200&q=80"
                alt="Distribution and logistics"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <SectionHeading
            className="mt-20"
            eyebrow="Compliance"
            title="Certifications"
            subtitle="Certified quality processes aligned with global automotive standards."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {certifications.map((cert) => (
              <article key={cert} className="cert-card">
                <ShieldCheck className="h-7 w-7 text-[var(--color-accent)]" />
                <p className="mt-3 text-lg font-semibold text-[var(--color-heading)]">{cert}</p>
              </article>
            ))}
          </div>

          <SectionHeading
            className="mt-16"
            eyebrow="News & Resources"
            title="Latest Insights"
            subtitle="Actionable updates and technical content to support procurement and maintenance teams."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {resources.map((resource) => (
              <article key={resource.title} className="resource-card">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-accent)]">Resource</p>
                <h3 className="mt-2 text-xl font-semibold text-[var(--color-heading)]">{resource.title}</h3>
                <p className="mt-2 text-sm text-[var(--color-muted)]">{resource.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-shell" id="news">
          <SectionHeading
            eyebrow="Partner Feedback"
            title="Testimonials"
            subtitle="Trusted by distributors, OEM procurement leaders, and global aftermarket organizations."
          />
          <div className="rounded-3xl border border-[var(--color-line)] bg-[var(--color-panel)] p-8 text-center">
            <p className="text-xl font-medium leading-relaxed text-[var(--color-heading)]">
              “{testimonials[testimonialIndex]?.quote}”
            </p>
            <p className="mt-4 text-sm text-[var(--color-muted)]">{testimonials[testimonialIndex]?.author}</p>
            <div className="mt-5 flex justify-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setTestimonialIndex(index)}
                  className={index === testimonialIndex ? "dot-active" : "dot"}
                  aria-label={`Select testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell" id="global-presence">
          <SectionHeading
            eyebrow="Global Presence"
            title="Worldwide Operational Footprint"
            subtitle="Headquarters, regional warehouses, and partner networks spanning key global corridors."
          />
          <div className="relative overflow-hidden rounded-3xl border border-[var(--color-line)] bg-[var(--color-panel)] p-6 md:p-10">
            <div className="map-grid" aria-hidden="true" />
            <div className="relative h-64 md:h-80">
              {mapPoints.map((point, index) => (
                <button
                  key={`${point.name}-${index}`}
                  type="button"
                  className="map-point"
                  style={{ left: point.x, top: point.y }}
                  aria-label={point.name}
                >
                  <span>{point.name}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell" id="contact">
          <div className="grid gap-8 rounded-3xl border border-[var(--color-line)] bg-[var(--color-panel)] p-6 md:grid-cols-2 md:p-10">
            <div>
              <SectionHeading
                eyebrow="Contact"
                title="Let’s Build Your Supply Advantage"
                subtitle="Connect with our sales and engineering teams for RFQs, technical inquiries, and distribution opportunities."
              />
              <div className="space-y-2 text-sm text-[var(--color-muted)]">
                <p>Axion Drive Systems</p>
                <p>1280 Industrial Parkway, Detroit, MI</p>
                <p>+1 (800) 555-0171</p>
                <p>partners@axiondrivesystems.com</p>
              </div>
              <div className="mt-6 rounded-xl border border-[var(--color-line)] bg-[var(--color-bg-soft)] p-4">
                <p className="text-sm font-semibold text-[var(--color-heading)]">Dealer Locator</p>
                <input
                  type="text"
                  value={dealerQuery}
                  onChange={(event) => setDealerQuery(event.target.value)}
                  placeholder="Search city or country"
                  className="mt-3 w-full rounded-lg border border-[var(--color-line)] bg-transparent px-3 py-2 text-sm outline-none"
                />
                <ul className="mt-3 space-y-1 text-sm text-[var(--color-muted)]">
                  {filteredDealers.slice(0, 4).map((dealer) => (
                    <li key={dealer}>{dealer}</li>
                  ))}
                  {filteredDealers.length === 0 && <li>No locations found.</li>}
                </ul>
              </div>
            </div>

            <form className="grid gap-3" aria-label="Contact form">
              <input type="text" placeholder="Name" className="input" required />
              <input type="text" placeholder="Company" className="input" required />
              <input type="email" placeholder="Email" className="input" required />
              <input type="tel" placeholder="Phone" className="input" />
              <input type="text" placeholder="Country" className="input" />
              <select className="input" defaultValue="">
                <option value="" disabled>
                  Inquiry Type
                </option>
                <option>Distribution Partnership</option>
                <option>Product Inquiry</option>
                <option>Technical Support</option>
                <option>Warranty</option>
              </select>
              <textarea placeholder="Message" rows={4} className="input" />
              <button type="submit" className="btn-primary mt-2 justify-center">
                Submit Inquiry
              </button>
              <div className="mt-3 h-44 rounded-xl border border-dashed border-[var(--color-line)] bg-[var(--color-bg-soft)] p-3 text-sm text-[var(--color-muted)]">
                Google Map Placeholder
              </div>
            </form>
          </div>
        </section>
      </main>

      <footer className="mt-8 border-t border-[var(--color-line)] bg-[var(--color-surface)] px-4 py-12 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 lg:grid-cols-6">
          <div>
            <h4 className="footer-title">Products</h4>
            <p className="footer-link">Alternators</p>
            <p className="footer-link">Starters</p>
            <p className="footer-link">Heavy Duty</p>
          </div>
          <div>
            <h4 className="footer-title">Company</h4>
            <p className="footer-link">About Us</p>
            <p className="footer-link">Global Presence</p>
            <p className="footer-link">Careers</p>
          </div>
          <div>
            <h4 className="footer-title">Support</h4>
            <p className="footer-link">Technical Docs</p>
            <p className="footer-link">Warranty</p>
            <p className="footer-link">Dealer Locator</p>
          </div>
          <div>
            <h4 className="footer-title">Resources</h4>
            <a href="/catalogs/master-catalog.pdf" download className="footer-link block">
              Download Catalog
            </a>
            <p className="footer-link">News</p>
            <p className="footer-link">Guides</p>
          </div>
          <div>
            <h4 className="footer-title">Contact</h4>
            <p className="footer-link">+1 (800) 555-0171</p>
            <p className="footer-link">partners@axiondrivesystems.com</p>
            <p className="footer-link">Detroit, MI</p>
          </div>
          <div>
            <h4 className="footer-title">Newsletter</h4>
            <input type="email" placeholder="Your business email" className="input" />
            <button type="button" className="btn-secondary mt-2 w-full justify-center">
              Subscribe
            </button>
            <p className="surface-muted mt-3 text-xs">LinkedIn | YouTube | X</p>
          </div>
        </div>
        <div className="surface-muted mx-auto mt-8 flex max-w-7xl flex-wrap items-center justify-between gap-3 border-t border-[var(--color-line)] pt-5 text-xs">
          <p>© {new Date().getFullYear()} Axion Drive Systems. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Terms
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}