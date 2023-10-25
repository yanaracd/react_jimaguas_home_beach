import { useContext, useEffect, useState } from 'react'
import './Footer.css'
import { NavContext } from '../../pages/Home'
import { NavLink } from 'react-router-dom'

export const Footer = () => {

    return (
        <footer className="Footer">
            <div className="Footer-wrapper">
                <LeftFooter />
                <RightFooter />
            </div>
        </footer>
    )
}

const LeftFooter = () => {

    const { enlaces } = useContext(NavContext)

    return (
        <div className="Footer-left">
            <ul className="Footer-ul">
                {
                    enlaces.map(enlace =>
                        <LiFooter
                            key={enlace._id}
                            {...enlace} />
                    )
                }
            </ul>
        </div>
    )
}

const LiFooter = ( props ) => {

    const { href, title, nombre } = props

    return (
        <li className="Footer-li">
            {
                nombre === 'Reservas'
                    ? <NavLink className="Footer-link" to='booking'>{nombre}</NavLink>
                    : <a className="Footer-link" href={href} title={title}>{nombre}</a>
            }
        </li>
    )
}

const RightFooter = () => {

    const [rrss, setRrss] = useState([])

    useEffect(() => {

        let { VITE_API_URL } = import.meta.env || 'http://localhost:3000'

        let options = {
            method: 'get'
        }

        fetch(`${VITE_API_URL}/rrss`, options)
            .then(res => res.json())
            .then(data => setRrss(data))

    }, [])

    return (
        <div className="Footer-right">
            <FormFooter />
            <div className="Footer-rrss">
                <ul className="Footer-ul Footer-ul--rrss">
                    {
                        rrss.map(eachRrss =>
                            <RrssFooter
                                key={eachRrss._id}
                                {...eachRrss} />
                        )
                    }
                </ul>
            </div>
        </div>
    )
}

const FormFooter = () => {

    return (
        <form action="/message/" method="post" className="Footer-form">
            <input className="Footer-input" type="text" name="contacto" placeholder="Contáctenos" required />
            <button className="Footer-button" title="Enviar">Enviar</button>
        </form>
    )
}

const RrssFooter = (props) => {

    const { href, title, d, img } = props

    return (
        <li className="Footer-li Footer-li--rrss">
            <a href={href} title={title}
                className="Footer-a" target="_blank" rel="noreferrer">
                {
                    img.src === ''
                        ? <svg className="Footer-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                            <path d={d} />
                          </svg>
                        : <img loading="lazy" className="Footer-svg" src={img.src} alt={img.alt} />
                }
            </a>
        </li>
    )
}