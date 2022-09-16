import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'
import Quotes from './pages/Quotes'
const App =()=> {
 return(
  
    <Router>
    <Routes>
    <Route path="/register" element= {<Register />}/>
    <Route path="/login" element= {<Login />}/>
    <Route path="/quotes" element= {<Quotes />}/>
    </Routes>
    </Router>
    
  
 )
   
}
 
export default App;