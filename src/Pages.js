import React from 'react'
import Homepage from './Homepage'
import RecipePage from './RecipePage'
import {Route, Routes} from 'react-router-dom'


function Pages() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Homepage/>}/>
            <Route path='/recipe/:name' element={<RecipePage />}/>
        </Routes>
    </div>
  )
}

export default Pages