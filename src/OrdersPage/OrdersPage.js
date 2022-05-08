import React, { Component } from "react";
import Order from "../Orders/Order";
import Aux from 'react-aux';
import styles from './OrdersPage.module.css';
import { Grid } from '@mui/material';
import axios from "axios";
 
class OrdersPage extends Component {
  state = {
    orders: null,
    loaded: false
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
    const userDetails = {email: email};
    axios.post('http://localhost:8080/userid', userDetails)
      .then(response => {
        console.log(response.data)
        axios.get('/orders/users/' + response.data)
        .then(response => this.setState({
          orders: response.data, 
          loaded: true
        }))
        .catch(error => console.log(error));
      })
  }

  render() {
    let orders = null
    console.log(this.state.orders)
    if (this.state.loaded) {
      orders = this.state.orders.map(order => {
        return <Order 
          id={order.id}
          price={order.price}
          date={order.orderDate}
          imgPath={order.imgPath}
        />
      })
    }
    return(
      <Aux>
        <div className={styles.outerPage}>
          <div className = {styles.page}>
            <Grid container alignItems="center"
            justifyContent="center" spacing={{ xs: 2, md: 3 }}>
              <Grid item xs={12} md={10}>
                <h1> Orders </h1>
              </Grid>
            </Grid>
            <Grid container alignItems="center"
            justifyContent="center"spacing={{ xs: 2, md: 3 }}>
              {orders}
            </Grid>
          </div>
        </div>
      </Aux>
    )
  }
}
 
export default OrdersPage;