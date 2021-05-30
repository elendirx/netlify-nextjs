// import '../styles/globals.css'
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <title>My page title</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />

      <meta charset="utf-8" />
      <meta http-equiv="x-ua-compatible" content="ie=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <title>Bézův grunt</title>
      <link
        rel="icon"
        type="imagefavicon/jpg"
        sizes="16x16"
        href="obrazky/favicon.jpg"
      />

      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x"
        crossorigin="anonymous"
      />

      <link rel="stylesheet" href="style.css" />

      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css" />

      <script src="https://api.mapy.cz/loader.js"></script>
      <script>
        Loader.load();
      </script>
    </Head>
    <Component {...pageProps} />
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf"
      crossorigin="anonymous"
    ></script>
  </>
}

export default MyApp
