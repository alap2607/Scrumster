import NavBar from "./components/navbar";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
        <NavBar></NavBar>
    </main>
  );
}
