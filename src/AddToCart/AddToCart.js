import React, { Component } from "react";
import { FormControl, InputLabel, Select, MenuItem, Button } from '@mui/material';
import styles from './AddToCart.module.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

class AddToCart extends Component {    
  render() {
    const handleChange = (event) => {
        
    };

    return (
        <div className = {styles.container}>
            <div className = {styles.quantity}>
                <FormControl size="small" className={styles.dropdown} renderValue={"hello"}>
                    <InputLabel id="demo-simple-select-label"> Quantity</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        onChange={handleChange}
                        label="Quantity"
                    >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div className = {styles.addToCart}>
                <Button variant="contained" endIcon={<ShoppingCartIcon />} className={styles.button}>Add to cart</Button>
            </div>
        </div>
    );
  }
}
 
export default AddToCart;