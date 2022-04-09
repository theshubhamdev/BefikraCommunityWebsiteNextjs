import React from "react";
import classes from "./Services.module.css";

function Services() {
  return (
    <div className={classes.services}>
      <div className={classes.serviceHeader}>
        <div className={classes.line}></div>
        <h2>Services</h2>
        <div className={classes.line}></div>
      </div>

      <div className={classes.servicesList}>
        <div className={classes.serviceRow}>
          <div className={classes.serviceCard}>
            <div className={classes.serviceImage}></div>
            <p>Community</p>
            <span>Solve issue together with developers like you.</span>
          </div>

          <div className={classes.serviceCard}>
            <div className={classes.serviceImage}></div>
            <p>Community</p>
            <span>Solve issue together with developers like you.</span>
          </div>

          <div className={classes.serviceCard}>
            <div className={classes.serviceImage}></div>
            <p>Community</p>
            <span>Solve issue together with developers like you.</span>
          </div>

          <div className={classes.serviceCard}>
            <div className={classes.serviceImage}></div>
            <p>Community</p>
            <span>Solve issue together with developers like you.</span>
          </div>

          <div className={classes.serviceCard}>
            <div className={classes.serviceImage}></div>
            <p>Community</p>
            <span>Solve issue together with developers like you.</span>
          </div>

          <div className={classes.serviceCard}>
            <div className={classes.serviceImage}></div>
            <p>Community</p>
            <span>Solve issue together with developers like you.</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
