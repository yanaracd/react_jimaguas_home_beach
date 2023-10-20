import { createContext, useContext, useState } from "react"
import { Lightbox } from "../Lightbox/Lightbox"
import { Room } from "./Room"
import { Slider } from "./Slider"
import { Accordion } from "../Accordion/Accordion"

export const ActiveContext = createContext()

export const Main = () => {

    const [ lightbox  , setLightbox  ] = useState(false)
    const [ accordion , setAccordion ] = useState(false)
    const [ grid      , setGrid      ] = useState(false)

    return(
        <ActiveContext.Provider value={{ lightbox , setLightbox , accordion , setAccordion , grid , setGrid }}>

            <main className="Main">
                <Slider />
                <Room />
                <Lightbox />
                <Accordion />
            </main>  

        </ActiveContext.Provider>    
    )
}