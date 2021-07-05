import React from 'react'
import { Button } from 'reactstrap'

function ButtonIcons({icon, title, color="light", width='160px', height = '30px', fontSize = '8pt', onClick, name = "", className = "", disabled = false, id, onBlur, hidden = false, value, marginBottom = '5px'}) {    
    return (
    <span><Button value={value} hidden={hidden} id={id} onBlur={onBlur} disabled={disabled} className={className} name={name} onClick={onClick} style={{width: width, height: height, fontSize: fontSize, marginBottom: marginBottom}} color={color}>{icon}&nbsp;&nbsp;{title}</Button>&nbsp;&nbsp;</span>
    )
}

export default ButtonIcons
