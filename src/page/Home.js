import React from 'react'
import {Grid, Fade} from '@material-ui/core';
import Hello from '../components/Hello'
import { withStyles } from '@material-ui/core/styles';
const style = theme => ({
  helloRoot: {
    margin: theme.spacing.unit * 3
  }
})

class Home extends React.Component {
  render() {
    const texts = ['Aloha','Halo', 'Halló', 'Ciao', '여보세요', 'Hola', 'Bonjour', '你好', 'Helló!', 'Hello' ]
    const {classes} = this.props
    return (
      <Fade in timeout={500}>
        <Grid container justify='center'>
          <Grid item className={classes.helloRoot}>
            <Hello text={texts}/>
          </Grid>
          <Grid item>
            <Grid container justify='center'>
              <Grid item>

              </Grid>
              <Grid item>

              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Fade>
    )
  }
}
export default withStyles(style)(Home)
