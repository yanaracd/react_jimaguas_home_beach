import { useEffect, useState } from 'react'
import './Host.css'

export const Host = () => {

    const [anfitriones, setAnfitriones] = useState([])

    useEffect(() => {

        let { VITE_API_URL } = import.meta.env || 'http://localhost:3000'

        let options = {
            method: 'get'
        }

        fetch(`${VITE_API_URL}/anfitriones`, options)
            .then(res => res.json())
            .then(data => setAnfitriones(data))

    }, [])

    return (
        <div className="Main-div Host" id="Anfitriones">
            <h2 className="Host-h2">Anfitriones</h2>
            <div className="Host-wrapper">
                {
                    anfitriones.map(anfitrion =>
                        <ArticleHost
                            key={anfitrion._id}
                            {...anfitrion} />
                    )
                }
            </div>
        </div>
    )
}

const ArticleHost = (props) => {

    const { img , h3 , li } = props

    return (
        <div className="Host-article">
            <article className="Host-id">
                <img loading="lazy" className="Host-img" src={img.src}
                    alt={img.alt} />
                <h3 className="Host-h3">{h3}</h3>
            </article>
            <div className="Host-contact">
                <ul className="Host-ul">
                    {
                        li.map(eachLi =>
                            <LiContact
                                key={eachLi.id}
                                { ...eachLi } />
                        )
                    }
                </ul>
            </div>
        </div>
    )
}

const LiContact = ( props ) => {

    const { d , enlace } = props

    return (
        <>
            <li className="Host-li">
                <svg className="Host-svg" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                    viewBox="0 0 16 16">
                    <path d={d} />
                </svg>
                <a className="Host-a" title={enlace.title} href={enlace.href}
                    target="_blank" rel="noreferrer">{enlace.a}</a>
            </li>
        </>
    )
}