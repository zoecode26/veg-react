import React, { Component } from "react";
import Order from "../Orders/Order";
import Aux from 'react-aux';
import styles from './OrdersPage.module.css';
import { Grid } from '@mui/material';
import axios from "axios";
import getCookie from '../common/Utils'
import instance from '../common/AxiosConfig'
 
class OrdersPage extends Component {
  state = {
    orders: null,
    loaded: false
  }

  async componentDidMount() {
    let email = getCookie("email");
    let jwt = getCookie("jwt-token")
    const userDetails = {email: email};
    instance.post('https://dry-forest-94057.herokuapp.com/userid', userDetails)
      .catch(error => {
        if (error.response.status === 403) {
          window.location.href = "https://react-veg.herokuapp.com/login?retUrl=orders";
        }
      })
      .then(response => {
        axios.get('https://dry-forest-94057.herokuapp.com/orders/users/' + response.data, {
          headers: {
              Authorization: "Bearer " + jwt
          }
          })
          .catch(error => {
            if (error.response.status === 403) {
              window.location.href = "https://react-veg.herokuapp.com/login?retUrl=orders";
            }
          })
          .then(response => { 
              this.setState({
                orders: response.data, 
                loaded: true
              })
          });
      })
  }

  render() {
    let orders = null
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