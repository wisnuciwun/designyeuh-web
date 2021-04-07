import React from 'react'

function TextIcons({text = "", icon}) {
    return (
        <span className="input-margin">
            <i class={icon}></i>&nbsp;&nbsp;{text}
            <br/>
        </span>
    )
}

export default TextIcons
