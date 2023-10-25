import { useContext, useEffect, useState } from 'react'
import './Service.css'
import { ActiveContext } from './Main'

export const Service = () => {

    const [ servicios, setServicios ] = useState([])

    useEffect(() => {

        let { VITE_API_URL } = import.meta.env || 'http://localhost:3000'

        let options = {
            method: 'get'
        }

        fetch(`${VITE_API_URL}/servicios`, options)
            .then(res => res.json())
            .then(data => setServicios(data))

    }, [])

    return (
        <section className="Main-div Service" id="Servicios">
            <h2 className="Service-h2">Servicios</h2>
            <div className="Service-wrapper">
                {
                    servicios.map( servicio =>
                        <ArticleService 
                            key={servicio._id}
                            { ...servicio } />
                    )
                }
            </div>
        </section>
    )
}

const ArticleService = ( props ) => {

    const { className , img , button , h3 } = props

    const { setLightbox , setCondition } = useContext(ActiveContext)

    const addLightbox = () => {
        setLightbox(true)
        setCondition('servicios')
    }

    return (
        <article className={`Service-article ${className}`}>
            <div className="Service-div">
                <img loading="lazy" src={img.src} alt={img.alt} className="Service-img" />
                <button onPointerDown={ addLightbox } className="Service-button" title="Saber mas">{button}</button>
            </div>
            <h3 className="Service-h3">{h3}</h3>
        </article>
    )
}