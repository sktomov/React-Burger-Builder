import React from "react";
import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";
import classes from "./CheckOutSummary.css";

const checkOutSummary = props => {
  return (
    <div classname={classes.CheckOutSummary}>
      <h1>We hope it tastes well!</h1>
      <div style={{ width: "100%", height: "300px", margin: "auto" }}>
        <Burger ingredients={props.ingredients} />
      </div>
      <Button btnType="Danger" clicked>
        Cancel
      </Button>
      <Button btnType="Success" clicked>
        Continiue
      </Button>
    </div>
  );
};

export default checkOutSummary;
