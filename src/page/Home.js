import React from 'react'
import {Typography, Grid} from '@material-ui/core';

class Home extends React.Component {
  render() {
    return (
      <Grid container justify='center'>
        <Grid item>
          <Typography variant='h2'>Hey There, Welcome to My Website</Typography>
        </Grid>
      </Grid>
    )
  }
}
export default Home
