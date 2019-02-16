// import React from 'react'
//
// class About extends React.Component {
//   render() {
//     return (
//       <div></div>
//     )
//   }
// }
//
// export default About
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {ListSubheader,Typography, Grid} from '@material-ui/core/';

const styles = theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    overflowY: 'scroll',
    paddingRight: 17,
    boxSizing: 'content-box',
    maxHeight: '86vh',
  },
  listSection: {
    backgroundColor: 'inherit',
  },
  ul: {
    backgroundColor: 'inherit',
    padding: 0,
  },
  description: {
    borderLeft: '8px solid #a5be00',
    padding: theme.spacing.unit * 2,
    backgroundColor: '#F2F2F2',
  },
  text: {
    color: 'black !important'
  },
  subheader: {
    borderBottom: '4px solid #05668d',
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
  image: {
    maxHeight: 300,
    maxWidth: 300,
  }
});
const description = {
  College: 'There are some activities that i have done while I am study in college. My first experience is joining a committe team, it\'s Fasilkom Graduation team. Then, while i did in graduation committe, I registered to FUKI, it\'s islamic organazition in Fasilkom and many more. Now i want to focus on my study and try to apply resume to some companies',
  Movie:'Sed ad unum fabulas, posse copiosae menandri an usu. Sit ex nominavi reformidans. Qui ea omnium corpora, ex nam vivendo copiosae recusabo. An pro eirmod voluptua reprehendunt, ut adipisci praesent usu, no idque tibique luptatum sed.',
  Code:'Ea utamur aliquam intellegebat mel. In vel impetus delenit expetendis, sea eu minimum copiosae quaestio, eruditi perfecto te quo. Stet soleat concludaturque vis id, autem etiam feugiat te vix. Nihil cetero phaedrum cu nec, wisi altera et nam. Eu verear delenit pri. Dolore vocibus deleniti qui ut, veniam dictas an quo.'
}
function About(props) {
  const { classes } = props;
  return (
    <div style={{overflow: 'hidden'}}>
      <List className={classes.root} subheader={<li />}>

        <li key={`section-College`} className={classes.listSection}>
          <ul className={classes.ul}>
            <ListSubheader className={classes.subheader}><Typography variant='h1' align='center'>College</Typography></ListSubheader>
            <ListItem key='College'>
              <Grid container justify='center' spacing={16}>
                <Grid item>
                  <img className={classes.image} src={process.env.PUBLIC_URL + '/img/ui-logo.png'} />
                </Grid>
                <Grid item >
                  <img className={classes.image} src={process.env.PUBLIC_URL + '/img/fuki-logo.png'} />
                </Grid>
                <Grid item>
                  <Typography variant='body1' style={{textAlign: 'justify'}}>{description['College']}</Typography>
                </Grid>
                <Grid item>
                  <div className={classes.description}>
                    <Typography variant='body1' style={{color: '#2D2D2D'}}>“Ordinary people seek entertainment. Extraordinary people seek education and learning.” -Benjamin Hardy</Typography>
                  </div>
                </Grid>
              </Grid>
            </ListItem>
          </ul>
        </li>

        <li key={`section-Movie`} className={classes.listSection}>
          <ul className={classes.ul}>
            <ListSubheader className={classes.subheader}><Typography variant='h1' align='center'>Movie</Typography></ListSubheader>
            <ListItem key='Movie' style={{minHeight: 500}}>
              <span className={classes.description}>
                <Typography variant='body1' style={{color: '#2D2D2D'}}>{description['Movie']}</Typography>
              </span>
            </ListItem>
          </ul>
        </li>

        <li key={`section-Code`} className={classes.listSection}>
          <ul className={classes.ul}>
            <ListSubheader className={classes.subheader}><Typography variant='h1' align='center'>Code</Typography></ListSubheader>
            <ListItem key='Code' style={{minHeight: 500}}>
              <span className={classes.description}>
                <Typography variant='body1' style={{color: '#2D2D2D'}}>{description['Code']}</Typography>
              </span>
            </ListItem>
          </ul>
        </li>

      </List>
    </div>
  );
}



export default withStyles(styles)(About)
