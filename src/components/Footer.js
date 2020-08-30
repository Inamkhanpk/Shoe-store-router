
import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.text.secondary,
    color: theme.palette.secondary.contrastText,
    // position: 'fixed',
    // left: 0,
    // bottom: 0,
    // width: '100%'
    marginTop:theme.spacing(2)
  },

  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    padding: theme.spacing(1),
    

    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },

  btn: {
    color: theme.palette.secondary.contrastText,
  },
}));

const Footer = () =>{
  const classes = useStyles();
   return(
    <footer className={classes.footer}>
      <Container className={classes.container}>

          <Typography>
             Made By Inam Khan
           </Typography>
  
      
       <div>
          <IconButton className={classes.btn} aria-label="facebook">
            <FacebookIcon/>
          </IconButton>
          <IconButton className={classes.btn} aria-label="github">
            <TwitterIcon/>
          </IconButton>
          <IconButton className={classes.btn} aria-label="linkedin">
            <WhatsAppIcon/>
          </IconButton>
        </div>

       </Container>
   </footer>

) 
}

export default Footer