import { NavLink } from 'react-router-dom'
import '../pages/LoginPage'
import { useRef, useState } from 'react'

export const Register = () => {

    const [ message , setMessage ] = useState()
    const nameInput     = useRef()
    const lastNameInput = useRef()
    const userInput     = useRef()
    const passInput     = useRef()

    const formSubmit = ( e ) => {
        e.preventDefault()

        const { value : name     } = nameInput.current
        const { value : lastName } = lastNameInput.current
        const { value : user     } = userInput.current
        const { value : pass     } = passInput.current

        const usuario = { name , lastName , user , pass }
        
        let { VITE_API_URL } = import.meta.env || 'http://localhost:3000'
        
        let options = {
            method  : 'post',
            body    : JSON.stringify(usuario),
            headers : {
                "Content-type" : "application/json"
            }
        }

        fetch( `${VITE_API_URL}/usuarios` , options )
        .then( res => res.json() )
        .then( data => setMessage(data) )

        nameInput.current.value = ''
        lastNameInput.current.value = ''
        userInput.current.value = ''
        passInput.current.value = ''
    }

    return(
        <div className="Login-left">
            <img src="./assets/logo_web.png" alt="Logo Jimaguas Home Beach" className="Login-logo" />
            <form className='Login-form' onSubmit={formSubmit} >
                <input className='Login-input'  type="text"     placeholder='Nombre'     ref={nameInput}     required />
                <input className='Login-input'  type="text"     placeholder='Apellidos'  ref={lastNameInput} required />
                <input className='Login-input'  type="text"     placeholder='Usuario'    ref={userInput}     required />
                <input className='Login-input'  type="password" placeholder='Contraseña' ref={passInput}     required />                        
                <input className='Login-submit' type="submit"   value='Registrarse'      />                        
            </form>
            {
                message !== undefined && message === `El usuario ya existe`
                    ? <span className="Login-msg">{message}</span>
                    : <span className="Login-msj">{message}</span> 
            }
            <div className="Login-link">
                <span className="Login-span">¿Tienes una cuenta?</span>
                <NavLink className="Login-navlink" to='/'>Iniciar sesión</NavLink>
            </div>
        </div>
    )
}