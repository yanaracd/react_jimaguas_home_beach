import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Header } from "../components/Header/Header"

export const Home = () => {

    const navigate = useNavigate()

    useEffect(()=>{

        const cookie = localStorage.getItem('acceso')

        if( cookie !== null ){
            const { login } = JSON.parse(cookie)
            if(!login){
                navigate('/')
            }
        }else{
            navigate('/')
        }        
        
    },[])

    return(
        <>
            <Header />
        </>
    )
}