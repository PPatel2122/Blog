import React from 'react'
import Home from './Home'
import Bollywood from './Bollywood'
import Technology from './Technology'
import Hollywood from './Hollywood'
import Fitness from './Fitness'
import Food from './Food'
import Details from './Details'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

const Routefile = () => {
  return (
    <>  

    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/bollywood' element={<Bollywood/>}></Route>
        <Route path='/technology' element={<Technology/>}></Route>
        <Route path='/hollywood' element={<Hollywood/>}></Route>
        <Route path='/fitness' element={<Fitness/>}></Route>
        <Route path='/food' element={<Food/>}></Route>
        <Route path='/detail/:id' element={<Details/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default Routefile