import { useEffect, useState } from 'react'
import './Manager.css'

export const Manager = () => {

    return (
        <div className="Manager">
            <div className="Manager-wrapper">
                <h2 className="Manager-h2">Reservas</h2>
                <TableManager />
            </div>
        </div>
    )
}

const TableManager = () => {

    const [ reservas , setReservas ] = useState([])

    useEffect(()=>{

        let { VITE_API_URL } = import.meta.env || 'http://localhost:3000'
        
        let options = {
            method  : 'get'
        }

        fetch( `${VITE_API_URL}/reservas` , options )
        .then( res => res.json() )
        .then( data => setReservas(data) )

    },[])

    return (
        <table className="table">
            <thead>
                <TheadTable />
            </thead>
            <tbody>
                {
                    reservas.map( ( reserva , i ) =>
                        <TbodyTable
                            key={reserva._id}
                            { ...reserva }
                            i = {i+1} />
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

const TbodyTable = ( props ) => {

    const { i , entrada , salida , cantidad , hab } = props 

    return (
        <tr>
            <th scope="row">{i}</th>
            <td>{entrada}</td>
            <td>{salida}</td>
            <td>{`${cantidad} huéspedes`}</td>
            {
                hab === '3' ? <td>Alojamiento completo</td> : <td>{`Habitación ${hab}`}</td>
            }
            <td><button type="button" className="btn btn-primary">Modificar</button></td>
            <td><button type="button" className="btn btn-danger">Eliminar</button></td>
        </tr>
    )
}