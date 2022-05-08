import React, { Component } from "react";
import styles from './Vegetable.module.css';
import { Grid } from '@mui/material';


class Vegetable extends Component { 
    state = {
        vegetable: null,
        loaded: false
    } 

    async componentDidMount() {
        axios.get('https://dry-forest-94057.herokuapp.com/vegetables/' + this.props.id)
          .then(response => {
            this.setState({
                vegetable: response.data, 
                loaded: true
            });
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