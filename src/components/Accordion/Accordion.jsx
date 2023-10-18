import './Accordion.css'

export const Accordion = () => {
    return(
        <div className="Main-div Acordeon">
            <div className="Acordeon-wrapper">
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
                <div className="Acordeon-div">
                    <img loading="lazy" src="assets/propiedad/exterior2.jpg" alt="Imagen aumentada"
                        className="Acordeon-img" />
                    <div className="Acordeon-slider">
                        <div className="Acordeon-grid">
                            <img loading="lazy" src="assets/propiedad/exterior2.jpg"
                                alt="Terraza exterior vista desde la entrada" className="Acordeon-image" />
                            <img loading="lazy" src="assets/propiedad/exterior3.jpg"
                                alt="Terraza exterior vista desde el hall" className="Acordeon-image" />
                            <img loading="lazy" src="assets/propiedad/exterior1.jpg" alt="Hall de las habitaciones"
                                className="Acordeon-image" />
                            <img loading="lazy" src="assets/propiedad/exterior4.jpg" alt="Ducha de playa"
                                className="Acordeon-image" />
                            <img loading="lazy" src="assets/propiedad/hab11.jpg" alt="Habitacion 1 vista desde dentro"
                                className="Acordeon-image" />
                            <img loading="lazy" src="assets/propiedad/hab12.jpg"
                                alt="Habitacion 1 vista desde la puerta" className="Acordeon-image" />
                        </div>
                        <div className="Acordeon-grid Acordeon-grid--disabled">
                            <img loading="lazy" src="assets/propiedad/hab13.jpg" alt="Baño de la habitacion 1"
                                className="Acordeon-image" />
                            <img loading="lazy" src="assets/propiedad/hab14.jpg" alt="Baño de la habitacion 1"
                                className="Acordeon-image" />
                            <img loading="lazy" src="assets/propiedad/hab21.webp" alt="Habitacion 2 vista desde dentro"
                                className="Acordeon-image" />
                            <img loading="lazy" src="assets/propiedad/hab22.webp"
                                alt="Habitacion 2 vista desde la puerta" className="Acordeon-image" />
                            <img loading="lazy" src="assets/propiedad/hab23.webp" alt="Baño de la habitacion 2"
                                className="Acordeon-image" />
                            <img loading="lazy" src="assets/propiedad/hab24.webp" alt="Baño de la habitacion 2"
                                className="Acordeon-image" />
                        </div>
                        <button className="Acordeon-button Acordeon-button--next" title="Next">
                            <svg className="Acordeon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                <path fill-rule="evenodd"
                                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                            </svg>
                        </button>
                        <button className="Acordeon-button Acordeon-button--prev" title="Prev">
                            <svg className="Acordeon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                <path fill-rule="evenodd"
                                    d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}