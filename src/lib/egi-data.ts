export type ProductCategory = "Inventory Hubs" | "Starter Parts" | "Alternator Parts" | "Equipment";

export type EgiProduct = {
  slug: string;
  name: string;
  category: ProductCategory;
  description: string;
  legacyUrl: string;
  image: string;
  visual: string;
  overview: string;
  highlights: string[];
  pageTitle: string;
};

export const egiProducts: EgiProduct[] = [
  {
    slug: "starters",
    name: "Starters",
    category: "Inventory Hubs",
    description: "Core starter inventory for automotive electrical buyers, rebuilders, and component sourcing workflows.",
    legacyUrl: "http://egiworldwide.com/starter_inventory2.html",
    image: "/egi/products/starters-card.jpg",
    visual: "starter",
    overview:
      "EGI Worldwide uses its starter inventory hub as a primary entry point for buyers looking for assemblies and supporting starter-related parts.",
    highlights: [
      "Acts as one of the main catalog entry hubs on the original site",
      "Supports truck and car parts browsing patterns",
      "Connects directly into narrower starter component categories",
    ],
    pageTitle: "Starter Inventory",
  },
  {
    slug: "alternators",
    name: "Alternators",
    category: "Inventory Hubs",
    description: "Alternator-focused inventory hub supporting truck parts, car parts, and broader electrical catalog access.",
    legacyUrl: "http://egiworldwide.com/alternator_inventory2.html",
    image: "/egi/products/alternators-card.jpg",
    visual: "alternator",
    overview:
      "The alternator inventory hub anchors EGI's alternator-side catalog and points buyers toward both complete units and supporting electrical components.",
    highlights: [
      "Primary alternator entry page from the legacy site",
      "Supports both truck parts and car parts sourcing",
      "Leads into brushes, diodes, hardware, and related alternator component pages",
    ],
    pageTitle: "Alternator Inventory",
  },
  {
    slug: "starter-components",
    name: "Starter Components",
    category: "Starter Parts",
    description: "Detailed starter component sourcing for bushings, drives, insulators, shift levers, and related categories.",
    legacyUrl: "http://egiworldwide.com/starter_inventory2.html",
    image: "/egi/products/starter-components-card.jpg",
    visual: "starter-components",
    overview:
      "This section organizes starter-related parts into a more detailed component path for buyers who already know the part family they need.",
    highlights: [
      "Includes bushings, drives, field-related parts, levers, brushes, and insulators",
      "Structured for catalog-style lookup rather than ecommerce checkout",
      "Best fit for rebuilders and detailed component buyers",
    ],
    pageTitle: "Starter Components",
  },
  {
    slug: "alternator-components",
    name: "Alternator Components",
    category: "Alternator Parts",
    description: "Component-level alternator catalog coverage including brushes, diodes, hardware, miscellaneous parts, and seals.",
    legacyUrl: "http://egiworldwide.com/alternator_inventory2.html",
    image: "/egi/products/alternator-components-card.jpg",
    visual: "alternator-components",
    overview:
      "The alternator components path gives buyers direct access to specific electrical support parts instead of forcing everything through assembly-level browsing.",
    highlights: [
      "Includes brushes, diodes, hardware, miscellaneous parts, and gasket/seal categories",
      "Closer to how technical component buyers actually shop",
      "Preserves the original EGI inventory structure in a cleaner format",
    ],
    pageTitle: "Alternator Components",
  },
  {
    slug: "bushings-for-starters",
    name: "Bushings for Starters",
    category: "Starter Parts",
    description: "Live starter-detail catalog page with part-number and quantity style listings for bushing inventory.",
    legacyUrl: "http://egiworldwide.com/bushings_starters.html",
    image: "/egi/products/bushings-card.jpg",
    visual: "bushing",
    overview:
      "Bushings for Starters is one of the strongest examples of EGI's detailed live inventory pages, with extensive part-number listing depth.",
    highlights: [
      "Large SKU-style listings on the original site",
      "Useful for direct inquiry around specific starter bushing inventory",
      "Represents the detailed component depth of the EGI catalog",
    ],
    pageTitle: "Bushings for Starters",
  },
  {
    slug: "starter-drives",
    name: "Starter Drives",
    category: "Starter Parts",
    description: "Dedicated starter drive catalog page preserving the part-specific structure of the original EGI site.",
    legacyUrl: "http://egiworldwide.com/starter_drive.html",
    image: "/egi/products/starter-drives-card.jpg",
    visual: "drive",
    overview:
      "Starter Drives is a narrower catalog page intended for buyers who already know the exact starter subcategory they need to source.",
    highlights: [
      "Dedicated to a specific starter component family",
      "Supports direct inquiry and part-number validation",
      "Better suited to targeted sourcing than broad product discovery",
    ],
    pageTitle: "Starter Drives",
  },
  {
    slug: "shift-levers",
    name: "Shift Levers",
    category: "Starter Parts",
    description: "Shift lever inventory presented as a direct inquiry catalog for rebuilders and specialty buyers.",
    legacyUrl: "http://egiworldwide.com/shift_levers.html",
    image: "/egi/products/shift-levers-card.jpg",
    visual: "lever",
    overview:
      "The Shift Levers page reinforces that EGI breaks its catalog into practical, inquiry-ready subcomponents rather than only high-level product families.",
    highlights: [
      "Serves specialized starter component demand",
      "Particularly relevant to rebuild and service workflows",
      "Presented as an itemized legacy inventory page",
    ],
    pageTitle: "Shift Levers",
  },
  {
    slug: "voltage-regulators",
    name: "Voltage Regulators",
    category: "Alternator Parts",
    description: "Regulator listings with item-by-item part references retained from the original EGI catalog.",
    legacyUrl: "http://egiworldwide.com/voltage_regulators.html",
    image: "/egi/products/voltage-regulators-card.jpg",
    visual: "regulator",
    overview:
      "Voltage Regulators is one of the clearer live electrical-component pages in the EGI structure, preserving direct part-level inventory references.",
    highlights: [
      "Dedicated electrical-component page",
      "Structured around part-level listings rather than descriptive merchandising",
      "Useful for technical buyers sourcing specific regulator inventory",
    ],
    pageTitle: "Voltage Regulators",
  },
  {
    slug: "brushes-for-alternators",
    name: "Brushes for Alternators",
    category: "Alternator Parts",
    description: "Alternator brush inventory with broad SKU coverage for component buyers and electrical rebuilders.",
    legacyUrl: "http://egiworldwide.com/brushes_alternators.html",
    image: "/egi/products/brushes-alternators-card.jpg",
    visual: "brushes",
    overview:
      "Brushes for Alternators is one of the most inventory-dense live detail pages on the original site and a strong indicator of EGI's component depth.",
    highlights: [
      "Large volume of part-number entries on the legacy page",
      "Important for alternator rebuild and service use cases",
      "Strong example of EGI's detailed component catalog model",
    ],
    pageTitle: "Brushes for Alternators",
  },
  {
    slug: "insulators-and-diodes",
    name: "Insulators and Diodes",
    category: "Alternator Parts",
    description: "Supporting alternator electrical parts represented across dedicated insulator and diode pages.",
    legacyUrl: "http://egiworldwide.com/diodes.html",
    image: "/egi/products/insulators-diodes-card.jpg",
    visual: "diodes",
    overview:
      "This category groups smaller electrical support parts that matter to specialized buyers and rebuild workflows, even if they are not hero products.",
    highlights: [
      "Derived from live diode and alternator insulator pages",
      "Supports technical sourcing beyond assemblies",
      "Fits component buyers looking for narrower electrical categories",
    ],
    pageTitle: "Insulators and Diodes",
  },
  {
    slug: "excess-inventory",
    name: "Excess Inventory",
    category: "Inventory Hubs",
    description: "Excess inventory page connecting buyers to both starter and alternator overstock opportunities.",
    legacyUrl: "http://egiworldwide.com/excess_inventory.html",
    image: "/egi/products/excess-inventory-card.jpg",
    visual: "inventory",
    overview:
      "Excess Inventory is a separate sourcing path on the original site, aimed at buyers who are looking for stock-driven opportunities across part families.",
    highlights: [
      "Distinct hub on the EGI website",
      "Connects buyers to starter and alternator overstock categories",
      "Useful for value-focused and opportunistic sourcing",
    ],
    pageTitle: "Excess Inventory",
  },
  {
    slug: "equipment-listings",
    name: "Equipment Listings",
    category: "Equipment",
    description: "Fabrication, testing, miscellaneous testing, and axle equipment showcased for industrial buyers.",
    legacyUrl: "http://egiworldwide.com/equipment_a.html",
    image: "/egi/products/equipment-listings-card.jpg",
    visual: "equipment",
    overview:
      "EGI's equipment section expands the site beyond electrical parts alone and shows fabrication and testing-related industrial inventory groupings.",
    highlights: [
      "Includes fabrication and testing-related equipment categories",
      "Shows broader industrial context for the business",
      "Relevant for equipment buyers and shop-floor operations",
    ],
    pageTitle: "Equipment Listings",
  },
];

export const productCategories = ["All", "Inventory Hubs", "Starter Parts", "Alternator Parts", "Equipment"] as const;

export const featuredProductSlugs = [
  "brushes-for-alternators",
  "bushings-for-starters",
  "voltage-regulators",
  "insulators-and-diodes",
] as const;

export function getProductBySlug(slug: string) {
  return egiProducts.find((product) => product.slug === slug);
}
