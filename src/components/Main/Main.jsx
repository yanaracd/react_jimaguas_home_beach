import { createContext, useContext, useState } from "react"
import { Lightbox } from "../Lightbox/Lightbox"
import { Room } from "./Room"
import { Slider } from "./Slider"
import { Accordion } from "../Accordion/Accordion"
import { Location } from "./Location"
import { Host } from "./Host"
import { Service } from "./Service"

export const ActiveContext = createContext()

export const Main = () => {

    const [ lightbox  , setLightbox  ] = useState(false)
    const [ condition , setCondition ] = useState()
    const [ accordion , setAccordion ] = useState(false)
    const [ grid      , setGrid      ] = useState(false)

    return(
        <ActiveContext.Provider value={{ lightbox , setLightbox , condition , setCondition , accordion , setAccordion , grid , setGrid }}>

            <main className="Main">
                <Slider />
                <Room />
                <Lightbox />
                <Accordion />
                <Service />
                <Location />
                <Host />
            </main>  

        </ActiveContext.Provider>    
    )
}