// import React from 'react'
// import {Link} from 'react-router-dom' 
// import Card from '@material-ui/core/Card'
// import CardContent from '@material-ui/core/CardContent'
// import Button from '@material-ui/core/Button';
// import CardActions from '@material-ui/core/CardActions';
// import Typography from '@material-ui/core/Typography';
// import CardMedia from '@material-ui/core/CardMedia';
// import { makeStyles } from '@material-ui/core/styles';
// import Grid from '@material-ui/core/Grid'
// import img1 from './../assets/img1.jpg'
// import img2 from './../assets/img2.jpg'
// import img3 from './../assets/img3.jpg'
// import img4 from './../assets/img4.jpg'
// import img5 from './../assets/img5.jpg'
// import img6 from './../assets/img6.jpg'
// import img7 from './../assets/img7.jpg'
// import img8 from './../assets/img8.jpg'
// import img9 from './../assets/img9.jpg'
// import img10 from './../assets/img10.jpg'
// import img11 from './../assets/img11.jpg'
// import img12 from './../assets/img12.jpg'
// import img13 from './../assets/img13.jpg'
// import img14 from './../assets/img14.jpg'
// import img15 from './../assets/img15.jpg'

// const Launch= ()=>{
//     const shoes = {
       
//         "1-shoe": {
//           name: "Nike React Infinity Run Flyknit",
//           img:img1,
//           gender: "MEN",
//           category: "RUNNING",
//         },
//         "2-shoe": {
//           name: "Nike React Miler",
//           img:img2,
//           gender: "MEN",
//           category: "RUNNING",
//         },
//         "3-shoe": {
//           name: "Nike Mercurial Vapor 13 Elite Tech Craft FG",
//           img:img3,
//           gender: "MEN",
//           category: "FOOTBALL",
//         },
//         "4-shoe": {
//           name: "Nike Mercurial Superfly 7 Pro MDS FG",
//           img:img4,
//           gender: "MEN",
//         category: "FOOTBALL"
//         },
//         "5-shoe": {
//           name: "Bridgport Advice",
//           img:img5,
//           gender: "MEN",
//           category: "FORMAL",
//         },
//         "6-shoe": {
//           name: "Beck",
//           img:img6,
//           gender: "MEN",
//           category: "FORMAL",
//         },
//         "7-shoe": {
//           name: "Fester",
//           img:img7,
//           gender: "MEN",
//     category: "FORMAL",
//         },
//         "8-shoe": {
//           name: "Pixel",
//           img:img8,
//           gender: "MEN",
//     category: "FORMAL",
//         },
//         "9-shoe": {
//           name: "Austin",
//           img:img9,
//           gender: "MEN",
//     category: "FORMAL",
//         },
//         "10-shoe": {
//           name: "Club C Revenge Mens",
//           img:img10,
//           gender: "MEN",
//           category: "CASUAL",
//         },
//         "11-shoe": {
//           name: "SK80-Low",
//           img:img11,
//           gender: "MEN",
//           category: "CASUAL",
//         },
//         "12-shoe": {
//           name: "Michael Feburary SK8-Hi",
//           img:img12,
//           gender: "MEN",
//           category: "CASUAL",
//         },
//         "13-shoe": {
//           name: "13 shoe",
//           img:img13
//         },
//         "14-shoe": {
//           name: "14 shoe",
//           img:img14
//         },
//         "15-shoe": {
//           name: "15 shoe",
//           img:img15
//         },
//         "16-shoe":{
//           id: 16,
//           name: "Nike Air Zoom Pegasus 37",
//           gender: "WOMEN",
//           category: "RUNNING",
//           price: 120,
//           imageURL:
//             "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-33b0a0a5-c171-46cc-ad20-04a768703e47/air-zoom-pegasus-37-womens-running-shoe-Jl0bDf.jpg",
          
//         },
//         "17-shoe":{
//           id: 17,
//           name: "Nike Joyride Run Flyknit",
//           gender: "WOMEN",
//           category: "RUNNING",
//           price: 180,
//           imageURL:
//             "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/99a7d3cb-e40c-4474-91c2-0f2e6d231fd2/joyride-run-flyknit-womens-running-shoe-HcfnJd.jpg",
          
//         },
//         "18-shoe":{
//           id: 18,
//           name: "Nike Mercurial Vapor 13 Elite FG",
//           gender: "WOMEN",
//           category: "FOOTBALL",
//           price: 250,
          
//           imageURL:
//             "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9dda6202-e2ff-4711-9a09-0fcb7d90c164/mercurial-vapor-13-elite-fg-firm-ground-soccer-cleat-14MsF2.jpg",
//         },
//         "19-shoe":{
//           id: 19,
//           name: "Nike Phantom Vision Elite Dynamic Fit FG",
//           gender: "WOMEN",
//           category: "FOOTBALL",
//           price: 150,
//           imageURL:
//             "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/s1amp7uosrn0nqpsxeue/phantom-vision-elite-dynamic-fit-fg-firm-ground-soccer-cleat-19Kv1V.jpg",
          
//         },
//         "20-shoe":{
//           id: 20,
//           name: "Nike Phantom Venom Academy FG",
//           gender: "WOMEN",
//           category: "FOOTBALL",
//           price: 80,
//           imageURL:
//             "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/whegph8z9ornhxklc8rp/phantom-venom-academy-fg-firm-ground-soccer-cleat-6JVNll.jpg",
          
//         },
//         "21-shoe":{
//           id: 21,
//           name: "Nike Air Force 1",
//           gender: "KIDS",
//           category: "CASUAL",
//           price: 90,
//           imageURL:
//             "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/178b2a46-3ee4-492b-882e-f71efdd53a36/air-force-1-big-kids-shoe-2zqp8D.jpg",
        
//         },
//         "22-shoe":{
//           id: 22,
//           name: "Nike Air Max 90",
//           gender: "KIDS",
//           category: "CASUAL",
//           price: 100,
          
//           imageURL:
//             "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8439f823-86cf-4086-81d2-4f9ff9a66866/air-max-90-big-kids-shoe-1wzwJM.jpg",
          
//         },
//         "23-shoe":{
//           id: 22,
//           name: "Nike Air Max 90 LTR",
        
//           gender: "KIDS",
//           category: "CASUAL",
//           price: 110,
          
//           imageURL:
//             "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-620aeb37-1b28-44b0-9b14-5572f8cbc948/air-max-90-ltr-big-kids-shoe-hdNLQ5.jpg",
          
//         },
//         "24-shoe": {
//           id: 13,
//           name: "Nike Joyride Dual Run",
//           gender: "KIDS",
//           category: "RUNNING",
//           price: 110,
//           imageURL:
//             "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/33888130-0320-41a1-ba53-a026decd8aa2/joyride-dual-run-big-kids-running-shoe-1HDJF8.jpg",
          
//         },
//         "25-shoe":{
//           id: 14,
//           name: "Nike Renew Run",
//           gender: "KIDS",
//           category: "RUNNING",
//           price: 80,
          
//           imageURL:
//             "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-73e54c0b-11a6-478b-9f90-bd97fcde872d/renew-run-big-kids-running-shoe-5Bpz93.jpg",
          
//         },

//         "26-shoe":{
//           id: 20,
//           name: "SS-HL-0135",
//           brand: "HUSHPUPPIES",
//           gender: "WOMEN",
//           category: "FORMAL",
//           price: 30,
//           is_in_inventory: true,
//           items_left: 6,
//           imageURL:
//             "https://cdn.shopify.com/s/files/1/0016/0074/9623/products/009240000-11-SS-HL-0135-Black_800x800.jpg?v=1572264270",
//           slug: "ss-hl-0135",
//         },
//         "27-shoe": {
//           id: 21,
//           name: "SS-HL-0136",
//           gender: "WOMEN",
//           category: "FORMAL",
//           price: 50,
//           imageURL:
//             "https://cdn.shopify.com/s/files/1/0016/0074/9623/products/009250000-779-SS-HL-0136-Coffee_800x800.jpg?v=1571900372",
          
//         },
//         "28-shoe": {
//           id: 22,
//           name: "SS-HL-0128",
//           gender: "WOMEN",
//           category: "FORMAL",
//           price: 35,
         
//           imageURL:
//             "https://cdn.shopify.com/s/files/1/0016/0074/9623/products/000300242-484-SS-HL-0128-Blue_800x800.jpg?v=1583235174",
          
//         },
//         "29-shoe":{
//           id: 23,
//           name: "SS-MS-0075",
//           gender: "WOMEN",
//           category: "CASUAL",
//           price: 25,
          
//           imageURL:
//             "https://cdn.shopify.com/s/files/1/0016/0074/9623/products/009170000-479-SS-MS-0075-Red_800x800.jpg?v=1570688687",
        
//         },
//         "30-shoe":{
//           id: 24,
//           name: "SS-MS-0075",
          
//           gender: "WOMEN",
//           category: "CASUAL",
//           price: 35,
          
//           imageURL:
//             "https://cdn.shopify.com/s/files/1/0016/0074/9623/products/009170000-615-SS-MS-0075-TAN_800x800.jpg?v=1570688687",
          
//         },
//         "31-shoe":{
//           id: 25,
//           name: "SS-PM-0093",
        
//           gender: "WOMEN",
//           category: "CASUAL",
//           price: 30,
          
//           imageURL:
//             "https://cdn.shopify.com/s/files/1/0016/0074/9623/products/SS-PM-0093_1_800x800.jpg?v=1570601253",
          
//         },
//         "32-shoe":{
//           id: 26,
//           name: "Nizza X Disney",
          
//           gender: "KIDS",
//           category: "CASUAL",
//           price: 55,
         
//           imageURL:
//             "https://assets.adidas.com/images/h_320,f_auto,q_auto:sensitive,fl_lossy/ef901c7aeac042578eceab9d0159196c_9366/Nizza_x_Disney_Sport_Goofy_Shoes_White_FW0651_01_standard.jpg",
          
//         },
//         "33-shoe":{
//           id: 27,
//           name: "X_PLR",
      
//           gender: "KIDS",
//           category: "CASUAL",
//           price: 65,
          
//           imageURL:
//             "https://assets.adidas.com/images/h_320,f_auto,q_auto:sensitive,fl_lossy/a36518227134495da766ab9d01772fa2_9366/X_PLR_Shoes_Red_FY9063_01_standard.jpg",
//           slug: "x_plr",
//         },
//         "34-shoe":{
//           id: 28,
//           name: "Stan Smith",
    
//           gender: "KIDS",
//           category: "CASUAL",
//           price: 55,
          
//           imageURL:
//             "https://assets.adidas.com/images/h_320,f_auto,q_auto:sensitive,fl_lossy/d0720712d81e42b1b30fa80800826447_9366/Stan_Smith_Shoes_White_M20607_M20607_01_standard.jpg",
          
//         },
//         "35-shoe":{
//           id: 29,
//           name: "NMD_R1",
          
//           gender: "KIDS",
//           category: "RUNNING",
//           price: 120,
          
//           imageURL:
//             "https://assets.adidas.com/images/h_320,f_auto,q_auto:sensitive,fl_lossy/99ca762cb9054caf82fbabc500fd146e_9366/NMD_R1_Shoes_Blue_FY9392_01_standard.jpg",
          
//         },
//         "36-shoe":  {
//           id: 30,
//           name: "NMD_R1 Flash Red",
          
//           gender: "WOMEN",
//           category: "CASUAL",
//           price: 140,
          
//           imageURL:
//             "https://assets.adidas.com/images/h_320,f_auto,q_auto:sensitive,fl_lossy/90f85768e3894aeaab67aba0014a3379_9366/NMD_R1_Shoes_Red_FY9389_01_standard.jpg",
          
//         },
//         "37-shoe":{
//           id: 31,
//           name: "Superstar",
          
//           gender: "WOMEN",
//           category: "CASUAL",
//           price: 90,
          
//           imageURL:
//             "https://assets.adidas.com/images/h_320,f_auto,q_auto:sensitive,fl_lossy/12365dbc7c424288b7cdab4900dc7099_9366/Superstar_Shoes_White_FW3553_FW3553_01_standard.jpg",
        
//         },
//       };

//       const useStyles = makeStyles((theme)=> ({
//         root: {
//           height: "100%",
//           position: "relative",
      
//           "&:hover": {
//             cursor: "pointer",
//           },
//         },
//         media: {
          
//           height:160,

          
//         },

        
        
       
//         }));
      
//       const classes = useStyles();
//     return(
      
  


  
//   <Grid container spacing={2}>
// {Object.entries(shoes).map(([slug, { name, img }]) => (
//   <Grid key={slug}  item xs={6} md={4}>
//     <Card  className={classes.root}    >
//     <CardMedia
//         className={classes.media}
//         image={img}
//         title="Paella dish"
//       />
//       <CardContent  className={classes.cardContent}>
//       <Typography variant="h5" component="h2">
//       <p>{name}</p>
//       </Typography>

    
//       </CardContent>

//       <CardActions>
//     <Link to={`/home/${slug}`}>
//     <Button variant="contained" className="">More Details</Button>
//     </Link>
//     </CardActions>
//     </Card>
// </Grid>
// ))}
// </Grid>


//     )
// }

// export default Launch


import React, { useState, useContext } from "react";
//import ProductGrid from "../components/Products/ProductGrid";
import { makeStyles } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from '@material-ui/core/Grid'
import GlobalContext from "./../GlobalContext/GlobalContext";
import { Outlet } from "react-router";
import { AppBar, Tab, Tabs } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import { useNavigate } from "react-router-dom";
import CardActions from '@material-ui/core/CardActions';
import IconButton from "@material-ui/core/IconButton";

import AddShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import CardMedia from '@material-ui/core/CardMedia';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    minHeight: "80vh",

    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  container:{
    overflow: "auto",
    margin: 0,
    width: "100%",
  },
  cards:{
    height: "100%",


    "&:hover": {
      cursor: "pointer",
    },
  },
  drawer: {
    width: drawerWidth,
    
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "transparent",
    border: "none",
   },
  drawerContainer: {
     overflow: "auto",
  },
  
  
  media: {
    height: 200,

    [theme.breakpoints.down("md")]: {
      height: 200,
    },
    [theme.breakpoints.down("xs")]: {
      height: 120,
    },
  },

  cardContent: {
    display: "flex",
    justifyContent: "space-between",

    [theme.breakpoints.only("md")]: {
      flexDirection: "column",
    },
    [theme.breakpoints.only("xs")]: {
      flexDirection: "column",
    },
  },

 row: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    width: "100%",
  },
}));

function getProductsByCategory(index, products) {
  switch (index) {
    case 0:
      return products;

    case 1:
      return products.filter((p) => p.category === "RUNNING");

    case 2:
      return products.filter((p) => p.category === "FOOTBALL");

    case 3:
      return products.filter((p) => p.category === "CASUAL");

    case 4:
      return products.filter((p) => p.category === "FORMAL");

    default:
      break;
  }
}

const ShopPage = ({ category }) => {
  const classes = useStyles();
  const navigate = useNavigate();

  const [selectedIndex, setSelectedIndex] = useState(0);
  const { products } = useContext(GlobalContext);

  const categories = ["All", "Running", "Football", "Casual", "Formal"];
  
  const allProductsForGender = products.filter(
    (p) => p.gender.toLowerCase() === category.toLowerCase()
  );

  const productsByCategory = getProductsByCategory(
    selectedIndex,
    allProductsForGender
  );
  

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };


  

  

  return (
    <div className={classes.root} >
      <Hidden mdUp>
        <div>
          <AppBar position="static" color="default">
            <Tabs
              value={selectedIndex}
              onChange={handleListItemClick}
              indicatorColor="primary"
              textColor="secondary"
              variant="scrollable"
              scrollButtons="auto"
              aria-label="scrollable auto tabs example"
            >
              {categories.map((c, index) => (
                <Tab label={c} key={index} />
              ))}
            </Tabs>
          </AppBar>
        </div>
      </Hidden>

      <Hidden smDown>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
          >
          <Toolbar />
          <div className={classes.drawerContainer}>
            <List>
              {categories.map((text, index) => (
                <ListItem
                  button
                  key={text}
                  selected={selectedIndex === index}
                  onClick={(event) => handleListItemClick(event, index)}
                >
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
          </div>
        </Drawer>
      </Hidden>


      <div style={{ width: "100%" }}>
      <Grid container spacing={2} className={classes.container}>
           {productsByCategory.length > 0 ? (
            productsByCategory.map((product) => (
             <Grid key={product.id} item xs={6} md={4}>
               <Card 
               className={classes.cards} 
               onClick={() => navigate(`/products/${product.slug}`)}>
              <CardMedia
               className={classes.media}
               image={product.imageURL}
               title={product.name}
               />
              <CardContent 
              className={classes.cardContent}>
              <div style={{ width: "100%" }}>
                <div className={classes.row}>
                  <Typography
                  variant="h6"
                  component="h3"
                    >
                  {product.name}
                  </Typography>
               <Hidden xsDown>
                  <Typography
                    variant="h6"
                    component="h3"
                    align="right"
                  >
                   ${product.price}
                 </Typography>
               </Hidden>
              </div>
               <Typography
                 variant="button"
                 color="textSecondary"
                 component="p"
                   >
                  {product.brand}
                </Typography>
              {product.items_left > 0 ? (
                <div className={classes.row} style={{ alignItems: "center" }}>
              <Hidden xsDown>
                <Typography
                  variant="button"
                  color="textSecondary"
                  component="p"
                  className={classes.btnResponsiveText}
                >
                  Items left: <strong>{product.items_left}</strong>
                </Typography>
              </Hidden>
              <Hidden smUp>
                <Typography
                  variant="h4"
                  align="right"
                >
                  ${product.price}
                </Typography>
              </Hidden>
              <IconButton color="inherit" >
                <AddShoppingCartIcon />
              </IconButton>
            </div>
          ) : (
            <Typography variant="button" color="error" component="p">
              Out of Stock
            </Typography>
          )}
            </div>
            </CardContent>
         </Card>
          </Grid>
        ))
      ) : (
        <div style={{ width: "100%" }}>
          <Typography
            color="error"
            variant="body1"
            style={{ textAlign: "center", padding: "1rem" }}
          >
            No product available
          </Typography>
        </div>
      )}
        </Grid>
    </div>
      {/* <Outlet /> */}
    </div>
  );
};

export default ShopPage;




















