import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'

import './../css/default.css'

const App = () => {
    return (
        <Routes>
            <Route exact path='/' element={<Navbar />}>
                <Route path='home' element={}></Route>
            </Route>
        </Routes>
    )
}

export default App