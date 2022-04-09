import React from "react";
import classes from "./ContentCreationCard.module.css";

function ContentCreationCard() {
  return (
    <div className={classes.ccCardRoot}>
      <div>
        <img
          className={classes.ccCardImg}
          src="https://etimg.etb2bimg.com/photo/89866384.cms"
          alt=""
        />
      </div>
      <div className={classes.ccCardContent}>
        <h1>Logo</h1>
        <div className={classes.ccCardContentMore}>
          <p>Learn Logo Design</p>
        </div>
        <button className={classes.ccCardButton}>$90</button>
      </div>
    </div>
  );
}

export default ContentCreationCard;
