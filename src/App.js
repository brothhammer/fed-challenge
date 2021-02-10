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
             paddingTop: "40px"
           }}>
        <Box justify="center" width='80%'>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={3}
        >
            {workouts.map((tile) => (
              <Grid
                item xs={3}
                className={classes.gridItem}
                onMouseOver={() => setIsShown(tile.id)}
                onMouseOut={() => setIsShown(null)}
              >
              <Paper elevation={5} variant="outlined" >
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
              </Grid>
              )
            )}
        </Grid>
        </Box>
      </div>
    </>
  );
}

const useStyles = makeStyles(() => ({
  paper: {
    textAlign: 'center',
  },
  topImg: {
    width: '100%',
    height: '50%',
    },
  smallImg: {
    width: 40,
    height: 40,
    paddingTop: '20px',
  },
  iconPadding: {
    paddingLeft: '1px',
    paddingRight: '1px',
    fontSize: 12,
  },
  text: {
    fontSize: 12,
  },
  workoutHeading: {
    marginBottom: '2px',
  },
  workoutCount: {
    marginBottom: '8px',
  },
  gridItem: {
    height: 240,
  },
  textRight: {
    position: 'absolute',
    top: '0px',
    right: '0px',
    background: '#000000',
    opacity: 0.5,
},
  container: {
    position: 'relative',
    textAlign: 'center',
    color: 'white',
}
}));

export default App;
