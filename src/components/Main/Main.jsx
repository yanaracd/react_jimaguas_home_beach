import { createContext, useState } from "react"
import { Lightbox } from "../Lightbox/Lightbox"
import { Room } from "./Room"
import { Slider } from "./Slider"
import { Accordion } from "../Accordion/Accordion"

export const LightboxContext = createContext()

export const Main = () => {

    const [ lightbox , setLightbox ] = useState(false)

    return(
        <LightboxContext.Provider value={{ lightbox , setLightbox }}>

            <main className="Main">
                <Slider />
                <Room />
                <Lightbox />
                <Accordion />
            </main>  

        </LightboxContext.Provider>    
    )
}