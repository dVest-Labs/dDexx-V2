import React, {useState} from 'react'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';
import { Drawer, Divider, IconButton, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';

const PersistentDrawer = (props) => {
  
    return (
        <div>
           <IconButton edge="start"  color="inherit" aria-label="menu" onClick={props.toggleDrawerStatus}>
             {!props.isDrawerOpened ? <MenuIcon fontSize="large" style={ { verticalAlign: "bottom"}} /> : null }
                </IconButton>
          <Divider/>   
         <Drawer
          variant="temporary"
        open={props.isDrawerOpened}
          onClose={props.closeDrawer}
        >
            <List>
            <ListItem button key='About Us'>
                <ListItemIcon><AccountCircleIcon/> </ListItemIcon>
                <ListItemText primary='About Us' />
              </ListItem>

              <ListItem button key='About Us'>
                <ListItemIcon><AccountCircleIcon/> </ListItemIcon>
                <ListItemText primary='About Us' />
              </ListItem>
            </List>
        </Drawer>      
        </div>
    )
}

export default PersistentDrawer
