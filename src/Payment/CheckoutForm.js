import React, { Component } from "react";
import { ElementsConsumer, CardElement } from "@stripe/react-stripe-js";
import { Grid } from "@mui/material";
import styles from "./CheckoutForm.module.css"
import axios from "axios";

class CheckoutForm extends React.Component {
  handleSubmit = async event => {
    event.preventDefault();

    const { stripe, elements } = this.props;
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    console.log(card);
    const result = await stripe.createToken(card);

    if (result.error) {
        console.log(result.error.message);
    } else {
        console.log(result.token);
    }

    const transactionDetails = {amount: sessionStorage.getItem("total"), email: "", stripeToken: result.token.id, description: "VeggieBox transaction", currency: "GBP"}
    console.log(transactionDetails)
    axios.post('http://localhost:8080/charge', transactionDetails)
            .then(response => console.log(response))
            .catch(error => console.log(error));
  };

  render() {
    const CARD_ELEMENT_OPTIONS = {
        iconStyle: "solid",
        hidePostalCode: true,
        style: {
          base: {
            iconColor: "#133A1B",
            fontSize: "16px",
            fontFamily: '"Open Sans", sans-serif',
            fontSmoothing: "antialiased",
            "::placeholder": {
              color: "#CFD7DF"
            }
          },
          invalid: {
            color: "#e5424d",
            ":focus": {
              color: "#303238"
            }
          }
        }
      };

    return (
        <div className={styles.page}>
            <Grid
                container
                alignItems="center"
                justifyContent="center">
                <Grid item xs={12} md={4}>
                    <div className={styles.item}>
                    <h3 className={styles.heading}>Your total: £{sessionStorage.getItem("total")}.00</h3>
                        <form>
                            <CardElement options={CARD_ELEMENT_OPTIONS}/>
                            <button className={styles.button} onClick={this.handleSubmit}>Buy Now</button>
                        </form>
                    </div>
                </Grid>
            </Grid>   
        </div> 
    );
  }
}

export default function InjectedCheckoutForm() {
    return (
      <ElementsConsumer>
        {({ stripe, elements }) => (
          <CheckoutForm stripe={stripe} elements={elements} />
        )}
      </ElementsConsumer>
    );
  }