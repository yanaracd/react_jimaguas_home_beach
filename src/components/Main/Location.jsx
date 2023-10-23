import './Location.css'

export const Location = () => {
    return(
        <section className="Main-div Location" id="Ubicacion">
            <h2 className="Location-h2">Ubicacion</h2>
            <IframeLocation />
        </section>
    )
}

const IframeLocation = () => {
    return(
        <div className="Location-wrapper">
            <iframe
                title="Mapa con la ubicacion del alojamiento"
                loading='lazy'
                width="800"
                height="600"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3668.4914471146535!2d-81.25268192495392!3d23.152256879083062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d3a1b8d5532b4f%3A0x4cf9d198157dc6cf!2sCasa%20Aidee%20B%26B!5e0!3m2!1ses-419!2ses!4v1689068848309!5m2!1ses-419!2ses">
            </iframe>
        </div>
    )
}