import React from 'react'
import { Table } from 'react-bootstrap'
import ImageComponent from './ImageComponent'

function PictureTable({imgname, imgpath, imglink, imgdate, imgauthor, imgid, constanta, perPage, purpose = ""}) {

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

        let daterowone = imgdate.slice(0, constanta)
        let daterowtwo = imgdate.slice(constanta, perPage)

        let idrowone = imgid.slice(0, constanta)
        let idrowtwo = imgid.slice(constanta, perPage)

        let authorrowone = imgauthor.slice(0, constanta)
        let authorrowtwo = imgauthor.slice(constanta, perPage)

        for (let z = 0; z < constanta; z++) {
            allOne.push({imgpath: pathrowone[z], imgname: namerowone[z], imglink: linkrowone[z], imgdate: daterowone[z], imgid: idrowone[z], imgauthor: authorrowone[z]})
            allTwo.push({imgpath: pathrowtwo[z], imgname: namerowtwo[z], imglink: linkrowtwo[z], imgdate: daterowtwo[z], imgid: idrowtwo[z], imgauthor: authorrowtwo[z]})                
        }

        let allRow = [allOne, allTwo]
        let allarry = [row1, row2]

        for (let i = 0; i < allRow.length; i++) {
            let v = allRow[i].map((val, id) => {
            return(
                <ImageComponent purpose={purpose} key={id} path={val.imgpath} name={val.imgname} downlink={val.imglink} date={val.imgdate} author={val.imgauthor} imgid={val.imgid} />
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