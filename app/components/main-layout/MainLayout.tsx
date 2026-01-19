"use client";

import Image from "next/image";
import styles from "./MainLayout.module.scss";
import hamIcon from "../../assets/shared/tablet/icon-hamburger.svg";
import cartIcon from "../../assets/shared/desktop/icon-cart.svg";
import { useState } from "react";
import MobileNav from "@/app/components/mobile-nav/MobileNav";
import Link from "next/link";

export default function MainLayout() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__container}>
          <button
            className={`${styles.button} ${styles.ham_button}`}
            onClick={() => setOpen((prev) => !prev)}
            aria-expanded={open}
            aria-label="Toggle menu"
          >
            <Image src={hamIcon} alt="Hamburger Icon" />
          </button>
          <p className={styles.logo}>audiophile</p>

          <div className={styles.links__container}>
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
          </div>

          <button className={styles.button}>
            <Image src={cartIcon} alt="Cart Icon" />
          </button>
        </div>
      </header>
      {open && <MobileNav />}
    </>
  );
}
