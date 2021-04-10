import React from 'react'
import PictureTableSingle from './PictureTableSingle'

function ContentRow({imgName, imgPath, imgLink, title, icon, constanta, purpose = ""}) {
    return (
            <span className="input-margin">
                <p className="h4 grey-text"><i className={icon}></i>&nbsp;&nbsp;{title}</p>
                <PictureTableSingle purpose={purpose} constanta={constanta} imgname={imgName} imgpath={imgPath} imglink={imgLink}/>
                <br/>
            </span>
    )
}

export default ContentRow
