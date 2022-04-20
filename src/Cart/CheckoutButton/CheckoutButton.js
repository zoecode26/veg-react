import React, { Component } from "react";
import { Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import styles from "./CheckoutButton.module.css"
import Cookies from 'js-cookie';

class CheckoutButton extends Component {
    state = {
        path: "",
        loaded: false,
    }

    async componentDidMount() {
        let user = Cookies.get("jwt-token");
        let path = "/login"

        if (user != undefined) {
            path = "/boxes/1"
        }

        this.setState({
            path: path,
            loaded: true
        });
    }

    render() {
        if (this.state.loaded) {
            return (
                <div>
                    <Button className={styles.button}
                        variant="contained"
                        onClick={() => ""}>
                        <Link to={this.state.path} className={styles.buttonText}>
                            Checkout
                        </Link>
                    </Button> 
                </div>
            )
        }
        return null;
    }
}

export default CheckoutButton;