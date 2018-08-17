import React, {Component} from 'react'
import Grid from '@material-ui/core/Grid'
import RecipeReviewCard from '../components/RecipeReviewCard.jsx'
import Card2 from '../components/Card2.jsx'
import Card3 from '../components/Card3.jsx'
import Card4 from '../components/Card4.jsx'
import Card5 from '../components/Card5.jsx'
import Card7 from '../components/Card7.jsx'
import Card8 from '../components/Card8.jsx'

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
              <Grid container spacing={24} style={{padding: 24}}>
                  <Grid item xs={12} sm={6} lg={3} xl={3}>
                    <Card5 />
                  </Grid>
                  <Grid item xs={12} sm={6} lg={3} xl={3}>
                    <RecipeReviewCard />
                  </Grid>
                  <Grid item xs={12} sm={6} lg={3} xl={3}>
                    <Card3 />
                  </Grid>
                  <Grid item xs={12} sm={6} lg={3} xl={3}>
                    <Card2 />
                  </Grid>
                  <Grid item xs={12} sm={6} lg={3} xl={3}>
                    <Card8 />
                  </Grid>
                  <Grid item xs={12} sm={6} lg={3} xl={3}>
                    <Card7 />
                  </Grid>
                  <Grid item xs={12} sm={6} lg={3} xl={3}>
                    <Card4 />
                  </Grid>
                  <Grid item xs={12} sm={6} lg={3} xl={3}>
                    <Card5 />
                  </Grid>
              </Grid>
          </div>
      </div>
    )
  }
}
export default ListPackages;
