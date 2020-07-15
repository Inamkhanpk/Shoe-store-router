import React from 'react'
import {useParams} from 'react-router-dom'
import { Grid, Container, Typography, Button } from "@material-ui/core";
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
function LaunchShoe() {

  const shoes = {
   
    "1-shoe": {
      name: "First shoe",
      img:img1,
      price:100,
      color:"red",
      size:[5,6,7,8,8.5]
      
    },
    "2-shoe": {
      name: "sECOND shoe",
      img:img2,
      price:200
    },
    "3-shoe": {
      name: "Third shoe",
      img:img3,
      price:150
    },
    "4-shoe": {
      name: "fourth shoe",
      img:img4,
      price:140
    },
    "5-shoe": {
      name: "fifth shoe",
      img:img5,
      price:110
    },
    "6-shoe": {
      name: "sixth shoe",
      img:img6,
      price:140
    },
    "7-shoe": {
      name: "seven shoe",
      img:img7,
      price:170
    },
    "8-shoe": {
      name: "eight shoe",
      img:img8,
      price:180
    },
    "9-shoe": {
      name: "nine shoe",
      img:img9,
      price:190
    },
    "10-shoe": {
      name: "ten shoe",
      img:img10,
      price:210
    },
    "11-shoe": {
      name: "eleven shoe",
      img:img11,
      price:230
    },
    "12-shoe": {
      name: "tewelve shoe",
      img:img12,
      price:150
    },
    "13-shoe": {
      name: "tewelve shoe",
      img:img13,
      price:160
    },
    "14-shoe": {
      name: "tewelve shoe",
      img:img14,
      price:130
    },
    "15-shoe": {
      name: "tewelve shoe",
      img:img15,
      price:120
    },
    
    
  };
    const { slug } = useParams();

    const shoe = shoes[slug];

    console.log(shoe)
  console.log(slug)
    if (!shoe) {
      return <h2>Not Found!</h2>;
    }
  
    const { name, img,price,color ,size } = shoe;
  
    return (
      <Grid container >
         <Grid item xs={12} md={6}>
        <div className="  bg-danger  w-100 h-100  p-5">
        
        <img src={img} alt={name} className="mh-100 mw-100 " />
        </div>
        </Grid>
        <Grid item xs={12} md={6} container direction="column">
        <Grid item>
        <div className=" p-5 bg-warning">
        <h2>{name}</h2>
        <h5>Price:</h5><p>{price} Rs</p>
        <h5>Payment procedure:</h5><p>or pay over time in interest-free installments with Affirm or Klarna.</p>
        <h5>Color Available:</h5><p>{color}</p>
        
        <h5>Description about shoe</h5>
        <p>In our modern world, culture and technology exist intertwined. Technology advances and culture shifts. Culture blooms and technology adapts. The adidas ZX story is similar: always innovating, creating cutting-edge styles like these ZX 2K 4D Shoes. Built with breathable mesh and a state-of-the-art midsole, they keep you comfortable in an ever-changing world.</p>
        
        </div>
        </Grid>
        </Grid>
      </Grid>
    );
  }


  export default LaunchShoe