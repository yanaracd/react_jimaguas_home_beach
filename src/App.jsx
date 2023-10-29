import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import { LoginPage } from './pages/LoginPage'
import { Home } from './pages/Home'
import { Booking } from './pages/Booking'
import { createContext, useState } from 'react'

export const AppContext = createContext() 

function App() {

  const [enlaces, setEnlaces] = useState([])

  return (
    <BrowserRouter>
      <AppContext.Provider value={{ enlaces, setEnlaces }}>

        <Routes>
          <Route path='/'             element={<LoginPage />} />
          <Route path='/:param'       element={<LoginPage />} />
          <Route path='/home'         element={<Home      />} />
          <Route path='/home/booking' element={<Booking   />} />
          <Route path='*'             element={<Navigate to='/' />} />
        </Routes> 

      </AppContext.Provider> 
    </BrowserRouter>    
  )
}

export default App
