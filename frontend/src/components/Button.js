import React from 'react'
import '../componentStyles/Button.css'

function Button(props) {
    return (
        <button className={`defaultBtn pLarge ${props.color}`}>{props.btnType}</button>
    )
}

export default Button