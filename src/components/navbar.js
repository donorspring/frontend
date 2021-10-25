import React, { useState } from 'react'; 
import { useHistory } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import HomeIcon from '@material-ui/icons/Home';
import CssBaseline from '@material-ui/core/CssBaseline';

const useStyles = makeStyles(theme => ({
    homeButton: {
      marginRight: theme.spacing(1),
    },
    title: {
        marginRight: theme.spacing(4)
    }, 
  }));

const Navbar = () => {
    const history = useHistory(); 

    const handleRoute = () => {
        history.push("/dashboard"); 
    }
    const classes = useStyles();

    return (
        <AppBar position="static" style={{marginBottom: "25px"}}>
            <Toolbar>
                <IconButton 
                    edge="start" 
                    color="inherit" 
                    aria-label="AiFillHome" 
                    className={classes.menuButton}
                    onClick={() => {history.push('/')}}>
                    <HomeIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>DonorSpring</Typography>
                <Button color="inherit" onClick={() => {history.push('/')}}>Dashboard</Button>
                <Button color="inherit" onClick={() => {history.push('/contacts')}}>Contacts</Button>
                <Button color="inherit" onClick={() => {history.push('/emails')}}>Emails</Button>
                <Button color="inherit" onClick={() => {history.push('/upload')}}>Upload</Button>
                <Button color="inherit" onClick={() => {history.push('/account')}} className={classes.account} >Account</Button> 
            </Toolbar>
        </AppBar>
    )
}

export default Navbar; 