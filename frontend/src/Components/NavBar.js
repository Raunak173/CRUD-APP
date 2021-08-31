import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Link, BrowserRouter as Router } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  bar: {
    backgroundColor: "#111111",
  },
  text: {
    flex: 1,
  },
  link: {
    color: "white",
    textDecoration: "none",
  },
});

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.bar} position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.text}>
            <Link className={classes.link} to="/">
              Home
            </Link>
          </Typography>
          <Typography variant="h6" className={classes.text}>
            <Link className={classes.link} to="/add">
              Add a user
            </Link>
          </Typography>
          <Typography variant="h6" className={classes.text}>
            <Link className={classes.link} to="/all">
              Users List
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
