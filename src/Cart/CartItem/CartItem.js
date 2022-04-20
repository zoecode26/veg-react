import React, { Component } from "react";
import styles from './CartItem.module.css';
import { Grid } from "@mui/material";
import NoItems from "../NoItems/NoItems";
import { FormControl } from "@mui/material";
import { Select } from "@mui/material";
import { MenuItem } from "@mui/material";

class CartItem extends Component {
  state = {
    quantity: this.props.quantity,
    count: this.props.count,
  }
    render() {
      const handleChange = (e) => {
        let quantityToChange = parseInt(e.target.value);
        let itemToChange = this.props.boxInfo.id;
        let initialQuantity = sessionStorage.getItem(itemToChange);

        this.setState({
          quantity: quantityToChange
        });
        sessionStorage.setItem(itemToChange, quantityToChange);
      
        let newQuantity = sessionStorage.getItem(itemToChange);
        let difference = parseInt(newQuantity) - parseInt(initialQuantity) 
        let initialTotal = parseInt(sessionStorage.getItem("total"))
        let newTotal = initialTotal + difference * parseInt(this.props.boxInfo.price)
  
        sessionStorage.setItem("total", newTotal)
        this.props.updateTotal(newTotal);
        this.forceUpdate();
    }

      if (this.state.quantity > 0) { 
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
                    <h2>Quantity: </h2> &nbsp; 
                    <FormControl size="small" className={styles.dropdown}>
                      <Select
                          value={this.props.quantity}
                          onChange={handleChange}>
                          <MenuItem value={1}>1</MenuItem>
                          <MenuItem value={2}>2</MenuItem>
                          <MenuItem value={3}>3</MenuItem>
                          <MenuItem value={4}>4</MenuItem>
                          <MenuItem value={5}>5</MenuItem>
                      </Select>
                  </FormControl>
                  </Grid>
                  <Grid item xs={6} sm={6} md={3} className={styles.gridItem}>
                  <h2>Subtotal: £{this.props.boxInfo.price * this.state.quantity}.00</h2>
                  </Grid>
                </Grid>
              </div>
            </Grid>   
          </Grid> 
        );
      }
      else if (this.state.count == 0) {
        return <NoItems />
      }
      else {
        return null;
      }
    }
  }
   
  export default CartItem;