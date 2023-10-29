import { createContext, useContext, useEffect, useState } from 'react'
import './Slider.css'
import { Form } from './FormBooking'

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

//Funcionalidad para próximas versiones de la web
// const Points = () => {

//     const { imagenes } = useContext(ImagenContext)

//     return(
//         <ul className="Home-ul">
//             {
//                 imagenes.map( imagen =>
//                     <PointsLi
//                         key={ imagen._id }
//                         active = { imagen.active } />                    
//                 )
//             }

            
//         </ul>
//     )
// }

// const PointsLi = ({ active }) => {
//     return(
//         <li className={`Home-li ${active}`}>
//             <button className="Home-button" title="Point">
//                 <svg className="Home-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
//                     <circle cx="8" cy="8" r="8" />
//                 </svg>
//             </button>
//         </li>
//     )
// }

