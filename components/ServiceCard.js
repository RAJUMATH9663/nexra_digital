import Link from 'next/link';
import Icon from './Icon';
import styles from './ServiceCard.module.css';

export default function ServiceCard({ icon, title, description, href = '/contact' }) {
  return (
    <div className={`${styles.card} glass`}>
      <div className={styles.iconWrap}>
        <Icon name={icon} size={30} strokeWidth={1.8} />
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.desc}>{description}</p>
      <Link href={href} className={styles.link}>
        Learn More <Icon name="arrow" size={16} />
      </Link>
    </div>
  );
}
