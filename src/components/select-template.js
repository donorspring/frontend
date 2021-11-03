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
                <Grid item xs={4} sx={{height: 600}}>
                    <Card sx={{ minWidth: 275, height: 600 }}>
                        <ButtonBase onClick={() => {history.push('/email/template2')}}>
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                <InsertPhoto fontSize="large"></InsertPhoto> Legal Aid Society
                            </Typography>
                            <Typography variant="body2">
                                Last Updated: 10/13/21 <MoreVert></MoreVert>
                            </Typography>
                        </CardContent>
                    </ButtonBase>
                    </Card>
                </Grid>
                <Grid item xs={4} sx={{height: 600}}>
                    <Card sx={{ minWidth: 275, height: 600 }}>
                        <ButtonBase onClick={() => {history.push('/email/template1')}}>
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                <InsertPhoto fontSize="large"></InsertPhoto> Sample
                            </Typography>
                            <Typography variant="body2">
                                Last Updated: 10/13/21 <MoreVert></MoreVert>
                            </Typography>
                        </CardContent>
                    </ButtonBase>
                    </Card>
                </Grid>
        </Grid>
        </div>
    )
}

export default SelectTemplate; 