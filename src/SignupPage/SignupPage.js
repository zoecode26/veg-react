import React, { Component } from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import styles from './SignupPage.module.css';
import { Grid } from "@mui/material";
import { TextField } from "@mui/material";
import axios from 'axios';


class SignupPage extends Component {
    state = {
        firstName: null,
        surname: null,
        phoneNumber: null,
        addressLineOne: null,
        addressLineTwo: null,
        city: null,
        country: null,
        postcode: null,
        email: null,
        password: null
    }

    signup = () => {
        const userDetails = { 
            firstName: this.state.firstName,
            surname: this.state.surname,
            phoneNumber: this.state.phoneNumber,
            addressLineOne: this.state.addressLineOne,
            addressLineTwo: this.state.addressLineTwo,
            city: this.state.city,
            country: this.state.country,
            postcode: this.state.postcode,
            email: this.state.email, 
            password: this.state.password 
        };
        axios.post('http://localhost:8080/signup', userDetails)
        .then(response => "")
        .catch(error => console.log(error));
    } 

    setFirstName = (e) => {
        this.setState({
            firstName: e.target.value
        }); 
    }

    setSurname = (e) => {
        this.setState({
            surname: e.target.value
        }); 
    }

    setPhoneNumber = (e) => {
        this.setState({
            phoneNumber: e.target.value
        }); 
    }

    setAddressLineOne = (e) => {
        this.setState({
            addressLineOne: e.target.value
        }); 
    }

    setAddressLineTwo = (e) => {
        this.setState({
            addressLineTwo: e.target.value
        }); 
    }

    setCity = (e) => {
        this.setState({
            city: e.target.value
        }); 
    }

    setCounty = (e) => {
        this.setState({
            city: e.target.value
        }); 
    }

    setPostcode = (e) => {
        this.setState({
            postcode: e.target.value
        }); 
    }

    setEmail = (e) => {
        this.setState({
            email: e.target.value
        }); 
    }

    setPassword = (e) => {
        this.setState({
            password: e.target.value
        }); 
    }

    render() {
            return (
                <div className={styles.loginPage}>
                    <Grid
                    container
                    alignItems="center"
                    justifyContent="center">
                        <Grid item xs={12} md={8} lg={6} xl={4}>
                            <div className={styles.item}>
                                <div className={styles.textFieldContainer}>
                                    <TextField id="outlined-basic" label="First name" variant="outlined" className={styles.textField} onChange={this.setFirstName}/>
                                </div>
                                <div className={styles.textFieldContainer}>
                                    <TextField id="outlined-basic" label="Surame" variant="outlined" className={styles.textField} onChange={this.setSurname}/>
                                </div>
                                <div className={styles.textFieldContainer}>
                                    <TextField id="outlined-basic" label="Phone number" variant="outlined" className={styles.textField} onChange={this.setPhoneNumber}/>
                                </div>
                                <div className={styles.textFieldContainer}>
                                    <TextField id="outlined-basic" label="Address line 1" variant="outlined" className={styles.textField} onChange={this.setAddressLineOne}/>
                                </div>
                                <div className={styles.textFieldContainer}>
                                    <TextField id="outlined-basic" label="Address line 2" variant="outlined" className={styles.textField} onChange={this.setAddressLineTwo}/>
                                </div>
                                <div className={styles.textFieldContainer}>
                                    <TextField id="outlined-basic" label="City" variant="outlined" className={styles.textField} onChange={this.setCity}/>
                                </div>
                                <div className={styles.textFieldContainer}>
                                    <TextField id="outlined-basic" label="County" variant="outlined" className={styles.textField} onChange={this.setCounty}/>
                                </div>
                                <div className={styles.textFieldContainer}>
                                    <TextField id="outlined-basic" label="Postcode" variant="outlined" className={styles.textField} onChange={this.setPostcode}/>
                                </div>
                                <div className={styles.textFieldContainer}>
                                    <TextField id="outlined-basic" label="Email" variant="outlined" className={styles.textField} onChange={this.setEmail}/>
                                </div>
                                <div className={styles.textFieldContainer}>
                                    <TextField id="outlined-basic" label="Password" variant="outlined" type="password" className={styles.textField} onChange={this.setPassword} />
                                </div>
                                <div className={styles.buttonContainer}>
                                    <Button className={styles.button}
                                        variant="contained"
                                        onClick={this.signup}>
                                            <Link to={"/cart"} className={styles.buttonText}>
                                                Signup
                                            </Link>
                                    </Button> 
                                </div>
                                <div className={styles.centerContent}>
                                    <Link to={"/login"} className={styles.linkText}>
                                        Click here to log in
                                    </Link>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            )
    }
}

export default SignupPage;