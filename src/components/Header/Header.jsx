import { useState } from 'react'
import './Header.css'
import { useEffect } from 'react'

export const Header = () => {

    return(
        <header className="Header">
            <div className="Header-wrapper">
                <HeaderLogo   />
                <HeaderNav    />
                <HeaderUser   />
                <HeaderButton />
            </div>
        </header>
    )
}

const HeaderLogo = () => {
    return(
        <h1 className="Header-h1">
            <a className="Header-a" href="#Inicio" title="Inicio">
                <img className="Header-img" src="assets/logo_web.png" alt="Logo Jimaguas Home Beach" />
            </a>
        </h1>
    )
}

const HeaderNav = () => {

    const [ enlaces , setEnlaces ] = useState([])

    useEffect(()=>{

        let { VITE_API_URL } = import.meta.env || 'http://localhost:3000'
        
        let options = {
            method  : 'get'
        }

        fetch( `${VITE_API_URL}/enlaces` , options )
        .then( res => res.json() )
        .then( data => setEnlaces(data) )

    },[])

    return(
        <nav className="Header-nav">
            <ul className="Header-ul">
                {
                    enlaces.map( enlace =>
                        <HeaderNavLi
                            key={enlace._id}
                            { ...enlace } />
                    )
                }
            </ul>
        </nav>
    )
}

const HeaderNavLi = ( props ) => {

    const { href , title , nombre } = props

    return(
        <li className="Header-li">
            <a className="Header-link" href={href} title={title}>{nombre}</a>
        </li>
    )
}

const HeaderUser = () => {
    return(
        <div className="Header-user">
            <svg className='Header-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
            </svg>
            <h2 className="Header-h2">UserName</h2>
        </div>
    )
}

const HeaderButton = () => {
    return(
        <button className="Header-button" title="Menu">
            <svg className="Header-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                <path d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
            </svg>
        </button>
    )
}