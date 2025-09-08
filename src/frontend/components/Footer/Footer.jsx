import styles from './Footer.module.css';
import { FaFacebookF, FaTwitter, FaGithub, FaChessKing } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        
        {/* Column 1 - About */}
        <div className={styles.column}>
          <h3><FaChessKing style={{ marginRight: '0.5rem' }} />Chess Analyzer</h3>
          <p>
            A chess analysis web application by Group - Faculty of Information Technology, University of Science – VNU-HCM.
          </p>
          <div className={styles.socials}>
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaGithub /></a>
          </div>
        </div>

        {/* Column 2 - Quick Links */}
        <div className={styles.column}>
          <h3>Quick Links</h3>
          <ul className={styles.links}>
            <li><a href="/">Home</a></li>
            <li><a href="/dashboard/analyze">Analysis</a></li>
            <li><a href="/dashboard/archive">Archive</a></li>
            <li><a href="/dashboard/news">News</a></li>
            <li><a href="/about">About Us</a></li>
          </ul>
        </div>

        {/* Column 3 - Contact */}
        <div className={styles.column}>
          <h3>Contact</h3>
          <p>Email: info@chessanalyzer.com</p>
          <p>Address: 227 Nguyen Van Cu, District 5, HCMC</p>
          <p>For educational purposes only. Chess analysis powered by advanced AI.</p>
        </div>
      </div>

      <div className={styles.bottomBar}>
        © 2025 Chess Analyzer | All Rights Reserved
      </div>
    </footer>
  );
}
