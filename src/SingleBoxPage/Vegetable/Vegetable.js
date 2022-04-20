import React, { Component } from "react";
import styles from './Vegetable.module.css';
import { Grid } from '@mui/material';


class Vegetable extends Component { 
    state = {
        vegetable: null,
        loaded: false
    } 

    async componentDidMount() {
        const response = await fetch('/vegetables/' + this.props.id);
        const body = await response.json();
        this.setState({
          vegetable: body, 
          loaded: true
        });
    }

    render() {
        if (this.state.loaded) {
            return (
                <Grid item className={styles.item} xs={6}>
                    <div className = {styles.container}>
                        <img className={styles.img} src={this.state.vegetable.iconPath} alt={this.state.vegetable.alt}/>
                        <h3>{this.state.vegetable.vegetableName}</h3>
                    </div>
                </Grid>
            );
        }

    return null;
  }
}
 
export default Vegetable;