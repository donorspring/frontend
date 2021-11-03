import React from 'react'; 
import Button from '@material-ui/core/Button'; 
import Grid from '@material-ui/core/Grid'; 
import Card from '@material-ui/core/Card'; 
import ButtonBase from '@material-ui/core/ButtonBase'; 
import CardHeader from '@material-ui/core/CardHeader'; 
import CardContent from '@material-ui/core/CardContent'; 
import CardActions from '@material-ui/core/CardActions'; 
import Typography from '@material-ui/core/Typography'; 
import TemplateCard from './template-card'; 
import { useHistory } from "react-router-dom";
import Add from '@material-ui/icons/Add';
import InsertPhoto from '@material-ui/icons/InsertPhoto';
import IconButton from '@material-ui/core/IconButton';
import MoreVert from '@material-ui/icons/MoreVert';



import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'; 


function SelectTemplate () {
    const history = useHistory(); 

    const templates = [{title: "Spring Campaign"}, {title: "Fall Campaign"}, {title: "Create Your Own"}]

    return(
        <div>
        <h1>Select a Template</h1>
        <IconButton >
            <Add fontSize="large" onClick={() => {history.push('/email/template3')}}></Add>
        </IconButton> Create a new template
        <Grid container spacing={8}>


        </Grid>
        </div>
    )
}

export default SelectTemplate; 