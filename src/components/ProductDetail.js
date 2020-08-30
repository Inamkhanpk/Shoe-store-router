import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import GlobalContext from "./../GlobalContext/GlobalContext";
import { Grid, Container, Typography} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";



const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(2),
  },
  image: {
    width: "100%",
    height: "auto",
  },
  button: {
    marginTop: theme.spacing(5),
  },
  name: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.6rem",
    },
  },
}));

const ProductDetailPage = () => {
  const classes = useStyles();
  const { slug } = useParams();
  const { products} = useContext(GlobalContext);
  

  const product = products.find((p) => p.slug === slug);

  if (!product) return <p>Product not found</p>;

  

  return (
    <Container className={classes.container}>
      <Grid container spacing={3}>


        <Grid item xs={12} md={6}>
          <img
            className={classes.image}
            src={product.imageURL}
            alt={product.name}
          />
        </Grid>


        <Grid item xs={12} md={6} >
          <Grid container direction="column">
            <Typography variant="h4" className={classes.name}>
              {product.name}
            </Typography>
            <Typography variant="h6" color="textSecondary" gutterBottom>
              {product.brand}
            </Typography>
          </Grid>

          <Grid
            item
            container
            //justify="center"
            spacing={1}
            style={{ marginTop: 20 }}
          >
            <Grid item xs={6}>
              <Typography variant="button">Price</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="button"> ${product.price}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="button">Items left</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="button">{product.items_left}</Typography>
            </Grid>
          </Grid>
         
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductDetailPage;