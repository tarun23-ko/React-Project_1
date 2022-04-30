import React from "react";
import { Grid } from "@material-ui/core";
import Product from "./Product/Product";
import useStyles from './styles'
const products = [
    {
        id: 1,
        name: "Mac Book",
        description: "Mac Book Apple laptops",
        price: "200000/-",
        img:"https://cdn.mos.cms.futurecdn.net/uWjEogFLUTBc8mSvagdiuP.jpg"

    },
    {
        id: 2,
        name: "Boot",
        description: "Boot Shoes",
        price: "600/-",
        img: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Ym9vdHxlbnwwfHwwfHw%3D&w=1000&q=80"
    },
]
const ProductUI=()=>{
    const classes = useStyles()


   return( 
   <main className={classes.content}>
           <div className={classes.toolbar} />
        <Grid spacing={4} container justify="center">
            {products.map((productData)=>{
               return( <Grid item key={productData.id} lg={3} md={4} sm={6} xs={12}>
                   <Product product={productData}></Product>
                </Grid>)
            })}
        </Grid>
    </main>)

}

export default ProductUI 