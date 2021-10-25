import React from 'react'; 
import Card from "@material-ui/core/Card";
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography'; 
import CardActions from '@material-ui/core/CardActions'; 
import Button from '@material-ui/core/Button'; 
import Box from '@material-ui/core/Box'; 
import CircularProgress from '@material-ui/core/CircularProgress';

const card = (
    <React.Fragment>
      <CardContent>
        <Typography variant="h6" component="div">
          Metrics
        </Typography>
        <CircularProgress 
        variant="determinate" 
        value={80} 
        thickness={13}
        />
      </CardContent>
    </React.Fragment>
  );
  
function Cards() {
    return (
      <Box sx={{ minWidth: 275 }}>
        <Card variant="outlined">{card}</Card>
      </Box>
    );
  }

export default Cards; 