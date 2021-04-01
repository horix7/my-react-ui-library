import React, { Component } from 'react';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import classes from './product_card.css'

export default class ProductCard extends Component<any> {

 render () {
    return (
        <div style={{margin: "50px", width: "300px"}}>

        <div className={classes.root}>
          
          <img
            className={classes.media}
            src="https://d3re0f381bckq9.cloudfront.net/39023619_4-22_500x500.jpg"
          />
          <CardContent>
            <Typography variant="body1" color="textSecondary" component="h1">
              Air Jordan 5 Retro 'Stealth 2.0
            </Typography>
          </CardContent>
          <div style={{textAlign: "center"}}>
          147,300 RF
          </div>
        </div>
        </div>

      );
 }
}
