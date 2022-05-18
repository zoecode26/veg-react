import React, { Component } from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import styles from "./CheckoutButton.module.css"

class CheckoutButton extends Component {
    state = {
        path: "",
        loaded: false,
    }

    // async componentDidMount() {
    //     let path = "/login?retUrl=payment"

    //     if (this.props.loggedIn) {
    //         path = "/payment"
    //     }

    //     this.setState({
    //         path: path,
    //         loaded: true
    //     });
    // }

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
        return null;
    }
}

export default CheckoutButton;