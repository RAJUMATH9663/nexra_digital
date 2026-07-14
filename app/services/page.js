import Link from 'next/link';
import Reveal from '@/components/Reveal';
import ServiceCard from '@/components/ServiceCard';
import { SERVICES } from '@/lib/data';
import styles from './page.module.css';

export const metadata = {
  title: 'Services',
  description:
    'Explore NEXRA DIGITAL services: photography, videography, drone shoots, video editing, website & software development, UI/UX, branding, SEO, and digital marketing.',
};

export default function ServicesPage() {
  return (
    <>
      <section className={`section ${styles.pageHero}`}>
        <div className="container">
          <Reveal>
            <span className="eyebrow">Services</span>
            <h1 className={styles.title}>Every capability your brand needs, under one roof</h1>
            <p className="section-sub">
              From the first product shoot to the software that runs your business, NEXRA DIGITAL scopes each
              engagement around a measurable outcome — not a generic package.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className={styles.grid}>
            {SERVICES.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 60}>
                <ServiceCard icon={s.icon} title={s.title} description={s.description} href="/contact" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={`container ${styles.ctaInner}`}>
          <Reveal scale>
            <h2 className="section-heading" style={{ margin: '0 auto' }}>Not sure which service fits your goal?</h2>
            <p className="section-sub" style={{ margin: '0.75rem auto var(--space-4)' }}>
              Tell us what you&apos;re building and we&apos;ll recommend the right combination.
            </p>
            <Link href="/contact" className="btn btn-primary">Talk To Our Team</Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
