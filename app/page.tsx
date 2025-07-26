import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Link href="/archive">
          <Image
            className={styles.logo}
            src="/stitch_logo.png"
            alt="Samewave7 stitch logo"
            width={400}
            height={373}
            priority
          />
        </Link>
      </main>
    </div>
  );
}
