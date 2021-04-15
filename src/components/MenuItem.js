import React from 'react'
import { Nav } from 'react-bootstrap';

function MenuItem({title, href, icon = ""}) {
    return (
        <Nav.Link style={{marginRight: "10px"}} href={href}><i className={icon}></i>&nbsp;&nbsp;{title}</Nav.Link>
    )
}

export default MenuItem
