import React, { useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from '@material-ui/core/Grid'
import GlobalContext from "./../GlobalContext/GlobalContext";

import { AppBar, Tab, Tabs } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import { useNavigate } from "react-router-dom";

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
      
    </div>
  );
};

export default ShopPage;




















