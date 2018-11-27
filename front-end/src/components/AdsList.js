import React from 'react'
import { Link } from 'react-router-dom'

export const AdsList = (props) => {
    if(props.ads === null) {
        return <h1>Loading ...</h1>
    }

    return (
        <ul>
            {props.ads.map(ad => {
                return (
                    <li key={ad.id}>
                        <Link to={`/${ad.id}`}>{ad.title}:</Link>
                        <p>Price: {ad.price}</p>
                    </li>
                )
            })}
        </ul>
    )
}