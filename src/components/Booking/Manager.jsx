import { createContext, useContext, useEffect, useRef, useState } from 'react'
import './Manager.css'

const ManagerContext = createContext()

export const Manager = () => {

    const [reservas, setReservas] = useState([])
    const [update, setUpdate] = useState(false)
    const idInput = useRef()
    const entradaInput = useRef()
    const salidaInput = useRef()
    const cantidadInput = useRef()
    const habInput = useRef()

    return (
        <ManagerContext.Provider value={{ reservas, setReservas, update, setUpdate, idInput, entradaInput, salidaInput, cantidadInput, habInput }}>
            <div className="Manager">
                <div className="Manager-wrapper">
                    <h2 className="Manager-h2">Reservas</h2>
                    <TableManager />
                </div>
            </div>
        </ManagerContext.Provider>
    )
}

const TableManager = () => {

    const { reservas, setReservas } = useContext(ManagerContext)

    useEffect(() => {

        let { VITE_API_URL } = import.meta.env || 'http://localhost:3000'

        let options = {
            method: 'get'
        }

        fetch(`${VITE_API_URL}/reservas`, options)
            .then(res => res.json())
            .then(data => setReservas(data))

    }, [])

    return (
        <table className="table">
            <thead>
                <TheadTable />
            </thead>
            <tbody>
                <TableUpdate />
                {
                    reservas.map((reserva, i) =>
                        <TbodyTable
                            key={reserva._id}
                            {...reserva}
                            i={i + 1} />
                    )
                }
            </tbody>
        </table>
    )
}

const TheadTable = () => {

    return (
        <tr>
            <th scope="col">#</th>
            <th scope="col">Entrada</th>
            <th scope="col">Salida</th>
            <th scope="col">Cantidad de huéspedes</th>
            <th scope="col">Habitación</th>
            <th scope="col"></th>
            <th scope="col"></th>
        </tr>
    )
}

const TbodyTable = (props) => {

    const { i, _id, entrada, salida, cantidad, hab } = props
    const { reservas, setReservas, setUpdate, idInput, entradaInput, salidaInput, cantidadInput, habInput } = useContext(ManagerContext)

    const deleteBooking = (id) => {

        let { VITE_API_URL } = import.meta.env || 'http://localhost:3000'

        let options = {
            method: 'delete'
        }

        fetch(`${VITE_API_URL}/reservas/${id}`, options)
            .then(res => res.json())
            .then(data => setReservas(data))

    }

    const updateBooking = (idReserva) => {
        setUpdate(true)

        let buscar = reservas.find(reserva => reserva._id === idReserva)
        let { entrada, salida, cantidad, hab } = buscar

        idInput.current.value = idReserva
        entradaInput.current.value = entrada
        salidaInput.current.value = salida
        cantidadInput.current.value = cantidad
        habInput.current.value = hab
    }

    return (
        <tr>
            <th scope="row">{i}</th>
            <td>{entrada}</td>
            <td>{salida}</td>
            <td>{`${cantidad} huéspedes`}</td>
            {
                hab === '3' ? <td>Alojamiento completo</td> : <td>{`Habitación ${hab}`}</td>
            }
            <td><button onPointerDown={() => updateBooking(_id)} type="button" className="btn btn-primary">Modificar</button></td>
            <td><button onPointerDown={() => deleteBooking(_id)} type="button" className="btn btn-danger">Eliminar</button></td>
        </tr>
    )
}

const TableUpdate = () => {

    const { setReservas, update, setUpdate, idInput, entradaInput, salidaInput, cantidadInput, habInput } = useContext(ManagerContext)

    const updateBooking = (e) => {
        e.preventDefault()

        let { value: _id } = idInput.current
        let { value: entrada } = entradaInput.current
        let { value: salida } = salidaInput.current
        let { value: cantidad } = cantidadInput.current
        let { value: hab } = habInput.current

        let nuevo = { _id, entrada, salida, cantidad, hab }
        
        let { VITE_API_URL } = import.meta.env || 'http://localhost:3000'
        
        let options = {
            method  : 'put',
            body    : JSON.stringify(nuevo),
            headers : {
                "Content-type" : "application/json"
            }
        }

        fetch(`${VITE_API_URL}/reservas`, options)
            .then(res => res.json())
            .then(data => setReservas(data))

        setUpdate(false)
    }

    const cancelarModificacion = () => {
        setUpdate(false)
    }

    return (
        <tr className={`Manager-update ${update ? 'isActive' : ''} table-secondary`}>
            <th scope="row">
                <input type="hidden" ref={idInput} />
            </th>
            <td>
                <input id="llegada" type="date" min="2023-01-01" required ref={entradaInput} />
            </td>
            <td>
                <input id="salida" type="date" min="2023-01-01" required ref={salidaInput} />
            </td>
            <td>
                <select name="select" ref={cantidadInput}>
                    <option value="1">1 Huésped</option>
                    <option value="2">2 Huéspedes</option>
                    <option value="3">3 Huéspedes</option>
                    <option value="4">4 Huéspedes</option>
                </select>
            </td>
            <td>
                <select name="select" ref={habInput}>
                    <option value="1">Habitación 1</option>
                    <option value="2">Habitación 2</option>
                    <option value="3">Alojamiento completo</option>
                </select>
            </td>
            <td><button onPointerDown={updateBooking} type="button" className="btn btn-primary">Modificar</button></td>
            <td><button onPointerDown={cancelarModificacion} type="button" className="btn btn-danger">Cancelar</button></td>
        </tr>
    )
}