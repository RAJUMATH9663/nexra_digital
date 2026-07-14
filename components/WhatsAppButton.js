import Icon from './Icon';
import styles from './WhatsAppButton.module.css';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/918618914432?text=Hi%21%20I%27m%20interested%20in%20growing%20my%20business%20with%20NEXRA%20DIGITAL.%20Please%20share%20your%20portfolio%20and%20packages."
      target="_blank"
      rel="noopener noreferrer"
      className={styles.fab}
      aria-label="Chat with NEXRA DIGITAL on WhatsApp"
    >
      <Icon name="whatsapp" size={28} strokeWidth={1.6} />
    </a>
  );
}
