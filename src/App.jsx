import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { LoginPage } from './pages/LoginPage'
import { Home } from './pages/Home'

function App() {

  return (
    <BrowserRouter>
      <>

        <Routes>
          <Route path='/'       element={<LoginPage />} />
          <Route path='/:param' element={<LoginPage />} />
          <Route path='/home'   element={<Home      />} />
        </Routes> 

      </> 
    </BrowserRouter>    
  )
}

export default App
