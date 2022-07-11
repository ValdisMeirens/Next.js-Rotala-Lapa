import { Fragment } from "react";
import classes from "./DesktopMainGallery.module.css";
import Link from "next/link";
import Info from "../../header/common/Info";

const DesktopMainGallery = (props) => {
  const galleryItems = props.gallery.data.map(({ ID, NAME, IMAGE_NAME }) => {
    return (
      <Link
        key={ID}
        href={`/galerija-ar-cilvekiem-kam-lekat-polku-ir-hobijs/galerija/${ID}`}
      >
        <div className={classes.galleryImageContainer}>
          <img
            src={`/gallery_header/${IMAGE_NAME}`}
            alt={NAME}
            className={classes.galleryImage}
          />
          <div className={classes.imageTitle}>{NAME}</div>
        </div>
      </Link>
    );
  });

  return (
    <div className={classes.galleryContainer}>
      <Info
        backgroundImage="/gallery_header/galerijas_titulbilde.png"
        backgroundImageText="Galerija"
        image="/header/GALERIJA.png"
        imageText="Galerija teksts"
      />
      {galleryItems}
    </div>
  );
};

export default DesktopMainGallery;
