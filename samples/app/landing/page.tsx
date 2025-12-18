'use client'

import { useState } from 'react'
import styles from './page.module.scss'
import Button from '@/components/Button/Button'
import Card from '@/components/Card/Card'
import Input from '@/components/Input/Input'
import Modal from '@/components/Modal/Modal'

export default function LandingPage() {
  const [contactModalOpen, setContactModalOpen] = useState(false)
  const [email, setEmail] = useState('')

  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Build Better Products Faster</h1>
          <p className={styles.heroDescription}>
            Our platform helps teams collaborate, iterate, and ship high-quality software with confidence.
          </p>
          <div className={styles.heroActions}>
            <Button className={styles.heroButton} variant="primary" size="large">Get Started Free</Button>
            <Button className={styles.heroButton} variant="secondary" size="large">Watch Demo</Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.features}>
        <h2 className={styles.sectionTitle}>Why Choose Us</h2>
        <p className={styles.sectionDescription}>Everything you need to build modern applications</p>
        <div className={styles.featureGrid}>
          <Card className={styles.featureCard} variant="elevated" title="Lightning Fast">
            <p>Optimized performance that scales with your needs. Deploy globally in seconds.</p>
          </Card>
          <Card className={styles.featureCard} variant="elevated" title="Secure by Default">
            <p>Enterprise-grade security built into every layer. SOC2 and GDPR compliant.</p>
          </Card>
          <Card className={styles.featureCard} variant="elevated" title="Developer First">
            <p>Beautiful APIs, comprehensive docs, and SDKs for every major language.</p>
          </Card>
        </div>
      </section>

      {/* Pricing Section */}
      <section className={styles.pricing}>
        <h2 className={styles.sectionTitle}>Simple Pricing</h2>
        <p className={styles.sectionDescription}>No hidden fees. Cancel anytime.</p>
        <div className={styles.pricingGrid}>
          <Card className={styles.pricingCard} variant="outlined" title="Starter">
            <div className={styles.price}>
              <span className={styles.priceAmount}>$0</span>
              <span className={styles.pricePeriod}>/month</span>
            </div>
            <ul className={styles.featureList}>
              <li className={styles.featureItem}>Up to 3 projects</li>
              <li className={styles.featureItem}>1GB storage</li>
              <li className={styles.featureItem}>Community support</li>
            </ul>
            <Button fullWidth variant="secondary">Start Free</Button>
          </Card>
          <Card className={styles.pricingCard + ' ' + styles.popular} variant="elevated" title="Pro">
            <span className={styles.badge}>Most Popular</span>
            <div className={styles.price}>
              <span className={styles.priceAmount}>$29</span>
              <span className={styles.pricePeriod}>/month</span>
            </div>
            <ul className={styles.featureList}>
              <li className={styles.featureItem}>Unlimited projects</li>
              <li className={styles.featureItem}>100GB storage</li>
              <li className={styles.featureItem}>Priority support</li>
              <li className={styles.featureItem}>Advanced analytics</li>
            </ul>
            <Button fullWidth variant="primary">Get Started</Button>
          </Card>
          <Card className={styles.pricingCard} variant="outlined" title="Enterprise">
            <div className={styles.price}>
              <span className={styles.priceAmount}>Custom</span>
            </div>
            <ul className={styles.featureList}>
              <li className={styles.featureItem}>Everything in Pro</li>
              <li className={styles.featureItem}>Unlimited storage</li>
              <li className={styles.featureItem}>Dedicated support</li>
              <li className={styles.featureItem}>Custom integrations</li>
            </ul>
            <Button fullWidth variant="secondary" onClick={() => setContactModalOpen(true)}>Contact Sales</Button>
          </Card>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className={styles.newsletter}>
        <h2 className={styles.newsletterTitle}>Stay Updated</h2>
        <p className={styles.newsletterDescription}>Get the latest news and updates delivered to your inbox.</p>
        <div className={styles.newsletterForm}>
          <Input 
            className={styles.newsletterInput}
            type="email" 
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button className={styles.newsletterButton} variant="primary">Subscribe</Button>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Product</h3>
            <a className={styles.footerLink} href="#">Features</a>
            <a className={styles.footerLink} href="#">Pricing</a>
            <a className={styles.footerLink} href="#">Docs</a>
          </div>
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Company</h3>
            <a className={styles.footerLink} href="#">About</a>
            <a className={styles.footerLink} href="#">Blog</a>
            <a className={styles.footerLink} href="#">Careers</a>
          </div>
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Legal</h3>
            <a className={styles.footerLink} href="#">Privacy</a>
            <a className={styles.footerLink} href="#">Terms</a>
          </div>
        </div>
        <p className={styles.copyright}>© 2026 Company. All rights reserved.</p>
      </footer>

      {/* Contact Modal */}
      <Modal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
        title="Contact Sales"
        size="medium"
      >
        <p className={styles.modalDescription}>Fill out the form below and we'll get back to you within 24 hours.</p>
        <Input className={styles.modalInput} label="Name" placeholder="Your name" />
        <Input className={styles.modalInput} label="Email" type="email" placeholder="your@email.com" />
        <Input className={styles.modalInput} label="Company" placeholder="Company name" />
        <div className={styles.modalActions}>
          <Button className={styles.modalButton} variant="secondary" onClick={() => setContactModalOpen(false)}>Cancel</Button>
          <Button className={styles.modalButton} variant="primary">Send Message</Button>
        </div>
      </Modal>
    </div>
  )
}
