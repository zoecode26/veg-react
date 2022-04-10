import React, { Component } from "react";
import { Grid } from '@mui/material';
import styles from './BoxPage.module.css';
import AddToCart from "../AddToCart/AddToCart";
import Vegetable from "../Vegetable/Vegetable";

class BoxPage extends Component {
  state = {
    box: null,
    contents: [],
    loaded: false
  }

  async componentDidMount() {
    const boxResponse = await fetch('/boxes/' + this.props.id);
    const boxBody = await boxResponse.json();
    const contentsResponse = await fetch('/boxed-vegetables/' + this.props.id);
    const contentsBody = await contentsResponse.json();
    this.setState({
      box: boxBody, 
      contents: contentsBody,
      loaded: true
    });
  }

  render() {
    let contents = null
    if (this.state.loaded) {
      contents = this.state.contents.map(content => {
        return <Vegetable 
          id={content.vegetableId}
        />
      })
      return (
        <div className={styles.center}>
          <div className = {styles.content}>
            <Grid padding="2%" container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, md: 8, lg: 12, xl: 16}} className={styles.center}>
              <Grid item xs={6}className={styles.verticalCenter}>
                <img className = {styles.img} src={this.state.box.imagePath} alt={this.props.alt}/>
              </Grid>
              <Grid item xs={6}>
                <div className = {styles.info}>
                  <h1>{this.state.box.boxName}</h1>
                  <h2>£{this.state.box.price}.00</h2>
                  <h4>{this.state.box.boxDescription}</h4>
                  <AddToCart boxId={this.props.id}/>
                </div>
              </Grid>
              <Grid item xs={12} md={6} lg={12} className = {styles.boxContents}>
                <h2> What's in the Box: </h2>
              </Grid>
              {contents}
            </Grid>
          </div>
        </div>
      );
    }
    return(
      null
    );
  }
  
}
 
export default BoxPage;