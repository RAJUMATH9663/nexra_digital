import Reveal from '@/components/Reveal';
import PortfolioGrid from '@/components/PortfolioGrid';
import { PORTFOLIO_ITEMS, PORTFOLIO_CATEGORIES } from '@/lib/data';
import styles from './page.module.css';

export const metadata = {
  title: 'Portfolio',
  description:
    'Browse NXRA DIGITAL work across video editing, photography & videography, graphic design, social media management, digital marketing, and website development.',
};

export default function PortfolioPage() {
  return (
    <>
      <section className={`section ${styles.pageHero}`}>
        <div className="container">
          <Reveal>
            <span className="eyebrow">Portfolio</span>
            <h1 className={styles.title}>Selected work across every discipline we practice</h1>
            <p className="section-sub">
              Filter by category to see how a single studio handles video editing, photography & videography,
              graphic design, social media management, digital marketing, and website development — all built to
              the same standard.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <PortfolioGrid items={PORTFOLIO_ITEMS} categories={PORTFOLIO_CATEGORIES} />
        </div>
      </section>
    </>
  );
}
