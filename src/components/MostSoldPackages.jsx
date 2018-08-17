// this is a container for MostSoldPackages

import React, {Component} from 'react'
import {
  Grid,
   Paper,
   Typography
 } from '@material-ui/core'
import RecipeReviewCard from '../components/RecipeReviewCard.jsx'
import Card2 from '../components/Card2.jsx'
import Card3 from '../components/Card3.jsx'
import Card4 from '../components/Card4.jsx'

class MostSoldPackages extends Component {

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
                <Typography variant="display2" gutterBottom color="primary">
                  Paquetes Mas Vendidos
                </Typography>
              </Grid>
                  <Grid item xs={12} sm={6} lg={3} xl={3}>
                    <RecipeReviewCard />
                  </Grid>
                  <Grid item xs={12} sm={6} lg={3} xl={3}>
                    <Card2 />
                  </Grid>
                  <Grid item xs={12} sm={6} lg={3} xl={3}>
                    <Card3 />
                  </Grid>
                  <Grid item xs={12} sm={6} lg={3} xl={3}>
                    <Card4 />
                  </Grid>
              </Grid>
              </Paper>
          </div>
      </div>
    )
  }
}
export default MostSoldPackages
