import React, { Component } from "react";
import { ElementsConsumer, CardElement } from "@stripe/react-stripe-js";
import { Grid } from "@mui/material";
import styles from "./CheckoutForm.module.css"
import axios from "axios";

class CheckoutForm extends Component {
  state = {
    imgPath: "",
    loaded: false,
  }

  async componentDidMount() {
    let idToFetch = 1
    for(let key in sessionStorage) {
      var intKey = parseInt(key)
      if (Number.isInteger(intKey)) {
        idToFetch = intKey;
        break;
      }
    }
    const response = await fetch('https://dry-forest-94057.herokuapp.com/boxes/' + intKey);
    const body = await response.json();
    this.setState({
      imgPath: body.imagePath, 
      loaded: true
    });
    
  }
  
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
    axios.post('https://dry-forest-94057.herokuapp.com/charge', transactionDetails)
            .then(response => this.writeOrder())
            .catch(error => console.log(error));
  };

  getCookie = (cname) => {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  writeOrder = () => {
    let email = this.getCookie("email");
    const userDetails = {email: email};
    axios.post('https://dry-forest-94057.herokuapp.com/userid', userDetails)
      .then(response => {
        console.log(this.state.imgPath)
        const orderInfo = {price: sessionStorage.getItem("total"), webUserId: response.data, orderDate: new Date().toISOString().slice(0, 10), imgPath: this.state.imgPath}
        axios.post('https://dry-forest-94057.herokuapp.com/orders/new', orderInfo, { withCredentials: true })
          .then(response => {
            for(let key in sessionStorage) {
              var intKey = parseInt(key)
              if (Number.isInteger(intKey)) {
                const orderDetails = {orderId: response.data, boxId: intKey, quantity: sessionStorage.getItem(key)};
                axios.post('https://dry-forest-94057.herokuapp.com/orders/orderitems', orderDetails, { withCredentials: true })
                  .then(resonse => {sessionStorage.clear();
                                    window.location.href = "https://react-veg.herokuapp.com/";})
                  .catch(error => console.log(error));
              }
            }
          })
      })
      .catch(error => console.log(error));
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