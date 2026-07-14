import Icon from './Icon';
import styles from './TestimonialCard.module.css';

export default function TestimonialCard({ quote, name, role, rating = 5 }) {
  return (
    <div className={`${styles.card} glass`}>
      <Icon name="quote" size={30} className={styles.quoteIcon} />
      <p className={styles.quote}>{quote}</p>
      <div className={styles.stars} aria-label={`${rating} out of 5 stars`}>
        {Array.from({ length: rating }).map((_, i) => (
          <Icon key={i} name="star" size={16} />
        ))}
      </div>
      <div className={styles.person}>
        <div className={styles.avatar} aria-hidden="true">{name.charAt(0)}</div>
        <div>
          <p className={styles.name}>{name}</p>
          <p className={styles.role}>{role}</p>
        </div>
      </div>
    </div>
  );
}
