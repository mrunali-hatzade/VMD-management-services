import { MessageCircle } from 'lucide-react';
import styles from './WhatsAppButton.module.css';

export default function WhatsAppButton() {
  return (
    <a 
      href="https://wa.me/918459845730?text=Hi%20VMD%20Management%20Services,%20I%20am%20interested%20in%20your%20security%20and%20facility%20services."
      target="_blank" 
      rel="noopener noreferrer"
      className={styles.whatsappBtn}
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle size={32} />
    </a>
  );
}
