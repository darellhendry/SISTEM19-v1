import React from 'react'
import {Typography} from '@material-ui/core';

class Hello extends React.Component {
  state = {
    onText: this.props.text[0],
    count:0,
  }
  componentDidMount() {
    this.timer = setInterval(this.updateText, 1500)
  }
  componentWillUnmount() {
    clearInterval(this.timer)
  }
  updateText = () => {
    this.setState(prev => {
      const listText = this.props.text
      const totalText = listText.length
      const newCount = (prev.count + 1)%totalText
      return {
        onText: listText[newCount],
        count: newCount,
      }
    })
  }
  render() {
    return (
      <div>
        <Typography  gutterBottom variant='h2'>{this.state.onText}</Typography>
      </div>
    )
  }
}

export default Hello
