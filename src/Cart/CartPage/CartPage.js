import React, { Component } from "react";
import CartItem from "../CartItem/CartItem";
import NoItems from "../NoItems/NoItems";
import CartHeader from "../CartHeader/CartHeader";
import { Grid } from "@material-ui/core";
import styles from './CartPage.module.css';
import CheckoutButton from "../CheckoutButton/CheckoutButton";
import axios from "axios"; 

class Cart extends Component {
  state = {
    cartItems: null,
    loaded: false,
    total: null,
    loggedIn: false,
  }

  handleTotalUpdate = (newTotal) => {
    this.setState({ total: newTotal })
    this.forceUpdate();
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

    var cartItems = []
    var total = 0
    for(let key in sessionStorage) {
      var intKey = parseInt(key)
      if (Number.isInteger(intKey)) {
        axios.get('https://dry-forest-94057.herokuapp.com/boxes/'+ intKey)
        .then(response => {
          cartItems.push(response.data)
          total += response.data.price * sessionStorage.getItem(intKey)
        })
      }
    }

    sessionStorage.setItem("total", total);

    this.setState({
      cartItems: cartItems,
      loaded: true,
      total: total,
    })
  }

  render() {
    let cartItems = null;
    if (this.state.loaded) {
      let count = this.state.cartItems.length;
      cartItems = this.state.cartItems.map(item => {
        return <CartItem 
          boxInfo={item}
          count={count}
          quantity={sessionStorage.getItem(item.id)} 
          updateTotal={this.handleTotalUpdate}/>
      })
      if (cartItems.length > 0) {
        return (
          <div className={styles.cartPage}>
            <CartHeader />
            {cartItems}
            <Grid
              container
              alignItems="center"
              justifyContent="center">

              <Grid item xs={12} lg={8} className={styles.totalContainer}>
                <div className={styles.item}>
                  <h2> Total: £{this.state.total}.00</h2> 
                </div>
                <CheckoutButton loggedIn={this.state.loggedIn}/>
              </Grid>
            </Grid>
          </div>
        );
      } else {
        return (
          <div className={styles.cartPage}>
            <CartHeader />
            <NoItems />
            <Grid
              container
              alignItems="center"
              justifyContent="center">

              <Grid item xs={12} lg={8}>
                <div className={styles.item}>
                  <h2> Total: £0.00 </h2>
                </div>
              </Grid>   
            </Grid>
          </div>
        );
      }
    }
    return null; 
  }
}
 
export default Cart;