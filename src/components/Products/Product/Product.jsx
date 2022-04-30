import React from 'react'
import {Card,CardMedia,CardContent,CardActions,Typography,IconButton} from '@material-ui/core'
import { AddShoppingCart } from '@material-ui/icons'
import useStyles from './styles'
const Product = (props) => {

  const classes=useStyles()
  return (
    <Card className='classes.root'>
        <CardMedia className={classes.media}  image={props.product.img}/>
        <CardContent>
            <div className={classes.cardContent}>
                <Typography variant='h5' gutterBottom>
                    {props.product.name}
                </Typography>
                  <Typography variant='h5' >
            {props.product.price}
                  </Typography>

            </div>
        <Typography variant='body2' color='textSecondary'>
          {props.product.description}
        </Typography>

        </CardContent>
      <CardActions disableSpacing className={classes.CardActions}>
        <IconButton aria-label='Add to Cart'>
          <AddShoppingCart/>
        </IconButton>
      </CardActions>

    </Card>
  )
}

export default Product