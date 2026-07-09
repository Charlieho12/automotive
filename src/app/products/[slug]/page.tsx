import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import AutomotiveSite from "@/components/automotive-site";
import { egiProducts, getProductBySlug } from "@/lib/egi-data";

export function generateStaticParams() {
  return egiProducts.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Product Not Found | EGI Worldwide",
    };
  }

  return {
    title: `${product.name} | EGI Worldwide`,
    description: product.description,
  };
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <AutomotiveSite page="products">
      <section className="section-shell pb-4">
        <div className="mb-4">
          <Link href="/products" className="text-sm font-semibold text-[var(--color-accent)]">
            Back to Products
          </Link>
        </div>
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative min-h-[320px] overflow-hidden rounded-3xl border border-[var(--color-line)] bg-[var(--color-panel)] p-4 md:min-h-[420px] md:p-6">
            <Image src={product.image} alt={product.name} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover rounded-[1rem]" />
          </div>
          <div className="rounded-3xl border border-[var(--color-line)] bg-[var(--color-panel)] p-6 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">{product.category}</p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-[var(--color-heading)]">{product.pageTitle}</h1>
            <p className="mt-4 text-lg text-[var(--color-muted)]">{product.description}</p>
            <p className="mt-5 text-[var(--color-muted)]">{product.overview}</p>
            <div className="mt-6 space-y-3">
              {product.highlights.map((highlight) => (
                <div key={highlight} className="rounded-2xl border border-[var(--color-line)] bg-[var(--color-bg-soft)] px-4 py-3 text-sm text-[var(--color-muted)]">
                  {highlight}
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href={product.legacyUrl} target="_blank" rel="noreferrer" className="btn-primary">
                View Legacy Source Page
              </a>
              <Link href="/contact" className="btn-secondary !border-[var(--color-line)] !bg-[var(--color-bg-soft)] !text-[var(--color-heading)]">
                Contact EGI About This Category
              </Link>
            </div>
          </div>
        </div>
      </section>
    </AutomotiveSite>
  );
}
