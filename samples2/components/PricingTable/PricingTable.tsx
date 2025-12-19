'use client';

import styles from './PricingTable.module.scss';

interface PricingPlan {
  name: string;
  price: number;
  period: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  buttonText?: string;
}

interface PricingTableProps {
  plans: PricingPlan[];
  onSelectPlan?: (planName: string) => void;
}

export default function PricingTable({ plans, onSelectPlan }: PricingTableProps) {
  return (
    <div className={styles.table}>
      {plans.map((plan) => (
        <div
          key={plan.name}
          className={`${styles.plan} ${plan.isPopular ? styles.planPopular : ''}`}
        >
          {plan.isPopular && <span className={styles.badge}>Most Popular</span>}
          <h3 className={styles.name}>{plan.name}</h3>
          <p className={styles.description}>{plan.description}</p>
          <div className={styles.priceWrapper}>
            <span className={styles.currency}>$</span>
            <span className={styles.price}>{plan.price}</span>
            <span className={styles.period}>/{plan.period}</span>
          </div>
          <ul className={styles.features}>
            {plan.features.map((feature) => (
              <li key={feature} className={styles.feature}>
                <span className={styles.checkIcon}>✓</span>
                <span className={styles.featureText}>{feature}</span>
              </li>
            ))}
          </ul>
          <button
            type="button"
            className={`${styles.button} ${plan.isPopular ? styles.buttonPopular : ''}`}
            onClick={() => onSelectPlan?.(plan.name)}
          >
            {plan.buttonText || 'Get Started'}
          </button>
        </div>
      ))}
    </div>
  );
}
