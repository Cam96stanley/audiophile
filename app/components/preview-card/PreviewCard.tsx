import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import headphones from "../../assets/shared/image-headphones-preview.png";
import speaker from "../../assets/shared/image-speaker-preview.png";
import earphones from "../../assets/shared/image-earphones-preview.png";
import arrowIcon from "../../assets/shared/desktop/icon-arrow-right.svg";
import styles from "./PreviewCard.module.scss";

type TCard = {
  img: StaticImageData;
  title: string;
  href: string;
};

const cards = [
  {
    img: headphones,
    title: "Headphones",
    href: "#",
  },
  {
    img: speaker,
    title: "Speakers",
    href: "#",
  },
  {
    img: earphones,
    title: "Earphones",
    href: "#",
  },
];

export default function PreviewCard() {
  return (
    <>
      {cards.map((card: TCard) => (
        <div key={card.title} className={styles.card}>
          <Image
            className={styles.image}
            src={card.img}
            alt={card.title}
            width={80}
            height={100}
          />
          <h2 className={styles.title}>{card.title}</h2>
          <Link className={styles.link} href={card.href}>
            Shop <Image src={arrowIcon} alt="Right arrow icon" />
          </Link>
        </div>
      ))}
    </>
  );
}
