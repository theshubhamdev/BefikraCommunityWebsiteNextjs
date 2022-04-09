import React from "react";
import classes from "./SocialDepartmentCard.module.css";

function SocialDepartmentCard() {
  return (
    <div className={classes.sdCardRoot}>
      <div className={classes.sdCardImg}>
        <img
          className={classes.circleImg}
          src="https://etimg.etb2bimg.com/photo/89866384.cms"
          alt=""
        />
      </div>
      <div className={classes.sdCardContent}>
        <h1>Digital Marketing</h1>
        <div className={classes.sdCardContentMore}>
          <p>more</p>
        </div>
      </div>
    </div>
  );
}

export default SocialDepartmentCard;
