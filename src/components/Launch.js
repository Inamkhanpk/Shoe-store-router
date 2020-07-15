import React from 'react'
import {Link} from 'react-router-dom' 
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import img1 from './../assets/img1.jpg'
import img2 from './../assets/img2.jpg'
import img3 from './../assets/img3.jpg'
import img4 from './../assets/img4.jpg'
import img5 from './../assets/img5.jpg'
import img6 from './../assets/img6.jpg'
import img7 from './../assets/img7.jpg'
import img8 from './../assets/img8.jpg'
import img9 from './../assets/img9.jpg'
import img10 from './../assets/img10.jpg'
import img11 from './../assets/img11.jpg'
import img12 from './../assets/img12.jpg'
import img13 from './../assets/img13.jpg'
import img14 from './../assets/img14.jpg'
import img15 from './../assets/img15.jpg'

const Launch= ()=>{
    const shoes = {
       
        "1-shoe": {
          name: "1 shoe",
          img:img1
        },
        "2-shoe": {
          name: "2 shoe",
          img:img2
        },
        "3-shoe": {
          name: "3 shoe",
          
          img:img3
        },
        "4-shoe": {
          name: "4 shoe",
          img:img4
        },
        "5-shoe": {
          name: "5 shoe",
          img:img5
        },
        "6-shoe": {
          name: "6 shoe",
          img:img6
        },
        "7-shoe": {
          name: "7 shoe",
          img:img7
        },
        "8-shoe": {
          name: "8 shoe",
          img:img8
        },
        "9-shoe": {
          name: "9 shoe",
          img:img9
        },
        "10-shoe": {
          name: "10 shoe",
          img:img10
        },
        "11-shoe": {
          name: "11 shoe",
          img:img11
        },
        "12-shoe": {
          name: "12 shoe",
          img:img12
        },
        "13-shoe": {
          name: "13 shoe",
          img:img13
        },
        "14-shoe": {
          name: "14 shoe",
          img:img14
        },
        "15-shoe": {
          name: "15 shoe",
          img:img15
        },
        
      };

      const useStyles = makeStyles((theme)=> ({
        root: {
          height: "100%",
          position: "relative",
      
          "&:hover": {
            cursor: "pointer",
          },
        },
        media: {
          
          height:160,

          
        },

        
        
       
        }));
      
      const classes = useStyles();
    return(
        <div className="container ">
  


  <div className="  ">
  <Grid container spacing={2}>
{Object.entries(shoes).map(([slug, { name, img }]) => (
  <Grid key={slug}  item xs={6} md={4}>
    <Card  className={classes.root}   className="m-1" >
    <CardMedia
        className={classes.media}
        image={img}
        title="Paella dish"
      />
      <CardContent  className={classes.cardContent}>
      <Typography variant="h5" component="h2">
      <p>{name}</p>
      </Typography>

      {/* <img src={img} alt={name}  className="images"/> */}
      </CardContent>

      <CardActions>
    <Link to={`/home/${slug}`}>
    <Button variant="contained" className="">More Details</Button>
    </Link>
    </CardActions>
    </Card>
</Grid>
))}
</Grid>
</div>

</div>
    )
}

export default Launch























