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

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'; 


function SelectTemplate () {
    const templates = [{title: "Spring Campaign"}, {title: "Fall Campaign"}, {title: "testing"}, {title: "Spring Campaign"}, {title: "Fall Campaign"}, {title: "testing"}, {title: "testing"}]

    return(
        <div>
        <h1>Select A Template</h1>
        <Grid container spacing={2}>
            {templates.map((template) => (
                <Grid item xs={4} sx={{height: 600}}>
                    <TemplateCard templateTitle={template.title}></TemplateCard>
                </Grid>
            ))}
        </Grid>
        </div>
    )
}

export default SelectTemplate; 