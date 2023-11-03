import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"

export const Form = () => {

    const [message, setMessage] = useState()
    const [formattedDate, setFormattedDate] = useState()
    const navigate = useNavigate()
    const entradaInput = useRef()
    const salidaInput = useRef()
    const cantidadInput = useRef()
    const habInput = useRef()

    useEffect(() => {
        const today = new Date();
        setFormattedDate(`${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`)
    }, [])

    const formSubmit = (e) => {
        e.preventDefault()

        const { value: entrada } = entradaInput.current
        const { value: salida } = salidaInput.current
        const { value: cantidad } = cantidadInput.current
        const { value: hab } = habInput.current

        const reserva = { entrada, salida, cantidad, hab }

        let { VITE_API_URL } = import.meta.env || 'http://localhost:3000'

        let options = {
            method: 'post',
            body: JSON.stringify(reserva),
            headers: {
                "Content-type": "application/json"
            }
        }

        fetch(`${VITE_API_URL}/reservas`, options)
            .then(res => res.json())
            .then(data => {
                setMessage(data)
                navigate('/home/booking')
            })

        entradaInput.current.value = ''
        salidaInput.current.value = ''
    }

    return (
        <form onSubmit={formSubmit} className="Home-form" action="/send/" method="post">
            <h3 className="Home-h3">Selecione la fecha de su reserva</h3>
            <ul className="Home-reserva">
                <li className="Home-fecha">
                    <label className="Home-label">Llegada</label>
                    <input className="Home-input" id="llegada" type="date" min={formattedDate} max="2025-12-31" required ref={entradaInput} />
                </li>
                <li className="Home-fecha">
                    <label className="Home-label">Salida</label>
                    <input className="Home-input" id="salida" type="date" min={formattedDate} max="2025-12-31" required ref={salidaInput} />
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