import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme)=> ({
    
paper:{
    margin:'auto',
    padding:"10px",
    
    display:'flex',
    flex:'wrap',
    flexDirection:'column'
}
   ,

  avatar: {
    

    margin:'auto'
   } 
   
    }));
  
const About = () => {

    const classes = useStyles();
    return(
        <div className="p-5">
            
            <Paper className={classes.paper} >
                <h1 className="text-center">About me</h1>
                <Avatar className={classes.avatar} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
               <h1> Email:</h1><p>inamk2111@gmail.com</p>
                <h1>Whatsapp:</h1> <p>03158243652</p>
                <h1>Degree:</h1><p>Bachelor In Electronic Engineering</p>
                <h1>University:</h1><p>SSUET</p>
                </Paper> 
            
        </div>
    )
}

export default About