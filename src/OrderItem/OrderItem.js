import React, { Component } from "react";
import styles from './OrderItem.module.css';
import { Grid } from '@mui/material';
import { Link } from "react-router-dom";
import { toHaveTextContent } from "@testing-library/jest-dom/dist/matchers";

class OrderItem extends Component {
    state = {
        boxData: null,
        loaded: false
    }

    async componentDidMount() {
        const response = await fetch('/boxes/' + this.props.boxId);
        const body = await response.json();
        console.log(body)
        this.setState({
            boxData: body, 
            loaded: true
        });
    }

    render() {
        if (this.state.loaded) {
            console.log(this.state.boxData)
            return (
                <Grid item xs={12} lg={8}>
                    <div className={styles.item}>
                        <Grid container>
                        <Grid item xs={6} sm={6} md={3} className={styles.gridItem}>
                            <img className={styles.img} src={this.state.boxData.imagePath} />
                        </Grid>
                        <Grid item xs={6} sm={6} md={3} className={styles.gridItem}>
                            <h3>{this.state.boxData.boxName}</h3>
                        </Grid>
                        <Grid item xs={6} sm={6} md={3} className={styles.gridItem}>
                            <h3>Quantity: {this.props.quantity}</h3> &nbsp; 
                        </Grid>
                        <Grid item xs={6} sm={6} md={3} className={styles.gridItem}>
                            <h3>Subtotal: £{this.state.boxData.price * this.props.quantity}.00</h3>
                        </Grid>
                        </Grid>
                    </div>
                </Grid>   
            );
        }

        return null;
    }
}
 
export default OrderItem;