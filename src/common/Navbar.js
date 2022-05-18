import React, { Component } from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
} from "@material-ui/core";
import styles from './Navbar.module.css';
import { Link } from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Baseline from "./Baseline";

class Navbar extends Component {
  state = {
    signedIn: false,
    loaded: false,
  }

  getCookie = (cname) => {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  async componentDidMount() {
    let email = this.getCookie("email");
    if (email != "") {
      this.setState({
        signedIn: true, 
      });
    }
    this.setState({
      loaded: true,
    })
  }

  render() {
    if (this.state.loaded) {
      if (this.state.signedIn) {
        return (
          <AppBar position="static">
            <CssBaseline />
            <Toolbar className={styles.toolbar}>
              <div className={styles.navlinks}>
                <Link to="/" className={styles.link}>
                  Boxes
                </Link>
                <Link to="/orders" className={styles.link}>
                  My Orders
                </Link>
                <Link to="/signout" className={styles.link}>
                  Sign Out
                </Link>
                <Link to="/cart" className={styles.link}>
                  <ShoppingCartIcon fontSize="medium"/>
                </Link>
              </div>
            </Toolbar>
          </AppBar>
        );
      } else {
        return (
          <AppBar position="static">
            <CssBaseline />
            <Toolbar className={styles.toolbar}>
              <div className={styles.navlinks}>
                <Link to="/" className={styles.link}>
                  Boxes
                </Link>
                <Link to="orders" className={styles.link}>
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
    }
    return null;
  }
}

export default Navbar;