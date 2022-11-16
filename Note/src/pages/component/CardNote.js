import React from 'react'

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import { Avatar, IconButton, Typography } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { blue, green, yellow } from '@mui/material/colors';


export default function CardNote({note,deleteNote}) {

    //Avatar color
    const avatarColor = (note) =>{
        
    if(note.radio==='todos'){
      
        return {bgcolor: yellow[500]}
    }

    if(note.radio==='work'){
        
        return {bgcolor:blue[500]}
    }

    if(note.radio==='reminder'){
        return {bgcolor:green[500]}
    }

    }

  return (
   <Card elevation={2} >
    <CardHeader 
    avatar={<Avatar sx={avatarColor(note)} >{note.title[0].toUpperCase()}</Avatar>}
    action={
    <IconButton onClick={()=>deleteNote(note.id)} >
        <DeleteOutlineIcon /> 
    </IconButton>} 
    title={note.title}
    subheader={note.radio}
    
    />

    <CardContent>
        <Typography variant='body2' >
            {note.details}
        </Typography>
    </CardContent>
    
   </Card>
  )
}
