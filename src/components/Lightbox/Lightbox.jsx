import { useContext, useEffect, useState } from 'react'
import './Lightbox.css'
import { ActiveContext } from '../Main/Main'

export const Lightbox = () => {

    const { lightbox, condition } = useContext(ActiveContext)

    return (
        <div className={`Main-div Lightbox ${lightbox ? 'isActive' : ''}`}>
            <div className="Lightbox-wrapper">
                <ButtonLightbox />
                {
                    condition === 'habitaciones' ? <RoomLightbox />
                        : condition === 'servicios' && <ServiceLightbox />

                }
            </div>
        </div>
    )
}

const ButtonLightbox = () => {

    const { setLightbox } = useContext(ActiveContext)

    const removeLightbox = () => {
        setLightbox(false)
    }

    return (
        <button className="Lightbox-button" title="Cerrar" onPointerDown={removeLightbox}>
            <svg className="Lightbox-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
            </svg>
        </button>
    )
}

const RoomLightbox = () => {

    const [habitacion, setHabitacion] = useState([])

    useEffect(() => {

        let { VITE_API_URL } = import.meta.env || 'http://localhost:3000'

        let options = {
            method: 'get'
        }

        fetch(`${VITE_API_URL}/rooms`, options)
            .then(res => res.json())
            .then(data => setHabitacion(data))

    }, [])

    return (
        <>
            {
                habitacion.map(hab =>
                    <LightboxSection
                        key={hab._id}
                        {...hab} />
                )
            }
        </>
    )
}

const LightboxSection = (props) => {

    const { h3, article } = props

    return (
        <section className="Lightbox-section">
            <h3 className="Lightbox-h3">{h3}</h3>
            {
                article.map(article =>
                    <LightboxArticle
                        key={article.id}
                        {...article} />
                )
            }
        </section>
    )
}

const LightboxArticle = (props) => {

    const { h4, li } = props

    return (
        <article className="Lightbox-article">
            <h4 className="Lightbox-h4">{h4}</h4>
            <ul className="Lightbox-ul">
                {
                    li.map(li =>
                        <LightboxLi
                            key={li.id}
                            {...li} />
                    )
                }
            </ul>
        </article>
    )
}

const LightboxLi = (props) => {

    const { src, alt, h5 } = props

    return (
        <li className="Lightbox-li">
            <img loading="lazy" className="Lightbox-img" src={src} alt={alt} />
            <h5 className="Lightbox-h5">{h5}</h5>
        </li>
    )
}

const ServiceLightbox = () => {

    const [services, setServices] = useState([])

    useEffect(() => {

        let { VITE_API_URL } = import.meta.env || 'http://localhost:3000'

        let options = {
            method: 'get'
        }

        fetch(`${VITE_API_URL}/services`, options)
            .then(res => res.json())
            .then(data => setServices(data))

    }, [])

    return (
        <>
            {
                services.map(service =>
                    <SectionDesayuno
                        key={service._id}
                        {...service} />
                )
            }
        </>
    )
}

const SectionDesayuno = (props) => {

    const { h3, article } = props

    return (
        <section className="Modal-section">
            <h3 className="Modal-h3">{h3}</h3>
            {
                article.map(eachArticle =>
                    eachArticle.li
                        ? <ArticleDesayuno
                            key={eachArticle.id}
                            {...eachArticle} />
                        : <ArticleMore
                            key={eachArticle.id}
                            {...eachArticle} />
                )
            }
        </section>
    )
}

const ArticleDesayuno = (props) => {

    const { h4, li } = props

    return (
        <article className="Modal-article">
            <h4 className="Modal-h4">{h4}</h4>
            <ul className="Modal-ul">
                {
                    li.map(eachLi =>
                        <LiDesayuno 
                            key={eachLi.ide}
                            {...eachLi} />
                    )
                }
            </ul>
        </article>
    )
}

const LiDesayuno = (props) => {

    const { img, h5 } = props

    return (
        <li className="Modal-li">
            <img loading="lazy" src={img.src} alt={img.alt} className="Modal-img" />
            <h5 className="Modal-h5">{h5}</h5>
        </li>
    )
}

const ArticleMore = (props) => {

    const { h4, p } = props

    return (
        <article className="Modal-article">
            <h4 className="Modal-h4">{h4}</h4>
            <p className="Modal-p">{p}</p>
        </article>
    )
}