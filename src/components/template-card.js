import React from 'react'; 
import Card from "@material-ui/core/Card";
import ButtonBase from '@material-ui/core/ButtonBase'; 
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography'; 
import { useHistory } from "react-router-dom";

  
function TemplateCard(props) {
  const history = useHistory(); 


    return (
      <div>
      <p>${props.object.title}</p>

      </div>
    );
  }

export default TemplateCard; 