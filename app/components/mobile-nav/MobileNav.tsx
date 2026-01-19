import Link from "next/link";
import styles from "./MobileNav.module.scss";

export default function MobileNav() {
  return (
    <div className={styles.overlay}>
      <nav className={styles.mobile__nav}>
        <ul>
          <li className={styles.nav__item}>
            <Link className={styles.link} href="/">
              Home
            </Link>
          </li>
          <li className={styles.nav__item}>
            <Link className={styles.link} href="#">
              Headphones
            </Link>
          </li>
          <li className={styles.nav__item}>
            <Link className={styles.link} href="#">
              Speakers
            </Link>
          </li>
          <li className={styles.nav__item}>
            <Link className={styles.link} href="#">
              Earphones
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
