import { useContext, useEffect, useState } from 'react'
import './Accordion.css'
import { ActiveContext } from '../Main/Main'

export const Accordion = () => {

    const { accordion } = useContext(ActiveContext)

    return(
        <div className={`Main-div Acordeon ${ accordion ? 'isActive' : '' }`}>
            <div className="Acordeon-wrapper">
                <DescriptionAccordion />
                <div className="Acordeon-div">
                    <ImageZoomAccordion />
                    <div className="Acordeon-slider">
                        <GridAccordion />
                        <GridDisabledAccordion />
                        <ButtonAccordionNext />
                        <ButtonAccordionPrev />                        
                    </div>
                </div>
            </div>
        </div>
    )
}

const DescriptionAccordion = () => {
    return(
        <>
            <h3 className="Acordeon-h3">Descripción de la propiedad</h3>
            <p className="Acordeon-p">Jimaguas Home Beach se encuentra situada en la Península de Varadero, en uno de
                los barrios más tranquilos y céntricos de la ciudad. Muy cerca de bares, restaurantes, tiendas
                artesanales, centros comerciales, farmacia y hospitales. Jimaguas Home Beach queda a tan solo unos
                300 metros de la hermosa Playa de Varadero y justo en frente del reconocido Parque Josone. El
                boulevard de Varadero, el bar The Beatles, el parque de diversión Todo en Uno, la Casa del Ron, la
                Casa del Habano y la Calle 62, son algunos de los lugares más visitados en Varadero y se encuentran
                en un radio de 500 metros junto a Jimaguas Home Beach. La mejor opción si desea visitar la hermosa
                Playa de Varadero!</p>
            <p className="Acordeon-p">Jimaguas Home Beach cuenta con una amplia terraza para el disfrute del sol y del
                delicioso desayuno preparado por las anfitrionas. Además, cuenta con una ducha de playa, para
                enjuagarse una vez regresen los huéspedes de la playa. El hall es un espacio más reservado, en el
                cuál podrán disfrutar de la Wifi que ofrece el alojamiento. Las habitaciones están equipadas
                totalmente, para satisfacer las necesidades del cliente, cada una con su baño privado.</p>
        </>
    )
}

const ImageZoomAccordion = () => {
    return(
        <img loading="lazy" src="assets/propiedad/exterior2.jpg" alt="Imagen aumentada"
            className="Acordeon-img" />
    )
}

const GridAccordion = () => {

    const [ imagenesGrid , setImagenesGrid ] = useState([])

    useEffect(()=>{

        let { VITE_API_URL } = import.meta.env || 'http://localhost:3000'
        
        let options = {
            method  : 'get'
        }

        fetch( `${VITE_API_URL}/imagenesGrid` , options )
        .then( res => res.json() )
        .then( data => setImagenesGrid(data) )

    },[])

    return(
        <div className="Acordeon-grid">
            {
                imagenesGrid.map( imagen =>
                    <img key={imagen._id} loading="lazy" src={imagen.src} alt={imagen.alt} className="Acordeon-image" />
                )
            }
        </div>
    )
}

const GridDisabledAccordion = () => {

    const { grid } = useContext(ActiveContext)
    const [ imagenesGridDisabled , setImagenesGridDisabled ] = useState([])

    useEffect(()=>{

        let { VITE_API_URL } = import.meta.env || 'http://localhost:3000'
        
        let options = {
            method  : 'get'
        }

        fetch( `${VITE_API_URL}/imagenesGridDisabled` , options )
        .then( res => res.json() )
        .then( data => setImagenesGridDisabled(data) )

    },[])

    return(
        <div className={`Acordeon-grid Acordeon-grid--disabled ${ grid ? 'isActive' : '' }`}>
            {
                imagenesGridDisabled.map( imagen =>
                    <img key={imagen._id} loading="lazy" src={imagen.src} alt={imagen.alt} className="Acordeon-image" />
                )
            }
        </div>
    )
}

const ButtonAccordionNext = () => {

    const { grid , setGrid } = useContext(ActiveContext)

    const toggleGrid = () => {
        setGrid(!grid)
    }

    return(
        <button className="Acordeon-button Acordeon-button--next" title="Next" onPointerDown={ toggleGrid }>
            <svg className="Acordeon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                <path d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
            </svg>
        </button>
    )
}

const ButtonAccordionPrev = () => {

    const { grid , setGrid } = useContext(ActiveContext)

    const toggleGrid = () => {
        setGrid(!grid)
    }

    return(
        <button className="Acordeon-button Acordeon-button--prev" title="Prev" onPointerDown={ toggleGrid }>
            <svg className="Acordeon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                <path d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
            </svg>
        </button>
    )
}