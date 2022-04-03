import { ThreeSixty } from "@material-ui/icons";
import React, { Component } from "react";
import AddToCartButton from "../AddToCartButton/AddToCartButton";
import QuantitySelector from "../QuantitySelector/QuantitySelector";
import styles from './AddToCart.module.css';

class AddToCart extends Component {    
  render() {
    return (
        <div className = {styles.container}>
            <QuantitySelector />
            <AddToCartButton boxId={this.props.boxId}/>
        </div>
    );
  }
}
 
export default AddToCart;