import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Shree Ram Overseas</title>
        <meta
          name="description"
          content="Website for Shree ram overseas pvt. ltd."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <h1>This is heading</h1>
      </main>
    </>
  );
}
