import React, {Component, Fragment } from 'react'
import classes from './shopNav.css'
import { Shop , ShoppingCart } from '@material-ui/icons'
import { List ,ListItem, ListItemIcon, ListItemText, Select , ListItemAvatar, MenuItem } from "@material-ui/core";
import Logo from '../../assets/archive.svg'


export default class ShopNav extends Component<any> {

    render () {
        const list = [
            {
                icon: Shop,
                tittle: "store"
            },
            {
                icon: ShoppingCart,
                tittle: "Cart"
            },
            {
                component: (
            <Select>
                <MenuItem selected value={10}>RWF</MenuItem>
                <MenuItem value={20}>EURO</MenuItem>
                <MenuItem value={30}>USD</MenuItem>
            </Select>
                )
            },
            {
                icon: ShoppingCart,
                tittle: "Cart"
            }
        ]
        return (
            <Fragment>
                <nav className={classes.shop_navigation}>
                    <section className={classes.logo_holder}>
                    <List>
                       <ListItem>
                       <ListItemAvatar>
                            <img alt="logo" src={Logo}/>
                        </ListItemAvatar>
                        <ListItemText primary={this.props.text}/>
                       </ListItem>
                    </List>    
                    </section>
                    <section className={classes.navigation}>
                        <List className={classes.ul}>
                            {list.map((elem: any ) => {
                                return elem.component ?  (
                                 <ListItem className={classes.li}> 
                                    {elem.component}
                                 </ListItem>   
                                ) : (<ListItem className={classes.li}> 
                                        <ListItemIcon> <elem.icon/>  </ListItemIcon>
                                        <ListItemText primary={elem.tittle } />
                                    </ListItem>)
                            })}
                        </List>
                    </section>
                </nav>
            </Fragment>
        )
    }
}