import React from 'react'

export const AdDetails = (props) => {
    if (props.ad === null) return <h1>Loading ...</h1>
    
    return (
        <div>
            <h1>Product's Information:</h1>
            <h2>{props.ad.title}</h2>
            <i>Price: {props.ad.price}</i>
            <p>Email of seller: {props.ad.email}</p>
            <p>Phone of seller: {props.ad.phone}</p>
            <p>Description of product: {props.ad.description}</p>
            <button onClick>Delete</button>
        </div>
    )
}