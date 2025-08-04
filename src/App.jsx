import React from 'react'
import Sidebar from './Components/Sidebar'
import RightSide from './Components/RightSide'
import { Routes, Route } from 'react-router-dom';
import ThermoPackReport from './Components/ThermoPackReport';

const App = () => {
  return (
    
    <div className='app'>
      <Sidebar />
      <RightSide />
      {/* <Routes>
        <Route path="/thermopack-report" element={<ThermoPackReport />} />
      </Routes> */}
    </div>
  )
}

export default App