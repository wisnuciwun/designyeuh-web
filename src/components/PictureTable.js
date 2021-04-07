import React from 'react'
import { Table } from 'react-bootstrap'
import ImageComponent from './ImageComponent'

function PictureTable({imgname, imgpath}) {

    let row1 = []
    let row2 = []

    let divider = Math.ceil(imgname.length / 5)
    
    if(divider != 0)
    {
        let one = imgpath.slice(0,5)
        let two = imgpath.slice(5,10)

        let all = [one,two]
        let allarry = [row1, row2]

        for (let i = 0; i < all.length; i++) {
            let v = all[i].map((val, id) => {
            return(
                <ImageComponent id={id} val={val}/>
                )
            })
            
            allarry[i].push(v)
        }
    }

    return (
        <Table responsive className="none">
            <tbody>
                <tr>{row1}</tr>
                <tr>{row2}</tr>
            </tbody>
        </Table>
    )
}

export default PictureTable
