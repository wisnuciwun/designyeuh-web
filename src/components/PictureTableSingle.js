import React from 'react'
import { Table } from 'react-bootstrap'
import ImageComponent from './ImageComponent'

function PictureTableSingle({imgname, imgpath, imglink}) {

    let constanta = 10

    let row1 = []

    let divider = Math.ceil(imgname.length / 5)
    
    if(divider != 0)
    {
        let imgonerow = imgpath.slice(0,constanta)
        let linkonerow = imglink.slice(0,constanta)
        let nameonerow = imgname.slice(0,constanta)

        let all = []

        for (let z = 0; z < constanta; z++) {
            all.push({imgpath: imgonerow[z], imglink:linkonerow[z], imgname: nameonerow[z]})            
        }
        
        if(all.length == constanta)
        {
            let v = all.map((val, id) => {return(<ImageComponent id={id} path={val.imgpath} name={val.imgname} downlink={val.imglink} />)})
            row1 = v
        }
    }

    return (
        <Table responsive>
            <tbody>
                <tr style={{ paddingRight: "90px"}} className="d-flex bd-highlight mb-3 overflow-auto d-md-inline-flex">
                    {row1}
                </tr>
            </tbody>
        </Table>
    )
}

export default PictureTableSingle
