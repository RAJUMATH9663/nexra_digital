'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

const LINKS = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.brand} aria-label="NEXRA DIGITAL home">
          <Image src="/images/nexra.PNG" alt="NEXRA DIGITAL" width={168} height={168} className={styles.logoImage} priority />
        </Link>

        <nav className={styles.links} aria-label="Primary">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`${styles.link} ${pathname === l.href ? styles.active : ''}`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className={styles.actions}>
          <Link href="/booking" className="btn btn-outline btn-sm">📅 Book a Call</Link>
          <Link href="/contact" className="btn btn-primary btn-sm">Get Quote</Link>
          <button
            className={`${styles.burger} ${open ? styles.burgerOpen : ''}`}
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className={`${styles.mobileMenu} ${open ? styles.mobileMenuOpen : ''}`}>
        {LINKS.map((l) => (
          <Link key={l.href} href={l.href} className={styles.mobileLink}>
            {l.label}
          </Link>
        ))}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '0.5rem' }}>
          <Link href="/booking" className="btn btn-outline">
            📅 Book a Free Call
          </Link>
          <Link href="/contact" className="btn btn-primary">
            Get Quote
          </Link>
        </div>
      </div>
    </header>
  );
}
