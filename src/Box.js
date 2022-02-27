import React, { Component } from "react";
import styles from './Box.module.css';
import { Grid } from '@mui/material';
import { Link } from "react-router-dom";

class Box extends Component {
  render() {
    var path = "/boxes/" + this.props.id
    return (
        <Grid item className={styles.item} xs={3} sm={4} md={4}>
          <Link to={path} style={{ textDecoration: 'none', color: 'black' }}>
            <div className = {styles.outerBorder}>
              <div className = {styles.card}>
                <h2>{this.props.boxName}</h2>
                <img className={styles.img} src={this.props.imagePath} alt={this.props.alt}/>
                <h2>£{this.props.price}.00</h2>
                <h4>{this.props.description}</h4>
              </div>
            </div>
          </Link>
        </Grid>
    );
  }
}
 
export default Box;