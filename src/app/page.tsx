import Image from "next/image";
import Product from "./product/page";
import styles from "./page.module.css";

export default function Home() {
  
  return (
    <main className={styles.main}>
      <Product  />
    </main>
  );
}
