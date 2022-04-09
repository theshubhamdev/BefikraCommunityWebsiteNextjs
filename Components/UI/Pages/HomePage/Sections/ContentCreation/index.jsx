import React from "react";
import ContentCreationCard from "../../Components/ContentCreationCard";
import classes from "./ContentCreation.module.css";

function ContentCreation() {
  return (
    <div id="content-creation">
      <div className={classes.ccHead}>
        <h1 className={classes.ccHeading}>Content Creation</h1>
      </div>

      <div className={classes.ccCards}>
        <ContentCreationCard />
        <ContentCreationCard />
        <ContentCreationCard />
      </div>
    </div>
  );
}

export default ContentCreation;
