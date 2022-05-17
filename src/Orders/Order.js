import React, { Component } from "react";
import styles from './Order.module.css';
import { Grid } from '@mui/material';
 
class Order extends Component {
    render() {
        var path = "/orders/" + this.props.id
        // var date = this.props.date.substring(2)
        return ( 
            <Grid item xs={12} md={5}>
                    <a href={path} style={{ textDecoration: 'none', color: 'black' }}>
                    <div className={styles.item}>
                        <Grid item xs={6} sm={6} md={3} className={styles.gridItem}>
                            <img className={styles.img} src={this.props.imgPath}/>
                        </Grid>
                        <Grid item xs={6} sm={6} md={3} className={styles.gridItem}>
                            <h4 className={styles.linkText}> Order {this.props.id} </h4>
                        </Grid>
                        <Grid item xs={6} sm={6} md={3} className={styles.gridItem}>
                            <h4> £{this.props.price}.00 </h4>
                        </Grid>
                        <Grid item xs={6} sm={6} md={3} className={styles.gridItem}>
                            <h4> {this.props.date} </h4>
                        </Grid>
                    </div>
                </a>  
            </Grid>   
        );
    }
}

export default Order;