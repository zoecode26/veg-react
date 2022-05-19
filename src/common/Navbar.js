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

  // getCookie = (cname) => {
  //   let name = cname + "=";
  //   let decodedCookie = decodeURIComponent(document.cookie);
  //   let ca = decodedCookie.split(';');
  //   for(let i = 0; i <ca.length; i++) {
  //     let c = ca[i];
  //     while (c.charAt(0) == ' ') {
  //       c = c.substring(1);
  //     }
  //     if (c.indexOf(name) == 0) {
  //       return c.substring(name.length, c.length);
  //     }
  //   }
  //   return "";
  // }

  async componentDidMount() {
    let email = getCookie("email");
    if (email != "") {
      this.setState({
        signedIn: true, 
        authPath: "/signout",
        authText: "Signout"
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