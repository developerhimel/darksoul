import Head from "next/head";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";

export default function Home() {
  return (
    <>
      <Head>
        <title>Dark Soul</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Homepage />
    </>
  );
}
