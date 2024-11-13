import React from 'react'
import { DataProvider } from './DataContext'
import Routefile from './Routefile'




function App() {
 

  return (
    <>
    <DataProvider>
    <Routefile/> 
    
   </DataProvider>
    
    </>
  )
}

export default App
