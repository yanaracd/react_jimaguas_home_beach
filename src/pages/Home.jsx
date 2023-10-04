import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

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
            <h1>Soy la página de Jimaguas Home Beach</h1>
        </>
    )
}