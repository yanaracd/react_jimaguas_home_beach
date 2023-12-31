import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Header } from "../components/Header/Header"
import { Main } from "../components/Main/Main"
import { Footer } from "../components/Footer/Footer"

export const Home = () => {

    const navigate = useNavigate()

    useEffect(() => {

        const cookie = localStorage.getItem('acceso')
        console.log(cookie)

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
        <>

            <Header />
            <Main />
            <Footer />

        </>
    )
}