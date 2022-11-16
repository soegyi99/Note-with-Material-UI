import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { createTheme,ThemeProvider } from '@mui/material/styles'

import Create from './pages/Create';
import Note from './pages/Note';
import Layout from './pages/Layout';


const theme = createTheme({
  palette:{
    primary:{
      main:'#357a38'
    }
  }
})

function App() {
  return (
    <ThemeProvider theme={theme} >
     
    <Router>
      <Layout>
      <Switch>
        <Route exact path="/create">
          <Create />
        </Route>
          <Route path="/">
         <Note />
        </Route>
      </Switch>
      </Layout>
    </Router>
    </ThemeProvider>
  );
}

export default App;
