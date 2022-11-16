import React, { useEffect, useState } from 'react'
import { Grid } from '@mui/material'
import { Container } from '@mui/system'
import Masonry from 'react-masonry-css'

import CardNote from './component/CardNote'



export default function Note() {

  const [notes,setNotes] = useState([])

  useEffect(()=>{
    fetch('http://localhost:8000/notes')
    .then(res => res.json())
    .then(data => {
      setNotes(data)
     
    })
  },[] )

  const deleteNote = async (id) => {
    await fetch('http://localhost:8000/notes/'+id,{
      method:'DELETE'
    })

    const newNotes = notes.filter(note => note.id != id)
    setNotes(newNotes)

  }

  const breakpoint = {
    default: 3,
    1100: 2,
    600:1
  }

  return (
    <Container maxWidth='xl' >
      <Masonry
         breakpointCols={breakpoint}
         className="my-masonry-grid"
         columnClassName="my-masonry-grid_column">
        {
         notes.map(note =>{
         
          return(
            <Grid item xs={3} sm={6} md={4} key={note.id} >
           <CardNote note={note} deleteNote={deleteNote} />
          </Grid>
          )
        })
      }
  
</Masonry>
      
      



     {/* {notes.map(note =>{
      return(
        <p key={note.id} >{note.title} </p>
      )
     })} */}
    </Container>
  )
}
