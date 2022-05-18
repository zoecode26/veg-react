import React, { Component } from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import styles from "./CheckoutButton.module.css"

class CheckoutButton extends Component {
    render() {
        return (
            <div>
                <Button className={styles.button}
                    variant="contained"
                    onClick={() => ""}>
                    <Link to={"/payment"} className={styles.buttonText}>
                        Checkout
                    </Link>
                </Button> 
            </div>
        )
    }
}

export default CheckoutButton;