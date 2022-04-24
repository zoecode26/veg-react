import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
} from "@material-ui/core";
import styles from './Navbar.module.css';
import { Link } from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function Navbar() {
    return (
      <AppBar position="static">
        <CssBaseline />
        <Toolbar className={styles.toolbar}>
          <Typography variant="h4" className={styles.logo}>
          <Link to={"/"} style={{ textDecoration: 'none', color: 'white' }}>
                VeggieBox
            </Link>
          </Typography>
            <div className={styles.navlinks}>
              <Link to="/" className={styles.link}>
                Boxes
              </Link>
              <Link to="/orders" className={styles.link}>
                My Orders
              </Link>
              <Link to="/login" className={styles.link}>
                Login/Signup
              </Link>
              <Link to="/cart" className={styles.link}>
                <ShoppingCartIcon fontSize="medium"/>
              </Link>
            </div>
        </Toolbar>
      </AppBar>
    );
}