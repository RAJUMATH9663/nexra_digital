import Image from 'next/image';
import Link from 'next/link';
import Reveal from '@/components/Reveal';
import Icon from '@/components/Icon';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCard from '@/components/TestimonialCard';
import Counter from '@/components/Counter';
import { SERVICES, HOME_SERVICES_SUBSET, WHY_CHOOSE_US, TESTIMONIALS, PORTFOLIO_ITEMS } from '@/lib/data';
import SideRays from '@/components/SideRays';
import styles from './page.module.css';

export const metadata = {
  title: 'Home',
  description:
    'NXRA DIGITAL turns vision into digital reality with photography, videography, branding, websites, software development, and digital marketing.',
};

const homeServices = HOME_SERVICES_SUBSET.map((slug) => SERVICES.find((s) => s.slug === slug));

const featuredPortfolio = [
  PORTFOLIO_ITEMS.find((p) => p.id === 'photo-1'),
  PORTFOLIO_ITEMS.find((p) => p.id === 'website-3'),
  PORTFOLIO_ITEMS.find((p) => p.id === 'design-6'),
  PORTFOLIO_ITEMS.find((p) => p.id === 'video-1'),
];

const STATS = [
  { value: 6, suffix: '+', label: 'Years in Business' },
  { value: 120, suffix: '+', label: 'Projects Delivered' },
  { value: 98, suffix: '%', label: 'Client Retention' },
  { value: 24, suffix: '/7', label: 'Support Availability' },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroBg} aria-hidden="true">
          <Image src="/images/hero-background.svg" alt="Modern Workspace" fill priority quality={100} sizes="100vw" style={{ objectFit: 'cover', objectPosition: 'center' }} />
          <div style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
            <SideRays
              speed={2.5}
              rayColor1="#EAB308"
              rayColor2="#96c8ff"
              intensity={2}
              spread={2}
              origin="top-right"
              tilt={0}
              saturation={1.5}
              blend={0.75}
              falloff={1.6}
              opacity={1}
            />
          </div>
        </div>
        <div className={`container ${styles.heroInner}`}>
          <Reveal className={styles.heroContent}>
            <span className="eyebrow">Photography &middot; Web &middot; Software &middot; Marketing</span>
            <h1 className={styles.heroTitle}>Turning Vision Into <span className="text-gold">Digital Reality</span></h1>
            <p className={styles.heroSub}>
              Photography, videography, branding, websites, software development &amp; digital marketing — delivered
              by one accountable creative team.
            </p>
            <div className={styles.heroActions}>
              <Link href="/contact" className="btn btn-primary">Get Started</Link>
              <Link href="/portfolio" className="btn btn-outline">View Portfolio</Link>
            </div>
          </Reveal>
        </div>
        <div className="gold-seam" style={{ position: 'absolute', bottom: 0, left: 0 }} />
      </section>

      {/* ABOUT PREVIEW */}
      <section className="section">
        <div className={`container ${styles.aboutGrid}`}>
          <Reveal as="div">
            <Image src="/images/nxra.jpg" alt="NXRA DIGITAL Logo" width={600} height={600} className={styles.aboutImg} style={{ objectFit: 'contain' }} loading="lazy" />
          </Reveal>
          <Reveal as="div" delay={120}>
            <span className="eyebrow">About NXRA DIGITAL</span>
            <h2 className="section-heading">A full-service creative team, built for founders who don&apos;t want to juggle five vendors</h2>
            <p className="section-sub">
              NXRA DIGITAL brings photography, film, brand design, engineering, and marketing under one roof.
              Since 2019 we&apos;ve helped founders and growing teams launch brands that look — and perform —
              like they belong at the top of their category.
            </p>
            <Link href="/about" className="btn btn-outline" style={{ marginTop: '1.5rem' }}>Our Story</Link>
          </Reveal>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section" style={{ background: 'var(--bg-elevated)' }}>
        <div className="container">
          <Reveal>
            <span className="eyebrow">What We Do</span>
            <h2 className="section-heading">Services built to cover the whole journey</h2>
          </Reveal>
          <div className={styles.serviceGrid}>
            {homeServices.map((s, i) => (
              <Reveal key={s.slug} delay={i * 60}>
                <ServiceCard icon={s.icon} title={s.title} description={s.description} />
              </Reveal>
            ))}
          </div>
          <Reveal className={styles.centerCta}>
            <Link href="/services" className="btn btn-primary">Explore All Services</Link>
          </Reveal>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section">
        <div className="container">
          <Reveal>
            <span className="eyebrow">Why Choose Us</span>
            <h2 className="section-heading">Seven reasons founders stay with NXRA past project one</h2>
          </Reveal>
          <div className={styles.whyGrid}>
            {WHY_CHOOSE_US.map((w, i) => (
              <Reveal key={w.title} delay={i * 50} className={styles.whyItem}>
                <div className={styles.whyIcon}><Icon name={w.icon} size={26} /></div>
                <div>
                  <h3 className={styles.whyTitle}>{w.title}</h3>
                  <p className={styles.whyDesc}>{w.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className={styles.statsSection}>
        <div className={`container ${styles.statsGrid}`}>
          {STATS.map((s) => (
            <Reveal key={s.label} scale>
              <p className={styles.statValue}><Counter value={s.value} suffix={s.suffix} /></p>
              <p className={styles.statLabel}>{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FEATURED PORTFOLIO */}
      <section className="section">
        <div className="container">
          <Reveal>
            <span className="eyebrow">Featured Work</span>
            <h2 className="section-heading">A sample of what leaves our studio</h2>
          </Reveal>
          <div className={styles.portfolioGrid}>
            {featuredPortfolio.filter(Boolean).map((p, i) => (
              <Reveal key={p.id} delay={i * 60} className={styles.portfolioCard}>
                <Link href="/portfolio">
                  <Image src={p.image} alt={p.title} width={400} height={260} loading="lazy" className={styles.portfolioImg} />
                  <div className={styles.portfolioOverlay}>
                    <span>{p.categoryLabel}</span>
                    <strong>{p.title}</strong>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal className={styles.centerCta}>
            <Link href="/portfolio" className="btn btn-outline">View Full Portfolio</Link>
          </Reveal>
        </div>
      </section>

      {/* BOOK A CALL BANNER */}
      <section className={styles.bookingBanner}>
        <div className={`container ${styles.bookingInner}`}>
          <div className={styles.bookingText}>
            <span className={styles.bookingBadge}>📅 Free Consultation</span>
            <h2 className={styles.bookingTitle}>Got a project in mind?<br/>Let&apos;s talk — on us.</h2>
            <p className={styles.bookingDesc}>
              Book a free 30-minute strategy call. We&apos;ll listen, advise, and outline a plan tailored
              to your brand — with zero pressure.
            </p>
          </div>
          <div className={styles.bookingCta}>
            <Link href="/booking" className="btn btn-primary" style={{ fontSize: '1.05rem', padding: '0.9rem 2rem' }}>
              📅 Book a Free Call
            </Link>
            <p className={styles.bookingNote}>No credit card · No commitment · 30 min</p>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section" style={{ background: 'var(--bg-elevated)' }}>
        <div className="container">
          <Reveal>
            <span className="eyebrow">Testimonials</span>
            <h2 className="section-heading">What clients say after launch</h2>
          </Reveal>
          <div className={styles.testimonialGrid}>
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name} delay={i * 60}>
                <TestimonialCard {...t} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className={`container ${styles.ctaInner}`}>
          <Reveal scale>
            <h2 className={styles.ctaTitle}>Let&apos;s Build Your Brand Together</h2>
            <p className={styles.ctaSub}>Tell us where you want to go — we&apos;ll handle the photography, the code, and everything in between.</p>
            <Link href="/contact" className="btn btn-primary">Get Free Consultation</Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
