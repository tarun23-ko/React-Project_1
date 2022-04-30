import React from 'react'
import { AppBar,Toolbar,Badge,IconButton,Menu,MenuItem,Typography} from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'
import logo from '../../assests/brandlogo.png'
import useStyles from './styles'
const Navbar = () => {
    const classes = useStyles()
  return (
    <>
    <AppBar position='fixed' className={classes.appBar} color='inherit'>

        <Toolbar>
            <Typography varient="h6" className={classes.title} color='inherit'>
                      <img src={logo} alt="commerceJs" height='25px' className={classes.image} />
                Commerce Js
            </Typography>
            <div className={classes.grow}/>
            <div className={classes.button}>
                <IconButton aria-label="Show-Cart-Items" color='inherit'>
                    <Badge BadgeContent={2} color='secondary'>
                        <ShoppingCart/>
                    </Badge>
                </IconButton>

            </div>
        </Toolbar>
    </AppBar>
    </>
  )
}

export default Navbar