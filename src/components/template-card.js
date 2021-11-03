import React from 'react'; 
import Card from "@material-ui/core/Card";
import ButtonBase from '@material-ui/core/ButtonBase'; 
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography'; 
import { useHistory } from "react-router-dom";

  
function TemplateCard(props) {
  const history = useHistory(); 


    return (
      <Card sx={{ minWidth: 275, height: 600 }}>
        <ButtonBase onClick={() => {history.push('/email/template1')}}>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              {props.templateTitle}
            </Typography>
            <Typography variant="body2">
              <br />
              <br />
              <br />
            </Typography>
          </CardContent>
      </ButtonBase>
      </Card>
    );
  }

export default TemplateCard; 