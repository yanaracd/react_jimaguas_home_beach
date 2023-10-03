import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [ usuarios , setUsuarios ] = useState([])

  let { VITE_API_URL } = import.meta.env

  useEffect(()=>{

    let options = {
      method : 'get'
    }

    fetch(`${VITE_API_URL}/usuarios` , options )
    .then( res => res.json() )
    .then( data => setUsuarios( data ))

  },[])

  return (
    <>
      <h1>Usuarios</h1>
      <ul>
        { usuarios.length === 0 && <li>No hay usuarios</li>}
        {
          usuarios.length !== 0 && usuarios.map( usuario =>
            <li key={ usuario._id }>{ usuario.user }</li>
          )
        }
      </ul>
    </>
  )
}

export default App
