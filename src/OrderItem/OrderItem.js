import React, { Component } from "react";
import styles from './OrderItem.module.css';
import { Grid } from '@mui/material';

class OrderItem extends Component {
    state = {
        boxData: null,
        loaded: false
    }

    async componentDidMount() {
        axios.get('https://dry-forest-94057.herokuapp.com/boxes/'+ this.props.boxId)
        .then(response => {
            this.setState({
                boxData: response.data, 
                loaded: true
            });
        })
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