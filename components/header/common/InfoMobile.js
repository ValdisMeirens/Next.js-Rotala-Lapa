import classes from "./InfoMobile.module.css";

const InfoMobile = (props) => {
  return (
    <div className={classes.container}>
      <img
        src={props.backgroundImage}
        alt={props.backgroundImageText}
        className={classes.backgroundImage}
      />
      <div className={classes.imageTextContainer}>
        <img
          src={props.image}
          alt={props.imageText}
          className={classes.imageText}
        />
      </div>
    </div>
  );
};

export default InfoMobile;
