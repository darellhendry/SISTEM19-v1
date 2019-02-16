import React from 'react'
import axios from 'axios'
import {Grid, List, Divider, Fade, CircularProgress} from '@material-ui/core';
import Comment from '../components/Comment'
class Contact extends React.Component {
  state = {
    data:[],
    loading:true
  }
  componentDidMount() {
    const self = this
    axios.get('http://contact-me-api.herokuapp.com/api/comments/')
      .then(res => {
        console.log(res);
        self.setState({data: res.data, loading: false})
      })
      .catch(error => {
        console.log(error);
      })
  }
  render() {
    return (
      <Fade in timeout={500}>
        <Grid container justify='center'>
          <Grid item xs={12} md={5}>
            <List>
              {
                !this.state.loading && this.state.data.map( (item,index) => {
                  return (
                    <React.Fragment key={index}>
                      <Divider />
                      <Comment  data={item}/>
                      <Divider />
                    </React.Fragment>
                  )
                })
              }
              {
                this.state.loading && (<CircularProgress />)
              }
            </List>
          </Grid>
        </Grid>
      </Fade>
    )
  }
}

export default Contact
