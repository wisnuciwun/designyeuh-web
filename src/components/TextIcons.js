import React from 'react'

function TextIcons({text = "", icon}) {
    return (
        <span className="input-margin">
            {icon}&nbsp;&nbsp;{text}
            <br/>
        </span>
    )
}

export default TextIcons
