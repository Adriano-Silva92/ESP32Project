import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from'./pages/home'
import Data from'./pages/mobiledata'
import Login from'./pages/login'
import Admin from'./pages/admin'
import GlobalStyle from './components/globalstyles'
import Menu from './components/menu'


function App(){
    return(
        <Router>
            <GlobalStyle />
            <Menu />
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/medidas" element={<Data />}/>
                <Route path="/admin" element={<Admin />}/>
                <Route path="/login" element={<Login />}/>
            </Routes>

        </Router>
    )
}
export default App