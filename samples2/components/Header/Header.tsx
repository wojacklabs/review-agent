'use client';

import { useState } from 'react';
import styles from './Header.module.scss';

interface NavItem {
  label: string;
  href: string;
}

interface HeaderProps {
  logo?: string;
  navItems?: NavItem[];
  onCtaClick?: () => void;
}

export default function Header({
  logo = 'CloudSync',
  navItems = [
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ],
  onCtaClick,
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a href="/" className={styles.logo}>
          {logo}
        </a>

        <nav className={`${styles.nav} ${mobileMenuOpen ? styles.navOpen : ''}`}>
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className={styles.navLink}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className={styles.actions}>
          <button type="button" className={styles.loginButton}>
            Log in
          </button>
          <button type="button" className={styles.ctaButton} onClick={onCtaClick}>
            Get Started
          </button>
        </div>

        <button
          type="button"
          className={styles.menuToggle}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={styles.menuBar} />
          <span className={styles.menuBar} />
          <span className={styles.menuBar} />
        </button>
      </div>
    </header>
  );
}
