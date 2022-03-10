import React, { Component } from "react";
import { Button } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import styles from './AddToCartButton.module.css';

class AddToCartButton extends Component { 
    render() {
        return (
            <Button className={styles.button}
                    endIcon={<ShoppingCartIcon />}
                    variant="contained">
                    Add to cart
            </Button> 
        );  
    } 
}

export default AddToCartButton;