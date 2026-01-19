import PreviewCard from "@/app/components/preview-card/PreviewCard";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.hero}>
        <div className={styles.content}>
          <p className={styles.subtitle}>New Product</p>
          <h1 className={styles.title}>XX99 Mark II Headphones</h1>
          <p className={styles.body}>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <button className={styles.products__button}>See Product</button>
        </div>
      </main>
      <section className={styles.card__section}>
        <PreviewCard />
      </section>
    </div>
  );
}
