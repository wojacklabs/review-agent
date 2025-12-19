import styles from './Testimonial.module.scss';

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatarInitials: string;
  rating?: number;
}

export default function Testimonial({
  quote,
  author,
  role,
  company,
  avatarInitials,
  rating = 5,
}: TestimonialProps) {
  return (
    <article className={styles.testimonial}>
      <div className={styles.stars}>
        {Array.from({ length: 5 }).map((_, i) => (
          <span
            key={i}
            className={`${styles.star} ${i < rating ? styles.starFilled : ''}`}
          >
            ★
          </span>
        ))}
      </div>
      <blockquote className={styles.quote}>{quote}</blockquote>
      <div className={styles.author}>
        <div className={styles.avatar}>{avatarInitials}</div>
        <div className={styles.info}>
          <span className={styles.name}>{author}</span>
          <span className={styles.role}>
            {role} at {company}
          </span>
        </div>
      </div>
    </article>
  );
}
