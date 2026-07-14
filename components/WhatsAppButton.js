import Icon from './Icon';
import styles from './WhatsAppButton.module.css';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/918618914432?text=how%20can%20i%20help%20u%20%3F"
      target="_blank"
      rel="noopener noreferrer"
      className={styles.fab}
      aria-label="Chat with NEXRA DIGITAL on WhatsApp"
    >
      <Icon name="whatsapp" size={28} strokeWidth={1.6} />
    </a>
  );
}
