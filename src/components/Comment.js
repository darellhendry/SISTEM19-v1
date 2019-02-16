import React from 'react'
import {ListItem, ListItemAvatar, Avatar, ListItemText} from '@material-ui/core';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
class Comment extends React.Component {
  render() {
    const data = this.props.data
    return (
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <PermIdentityIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={!Boolean(data)? '': data.username}
          secondary={!Boolean(data) ? '': data.comment}
        />
      </ListItem>
    )
  }
}

export default Comment
