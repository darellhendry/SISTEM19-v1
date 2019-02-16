import React from 'react'
import {Grid, List, Divider, Fade, TextField, Button, FormControl} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import { withStyles } from '@material-ui/core/styles';
const style = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    marginBottom: theme.spacing.unit * 4,
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  button: {
    width: 130,
    marginBottom: theme.spacing.unit * 2,
  }
})
class Form extends React.Component {
  state = {
    name: '',
    comment: ''
  }
  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }
  render() {
    const {classes} = this.props
    const {name, comment} = this.state
    return (
      <form className={classes.form}>
        <TextField className={classes.textField} name='name' label='Name' onChange={this.handleChange}/>
        <TextField className={classes.textField} multiline name='comment' label='Comment' onChange={this.handleChange}/>
        <Button onClick={() => this.props.onSubmit(name, comment)} className={classes.button} variant='contained' color='secondary'>Submit <SendIcon style={{marginLeft: 10}} /></Button>
      </form>
    )
  }
}

export default withStyles(style, { withTheme: true })(Form)
