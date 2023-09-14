import "bootstrap/dist/css/bootstrap.css";
import Head from "next/head";
import "@/styles/globals.css";
import Header from "@/components/Header";
import Location from "@/components/Location";
import Footer from "@/components/Footer";

export default function App({ Component, pageProps }) {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }

  return (
    <>
      <Head>
        <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.1.3/js/bootstrap.min.js"
          integrity="sha512-HAFSPw0eLcJy5D+Q0/F5ZV28WJ9vap7VwnlZasKj6gOuy6G3U6yjepc+ADTEOZJWQ/wvSiajDdVEZFxkaA1wNQ=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        ></script>
        <link rel="icon" href="logoo.png" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ"
          crossorigin="anonymous"
        ></link>
        <script
          src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.7/dist/umd/popper.min.js"
          integrity="sha384-zYPOMqeu1DAVkHiLqWBUTcbYfZ8osu1Nd6Z89ify25QV9guujx43ITvfi12/QExE"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.min.js"
          integrity="sha384-Y4oOpwW3duJdCWv5ly8SCFYWqFDsfob/3GkgExXKV4idmbt98QcxXYs9UoXAB7BZ"
          crossorigin="anonymous"
        ></script>
        <script src="https://code.jquery.com/jquery-3.6.0.slim.min.js" />
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.3/dist/umd/popper.min.js" />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" />
        {/* <title>Baliyo Venture</title> */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
