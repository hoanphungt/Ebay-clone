import React from 'react'

export const AdForm = (props) => {
    const { submit, change, values } = props
    return (
        <form onSubmit={submit}>
            Product's name: <input type='text' name='title' onChange={change} value={values.title}/>
            Price: <input type='text' name='price' onChange={change} value={values.price}/>
            Description: <input type='text' name='description' onChange={change} value={values.description}/>
            <button type='submit'>Submit Ad</button>
        </form>
    )
}