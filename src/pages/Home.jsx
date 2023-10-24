import { createContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Header } from "../components/Header/Header"
import { Main } from "../components/Main/Main"
import { Footer } from "../components/Footer/Footer"

export const NavContext = createContext()

export const Home = () => {

    const [enlaces, setEnlaces] = useState([])
    const navigate = useNavigate()

    useEffect(() => {

        const cookie = localStorage.getItem('acceso')

        if (cookie !== null) {
            const { login } = JSON.parse(cookie)
            if (!login) {
                navigate('/')
            }
        } else {
            navigate('/')
        }

    }, [])

    return (
        <NavContext.Provider value={{ enlaces, setEnlaces }}>

            <Header />
            <Main />
            <Footer />

        </NavContext.Provider>
    )
}