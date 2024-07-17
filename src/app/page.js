import { Products } from "@/components/Products/Products";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
        <Products/>
    </main>
  );
}
