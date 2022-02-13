import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    navlinks: {
      display: "flex",
    },
    link: {
      textDecoration: "none",
      color: "white",
      fontSize: "20px",
      "&:hover": {
        color: "#011B10",
        borderBottom: "1px solid #011B10",
      },
    },
}));

export default function Navbar() {
    const classes = useStyles();

    return (
      <AppBar position="static">
        <CssBaseline />
        <Toolbar style={{
            backgroundColor: "#B7BF96" , 
            minHeight: "35px"}}>
            <div className={classes.navlinks}
                style={{
                    display: "flex",
                    justifyContent: "space-around",
                    flexGrow: 1,
                    textAlign: "center",
                    margin: "0px 20px"
                }}>
                <Link to="/" className={classes.link}>
                Home
                </Link>
                <Link to="/boxes" className={classes.link}>
                Veg Boxes
                </Link>
                <Link to="/contact" className={classes.link}>
                Contact
                </Link>
            </div>
        </Toolbar>
      </AppBar>
    );
  }