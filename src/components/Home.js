import React from 'react'
import { useNavigate } from "react-router-dom";
import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";



const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    margin: theme.spacing(2),
    borderRadius: "8px",

    
  },
  
    heading: {
      fontWeight: "bold",
      marginTop: theme.spacing(4),
  
      [theme.breakpoints.down("sm")]: {
        fontSize: "3rem",
      },
    },
  
    subHeading: {
      fontWeight: "100",
      marginBottom: theme.spacing(10),
  
      [theme.breakpoints.down("sm")]: {
        fontSize: "1.5rem",
        marginBottom: theme.spacing(4),
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "1rem",
      },
    },

    media: {
      height: 160,
    },
  
    cardContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
  
      [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
      },
    },
  }));
  
const Home = () => {
    const classes = useStyles();
    const navigate = useNavigate();
    return(
    
          
   <div >
      <Container>
        <Typography
          variant="h1"
          color="primary"
          align="center"
          className={classes.heading}
        >
          Shoe Store
        </Typography>
        <Typography
          variant="h4"
          color="primary"
          align="center"
          className={classes.subHeading}
        >
          streetwear / lifestyle / sports
        </Typography>
        <div className={classes.cardContainer}>
          
      <Card className={classes.root} onClick={() => navigate("/men")}>
          <CardMedia className={classes.media} image="https://i.insider.com/5ad60080146e712d008b4ba3?width=1136&format=jpeg" title="men" />
          <CardContent className={classes.cardContent}>
          <Typography variant="h6" component="h3" className={classes.name}>
             Men
          </Typography>
          </CardContent>
      </Card>
          
      <Card className={classes.root} onClick={() => navigate("/women")}>
          <CardMedia className={classes.media} image="https://girottishoes.com/media/wysiwyg/750x427-category-top-banner-women-shoes-2020-m.jpg" title="women" />
          <CardContent className={classes.cardContent}>
          <Typography variant="h6" component="h3" className={classes.name}>
            Women
          </Typography>
         </CardContent>
      </Card>
          
          
      <Card className={classes.root} onClick={() => navigate("/kids")}>
         <CardMedia className={classes.media} image="https://cdn.shopify.com/s/files/1/2541/5718/products/product-image-327426219_1200x1200.jpg" title="kids" />
         <CardContent className={classes.cardContent}>
         <Typography variant="h6" component="h3" className={classes.name}>
            Kids
         </Typography>
         </CardContent>
      </Card>

        </div>
      </Container>
    </div>
        
    )
}

export default Home