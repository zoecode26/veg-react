import React, { Component } from "react";
import styles from './CartItem.module.css';
import AddIcon from '@mui/icons-material/Add';
import TextField from '@material-ui/core/TextField';
import { Grid } from "@mui/material";

class CartItem extends Component {
  handleChange = (e) => {
    let quantityToChange = e.target.value;
  }
    render() {
      return (
        <Grid
          container
          alignItems="center"
          justifyContent="center">

          <Grid item xs={12} lg={8}>
            <div className={styles.item}>
              <Grid container>
                <Grid item xs={6} sm={6} md={3} className={styles.gridItem}>
                  <img className={styles.img} src={this.props.boxInfo.imagePath} alt={this.props.boxInfo.alt}/>
                </Grid>
                <Grid item xs={6} sm={6} md={3} className={styles.gridItem}>
                  <h2>{this.props.boxInfo.boxName}</h2>
                </Grid>
                <Grid item xs={6} sm={6} md={3} className={styles.gridItem}>
                  <h2>Quantity: &nbsp; <TextField
                      id="outlined-name"
                      defaultValue={this.props.quantity}
                      onChange={this.handleChange}
                      variant="outlined"
                      size="small"
                      className={styles.textField}
                      inputProps={
                        {maxLength: 1}
                      }
                    />
                  </h2>
                </Grid>
                <Grid item xs={6} sm={6} md={3} className={styles.gridItem}>
                 <h2>Subtotal: £{this.props.boxInfo.price * this.props.quantity}.00</h2>
                </Grid>
              </Grid>
            </div>
          </Grid>   
        </Grid> 
      );
    }
  }
   
  export default CartItem;