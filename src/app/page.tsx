import Image from "next/image";
import styles from "./page.module.css";
import { getProducts } from "./actions";

export const runtime = "edge";

export default async function Home() {
  console.log(await getProducts());

  return <main className={styles.main}>hello world</main>;
}
