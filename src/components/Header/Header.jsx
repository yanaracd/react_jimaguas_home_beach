import { createContext, useContext, useState } from 'react'
import './Header.css'
import { useEffect } from 'react'
import { AppContext } from '../../App'

const MenuContext = createContext()

export const Header = () => {

    const [menu, setMenu] = useState(false)

    return (
        <MenuContext.Provider value={{ menu, setMenu }}>

            <header className="Header">
                <div className="Header-wrapper">
                    <HeaderLogo />
                    <HeaderNav />
                    <HeaderButton />
                </div>
            </header>

        </MenuContext.Provider>
    )
}

const HeaderLogo = () => {

    let { VITE_WEB_URL } = import.meta.env || 'http://localhost:5173'

    return (
        <h1 className="Header-h1">
            <a className="Header-a" href={`${VITE_WEB_URL}/home#Inicio`} title="Inicio">
            {/* <a className="Header-a" href={`http://localhost:5173/home#Inicio`} title="Inicio"> */}
                <img className="Header-img" src="assets/logo_web.png" alt="Logo Jimaguas Home Beach" />
            </a>
        </h1>
    )
}

const HeaderNav = () => {

    const { enlaces, setEnlaces } = useContext(AppContext)
    const { menu } = useContext(MenuContext)

    useEffect(() => {

        let { VITE_API_URL } = import.meta.env || 'http://localhost:3000'

        let options = {
            method: 'get'
        }

        fetch(`${VITE_API_URL}/enlaces`, options)
            .then(res => res.json())
            .then(data => setEnlaces(data))

    }, [])

    return (
        <nav className={`Header-nav ${menu ? 'isActive' : ''}`}>
            <ul className="Header-ul">
                {
                    enlaces.map(enlace =>
                        <HeaderNavLi
                            key={enlace._id}
                            {...enlace} />
                    )
                }
            </ul>
        </nav>
    )
}

const HeaderNavLi = (props) => {

    const { href, title, nombre } = props
    let { VITE_WEB_URL } = import.meta.env || 'http://localhost:5173'

    return (
        <li className="Header-li">
            <a className="Header-link" href={`${VITE_WEB_URL}/home${href}`} title={title}>{nombre}</a>
            {/* <a className="Header-link" href={`http://localhost:5173/home${href}`} title={title}>{nombre}</a> */}
        </li>
    )
}

//Funcionalidad para próximas versiones de la web
// const HeaderUser = () => {
//     return (
//         <div className="Header-user">
//             <svg className='Header-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
//                 <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
//                 <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
//             </svg>
//             <h2 className="Header-h2">UserName</h2>
//         </div>
//     )
// }

const HeaderButton = () => {

    const { menu, setMenu } = useContext(MenuContext)

    const toggleMenu = () => {
        setMenu(!menu)
    }

    return (
        <button className="Header-button" title="Menu" onPointerDown={toggleMenu}>
            <svg className="Header-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                <path d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
            </svg>
        </button>
    )
}