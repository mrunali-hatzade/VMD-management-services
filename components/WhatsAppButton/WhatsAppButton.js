import { Phone } from 'lucide-react';
import WhatsAppIcon from '../WhatsAppIcon/WhatsAppIcon';
import styles from './WhatsAppButton.module.css';

export default function WhatsAppButton() {
  return (
    <div className={styles.floatingContainer}>
      <a 
        href="tel:8799859129"
        className={styles.callBtn}
        aria-label="Call us"
      >
        <Phone size={28} />
      </a>
      <a 
        href="https://wa.me/919503996692?text=Hi%20VMD%20Management%20Services,%20I%20am%20interested%20in%20your%20security%20and%20facility%20services."
        target="_blank" 
        rel="noopener noreferrer"
        className={styles.whatsappBtn}
        aria-label="Chat with us on WhatsApp"
      >
        <WhatsAppIcon size={30} color="#FFFFFF" />
      </a>
    </div>
  );
}
