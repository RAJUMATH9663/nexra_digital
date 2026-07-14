import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';
import Icon from './Icon';

const SOCIAL = [
  { name: 'Instagram', href: 'https://instagram.com', icon: 'photography' },
  { name: 'Facebook', href: 'https://facebook.com', icon: 'branding' },
  { name: 'LinkedIn', href: 'https://linkedin.com', icon: 'software' },
  { name: 'YouTube', href: 'https://youtube.com', icon: 'videography' },
];

const SERVICES = [
  'Photography', 'Videography', 'Website Development', 'Software Development', 'Branding', 'Digital Marketing',
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="gold-seam" />
      <div className={`container ${styles.grid}`}>
        <div className={styles.brandCol}>
          <Image src="/images/nexra.PNG" alt="NEXRA DIGITAL" width={168} height={168} className={styles.logoImage} />
          <p className={styles.tagline}>Turning Vision Into Digital Reality</p>
          <div className={styles.social}>
            {SOCIAL.map((s) => (
              <a key={s.name} href={s.href} aria-label={s.name} target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                <Icon name={s.icon} size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className={styles.col}>
          <h4>Services</h4>
          <ul>
            {SERVICES.map((s) => (
              <li key={s}><Link href="/services">{s}</Link></li>
            ))}
          </ul>
        </div>

        <div className={styles.col}>
          <h4>Company</h4>
          <ul>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/portfolio">Portfolio</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className={styles.col}>
          <h4>Get in Touch</h4>
          <ul className={styles.contactList}>
            <li><Icon name="location" size={16} /> Bengaluru, Karnataka, India</li>
            <li><Icon name="phone" size={16} /> <a href="tel:+919663319527">+91 96633 19527</a> / <a href="tel:+918073810876">+91 80738 10876</a></li>
            <li><Icon name="email" size={16} /> <a href="mailto:rajumthpt@gmail.com">rajumthpt@gmail.com</a><br/><a href="mailto:kamblevinaychand74@gmail.com">kamblevinaychand74@gmail.com</a></li>
          </ul>
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <p>&copy; {new Date().getFullYear()} NEXRA DIGITAL. All rights reserved.</p>
        <div className={styles.legal}>
          <Link href="/contact">Privacy Policy</Link>
          <span aria-hidden="true">•</span>
          <Link href="/contact">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
