import classes from "./DesktopMainDiv.module.css";
import DesktopNewsContent from "./DesktopNewsContent.js";
import Image from "next/image";
import { motion, AnimatePresence, useCycle } from "framer-motion";
import { useEffect } from "react";

import new2 from "../../../public/aboutus/Donats.png";

const animationVariant = {
  hidden: {
    opacity: 0,
  },
  visiable: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 1,
    },
  },
};

const DesktopMainDiv = (props) => {
  const newsArray = props.data.news.data.news.map((news) => (
    <motion.div
      variants={animationVariant}
      key={news.ID}
      initial="hidden"
      animate="visiable"
      exit="exit"
    >
      <Image src={new2} alt="TDA Rotaļa jaunumi" className={classes.image} />
      <DesktopNewsContent
        title={news.title}
        smallText={news.smallText}
        newsid={news.ID}
        text={news.text}
      />
    </motion.div>
  ));

  const [currentImage, setCurrentImage] = useCycle(...newsArray);

  useEffect(() => {
    const timeout = setInterval(setCurrentImage, 5000);

    return () => clearInterval(timeout);
  }, [setCurrentImage, currentImage]);

  return (
    <div className={classes.container}>
      <AnimatePresence>{currentImage}</AnimatePresence>
    </div>
  );
};

export default DesktopMainDiv;
