import React from "react";
import SocialDepartmentCard from "../../Components/SocialDepartmentCard";
import classes from "./SocialDepartment.module.css";
import { CardGroup, Container } from "react-bootstrap";

function SocialDepartment() {
  return (
    <div id="social-department">
      <div className={classes.sdHead}>
        <h1 className={classes.sdHeading}>Social Department</h1>
      </div>
      <div className="d-flex flex-wrap justify-content-center">
        <SocialDepartmentCard />
        <SocialDepartmentCard />
        <SocialDepartmentCard />
        <SocialDepartmentCard />
      </div>
    </div>
  );
}

export default SocialDepartment;
