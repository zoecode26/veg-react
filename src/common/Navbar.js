import React, { Component } from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline
} from "@material-ui/core";
import styles from './Navbar.module.css';
import { Link } from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import getCookie from './Utils'

class Navbar extends Component {
  state = {
    signedIn: false,
    authPath: "/login",
    authText: "Login/Signup",
    loaded: false,
  }

  async componentDidMount() {
    let email = getCookie("email");
    if (email != "") {
      this.setState({
        signedIn: true, 
        authPath: "/signout",
        authText: "Sign Out"
      });
    }
    this.setState({
      loaded: true,
    })
  }

  render() {
    if (this.state.loaded) {
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
              <Link to={this.state.authPath} className={styles.link}>
                {this.state.authText}
              </Link>
              <Link to="/cart" className={styles.link}>
                <ShoppingCartIcon fontSize="medium"/>
              </Link>
            </div>
          </Toolbar>
        </AppBar>
      );
    } 
    return null;
  }  
}

export default Navbar;