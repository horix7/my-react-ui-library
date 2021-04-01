import React, {Component, Fragment } from 'react'
import classes from './shopNav.css'
import { Person, Search, LocalGroceryStore } from '@material-ui/icons'
import { List ,ListItem, ListItemIcon, ListItemText, Select , ListItemAvatar, MenuItem } from "@material-ui/core";
import Logo from '../../assets/archive.svg'



export default class ShopNav extends Component<any> {

    render () {
        const list = [
           
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
                component: (
                    <div className={classes.nav_icons}>
                        <Person className={classes.icon_holder}/>
                        <Search className={classes.icon_holder} />
                        <LocalGroceryStore className={classes.icon_holder} />
                    </div>
                )
            },
            {
                tittle: "COLLECTIONS"
            },
            {
                tittle: "SHOP"
            },
            {
                tittle: "HOME"
            },

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
                                return  (<ListItem className={classes.li}> 
                                        {elem.icon ? <ListItemIcon>  <elem.icon/> </ListItemIcon> : null}
                                        {elem.component ? elem.component : null}
                                        {elem.tittle ? <ListItemText primary={elem.tittle } /> : null}
                                    </ListItem>)
                            })}
                        </List>
                    </section>
                </nav>
            </Fragment>
        )
    }
}