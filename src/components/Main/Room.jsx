import { useContext } from 'react'
import './Room.css'
import { ActiveContext } from './Main'

export const Room = () => {
    return (
        <div className="Main-div Room" id="Habitaciones">
            <div className="Room-wrapper">
                <section className="Room-section">
                    <Information />
                    <RoomsSection />
                    <ButtonAcordion />
                </section>
            </div>
        </div>
    )
}

const Information = () => {
    return (
        <>
            <h2 className="Room-h2">Jimaguas Home Beach</h2>
            <p className="Room-p">
                <strong>Jimaguas Home Beach</strong> presta sus servicios de renta de habitaciones, tanto a clientes nacionales como internacionales,
                desde hace más de dos décadas. Es un negocio familiar liderado por las hermanas Aimée y Aidée. <strong>Jimaguas Home Beach </strong>
                consta de dos habitaciones totalmente independientes y con baño privado.
            </p>
        </>
    )
}

const RoomsSection = () => {

    const { setLightbox , setCondition  } = useContext(ActiveContext)

    const addLightbox = () => {
        setLightbox(true)
        setCondition('habitaciones')
    }

    return(
        <div className="Room-div">
            <article className="Room-article" onPointerDown={ addLightbox }>
                <img loading="lazy" src="assets/hab_1.jpg" alt="Habitacion 1" className="Room-img" />
                <h3 className="Room-h3">Habitación 1</h3>
            </article>
            <article className="Room-article" onPointerDown={ addLightbox }>
                <img loading="lazy" src="assets/hab_2.webp" alt="Habitacion 2" className="Room-img" />
                <h3 className="Room-h3">Habitación 2</h3>
            </article>
        </div>
    )
}

const ButtonAcordion = () => {

    const { accordion , setAccordion } = useContext(ActiveContext)

    const addAccordion = () => {
        setAccordion(true)
    }

    const removeAccordion = () => {
        setAccordion(false)
    }

    return(
        <div className="Room-buttons">
            <button className="Room-button" title="Ver mas" onPointerDown={ addAccordion }>
                <span className="Room-span">Ver más</span>
                <svg className="Room-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                    <path d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                    <path d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                </svg>
            </button>
            <button className={`Room-button Room-button--disabled ${ accordion ? 'isActive' : '' }`} title="Ver menos" onPointerDown={ removeAccordion }>
                <span className="Room-span">Ver menos</span>
                <svg className="Room-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                    <path d="M7.646 2.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 3.707 2.354 9.354a.5.5 0 1 1-.708-.708l6-6z" />
                    <path d="M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z" />
                </svg>
            </button>
        </div>
    )
}