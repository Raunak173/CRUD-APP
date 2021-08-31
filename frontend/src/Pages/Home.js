import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    height: "91vh",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fdfcdc",
  },
  heading: {
    fontWeight: "bold",
  },
  link: {
    marginLeft: "5px",
    textDecoration: "none",
    color: "black",
    fontWeight: "bold",
    fontSize: "25px",
  },
});

const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Typography variant="h1" className={classes.heading}>
        CRUD APP
      </Typography>
      <Typography variant="h6">
        Created a basic app to demonstrate the CRUD Operation which is mainly
        create, read, update and delete.
      </Typography>
      <Typography variant="h6">A complete MERN PROJECT.</Typography>
      <Typography variant="h6">
        Developed by
        <a
          className={classes.link}
          href="https://www.linkedin.com/in/raunakagarwal173/"
          target="_blank"
        >
          Raunak Agarwal
        </a>
      </Typography>
      <a href="https://github.com/Raunak173" target="_blank">
        <GitHubIcon fontSize="large" />
      </a>
    </div>
  );
};

export default Home;
