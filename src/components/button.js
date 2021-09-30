import React from 'react'; 
import Button from '@material-ui/core/Button';
import { Link } from 'react-router'; 


function ButtonTest(props) {
    return (
        <Button 
            variant="contained" 
            color="primary"
            onClick={() => {
                alert('clicked'); 
            }}>  
            Material UI  
        </Button>
    );
}

export default ButtonTest; 