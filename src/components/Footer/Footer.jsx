import styles from "./Footer.module.css";
import { CiLinkedin } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export const Footer = ({ categories }) => {
  return (
    <footer
      className={
        categories.length != 0
          ? ` ${styles.footerRelativeContainer}`
          : ` ${styles.footerFixedContainer}`
      }
    >
      <h3 className={styles.footerTitle}>FACUNDO MAKSUD - 2024</h3>
      <div className={styles.footerContainerContact}>
        <CiLinkedin className={styles.linkedinLogo} />
        <FaWhatsapp className={styles.whatsappLogo} />
        <FaYoutube className={styles.youtubeLogo} />
      </div>
    </footer>
  );
};
