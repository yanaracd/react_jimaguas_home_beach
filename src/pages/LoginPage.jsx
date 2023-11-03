import { useParams } from 'react-router-dom'
import { Login } from '../components/Login/Login'
import { Register } from '../components/Login/Register'
import './LoginPage.css'

export const LoginPage = () => {

    const { param } = useParams()

    return (
        <>
            <div className="Login">
                <div className="Login-div">
                    {
                        param === 'register' ? <Register /> : <Login />
                    }
                    <LoginImage />
                </div>
            </div>
        </>
    )
}

const LoginImage = () => {
    return (
        <div className="Login-right">
            <img src="assets/auto_playa.jpeg" alt="Coche clásico en la playa" className="Login-img" />
        </div>
    )
}