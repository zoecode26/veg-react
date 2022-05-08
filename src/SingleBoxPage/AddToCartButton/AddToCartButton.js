import React, { Component } from "react";
import { Button } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import styles from './AddToCartButton.module.css';
import { Link } from "@material-ui/core";

class AddToCartButton extends Component { 
    state = {
        enabled: true,
        loaded: false,
    }

    async componentDidMount() {
        var enabled = sessionStorage.getItem(this.props.boxId) != 5
        this.setState({
            enabled: enabled,
            loaded: true
        });
    }
    
    addToSession = () => {
        var boxId = this.props.boxId
        var currentQuantity = parseInt(sessionStorage.getItem(boxId))
        var newQuantity = parseInt(sessionStorage.getItem("quantity"))
        console.log("current: " + currentQuantity)
        console.log("new: " + newQuantity)

        if (currentQuantity + newQuantity < 5) {
            console.log("INSIDE IF")
            sessionStorage.setItem(boxId, currentQuantity + newQuantity)
        } else {
            sessionStorage.setItem(boxId, 5)
            console.log("INSIDE ELSE")
            this.state.enabled = false
        }
        this.forceUpdate();
        window.location.href = "https://react-veg.herokuapp.com/";
    }

    render() {
        if (this.state.loaded) {
            if (this.state.enabled) {
                return (
                    <Button className={styles.button}
                            endIcon={<ShoppingCartIcon />}
                            variant="contained"
                            onClick={this.addToSession}>
                                Add to cart
                    </Button> 
                );
            } else {
                return (
                    <Button disabled className={styles.disabledButton}
                        variant="contained"
                        onClick={this.addToSession}
                        sx={{ color: 'white'}}>
                        Max of 5 already in cart
                    </Button> 
                ); 
            }
        }
        return null;
    } 
}

export default AddToCartButton;