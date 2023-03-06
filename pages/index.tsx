import Head from "next/head";
import Navbar from "@/components/home/navbar";
import About from "@/components/home/about";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ricky Kuo</title>
        <meta name="description" content="Ricky kuo portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <About />
      </main>
    </>
  );
}
