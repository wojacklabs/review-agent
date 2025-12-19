import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FeatureCard from '@/components/FeatureCard';
import Testimonial from '@/components/Testimonial';
import PricingTable from '@/components/PricingTable';
import Footer from '@/components/Footer';
import styles from './page.module.scss';

const features = [
  {
    icon: 'cloud' as const,
    title: 'Unlimited Storage',
    description: 'Store all your files without worrying about space. Scale your storage as your team grows.',
  },
  {
    icon: 'lock' as const,
    title: 'Enterprise Security',
    description: 'Bank-level encryption keeps your data safe. SOC 2 Type II and GDPR compliant.',
  },
  {
    icon: 'sync' as const,
    title: 'Real-time Sync',
    description: 'Changes sync instantly across all devices. Always work with the latest version.',
  },
  {
    icon: 'share' as const,
    title: 'Easy Sharing',
    description: 'Share files and folders with custom permissions. Control who sees what.',
  },
  {
    icon: 'search' as const,
    title: 'Smart Search',
    description: 'Find any file in seconds with AI-powered search. Search inside documents too.',
  },
  {
    icon: 'history' as const,
    title: 'Version History',
    description: 'Access previous versions of any file. Restore accidentally deleted content.',
  },
];

const testimonials = [
  {
    quote: 'CloudSync transformed how our team collaborates. We cut our file management time by 60% and eliminated the chaos of email attachments.',
    author: 'Sarah Chen',
    role: 'VP of Engineering',
    company: 'TechFlow',
    avatarInitials: 'SC',
    rating: 5,
  },
  {
    quote: 'The security features give us peace of mind. We handle sensitive client data and CloudSync meets all our compliance requirements.',
    author: 'Michael Torres',
    role: 'CISO',
    company: 'FinanceHub',
    avatarInitials: 'MT',
    rating: 5,
  },
  {
    quote: 'Switching from our old solution was seamless. The sync speed is incredible and the search actually finds what I need.',
    author: 'Emily Watson',
    role: 'Creative Director',
    company: 'DesignCo',
    avatarInitials: 'EW',
    rating: 5,
  },
];

const pricingPlans = [
  {
    name: 'Starter',
    price: 9,
    period: 'month',
    description: 'Perfect for individuals and small projects',
    features: [
      '100 GB storage',
      '5 team members',
      'Basic file sharing',
      'Email support',
      '30-day version history',
    ],
  },
  {
    name: 'Pro',
    price: 29,
    period: 'month',
    description: 'For growing teams that need more power',
    features: [
      '1 TB storage',
      'Unlimited team members',
      'Advanced permissions',
      'Priority support',
      '1-year version history',
      'API access',
    ],
    isPopular: true,
  },
  {
    name: 'Enterprise',
    price: 99,
    period: 'month',
    description: 'For organizations with advanced needs',
    features: [
      'Unlimited storage',
      'SSO & SAML',
      'Advanced analytics',
      'Dedicated support',
      'Unlimited version history',
      'Custom integrations',
    ],
    buttonText: 'Contact Sales',
  },
];

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />

      <Hero
        title="Your files, everywhere. Secure and lightning fast."
        subtitle="CloudSync is the modern cloud storage platform built for teams. Store, sync, and share files with enterprise-grade security and blazing performance."
      />

      <section id="features" className={styles.featuresSection}>
        <h2 className={styles.sectionTitle}>Everything you need to manage files</h2>
        <p className={styles.sectionSubtitle}>
          Powerful features that help teams work smarter, not harder.
        </p>
        <div className={styles.featuresGrid}>
          {features.map((feature) => (
            <div key={feature.title} className={styles.featureItem}>
              <FeatureCard {...feature} />
            </div>
          ))}
        </div>
      </section>

      <section id="testimonials" className={styles.testimonialsSection}>
        <h2 className={styles.sectionTitle}>Loved by teams worldwide</h2>
        <p className={styles.sectionSubtitle}>
          See why thousands of teams choose CloudSync for their file management.
        </p>
        <div className={styles.testimonialsGrid}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.author} className={styles.testimonialItem}>
              <Testimonial {...testimonial} />
            </div>
          ))}
        </div>
      </section>

      <section id="pricing" className={styles.pricingSection}>
        <h2 className={styles.sectionTitle}>Simple, transparent pricing</h2>
        <p className={styles.sectionSubtitle}>
          No hidden fees. No surprises. Choose the plan that fits your needs.
        </p>
        <PricingTable plans={pricingPlans} />
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>Ready to get started?</h2>
          <p className={styles.ctaSubtitle}>
            Join over 50,000 teams already using CloudSync. Start your free 14-day trial today.
          </p>
          <div className={styles.ctaButtons}>
            <button type="button" className={styles.ctaPrimary}>
              Start Free Trial
            </button>
            <button type="button" className={styles.ctaSecondary}>
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
