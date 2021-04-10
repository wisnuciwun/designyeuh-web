import React from 'react'
import { Table } from 'react-bootstrap'
import ImageComponent from './ImageComponent'

function PictureTable({imgname, imgpath, imglink, constanta, perPage, purpose = ""}) {

    let row1 = []
    let row2 = []
    let allOne = []
    let allTwo = []

    let divider = Math.ceil(imgname.length / constanta)
    
    if(divider != 0)
    {
        let pathrowone = imgpath.slice(0, constanta)
        let pathrowtwo = imgpath.slice(constanta, perPage)

        let namerowone = imgname.slice(0, constanta)
        let namerowtwo = imgname.slice(constanta, perPage)

        let linkrowone = imglink.slice(0, constanta)
        let linkrowtwo = imglink.slice(constanta, perPage)

        for (let z = 0; z < constanta; z++) {
            allOne.push({imgpath: pathrowone[z], imgname: namerowone[z], imglink: linkrowone[z]})
            allTwo.push({imgpath: pathrowtwo[z], imgname: namerowtwo[z], imglink: linkrowtwo[z]})                
        }

        let allRow = [allOne, allTwo]
        let allarry = [row1, row2]

        for (let i = 0; i < allRow.length; i++) {
            let v = allRow[i].map((val, id) => {
            return(
                <ImageComponent purpose={purpose} id={id} path={val.imgpath} name={val.imgname} downlink={val.imglink} />
                )
            })
            
            allarry[i].push(v)
        }
    }

    return (
        <Table responsive>
            <tbody>
                <tr>{row1}</tr>
                <tr>{row2}</tr>
            </tbody>
        </Table>
    )
}

export default PictureTable