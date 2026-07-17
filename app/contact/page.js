import Reveal from '@/components/Reveal';
import Icon from '@/components/Icon';
import ContactForm from '@/components/ContactForm';
import styles from './page.module.css';

export const metadata = {
  title: 'Contact',
  description:
    'Get in touch with NXRA DIGITAL for a free consultation on photography, videography, branding, website & software development, or digital marketing.',
};

const SOCIALS = [
  { name: 'Instagram', href: 'https://www.instagram.com/nxradigital.in?igsh=NHd5bm94aDN4d2E=', icon: 'photography' },
  { name: 'Facebook', href: 'https://facebook.com', icon: 'branding' },
  { name: 'LinkedIn', href: 'https://linkedin.com', icon: 'software' },
  { name: 'YouTube', href: 'https://youtube.com', icon: 'videography' },
];

export default function ContactPage() {
  return (
    <div className="theme-light">
      <section className={`section ${styles.pageHero}`}>
        <div className="container">
          <Reveal>
            <span className="eyebrow">Contact</span>
            <h1 className={styles.title}>Let&apos;s talk about what you&apos;re building</h1>
            <p className="section-sub">
              Share a few details and a member of our team will follow up within one business day with next steps.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className={`container ${styles.grid}`}>
          <Reveal className={`${styles.formCard} glass`}>
            <h2 className={styles.formTitle}>Send us a message</h2>
            <ContactForm />
          </Reveal>

          <Reveal delay={120} className={styles.infoCol}>
            <div className={`${styles.infoCard} glass`}>
              <h3>Business Information</h3>
              <ul className={styles.infoList}>
                <li><Icon name="phone" size={18} /> <a href="tel:+918618914432">+91 86189 14432</a></li>
                <li><Icon name="email" size={18} /> <a href="mailto:rajumthpt@gmail.com">rajumthpt@gmail.com</a><br/><a href="mailto:nxradigital9@gmail.com" style={{marginLeft: '26px'}}>nxradigital9@gmail.com</a></li>
                <li><Icon name="delivery" size={18} /> Mon &ndash; Sat, 9:00 AM &ndash; 7:00 PM IST</li>
              </ul>
              <div className={styles.social}>
                {SOCIALS.map((s) => (
                  <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.name} className={styles.socialIcon}>
                    <Icon name={s.icon} size={18} />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
