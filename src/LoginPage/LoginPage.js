import React, { Component } from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import styles from './LoginPage.module.css';
import { Grid } from "@mui/material";
import { TextField } from "@mui/material";
import axios from 'axios';

class LoginPage extends Component {
    state = {
        email: null,
        password: null,
        verified: true,
    }

    verifyLogin = () => {
        console.log(this.state.email)
        console.log(this.state.password)
        const loginDetails = { email: this.state.email, password: this.state.password };
        axios.post('http://localhost:8080/authenticate', loginDetails)
            .then(response => this.setState({ verified: true}))
            .catch(error => this.setState({verified: false})); 

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
                    <Grid item xs={12} lg={4}>
                        <div className={styles.item}>
                            {this.state.verified ? (
                                <div>
                                    <div className={styles.textFieldContainer}>
                                        <TextField id="outlined-basic" label="Email" name="email" variant="outlined" className={styles.textField} onChange={this.setEmail}/>
                                    </div>
                                    <div className={styles.textFieldContainer}>
                                        <TextField id="outlined-basic" label="Password" name="password" variant="outlined" className={styles.textField} onChange={this.setPassword} />
                                    </div>
                                </div>
                            ) : (
                                <div>
                                    <div className={styles.textFieldContainer}>
                                        <TextField error id="outlined-basic" label="Email" name="email" variant="outlined" className={styles.textField} onChange={this.setEmail}/>
                                    </div>
                                    <div className={styles.textFieldContainer}>
                                        <TextField error id="outlined-basic" label="Password" name="password" variant="outlined" className={styles.textField} onChange={this.setPassword} helperText="Incorrect login details"/>
                                    </div>
                                </div>
                            )}
                            <div className={styles.buttonContainer}>
                                <Button className={styles.button}
                                    variant="contained"
                                    onClick={this.verifyLogin}>
                                        Login
                                </Button> 
                            </div>
                            <div className={styles.centerContent}>
                                <Link to={"/signup"} className={styles.linkText}>
                                    Click here to sign up
                                </Link>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default LoginPage;