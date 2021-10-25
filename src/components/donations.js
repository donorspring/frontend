import React from 'react'; 
import Card from "@material-ui/core/Card";
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography'; 
import CardActions from '@material-ui/core/CardActions'; 
import Button from '@material-ui/core/Button'; 
import Box from '@material-ui/core/Box'; 

const card = (
    <React.Fragment>
      <CardContent>
        <Typography variant="h6" component="div">
          Raised: <b>$1250</b>
        </Typography>
        <Typography variant="h6" component="div">
          including <b>$750</b>
        </Typography>
        <Typography variant="h6" component="div">
          in recurring donations 
        </Typography>
        <Typography variant="h6" component="div">
          across <b>25</b> donations
        </Typography>
      </CardContent>
    </React.Fragment>
  );
  
function Donations() {
    return (
      <Box sx={{ minWidth: 275 }}>
        <Card variant="outlined">{card}</Card>
      </Box>
    );
  }

export default Donations; 