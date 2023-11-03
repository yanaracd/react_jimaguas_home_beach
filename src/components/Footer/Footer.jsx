import { useContext, useEffect, useRef, useState } from 'react'
import './Footer.css'
import { NavLink, useNavigate } from 'react-router-dom'
import { AppContext } from '../../App'

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

    const { enlaces } = useContext(AppContext)

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

const LiFooter = (props) => {

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

    const formInput = useRef()
    const navigate = useNavigate()
    const [mensaje, setMensaje] = useState()

    const sendForm = (e) => {
        e.preventDefault()

        const { value: texto } = formInput.current

        const message = { texto }

        if (message.texto !== '') {

            let { VITE_API_URL } = import.meta.env || 'http://localhost:3000'

            let options = {
                method: 'post',
                body: JSON.stringify(message),
                headers: {
                    "Content-type": "application/json"
                }
            }

            fetch(`${VITE_API_URL}/message`, options)
                .then(res => res.json())
                .then(data => {
                    setMensaje(data)
                    navigate('/home')
                })

            formInput.current.value = ''

        }
    }

    return (
        <>
            <form action="/message/" method="post" className="Footer-form">
                <input className="Footer-input" type="text" name="contacto" placeholder="Contáctenos" ref={formInput} required />
                <button onPointerDown={sendForm} className="Footer-button" title="Enviar">Enviar</button>
            </form>
            <div>
                {
                    mensaje && <span className='Footer-msj'>{mensaje}</span>
                }
            </div>
        </>
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