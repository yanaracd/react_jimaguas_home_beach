import { useRef, useState } from 'react'
import './Login.css'
import { NavLink, useNavigate } from 'react-router-dom'

export const Login = () => {
    return(
        <>
            <div className="Login">
                <div className="Login-div">
                    <LoginForm />
                    <LoginImage />
                </div>
            </div>
        </>
    )
}

const LoginForm = () => {

    const [ message , setMessage ] = useState(false)
    const navigate  = useNavigate()
    const userInput = useRef()
    const passInput = useRef()

    const formSubmit = ( e ) => {
        e.preventDefault()

        const { value : user } = userInput.current
        const { value : pass } = passInput.current

        const login = { user , pass }

        let { VITE_API_URL } = import.meta.env || 'http://localhost:3000/'
        
        let options = {
            method  : 'post',
            body    : JSON.stringify(login),
            headers : {
                "Content-type" : "application/json"
            }
        }

        fetch( VITE_API_URL , options )
        .then( res => res.json() )
        .then( data => {
            const { login , mensaje } = data

            if( login ){
                localStorage.setItem('acceso' , JSON.stringify(data))
                navigate('/home')
            }else{
                setMessage(true)
            }
        })

        userInput.current.value = ''
        passInput.current.value = ''
    }
    
    return(
        <div className="Login-left">
            <img src="./assets/logo_web.png" alt="Logo Jimaguas Home Beach" className="Login-logo" />
            <form className='Login-form' onSubmit={formSubmit}>
                <input className='Login-input'  type="text"     placeholder='Usuario'    ref={userInput} />
                <input className='Login-input'  type="password" placeholder='Contraseña' ref={passInput} />                        
                <input className='Login-submit' type="submit"   value='Iniciar sesión' />                        
            </form>
            {
                message && <span className="Login-msg">Usuario o contraseña incorrectos</span>
            }
            <div className="Login-link">
                <span className="Login-span">¿No tienes una cuenta?</span>
                <a href="" className="Login-navlink">Regístrate</a>
            </div>
        </div>
    )
}

const LoginImage = () => {
    return(
        <div className="Login-right">
            <img src="./assets/auto_playa.jpeg" alt="Coche clásico en la playa" className="Login-img" />
        </div>
    )
}