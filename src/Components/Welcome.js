import React from 'react'

export default function Welcome(props) {
    return (
        <div>
            <h1>Hey! {props.name}</h1>
            <h2>Welcome to {props.School}</h2>            
        </div>
    )
}
