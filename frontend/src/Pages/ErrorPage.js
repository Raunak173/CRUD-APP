import React from "react";
import er from "../assets/error.jpg";
import { makeStyles } from "@material-ui/core";
import { display } from "@material-ui/system";

const useStyles = makeStyles({
  imgContainer: {
    marginLeft: "25%",
    marginTop: "10%",
  },
});

const ErrorPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.imgContainer}>
      <img src={er} />
    </div>
  );
};

export default ErrorPage;
