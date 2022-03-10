import React, { Component } from "react";
import Box from "./Box";
import Aux from 'react-aux';
import styles from './Boxes.module.css';
import { Grid } from '@mui/material';
 
class Boxes extends Component {
  state = {
    boxes: null,
    loaded: false
  }

  async componentDidMount() {
    const response = await fetch('/boxes');
    const body = await response.json();
    this.setState({
      boxes: body, 
      loaded: true
    });
  }

  render() {
    let boxes = null
    if (this.state.loaded) {
      boxes = this.state.boxes.map(box => {
        return <Box 
          id={box.id}
          boxName={box.boxName}
          price={box.price}
          description={box.boxDescription}
          imagePath={box.imagePath}
          alt={box.alt}
        />
      })
    }
    return(
      <Aux>
        <div className={styles.outerPage}>
          <div className = {styles.page}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, md: 8, lg: 12, xl: 16}}>
              <Grid item className={styles.item} xs={3} sm={4} md={4}>
                <h1> Veg Boxes </h1>
              </Grid>
            </Grid>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, md: 8, lg: 12, xl: 16}}>
              {boxes}
            </Grid>
          </div>
        </div>
      </Aux>
    )
  }
}
 
export default Boxes;