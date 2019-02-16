import React from 'react'
import axios from 'axios'
import {Grid, List, Divider, CircularProgress} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Comment from '../components/Comment'
import Form from '../components/Form'

const style = theme => ({

})
class Contact extends React.Component {
  state = {
    data:[],
    loading:true
  }
  componentWillMount() {
    const self = this
    fetch('https://contact-me-api.herokuapp.com/api/comments/')
      .then(res => {
        return res.json()
      })
      .then(res => {
        console.log(res);
        self.setState({data: res, loading: false})
      })
    // axios.get('https://contact-me-api.herokuapp.com/api/comments/', {headers:{ 'Content-Type': 'application/json'}})
    // .then(res => {
      // console.log(res);
      // self.setState({data: res.data, loading: false})
    // })
    // .catch(error => {
    //   console.log(error);
    // })
  }
  handleSubmit = (name, comment) => {
    const params = {
      username: name,
      comment: comment
    }
    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
    axios.post("https://contact-me-api.herokuapp.com/api/comments/", JSON.stringify(params), {headers: headers})
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      })
    this.setState(prev => {
      let oldData = prev.data
      let newData = oldData.concat({username: name, comment:comment})
      console.log(newData);
      return {
        data: newData
      }
    })
  }
  render() {
    return (

        <Grid container>
          <Grid item xs={12} md={6}>
            {!this.state.loading && <Form onSubmit={this.handleSubmit}/>}
          </Grid>
          <Grid item xs={12} md={6}>
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
    )
  }
}

export default withStyles(style, { withTheme: true })(Contact)
