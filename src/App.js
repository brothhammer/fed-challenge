import React, {useState} from 'react';
import { workouts } from './assets/workouts';
import {
  Typography,
  makeStyles,
  Grid,
  Paper,
  Box,
} from "@material-ui/core";
import TimerIcon from '@material-ui/icons/Timer';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';


function App() {
  const [isShown, setIsShown] = useState(null);
  const classes = useStyles();
  return (
    <>
      <div className="App"
           style={{
             display: "flex",
             justifyContent: "center",
             alignItems: "center",
             paddingTop: "40px",
           }}>
        <Box justify="center" width='80%' flexWrap="wrap" >
        <Grid
          container
          justify="space-evenly"
          alignItems="center"
          spacing={10}
        >
            {workouts.map((tile) => (
                <Paper elevation={10} variant="outlined" className={classes.root} onMouseOver={() => setIsShown(tile.id)}
                       onMouseOut={() => setIsShown(null)} >
                  <div className={classes.container}>
                    <img
                      src={require(`./assets/images/${tile.name}-thumb.jpg`)}
                      alt={tile.name}
                      className={classes.topImg}
                    />
                    ${tile.count && <div className={classes.textRight}>
                    <h4 className={classes.workoutCount}>{tile.count}</h4>
                    <Typography>workouts</Typography>
                    <PlaylistPlayIcon/>
                  </div>
                  }
                  </div>
                    <Grid container spacing={0}>
                      <Grid item xs={8}>
                        <h5 className={classes.workoutHeading}>{tile.title}</h5>
                      </Grid>
                      <Grid item xs={2}>
                      <img
                        src={require(`./assets/images/${tile.name}-trainer.jpg`)}
                        alt={tile.name}
                        className={classes.smallImg}
                      />
                      </Grid>
                      <Grid item>
                        {tile.time && tile.distance &&
                        <Typography className={classes.text}>
                         <TimerIcon className={classes.iconPadding}/>{tile.time}
                          <DirectionsRunIcon className={classes.iconPadding}/> {tile.distance}
                        </Typography>}
                          <Typography className={classes.text} style={{color: 'blue'}} >
                            {isShown === tile.id ? 'View Details' : ''}
                          </Typography>
                      </Grid>
                    </Grid>
                </Paper>
              )
            )}
        </Grid>
        </Box>
      </div>
    </>
  );
}

const useStyles = makeStyles(() => ({
  root: {
    width: 275,
    height: 300,
    marginBottom: '20px',
  },
  topImg: {
    width: '100%',
    height: '100%',
    paddingBottom: '2px',
    },
  smallImg: {
    width: 40,
    height: 40,
    paddingTop: '5px',
    paddingLeft: '20px'
  },
  iconPadding: {
    paddingLeft: '1px',
    paddingRight: '1px',
    marginLeft: '2px',
    fontSize: 12,
  },
  text: {
    fontSize: 12,
  },
  workoutHeading: {
    marginTop: '2px',
    marginBottom: '2px',
    marginLeft: '4px',
  },
  workoutCount: {
    height: '50%',
  },
  gridItem: {
    height: 240,
  },
  textRight: {
    position: 'absolute',
    top: '2px',
    right: '2px',
    background: '#000000',
    opacity: 0.5,
},
  container: {
    position: 'relative',
    textAlign: 'center',
    color: 'white',
    padding: '2px'
},
}));

export default App;
