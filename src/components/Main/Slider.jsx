import { createContext, useContext, useEffect, useRef, useState } from 'react'
import './Slider.css'
import { useNavigate } from 'react-router-dom'

const ImagenContext = createContext()

export const Slider = () => {

    const [ imagenes , setImagenes ] = useState([])

    useEffect(()=>{

        let { VITE_API_URL } = import.meta.env || 'http://localhost:3000'
        
        let options = {
            method  : 'get'
        }

        fetch( `${VITE_API_URL}/imagenes` , options )
        .then( res => res.json() )
        .then( data => setImagenes(data) )

    },[])

    return(
        <ImagenContext.Provider value={{ imagenes }}>

            <div className="Main-div Home" id="Inicio">
                <SliderImg />
                <Form />
                <Points />
            </div>

        </ImagenContext.Provider>
    )
}

const SliderImg = () => {

    const { imagenes } = useContext(ImagenContext)

    return(
        <div className="Home-slider">
            {
                imagenes.map( imagen =>
                    <ImagenList 
                        key={ imagen._id }
                        { ...imagen } />                                 
                )
            }
        </div>
    )
}

const ImagenList = ( props ) => {

    const { statico , active , src , alt , loading } = props

    return(
        <img className={`Home-img ${statico} ${active}`} loading={loading} src={src} alt={alt} />   
    )
}

const Form = () => {

    const navigate      = useNavigate()
    const entradaInput  = useRef()
    const salidaInput   = useRef()
    const cantidadInput = useRef()
    const habInput      = useRef()

    const formSubmit = ( e ) => {
        e.preventDefault()

        const { value : entrada  } = entradaInput.current
        const { value : salida   } = salidaInput.current
        const { value : cantidad } = cantidadInput.current
        const { value : hab      } = habInput.current

        const reserva = { entrada, salida, cantidad , hab }

        let { VITE_API_URL } = import.meta.env || 'http://localhost:3000'
        
        let options = {
            method  : 'post',
            body    : JSON.stringify(reserva),
            headers : {
                "Content-type" : "application/json"
            }
        }

        fetch( `${VITE_API_URL}/reservas` , options )
        .then( res => res.json() )
        .then( data => navigate('/home/booking') )

        entradaInput.current.value  = ''
        salidaInput.current.value   = ''
    }

    return(
        <form onSubmit={formSubmit} className="Home-form" action="/send/" method="post">
            <h3 className="Home-h3">Selecione la fecha de su reserva</h3>
            <ul className="Home-reserva">
                <li className="Home-fecha">
                    <label className="Home-label">Llegada</label>
                    <input className="Home-input" id="llegada" type="date" min="2023-01-01" required ref={entradaInput} />
                </li>
                <li className="Home-fecha">
                    <label className="Home-label">Salida</label>
                    <input className="Home-input" id="salida" type="date" min="2023-01-01" required ref={salidaInput} />
                </li>
            </ul>
            <h3 className="Home-h3">Selecione la cantidad de huéspedes</h3>
            <select className="Home-select" name="select" ref={cantidadInput}>
                <option className="Home-option" value="1">1 Huésped</option>
                <option className="Home-option" value="2">2 Huéspedes</option>
                <option className="Home-option" value="3">3 Huéspedes</option>
                <option className="Home-option" value="4">4 Huéspedes</option>
            </select>
            <select className="Home-select" name="select" ref={habInput}>
                <option className="Home-option" value="1">Habitación 1</option>
                <option className="Home-option" value="2">Habitación 2</option>
                <option className="Home-option" value="3">Alojamiento completo</option>
            </select>
            <input type="submit" className="Home-send" value="Reservar" />
        </form>
    )
}

const Points = () => {

    const { imagenes } = useContext(ImagenContext)

    return(
        <ul className="Home-ul">
            {
                imagenes.map( imagen =>
                    <PointsLi
                        key={ imagen._id }
                        active = { imagen.active } />                    
                )
            }

            
        </ul>
    )
}

const PointsLi = ({ active }) => {
    return(
        <li className={`Home-li ${active}`}>
            <button className="Home-button" title="Point">
                <svg className="Home-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                    <circle cx="8" cy="8" r="8" />
                </svg>
            </button>
        </li>
    )
}

