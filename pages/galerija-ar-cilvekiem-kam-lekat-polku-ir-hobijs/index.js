import Head from "next/head";
import { Fragment } from "react";
import DesktopMainGallery from "../../components/gallery/desktop/DesktopMainGallery";
import Header from "../../components/header/Header";


export default function GalleryMain(props) {
  const description = "TDA Rotaļa ir deju kolektīvs ar vēsturi";
  // console.log(props);
  return (
    <Fragment>
      <Head>
        <title>TDA Rotaļa</title>
        <meta property="og:title" content="TDA Rotaļa" key="title" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
      </Head>

      <main>
        <Header />
        <DesktopMainGallery gallery={props}/>
      </main>
    </Fragment>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${process.env.host}/api/gallery_headers`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
