import React, { Component } from "react";
import CartItem from "../CartItem/CartItem";
import styles from './Cart.module.css';
import { Grid } from "@mui/material";
 
class Cart extends Component {
  state = {
    cartItems: null,
    loaded: false
  }
  async componentDidMount() {
    var cartItems = []
    for(let key in sessionStorage) {
      var intKey = parseInt(key)
      if (Number.isInteger(intKey)) {
        const boxInfo = await fetch('/boxes/' + intKey)
        const body = await boxInfo.json();
        cartItems.push(body)
      }
    }
    this.setState({
      cartItems: cartItems,
      loaded: true
    })
  }
  render() {
    let cartItems = null;
    if (this.state.loaded) {
      cartItems = this.state.cartItems.map(item => {
        return <CartItem 
          boxInfo={item}
          quantity={sessionStorage.getItem(item.id)} />
        })
      return (
        <div className={styles.cartPage}>
          <Grid
            container
            alignItems="center"
            justifyContent="center"
          >
            <Grid item xs={12} lg={8}>
            <div>
              <h1> Cart </h1>
            </div>
            </Grid>
          </Grid>
          {cartItems}
        </div>
      );
    }
    return (
      null
    );
  } 
}
 
export default Cart;