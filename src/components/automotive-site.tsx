"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  BadgeCheck,
  Boxes,
  Cpu,
  Factory,
  Globe,
  Headset,
  Languages,
  Mail,
  MapPinned,
  Menu,
  PackageSearch,
  Phone,
  Search,
  Settings2,
  ShieldCheck,
  Truck,
  Wrench,
  X,
} from "lucide-react";
import { egiProducts, featuredProductSlugs, productCategories } from "@/lib/egi-data";

export type SitePage =
  | "home"
  | "about"
  | "products"
  | "industries"
  | "capabilities"
  | "resources"
  | "news"
  | "contact";

type Industry = {
  title: string;
  description: string;
  image: string;
  icon: typeof Truck;
};

type Feature = {
  title: string;
  description: string;
  icon: typeof BadgeCheck;
};

type Resource = {
  title: string;
  description: string;
  href: string;
  tag: string;
};

type NewsItem = {
  title: string;
  description: string;
  tag: string;
};

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Industries", href: "/industries" },
  { label: "Capabilities", href: "/capabilities" },
  { label: "Resources", href: "/resources" },
  { label: "News", href: "/news" },
  { label: "Contact", href: "/contact" },
];

const industries: Industry[] = [
  {
    title: "Truck Parts",
    description: "The original navigation explicitly separates truck parts as a key market for EGI inventory demand.",
    image: "/egi/starter.jpg",
    icon: Truck,
  },
  {
    title: "Car Parts",
    description: "Car parts coverage remains central across starter, alternator, and component catalog pages.",
    image: "/egi/alternator.jpg",
    icon: Boxes,
  },
  {
    title: "Electrical Rebuilders",
    description: "Component-level detail pages support rebuilders sourcing brushes, bushings, regulators, drives, and insulators.",
    image: "/egi/electronics.jpg",
    icon: Wrench,
  },
  {
    title: "Inventory Buyers",
    description: "Excess inventory pages create an access point for opportunistic purchasing and specialty sourcing.",
    image: "/egi/parts.jpg",
    icon: PackageSearch,
  },
  {
    title: "Equipment Buyers",
    description: "Testing and fabrication listings indicate demand from shops and buyers evaluating shop-floor assets.",
    image: "/egi/equipment.jpg",
    icon: Factory,
  },
  {
    title: "Worldwide Trade Channels",
    description: "The EGI Worldwide name positions the catalog for broad inquiry-based sourcing across markets and regions.",
    image: "/egi/marine.jpg",
    icon: Globe,
  },
];

const capabilities: Feature[] = [
  {
    title: "Starter and Alternator Specialization",
    description: "The legacy catalog is tightly focused on starter, alternator, and electrical-component inventory.",
    icon: BadgeCheck,
  },
  {
    title: "Component-Level Sourcing",
    description: "Live detail pages break inventory down into bushings, brushes, insulators, diodes, drives, and more.",
    icon: Boxes,
  },
  {
    title: "Excess Inventory Access",
    description: "Buyers can browse dedicated excess-inventory pathways for overstock electrical components.",
    icon: PackageSearch,
  },
  {
    title: "Testing Equipment Listings",
    description: "Equipment pages show testing, fabrication, miscellaneous testing, and axle-equipment groupings.",
    icon: Settings2,
  },
  {
    title: "Direct Inquiry Workflow",
    description: "The original site is built around fast inquiry flows through phone, email, and page-level catalog review.",
    icon: Headset,
  },
  {
    title: "Structured Part Lookup",
    description: "Catalog pages preserve part-number, quantity, and reference-table style browsing for fast sourcing.",
    icon: Cpu,
  },
];

const whyChooseUs: Feature[] = [
  {
    title: "Focused Catalog Scope",
    description: "EGI stays concentrated on starters, alternators, electrical components, and related inventory needs.",
    icon: BadgeCheck,
  },
  {
    title: "Truck and Car Coverage",
    description: "The site architecture clearly serves both truck parts and car parts procurement paths.",
    icon: Truck,
  },
  {
    title: "Component Depth",
    description: "Multiple live detail pages give buyers access to narrower component categories, not just assemblies.",
    icon: Boxes,
  },
  {
    title: "Inventory Opportunity",
    description: "Excess-inventory routing creates an additional channel for buyers seeking stock-driven deals.",
    icon: PackageSearch,
  },
  {
    title: "Equipment Visibility",
    description: "Equipment pages extend the business beyond parts alone into testing and fabrication-related assets.",
    icon: Factory,
  },
  {
    title: "Direct Human Contact",
    description: "Phone and email remain front-and-center, making the business responsive rather than form-heavy.",
    icon: Headset,
  },
  {
    title: "Catalog Discipline",
    description: "The original site’s part-number structure suggests practical inventory organization for serious buyers.",
    icon: ShieldCheck,
  },
  {
    title: "Worldwide Positioning",
    description: "The EGI Worldwide brand presents the company as a broader sourcing partner, not a single-category seller.",
    icon: Globe,
  },
];

const stats = [
  { label: "Core Inventory Hubs", value: 4, suffix: "" },
  { label: "Live Detail Catalog Pages", value: 10, suffix: "+" },
  { label: "Equipment Groupings", value: 4, suffix: "" },
  { label: "Vehicle Segments", value: 2, suffix: "" },
  { label: "Direct Contact Channels", value: 2, suffix: "" },
];

const resourceLinks: Resource[] = [
  {
    title: "Starter Components Catalog",
    description: "Browse starter-related component categories and inventory tables from the original live catalog.",
    href: "http://egiworldwide.com/starter_inventory2.html",
    tag: "Catalog",
  },
  {
    title: "Alternator Components Catalog",
    description: "Access alternator component categories including brushes, diodes, hardware, and seals.",
    href: "http://egiworldwide.com/alternator_inventory2.html",
    tag: "Catalog",
  },
  {
    title: "Excess Inventory",
    description: "Review overstock-oriented electrical inventory opportunities across starters and alternators.",
    href: "http://egiworldwide.com/excess_inventory.html",
    tag: "Inventory",
  },
  {
    title: "Equipment Listings",
    description: "Explore fabrication, testing, miscellaneous testing, and axle equipment sections.",
    href: "http://egiworldwide.com/equipment_a.html",
    tag: "Equipment",
  },
  {
    title: "Brushes for Alternators",
    description: "Live detail page with high-volume part listings and reference pages.",
    href: "http://egiworldwide.com/brushes_alternators.html",
    tag: "Live Page",
  },
  {
    title: "Bushings for Starters",
    description: "Detailed starter bushing page with direct SKU-style catalog entries.",
    href: "http://egiworldwide.com/bushings_starters.html",
    tag: "Live Page",
  },
  {
    title: "Voltage Regulators",
    description: "Direct detail page for regulator inventory browsing.",
    href: "http://egiworldwide.com/voltage_regulators.html",
    tag: "Live Page",
  },
  {
    title: "Diodes",
    description: "Supporting electrical-component page within the alternator component ecosystem.",
    href: "http://egiworldwide.com/diodes.html",
    tag: "Live Page",
  },
];

const newsItems: NewsItem[] = [
  {
    title: "Starter and Alternator hubs remain the primary entry points",
    description: "The most stable EGI content is concentrated in the starter, alternator, component, excess inventory, and equipment pages.",
    tag: "Catalog Update",
  },
  {
    title: "Special of the Month is not currently published",
    description: "The navigation item exists on the legacy site, but the linked page returns missing content and is not treated as a primary page here.",
    tag: "Site Note",
  },
  {
    title: "Direct inquiry is still the clearest next step",
    description: "The original website suggests a high-touch, direct-response business model rather than a self-service ecommerce flow.",
    tag: "Buyer Guidance",
  },
];

const megaLinks = [
  { label: "Inventory Hubs", href: "/products#inventory-hubs" },
  { label: "Starter Parts", href: "/products#starter-parts" },
  { label: "Alternator Parts", href: "/products#alternator-parts" },
  { label: "Equipment", href: "/products#equipment" },
  { label: "Excess Inventory", href: "/resources#excess-inventory" },
  { label: "Live Detail Pages", href: "/resources#live-pages" },
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
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-[var(--color-heading)] md:text-4xl">{title}</h2>
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

function AnimatedSection({ id, children, className }: { id?: string; children: React.ReactNode; className?: string }) {
  return (
    <motion.section
      id={id}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={fadeUp}
      transition={{ duration: 0.4 }}
    >
      {children}
    </motion.section>
  );
}

function ProductGrid({ products }: { products: typeof egiProducts }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {products.map((product, index) => (
        <motion.article
          key={product.slug}
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
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
              className="object-cover transition duration-500 group-hover:scale-105"
            />
          </div>
          <div className="mt-4">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-accent)]">{product.category}</p>
            <h3 className="mt-2 text-xl font-semibold text-[var(--color-heading)]">{product.name}</h3>
            <p className="mt-2 text-sm text-[var(--color-muted)]">{product.description}</p>
            <Link href={`/products/${product.slug}`} className="mt-4 inline-block text-sm font-semibold text-[var(--color-accent)]">
              Learn More
            </Link>
          </div>
        </motion.article>
      ))}
    </div>
  );
}

function HomePage({ featuredIndex, onFeaturedIndexChange }: { featuredIndex: number; onFeaturedIndexChange: (index: number) => void }) {
  const featuredProducts = featuredProductSlugs
    .map((slug) => egiProducts.find((product) => product.slug === slug))
    .filter((product): product is (typeof egiProducts)[number] => Boolean(product));

  return (
    <>
      <section id="home" className="relative overflow-hidden">
        <div className="hero-pattern" aria-hidden="true" />
        <Image
          src="/egi/hero.jpg"
          alt="Industrial automotive electrical background"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-20"
        />
        <div className="relative mx-auto grid min-h-[72vh] max-w-7xl items-center gap-10 px-4 py-20 md:grid-cols-2 md:px-8">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.55 }}>
            <p className="mb-5 inline-flex rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-[0_4px_14px_rgba(0,0,0,0.28)]">
              EGI Worldwide | Starters, Alternators, Components & Equipment
            </p>
            <h1 className="hero-heading font-heading text-4xl font-bold tracking-tight text-white md:text-6xl">
              Electrical inventory, modernized for faster sourcing.
            </h1>
            <p className="hero-copy mt-5 max-w-xl text-lg text-white/92">
              Browse the essential EGI Worldwide product lines through a cleaner 2026 experience built around the same catalog, the same buyers, and the same direct-contact workflow.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/products" className="btn-primary">
                View Products
              </Link>
              <Link href="/contact" className="btn-secondary">
                Contact Us
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative mx-auto w-full max-w-md"
          >
            <div className="glass-card p-5">
              <Image src="/egi/parts.jpg" alt="Electrical parts inventory" width={500} height={340} className="rounded-xl object-cover" />
            </div>
            <div className="floating-orb floating-orb-1" aria-hidden="true" />
            <div className="floating-orb floating-orb-2" aria-hidden="true" />
          </motion.div>
        </div>
      </section>

      <AnimatedSection className="section-shell">
        <SectionHeading
          eyebrow="About EGI"
          title="A cleaner front door to the original EGI Worldwide catalog"
          subtitle="The homepage now keeps only the essential context: what EGI sells, who it serves, and where buyers should go next."
        />
        <div className="grid gap-6 md:grid-cols-3">
          <article className="feature-card md:col-span-2">
            <h3 className="text-2xl font-bold text-[var(--color-heading)]">Built around the live catalog structure</h3>
            <p className="mt-3 text-[var(--color-muted)]">
              EGI Worldwide’s legacy web presence revolves around starter inventory, alternator inventory, component-level detail pages, excess stock, and equipment listings. This redesign preserves that structure while removing the clutter from the first page.
            </p>
          </article>
          <article className="stat-card">
            <p className="text-4xl font-bold text-[var(--color-heading)]">
              <CountUp value={10} suffix="+" />
            </p>
            <p className="mt-2 text-sm text-[var(--color-muted)]">Live detail catalog pages represented in the redesign</p>
          </article>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-shell" id="products-preview">
        <SectionHeading
          eyebrow="Featured Products"
          title="The most important inventory pathways"
          subtitle="The homepage now previews the main catalog destinations instead of trying to contain the full site in one screen flow."
        />
        <ProductGrid products={egiProducts.slice(0, 6)} />
        <div className="mt-8 text-center">
          <Link href="/products" className="btn-primary">
            Explore Full Product Structure
          </Link>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-shell" id="industries-preview">
        <SectionHeading
          eyebrow="Industries Served"
          title="Built for practical inventory buyers"
          subtitle="Truck parts, car parts, rebuild workflows, component sourcing, and equipment-related purchasing are all clearer as dedicated pages."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.slice(0, 3).map((industry) => {
            const Icon = industry.icon;
            return (
              <article key={industry.title} className="industry-card overflow-hidden p-0">
                <div className="relative h-44">
                  <Image src={industry.image} alt={industry.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
                </div>
                <div className="p-5">
                  <Icon className="h-5 w-5 text-[var(--color-accent)]" />
                  <h3 className="mt-3 font-semibold text-[var(--color-heading)]">{industry.title}</h3>
                  <p className="mt-2 text-sm text-[var(--color-muted)]">{industry.description}</p>
                </div>
              </article>
            );
          })}
        </div>
        <div className="mt-8 text-center">
          <Link href="/industries" className="btn-primary">
            View Industries
          </Link>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-shell" id="capabilities-preview">
        <SectionHeading
          eyebrow="Capabilities"
          title="Inventory depth plus equipment visibility"
          subtitle="EGI’s structure suggests a business that supports both part sourcing and equipment-aware industrial workflows."
        />
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {capabilities.slice(0, 4).map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className="feature-card">
                <Icon className="h-6 w-6 text-[var(--color-accent)]" />
                <h3 className="mt-3 font-semibold text-[var(--color-heading)]">{item.title}</h3>
                <p className="mt-2 text-sm text-[var(--color-muted)]">{item.description}</p>
              </article>
            );
          })}
        </div>
        <div className="mt-8 text-center">
          <Link href="/capabilities" className="btn-primary">
            View Capabilities
          </Link>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-shell" id="why-choose-egi">
        <SectionHeading
          eyebrow="Why Choose EGI"
          title="The business stays the same. The experience gets sharper."
          subtitle="Direct contact, catalog discipline, and component depth remain the differentiators."
        />
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {whyChooseUs.slice(0, 4).map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className="feature-card">
                <Icon className="h-6 w-6 text-[var(--color-accent)]" />
                <h3 className="mt-3 font-semibold text-[var(--color-heading)]">{item.title}</h3>
                <p className="mt-2 text-sm text-[var(--color-muted)]">{item.description}</p>
              </article>
            );
          })}
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-shell" id="featured-catalog">
        <SectionHeading
          eyebrow="Featured Catalog"
          title="Real EGI detail pages, presented more clearly"
          subtitle="The underlying inventory pages are the same; the route structure now makes them easier to discover."
        />
        <div className="relative overflow-hidden rounded-3xl border border-[var(--color-line)] bg-[var(--color-panel)] p-4 md:p-8">
          <div className="flex transition-transform duration-700" style={{ transform: `translateX(-${featuredIndex * 100}%)` }}>
            {featuredProducts.map((product) => (
              <article key={product.slug} className="w-full shrink-0 md:grid md:grid-cols-2 md:gap-8">
                <div className="relative h-60 overflow-hidden rounded-2xl md:h-80">
                  <Image src={product.image} alt={product.name} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
                </div>
                <div className="mt-6 md:mt-0">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-accent)]">{product.category}</p>
                  <h3 className="mt-2 text-2xl font-bold text-[var(--color-heading)]">{product.name}</h3>
                  <p className="mt-3 text-[var(--color-muted)]">{product.description}</p>
                  <p className="mt-4 text-sm text-[var(--color-muted)]">Original source available from the product detail page.</p>
                  <Link href={`/products/${product.slug}`} className="btn-primary mt-6 inline-flex">
                    Open Product Page
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-6 flex items-center justify-center gap-2">
            {featuredProducts.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => onFeaturedIndexChange(index)}
                className={index === featuredIndex ? "dot-active" : "dot"}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-shell" id="contact-cta">
        <div className="rounded-3xl border border-[var(--color-line)] bg-[var(--color-panel)] p-8 text-center md:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-accent)]">Contact</p>
          <h2 className="mt-3 text-3xl font-bold text-[var(--color-heading)] md:text-4xl">Need inventory details or current availability?</h2>
          <p className="mx-auto mt-3 max-w-2xl text-[var(--color-muted)]">
            EGI’s original workflow is direct by design. The modern site keeps that intact with cleaner routing and clearer contact paths.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary">
              Contact EGI
            </Link>
            <Link href="/resources" className="btn-secondary !border-[var(--color-line)] !bg-[var(--color-bg-soft)] !text-[var(--color-heading)]">
              View Resources
            </Link>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}

function AboutPage() {
  return (
    <>
      <section className="section-shell pb-4">
        <SectionHeading
          eyebrow="About"
          title="EGI Worldwide, clarified without changing the underlying business"
          subtitle="The original public website gives only a small amount of narrative copy, so this page reframes the visible business model, catalog structure, and market position into a cleaner company overview."
        />
      </section>

      <AnimatedSection className="section-shell pt-0">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <article className="rounded-3xl border border-[var(--color-line)] bg-[var(--color-panel)] p-6 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-accent)]">Company Profile</p>
            <h3 className="mt-3 text-3xl font-bold text-[var(--color-heading)]">An inventory-first electrical parts website with worldwide positioning</h3>
            <p className="mt-4 text-[var(--color-muted)]">
              EGI Worldwide’s live site is centered on direct access to starters, alternators, component-level electrical parts, excess inventory, and equipment listings. Rather than long-form corporate messaging, the company’s online presence is structured around practical buyer actions: browse inventory, review part listings, and contact the business directly.
            </p>
            <p className="mt-4 text-[var(--color-muted)]">
              This redesign preserves that identity while improving readability, visual hierarchy, and page-level organization. The goal is not to fabricate a new brand story, but to present the same company with a more modern, enterprise-grade experience.
            </p>
          </article>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {stats.map((stat) => (
              <article key={stat.label} className="stat-card">
                <p className="text-4xl font-bold text-[var(--color-heading)]">
                  <CountUp value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-2 text-sm text-[var(--color-muted)]">{stat.label}</p>
              </article>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-shell">
        <SectionHeading
          eyebrow="How EGI Operates"
          title="What the original sitemap tells us about the business"
          subtitle="The legacy website reveals a strong practical focus on parts categorization, equipment visibility, and direct inquiry."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            {
              title: "Product Depth",
              description: "EGI does not stop at top-level assemblies. The sitemap includes brushes, bushings, shift levers, insulators, diodes, hardware, miscellaneous parts, and seals.",
            },
            {
              title: "Buyer Orientation",
              description: "The layout strongly favors inventory lookup and immediate action over brand storytelling, suggesting a practical buyer audience.",
            },
            {
              title: "Equipment Awareness",
              description: "Fabrication, testing, miscellaneous testing, and axle equipment categories point to a wider industrial and shop-floor context.",
            },
            {
              title: "Global Framing",
              description: "The company name and product reach suggest an outward-facing sourcing posture rather than a narrow single-market catalog.",
            },
          ].map((item) => (
            <article key={item.title} className="feature-card">
              <h3 className="font-semibold text-[var(--color-heading)]">{item.title}</h3>
              <p className="mt-2 text-sm text-[var(--color-muted)]">{item.description}</p>
            </article>
          ))}
        </div>
      </AnimatedSection>
    </>
  );
}

function ProductsPage({
  searchTerm,
  selectedCategory,
  onSearchTermChange,
  onCategoryChange,
}: {
  searchTerm: string;
  selectedCategory: string;
  onSearchTermChange: (value: string) => void;
  onCategoryChange: (value: string) => void;
}) {
  const filteredProducts = useMemo(() => {
    return egiProducts.filter((product) => {
      const byCategory = selectedCategory === "All" || product.category === selectedCategory;
      const bySearch =
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase());
      return byCategory && bySearch;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <>
      <section className="section-shell pb-4">
        <SectionHeading
          eyebrow="Products"
          title="The EGI product structure, split into navigable pages"
          subtitle="Every Learn More action now stays inside this website, with a dedicated original page for each category."
        />
      </section>

      <AnimatedSection className="section-shell pt-0">
        <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <label className="flex items-center gap-2 rounded-xl border border-[var(--color-line)] bg-[var(--color-panel)] px-4 py-3 md:max-w-md md:flex-1">
            <Search className="h-4 w-4 text-[var(--color-muted)]" />
            <input
              type="search"
              value={searchTerm}
              onChange={(event) => onSearchTermChange(event.target.value)}
              placeholder="Search EGI product categories"
              className="w-full bg-transparent text-sm outline-none"
              aria-label="Product search"
            />
          </label>
          <div className="flex flex-wrap gap-2">
            {productCategories.map((category) => (
              <button
                type="button"
                key={category}
                onClick={() => onCategoryChange(category)}
                className={selectedCategory === category ? "pill-active" : "pill"}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        <ProductGrid products={filteredProducts} />
      </AnimatedSection>

      <AnimatedSection className="section-shell" id="inventory-hubs">
        <SectionHeading
          eyebrow="Inventory Hubs"
          title="Primary catalog entry points"
          subtitle="The original website is organized around a small set of major entry hubs that lead to narrower inventory detail pages."
        />
        <ProductGrid products={egiProducts.filter((product) => product.category === "Inventory Hubs")} />
      </AnimatedSection>

      <AnimatedSection className="section-shell" id="starter-parts">
        <SectionHeading
          eyebrow="Starter Parts"
          title="Detailed starter-related inventory"
          subtitle="Starter parts in the legacy site extend beyond assemblies into bushings, drives, levers, insulators, and more."
        />
        <ProductGrid products={egiProducts.filter((product) => product.category === "Starter Parts")} />
      </AnimatedSection>

      <AnimatedSection className="section-shell" id="alternator-parts">
        <SectionHeading
          eyebrow="Alternator Parts"
          title="Alternator components and electrical support parts"
          subtitle="The alternator side of the catalog includes both major categories and narrower electrical detail pages."
        />
        <ProductGrid products={egiProducts.filter((product) => product.category === "Alternator Parts")} />
      </AnimatedSection>

      <AnimatedSection className="section-shell" id="equipment">
        <SectionHeading
          eyebrow="Equipment"
          title="Equipment visibility built into the product structure"
          subtitle="EGI also exposes fabrication, testing, miscellaneous testing, and axle-equipment groupings as part of the wider business offering."
        />
        <ProductGrid products={egiProducts.filter((product) => product.category === "Equipment")} />
      </AnimatedSection>
    </>
  );
}

function IndustriesPage() {
  return (
    <>
      <section className="section-shell pb-4">
        <SectionHeading
          eyebrow="Industries"
          title="Who the EGI site is clearly built to serve"
          subtitle="The original site gives the strongest signals around automotive parts buyers, component rebuilders, and industrial equipment-oriented procurement."
        />
      </section>

      <AnimatedSection className="section-shell pt-0">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => {
            const Icon = industry.icon;
            return (
              <article key={industry.title} className="industry-card overflow-hidden p-0">
                <div className="relative h-44">
                  <Image src={industry.image} alt={industry.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
                </div>
                <div className="p-5">
                  <Icon className="h-5 w-5 text-[var(--color-accent)]" />
                  <h3 className="mt-3 font-semibold text-[var(--color-heading)]">{industry.title}</h3>
                  <p className="mt-2 text-sm text-[var(--color-muted)]">{industry.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </AnimatedSection>
    </>
  );
}

function CapabilitiesPage() {
  return (
    <>
      <section className="section-shell pb-4">
        <SectionHeading
          eyebrow="Capabilities"
          title="Parts sourcing plus equipment-aware industrial support"
          subtitle="The original sitemap does not publish a conventional corporate capability brochure, but it does reveal how the business operates."
        />
      </section>

      <AnimatedSection className="section-shell pt-0">
        <div className="grid gap-8 rounded-3xl border border-[var(--color-line)] bg-[var(--color-panel)] p-6 md:grid-cols-2 md:p-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-accent)]">Manufacturing and Engineering Context</p>
            <h3 className="mt-3 text-3xl font-bold text-[var(--color-heading)]">Catalog depth supported by practical testing and equipment visibility</h3>
            <p className="mt-3 text-[var(--color-muted)]">
              EGI’s live website does not publish extensive narrative copy about engineering teams or plant-level operations, so this page treats the public evidence carefully. What the sitemap does show clearly is a strong relationship between electrical parts inventory, structured part categorization, and equipment sections related to fabrication and testing.
            </p>
          </div>
          <div className="relative h-80 overflow-hidden rounded-2xl md:h-auto">
            <Image src="/egi/equipment.jpg" alt="Equipment and testing capability" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-shell">
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {capabilities.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className="feature-card">
                <Icon className="h-6 w-6 text-[var(--color-accent)]" />
                <h3 className="mt-3 font-semibold text-[var(--color-heading)]">{item.title}</h3>
                <p className="mt-2 text-sm text-[var(--color-muted)]">{item.description}</p>
              </article>
            );
          })}
        </div>
      </AnimatedSection>
    </>
  );
}

function ResourcesPage() {
  return (
    <>
      <section className="section-shell pb-4">
        <SectionHeading
          eyebrow="Resources"
          title="Direct access to the original EGI catalog ecosystem"
          subtitle="This page collects the most useful live pages from the original site into one cleaner resource directory."
        />
      </section>

      <AnimatedSection className="section-shell pt-0" id="excess-inventory">
        <SectionHeading
          eyebrow="Catalog Resources"
          title="Primary catalog and excess inventory pages"
          subtitle="These are the highest-value pages for buyers who want the original inventory structure."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {resourceLinks.slice(0, 4).map((resource) => (
            <article key={resource.title} className="resource-card">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-accent)]">{resource.tag}</p>
              <h3 className="mt-2 text-xl font-semibold text-[var(--color-heading)]">{resource.title}</h3>
              <p className="mt-2 text-sm text-[var(--color-muted)]">{resource.description}</p>
              <a href={resource.href} target="_blank" rel="noreferrer" className="mt-4 inline-block text-sm font-semibold text-[var(--color-accent)]">
                Open Original Page
              </a>
            </article>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-shell" id="live-pages">
        <SectionHeading
          eyebrow="Live Detail Pages"
          title="Component-specific pages preserved from the legacy site"
          subtitle="These pages are where the original site becomes most specific and operationally useful."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {resourceLinks.slice(4).map((resource) => (
            <article key={resource.title} className="resource-card">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-accent)]">{resource.tag}</p>
              <h3 className="mt-2 text-xl font-semibold text-[var(--color-heading)]">{resource.title}</h3>
              <p className="mt-2 text-sm text-[var(--color-muted)]">{resource.description}</p>
              <a href={resource.href} target="_blank" rel="noreferrer" className="mt-4 inline-block text-sm font-semibold text-[var(--color-accent)]">
                Open Original Page
              </a>
            </article>
          ))}
        </div>
      </AnimatedSection>
    </>
  );
}

function NewsPage() {
  return (
    <>
      <section className="section-shell pb-4">
        <SectionHeading
          eyebrow="News"
          title="The EGI update layer, interpreted honestly"
          subtitle="The original site includes a Special of the Month concept, but the most dependable current signals are the catalog pages themselves and the visible state of the site."
        />
      </section>

      <AnimatedSection className="section-shell pt-0">
        <div className="grid gap-4 md:grid-cols-3">
          {newsItems.map((item) => (
            <article key={item.title} className="resource-card">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-accent)]">{item.tag}</p>
              <h3 className="mt-2 text-xl font-semibold text-[var(--color-heading)]">{item.title}</h3>
              <p className="mt-2 text-sm text-[var(--color-muted)]">{item.description}</p>
            </article>
          ))}
        </div>
      </AnimatedSection>
    </>
  );
}

function ContactPage() {
  return (
    <>
      <section className="section-shell pb-4">
        <SectionHeading
          eyebrow="Contact"
          title="Contact EGI Worldwide directly"
          subtitle="The original site emphasizes direct outreach. This page preserves that model with better organization and readability."
        />
      </section>

      <AnimatedSection className="section-shell pt-0">
        <div className="grid gap-8 rounded-3xl border border-[var(--color-line)] bg-[var(--color-panel)] p-6 md:grid-cols-2 md:p-10">
          <div>
            <div className="space-y-4 text-sm text-[var(--color-muted)]">
              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 text-[var(--color-accent)]" />
                <div>
                  <p className="font-semibold text-[var(--color-heading)]">Mobile</p>
                  <p>(516) 451-2069</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 text-[var(--color-accent)]" />
                <div>
                  <p className="font-semibold text-[var(--color-heading)]">Email</p>
                  <p>egiinc3@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPinned className="mt-0.5 h-4 w-4 text-[var(--color-accent)]" />
                <div>
                  <p className="font-semibold text-[var(--color-heading)]">Location Information</p>
                  <p>The legacy site does not publish a full office address. Contact is handled primarily by phone and email.</p>
                </div>
              </div>
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
              <option>Starter Inventory</option>
              <option>Alternator Inventory</option>
              <option>Component Sourcing</option>
              <option>Excess Inventory</option>
              <option>Equipment Inquiry</option>
            </select>
            <textarea placeholder="Message" rows={4} className="input" />
            <button type="submit" className="btn-primary mt-2 justify-center">
              Submit Inquiry
            </button>
            <div className="mt-3 h-44 rounded-xl border border-dashed border-[var(--color-line)] bg-[var(--color-bg-soft)] p-3 text-sm text-[var(--color-muted)]">
              Interactive map placeholder for future office or regional coverage information.
            </div>
          </form>
        </div>
      </AnimatedSection>
    </>
  );
}

function Footer() {
  return (
    <footer className="mt-8 border-t border-[var(--color-line)] bg-[var(--color-surface)] px-4 py-12 md:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 lg:grid-cols-6">
        <div>
          <h4 className="footer-title">Products</h4>
          <p className="footer-link">Starters</p>
          <p className="footer-link">Alternators</p>
          <p className="footer-link">Components</p>
        </div>
        <div>
          <h4 className="footer-title">About</h4>
          <p className="footer-link">Company Overview</p>
          <p className="footer-link">Catalog Structure</p>
          <p className="footer-link">Worldwide Positioning</p>
        </div>
        <div>
          <h4 className="footer-title">Resources</h4>
          <p className="footer-link">Starter Catalog</p>
          <p className="footer-link">Alternator Catalog</p>
          <p className="footer-link">Excess Inventory</p>
        </div>
        <div>
          <h4 className="footer-title">Industries</h4>
          <p className="footer-link">Truck Parts</p>
          <p className="footer-link">Car Parts</p>
          <p className="footer-link">Equipment Buyers</p>
        </div>
        <div>
          <h4 className="footer-title">Contact</h4>
          <p className="footer-link">(516) 451-2069</p>
          <p className="footer-link">egiinc3@gmail.com</p>
          <p className="footer-link">Inquiry-led support</p>
        </div>
        <div>
          <h4 className="footer-title">Updates</h4>
          <input type="email" placeholder="Your business email" className="input" />
          <button type="button" className="btn-secondary mt-2 w-full justify-center">
            Request Updates
          </button>
          <p className="surface-muted mt-3 text-xs">Legacy catalog links | Modernized experience</p>
        </div>
      </div>
      <div className="surface-muted mx-auto mt-8 flex max-w-7xl flex-wrap items-center justify-between gap-3 border-t border-[var(--color-line)] pt-5 text-xs">
        <p>© {new Date().getFullYear()} EGI Worldwide. Modernized from the original live catalog structure.</p>
        <div className="flex items-center gap-4">
          <Link href="/resources" className="hover:text-white">
            Resources
          </Link>
          <Link href="/contact" className="hover:text-white">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default function AutomotiveSite({ page = "home", children }: { page?: SitePage; children?: React.ReactNode }) {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [language, setLanguage] = useState("EN");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [featuredIndex, setFeaturedIndex] = useState(0);

  useEffect(() => {
    document.documentElement.classList.remove("dark");
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setFeaturedIndex((prev) => (prev + 1) % featuredProductSlugs.length);
    }, 4200);
    return () => clearInterval(id);
  }, []);

  let content: React.ReactNode = children ?? null;

  if (!children) {
    switch (page) {
      case "about":
        content = <AboutPage />;
        break;
      case "products":
        content = (
          <ProductsPage
            searchTerm={searchTerm}
            selectedCategory={selectedCategory}
            onSearchTermChange={setSearchTerm}
            onCategoryChange={setSelectedCategory}
          />
        );
        break;
      case "industries":
        content = <IndustriesPage />;
        break;
      case "capabilities":
        content = <CapabilitiesPage />;
        break;
      case "resources":
        content = <ResourcesPage />;
        break;
      case "news":
        content = <NewsPage />;
        break;
      case "contact":
        content = <ContactPage />;
        break;
      case "home":
      default:
        content = <HomePage featuredIndex={featuredIndex} onFeaturedIndexChange={setFeaturedIndex} />;
        break;
    }
  }

  return (
    <div className="bg-[var(--color-bg)] text-[var(--color-body)]">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[var(--color-surface)]/88 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
          <Link href="/" className="flex items-center gap-3">
            <div className="grid h-12 w-12 place-items-center overflow-hidden rounded-xl bg-white/10 p-1 shadow-lg ring-1 ring-white/15">
              <Image src="/egi/logo.gif" alt="EGI Worldwide logo" width={44} height={44} className="h-10 w-10 object-contain" />
            </div>
            <div>
              <p className="surface-muted text-xs uppercase tracking-[0.2em]">Electrical Inventory Group</p>
              <p className="font-heading surface-text text-xl font-bold">EGI Worldwide</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => {
              const isProducts = item.label === "Products";
              const isActive = pathname === item.href;
              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => isProducts && setShowMegaMenu(true)}
                  onMouseLeave={() => isProducts && setShowMegaMenu(false)}
                >
                  <Link href={item.href} className={`nav-link ${isActive ? "text-white" : ""}`}>
                    {item.label}
                  </Link>
                  {isProducts && showMegaMenu && (
                    <div className="absolute left-1/2 top-full mt-5 w-[720px] -translate-x-1/2 rounded-2xl border border-white/15 bg-[var(--color-surface)] p-6 shadow-2xl">
                      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-accent)]">
                        EGI Inventory Navigation
                      </p>
                      <div className="grid grid-cols-3 gap-3">
                        {megaLinks.map((link) => (
                          <Link key={link.label} href={link.href} className="mega-link">
                            {link.label}
                          </Link>
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
                <Link key={item.label} href={item.href} className="nav-link block py-2">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      <main>{content}</main>
      <Footer />
    </div>
  );
}
