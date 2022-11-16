import React from 'react'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { FormControl, FormControlLabel, FormLabel, TextField } from '@mui/material'
import {Button} from '@mui/material'
import {Radio} from '@mui/material'
import { RadioGroup} from '@mui/material'

import { useState } from 'react'
import { useHistory } from 'react-router-dom'


export default function Create() {
  const [title,setTitle] = useState('');
  const [details,setDetails] = useState('');

  const [titleErr,setTitleErr] = useState(false);
  const [detailsErr,setDetailsErr] = useState(false);

  const [radio,setRadio] = useState('todos');

  const history = useHistory()
  

  const submitHandler = (e) => {
    e.preventDefault();
    setDetailsErr(false)
    setTitleErr(false)
    if(title===''){
      setTitleErr(true)
      }
      if(details===''){
        setDetailsErr(true)
      }

    if(title&&details){
      fetch('http://localhost:8000/notes',{
        method:'POST',
        headers:{'Content-type':'application/json'},
        body:JSON.stringify({title,details,radio})
      }).then(() => history.push('/'))
    }
  }

  return (
    <Container maxWidth='xl' >
      <Typography variant='h3' component='h1' align='left' color='textSecondary' gutterBottom >
        Create a page
      </Typography>

      <form onSubmit={submitHandler} >
        
      <TextField 
      variant='outlined' 
      label='Note Title' 
      color='primary' 
      fullWidth 
      sx={{marginBottom:2}}
      error={titleErr} 
      onChange={e=>setTitle(e.target.value)} />

      <TextField 
       variant='outlined' 
       label='Note Detail' 
       color='primary' 
       fullWidth 
       multiline rows='4' 
       sx={{marginBottom:2}}
       error={detailsErr}
       onChange={e=>setDetails(e.target.value)}  />

       <FormControl sx={{display:'block'}} >
       <FormLabel>Note Category</FormLabel>
       <RadioGroup value={radio} onChange={e=>{setRadio(e.target.value)}} >
        <FormControlLabel label='Todos' value='todos' control={<Radio/>} />
        <FormControlLabel label='Reminder' value='reminder' control={<Radio/>} />
        <FormControlLabel label='Work' value='work' control={<Radio/>} />
       </RadioGroup>
       </FormControl>

      <Button variant='contained' type='submit'  >
        Submit
      </Button>

      </form>

    </Container>
  )
}

