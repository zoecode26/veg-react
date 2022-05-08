import React, { Component } from "react";
import OrderItem from "../OrderItem/OrderItem";
import Aux from 'react-aux';
import styles from './OrderPage.module.css';
import { Grid } from '@mui/material';
import axios from "axios";
 
class OrderPage extends Component {
  state = {
    orderItems: null,
    orderDetails: null,
    orderItemsLoaded: false,
    orderDetailsLoaded: false,
  }

  async componentDidMount() {
    axios.get('https://dry-forest-94057.herokuapp.com/orders/items/' + this.props.id)
        .then(response => {
            this.setState({
                orderItems: response.data, 
                orderItemsLoaded: true
            }) 
        })
    axios.get('https://dry-forest-94057.herokuapp.com/orders/' + this.props.id)
        .then(response => {
            this.setState({
                orderDetails: response.data, 
                orderDetailsLoaded: true
            }) 
        })
    this.setState({
        loaded: true
    });
  }

  render() {
    let orderItems = null
    if (this.state.orderDetailsLoaded && this.state.orderItemsLoaded) {
        console.log(this.state.orderItems)
        console.log(this.state.orderDetails)
        orderItems = this.state.orderItems.map(item => {
            return <OrderItem 
            boxId={item.boxId}
            quantity={item.quantity}
            />
        })
        
        return(
            <Aux>
                <div className={styles.outerPage}>
                <div className = {styles.page}>
                    <Grid container alignItems="center"
                    justifyContent="center" spacing={{ xs: 2, md: 3 }}>
                        <Grid item xs={12} lg={8} className={styles.headerDiv}>
                            <div className={styles.orderHeading}>
                                <h1> Order {this.props.id} </h1>
                                <h3> {this.state.orderDetails.orderDate} </h3>
                            </div>
                        </Grid>
                    </Grid>
                    <Grid container alignItems="center"
                    justifyContent="center"spacing={{ xs: 2, md: 3 }}>
                        {orderItems}
                    </Grid>
                    <Grid container alignItems="center"
                    justifyContent="center"spacing={{ xs: 2, md: 3 }}>
                        <Grid item xs={12} lg={8}>
                            <div className={styles.total}>
                                <h3> Total: £{this.state.orderDetails.price}.00 </h3>
                            </div>
                        </Grid> 
                    </Grid>  
                </div>
                </div>
            </Aux>
        )
    }
    return null;
  }
}
 
export default OrderPage;