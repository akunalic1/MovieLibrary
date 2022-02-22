import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'

import './../css/default.css'

const App = () => {
    return (
        <Routes>
            <Route exact path='/' element={<Navbar />}>
                <Route></Route>
            </Route>
        </Routes>
    )
}

export default App