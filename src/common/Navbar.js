import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar className={styles.navbar}>
          <div className={styles.navlinks}>
            <Link to="/" className={styles.link}>
            Home
            </Link>
            <Link to="/boxes" className={styles.link}>
            Veg Boxes
            </Link>
            <Link to="/contact" className={styles.link}>
            Contact
            </Link>
          </div>
      </Toolbar>
    </AppBar>
  );
}