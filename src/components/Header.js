import React , {useState} from 'react'
import {Link} from 'react-router-dom'
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { NavLink } from "react-router-dom";
import Typography from '@material-ui/core/Typography'
import { useNavigate } from "react-router-dom";
import logo from './../assets/logo.png'
const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "space-between",
  },
  links: {
    
      padding: theme.spacing(3),
      border: `0px solid transparent`,
      color:'white',

      "&:hover": {
        cursor: "pointer",
        color:'black'
      },
  },
  menuButton: {
    color: theme.palette.warning.light,
  },
 
}));


const Header = () =>{

  const classes = useStyles();
  const navigate = useNavigate();

  const [drawerOpen, setDrawerOpen] = useState(false);

  const openDrawer = () => {
    setDrawerOpen(true);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
  };

   return(

    <AppBar position="sticky" >
      <Toolbar  className={classes.container}>
        <Link to="/">
           <img src={logo} alt="logo" width="50px" />
         </Link>


      <Hidden xsDown>
        <div >
          <NavLink
             to="/"
             activeClassName={classes.active}
             
             className={classes.links}
             >
           <Typography variant="button">
                 Home
          </Typography>
           </NavLink>
          
          <NavLink
            to="men"
            activeClassName={classes.active}
            className={classes.links}
          >
          <Typography variant="button" >
             Men
         </Typography>
         </NavLink>
          
          <NavLink
             to="women"
             activeClassName={classes.active}
             className={classes.links}
          >  
          <Typography variant="button" >
             Women
          </Typography>
        </NavLink>
          
          <NavLink
             to="kids"
             activeClassName={classes.active}
             className={classes.links}
          >
           <Typography variant="button">
            Kids
          </Typography>
          </NavLink>
        </div>


      </Hidden>

      <div >
        <ShoppingCartIcon />

        <Hidden smUp>
          <IconButton
            edge="end"
            aria-label="menu"
            onClick={() => openDrawer()}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>

        <Drawer
           variant="temporary"
           anchor="left"
           open={drawerOpen}
           onClick={() => closeDrawer()}
           >
         <List>
           <ListItem button onClick={() => navigate("/")}>
            <ListItemText primary="Home" />
           </ListItem>
               <Divider />
           <ListItem button onClick={() => navigate("kids")}>
            <ListItemText primary="Kids" />
           </ListItem>
           <ListItem button onClick={() => navigate("men")}>
             <ListItemText primary="Men" />
           </ListItem>
           <ListItem button onClick={() => navigate("women")}>
             <ListItemText primary="Women" />
           </ListItem>
         </List>
        </Drawer>
      </div>
    </Toolbar>
  </AppBar>

   



) 
}

export default Header