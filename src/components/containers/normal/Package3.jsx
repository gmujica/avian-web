import React, {Component} from 'react';
import {
  Grid,
   Paper,
   Typography
 } from '@material-ui/core';

//import TextField from '@material-ui/core/TextField';
//import * as contentful from 'contentful';
//import contentful from 'contentful';
import RecipeReviewCard from '../components/RecipeReviewCard.jsx';

class ListPackages extends Component {

  onSearchInputChange = (event) => {
    if (event.target.value){
      this.setState({searchString: event.target.value})
    }else {
      this.setState({searchString: ''})
    }
    this.getPackages()
  }
  render() {
    return(
      <div>
          <div>
          <Paper>
              <Grid container spacing={24} style={{padding: 24}}>
              <Grid item  xs={12}>
                <Typography variant="display2" gutterBottom>
                    Paquetes Triples
                </Typography>
              </Grid>
                  <Grid item xs={12} sm={6} lg={3} xl={3}>
                    <RecipeReviewCard />
                  </Grid>
                  <Grid item xs={12} sm={6} lg={3} xl={3}>
                    <RecipeReviewCard />
                  </Grid>
                  <Grid item xs={12} sm={6} lg={3} xl={3}>
                    <RecipeReviewCard />
                  </Grid>
                  <Grid item xs={12} sm={6} lg={3} xl={3}>
                    <RecipeReviewCard />
                  </Grid>
              </Grid>
              </Paper>
          </div>
      </div>
    )
  }
}
export default ListPackages;
