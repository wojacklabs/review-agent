'use client';

import styles from './Hero.module.scss';

interface HeroProps {
  title: string;
  subtitle: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

export default function Hero({
  title,
  subtitle,
  primaryButtonText = 'Start Free Trial',
  secondaryButtonText = 'Watch Demo',
  onPrimaryClick,
  onSecondaryClick,
}: HeroProps) {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
        <div className={styles.buttons}>
          <button type="button" className={styles.primaryButton} onClick={onPrimaryClick}>
            {primaryButtonText}
          </button>
          <button type="button" className={styles.secondaryButton} onClick={onSecondaryClick}>
            <span className={styles.playIcon} />
            {secondaryButtonText}
          </button>
        </div>
        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statValue}>10M+</span>
            <span className={styles.statLabel}>Files Stored</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statValue}>50K+</span>
            <span className={styles.statLabel}>Teams</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statValue}>99.9%</span>
            <span className={styles.statLabel}>Uptime</span>
          </div>
        </div>
      </div>
      <div className={styles.visual}>
        <div className={styles.mockup}>
          <div className={styles.mockupHeader}>
            <span className={styles.mockupDot} />
            <span className={styles.mockupDot} />
            <span className={styles.mockupDot} />
          </div>
          <div className={styles.mockupContent}>
            <div className={styles.mockupSidebar}>
              <div className={styles.mockupItem} />
              <div className={styles.mockupItem} />
              <div className={styles.mockupItem} />
            </div>
            <div className={styles.mockupMain}>
              <div className={styles.mockupFile} />
              <div className={styles.mockupFile} />
              <div className={styles.mockupFile} />
              <div className={styles.mockupFile} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
