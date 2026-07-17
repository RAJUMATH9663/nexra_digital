import Image from 'next/image';
import Link from 'next/link';
import Reveal from '@/components/Reveal';
import Icon from '@/components/Icon';
import { CORE_VALUES, TECH_STACK, TIMELINE, WHY_CHOOSE_US } from '@/lib/data';
import styles from './page.module.css';

export const metadata = {
  title: 'About Us',
  description:
    'NXRA DIGITAL is a full-service creative agency founded in 2019 — our story, mission, vision, core values, technology stack, and timeline.',
};

export default function AboutPage() {
  return (
    <div className="theme-light">
      <section className={`section ${styles.pageHero}`}>
        <div className="container">
          <Reveal>
            <span className="eyebrow">About NXRA DIGITAL</span>
            <h1 className={styles.title}>Built by people who&apos;d rather ship than pitch</h1>
            <p className="section-sub">
              We started NXRA DIGITAL because growing brands kept stitching together five different vendors for
              photography, design, and code. We built the team that does it all, to one standard.
            </p>
          </Reveal>
        </div>
      </section>

      {/* STORY */}
      <section className="section">
        <div className={`container ${styles.storyGrid}`}>
          <Reveal>
            <Image src="/images/office-background.svg" alt="NXRA DIGITAL studio space" width={800} height={600} className={styles.storyImg} style={{ objectFit: 'cover' }} quality={100} loading="lazy" />
          </Reveal>
          <Reveal delay={120}>
            <span className="eyebrow">Our Story</span>
            <h2 className="section-heading">From a one-room studio to a full digital practice</h2>
            <p className="section-sub">
              NXRA DIGITAL opened in 2019 with a single shared camera kit and a conviction that brand, design, and
              engineering shouldn&apos;t live in separate agencies. Five years on, we run photography and film
              production, full brand identity work, and Next.js / Django software builds — all from one team that
              carries a project from first shoot to shipped product.
            </p>
          </Reveal>
        </div>
      </section>

      {/* MISSION / VISION */}
      <section className="section" style={{ background: 'var(--bg-elevated)' }}>
        <div className={`container ${styles.mvGrid}`}>
          <Reveal className={`${styles.mvCard} glass`}>
            <Icon name="growth" size={30} className={styles.mvIcon} />
            <h3>Our Mission</h3>
            <p>Give founders and growing teams agency-grade creative and engineering without the overhead of managing five vendors.</p>
          </Reveal>
          <Reveal delay={100} className={`${styles.mvCard} glass`}>
            <Icon name="star" size={30} className={styles.mvIcon} />
            <h3>Our Vision</h3>
            <p>To be the single creative and technology partner ambitious brands call before anyone else.</p>
          </Reveal>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="section">
        <div className="container">
          <Reveal>
            <span className="eyebrow">Core Values</span>
            <h2 className="section-heading">What guides every project we take on</h2>
          </Reveal>
          <div className={styles.valuesGrid}>
            {CORE_VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 60} className={`${styles.valueCard} glass`}>
                <Icon name={v.icon} size={26} className={styles.mvIcon} />
                <h3>{v.title}</h3>
                <p>{v.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="section" style={{ background: 'var(--bg-elevated)' }}>
        <div className="container">
          <Reveal>
            <span className="eyebrow">Technology Stack</span>
            <h2 className="section-heading">Modern, maintainable technology behind every build</h2>
          </Reveal>
          <div className={styles.techGrid}>
            {TECH_STACK.map((t, i) => (
              <Reveal key={t.label} delay={i * 40} className={`${styles.techCard} glass`}>
                <Icon name={t.icon} size={32} />
                <span>{t.label}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="section">
        <div className="container">
          <Reveal>
            <span className="eyebrow">Timeline</span>
            <h2 className="section-heading">Six years, four milestones</h2>
          </Reveal>
          <div className={styles.timeline}>
            {TIMELINE.map((t, i) => (
              <Reveal key={t.year} delay={i * 80} className={styles.timelineItem}>
                <span className={styles.timelineYear}>{t.year}</span>
                <div className={styles.timelineDot} aria-hidden="true" />
                <div>
                  <h3 className={styles.timelineTitle}>{t.title}</h3>
                  <p className={styles.timelineDesc}>{t.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section" style={{ background: 'var(--bg-elevated)' }}>
        <div className="container">
          <Reveal>
            <span className="eyebrow">Why Choose NXRA DIGITAL</span>
            <h2 className="section-heading">The reasons clients renew instead of rebidding</h2>
          </Reveal>
          <div className={styles.whyGrid}>
            {WHY_CHOOSE_US.slice(0, 6).map((w, i) => (
              <Reveal key={w.title} delay={i * 50} className={styles.whyItem}>
                <div className={styles.whyIcon}><Icon name={w.icon} size={24} /></div>
                <div>
                  <h3 className={styles.whyTitle}>{w.title}</h3>
                  <p className={styles.whyDesc}>{w.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className={styles.centerCta}>
            <Link href="/contact" className="btn btn-primary">Start a Project</Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
