import Icon from './Icon';
import styles from './WhatsAppButton.module.css';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/911234567890"
      target="_blank"
      rel="noopener noreferrer"
      className={styles.fab}
      aria-label="Chat with NEXRA DIGITAL on WhatsApp"
    >
      <Icon name="whatsapp" size={28} strokeWidth={1.6} />
    </a>
  );
}
