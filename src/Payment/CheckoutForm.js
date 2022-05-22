import React, { Component } from "react";
import { ElementsConsumer, CardElement } from "@stripe/react-stripe-js";
import { Grid } from "@mui/material";
import styles from "./CheckoutForm.module.css"
import axios from "axios";
import getCookie from '../common/Utils'


class CheckoutForm extends Component {
  state = {
    imgPath: "",
    userId: null,
    imgPathLoaded: false,
    userIdLoaded: false,
  }

  async componentDidMount() {
    let email = getCookie("email");
    console.log("COOKIE")
    console.log(email)
    const userDetails = {email: email};
    axios.post('https://dry-forest-94057.herokuapp.com/userid', userDetails)
      .catch(error => {
        if (error.response.status === 403) {
          window.location.href = "https://react-veg.herokuapp.com/login?retUrl=payment";
        }
      })
      .then(response => {
        this.setState({
          userId: response.data, 
          userIdLoaded: true
        });
      })

    let idToFetch = 1
    for(let key in sessionStorage) {
      var intKey = parseInt(key)
      if (Number.isInteger(intKey)) {
        idToFetch = intKey;
        break;
      }
    }
    const response = await fetch('https://dry-forest-94057.herokuapp.com/boxes/' + idToFetch);
    const body = await response.json();
    this.setState({
      imgPath: body.imagePath, 
      imgPathLoaded: true
    });
    
  }
  
  handleSubmit = async event => {
    event.preventDefault();

    const { stripe, elements } = this.props;
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    const result = await stripe.createToken(card);

    const transactionDetails = {amount: sessionStorage.getItem("total"), email: "", stripeToken: result.token.id, description: "VeggieBox transaction", currency: "GBP"}
    axios.post('https://dry-forest-94057.herokuapp.com/charge', transactionDetails)
      .then(() => this.writeOrder())
  };

  writeOrder = () => {
    const orderInfo = {price: sessionStorage.getItem("total"), webUserId: this.state.userId, orderDate: new Date().toISOString().slice(0, 10), imgPath: this.state.imgPath}
    axios.post('https://dry-forest-94057.herokuapp.com/orders/new', orderInfo)
      .catch(error => {
        if (error.response.status === 403) {
          window.location.href = "https://react-veg.herokuapp.com/login?retUrl=payment";
        }
      })
      .then(response => {
        for(let key in sessionStorage) {
          var intKey = parseInt(key)
          if (Number.isInteger(intKey)) {
            const orderDetails = {orderId: response.data, boxId: intKey, quantity: sessionStorage.getItem(key)};
            axios.post('https://dry-forest-94057.herokuapp.com/orders/orderitems', orderDetails)
              .then(() => {sessionStorage.clear();
                  window.location.href = "https://react-veg.herokuapp.com/orders";});
          }
        }
      })
  }

  render() {
    const CARD_ELEMENT_OPTIONS = {
        iconStyle: "solid",
        hidePostalCode: true,
        style: {
          base: {
            iconColor: "#133A1B",
            fontFamily: '"Open Sans", sans-serif',
            fontSize: "20px",
            lineHeight: "100px",
            fontSmoothing: "antialiased",
            "::placeholder": {
              color: "#CFD7DF"
            },
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
                        <CardElement options={CARD_ELEMENT_OPTIONS} className={styles.element}/>
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