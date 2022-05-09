import React from "react";
import { Grid } from "@material-ui/core";
import Product from "./Product/Product";
import useStyles from './styles'

const ProductUI=({products,onAddToCart})=>{
    const classes = useStyles()
    
   return( 
   <main className={classes.content}>
           <div className={classes.toolbar} />
        <Grid spacing={4} container justify="center">
            {products.map((productData)=>{
               return( <Grid item key={productData.id} lg={3} md={4} sm={6} xs={12}>
                   <Product product={productData} onAddToCart={onAddToCart}></Product>
                </Grid>)
            })}
        </Grid>
    </main>)

}

export default ProductUI 