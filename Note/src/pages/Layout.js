import React from 'react'
import {Link, useLocation} from 'react-router-dom'

import { Drawer } from '@mui/material'
import {Box} from '@mui/material';
import {List} from '@mui/material';
import {ListItem,ListItemText, ListItemIcon} from '@mui/material';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import NotesIcon from '@mui/icons-material/Notes';

export default function Layout(props) {

  //for drawer list item active
  const location = useLocation();
  const path = location.pathname;

  //drawer layout
    const drawerWidth = 240;
    const style = {
       layoutStyle:{
        backgroundColor: '#f5f5f5',
        height: '100vh'
       },
       containerStyle:{
        display:'flex'
       }
        
    }
  return (
    <div style={style.containerStyle} >

        <Drawer 
        sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
            },
          }}
        variant='permanent'
        anchor='left'
        
        >

          <List>
            <Link style={{textDecoration:'none',color:'#357a38'}} to='/create' >
            <ListItem sx={path=='/create' ? {background:'#f5f5f5'}:null} >
              <ListItemIcon >
              <NoteAddIcon color='primary' />
              </ListItemIcon>
              <ListItemText  primary='Create Note' />
            </ListItem>
            </Link>

            <Link style={{textDecoration:'none',color:'#357a38'}} to='/' >
            <ListItem sx={path=='/' ? {background:'#f5f5f5'}:null}>
              <ListItemIcon >
              <NotesIcon color='primary' />
              </ListItemIcon>
              <ListItemText primary='My Notes' />
            </ListItem>
            </Link>

          </List>
       
        </Drawer>

        <Box
            component="main"
            sx={{ flexGrow: 1, p: 3 }}
            >
      <div style={style.layoutStyle} >
        {props.children}
      </div>
      </Box>
    </div>
  )
}



