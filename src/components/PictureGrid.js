import React, { Component } from 'react'
import FileImporter from '../helpers/FileImporter';
import { Button, Image, Pagination, Row, Table } from 'react-bootstrap';
import PictureTable from './PictureTable';

class PictureGrid extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             imgPath:[],
             imgNames:[],
             perPage: 10,
             offset: 0,
             allPage: 0,
             activePage: 1,
             showImg: [],
             showPath: []
        }
    }
    
    imgImporters = async () => {
        const images = await FileImporter(require.context('../public', false, /\.(png|jpe?g|svg)$/));
        let val 
        let imgnm = []
        let imgpth = []

        if(images !== null || images !== undefined)
        {
          val = images.map((x) => { 
            let paths = x.default
            let filter1 = x.default.split("/")
            let filter2 = filter1[3].split(".")
            let filter3 = filter2[0]

            imgpth.push(paths)
            imgnm.push(filter3)
        })

        this.setState({
            imgPath: imgpth,
            imgNames: imgnm,
            allPage: Math.ceil(imgnm.length / this.state.perPage)
        }, () => this.paging())
        }
    }

    paging = () =>
    {
        let {imgNames, imgPath, offset, activePage, perPage} = this.state

        let imgSlice = imgNames.slice(offset * perPage, (activePage * perPage))
        let pathSlice = imgPath.slice(offset * perPage, (activePage * perPage))

        this.setState({
            showImg: imgSlice,
            showPath: pathSlice,
        })
    }

    changePage = (page) => {
        this.setState({
            offset: (page - 1),
            activePage: page
        }, () => this.paging())
    }

    componentDidMount = async () =>
    {
        await this.imgImporters()
    }

    render() {

    let items = [];

    if(this.state.allPage != 0)
    {
        for (let i = 1; i <= this.state.allPage; i++) {
            items.push(
              <Pagination.Item style={{cursor: 'pointer'}} key={i} onClick={() => this.changePage(i)} active={this.state.activePage}>
                {i}
              </Pagination.Item>,
            );
          }
      
    }
    
    let {showImg, showPath} = this.state

        return (
            <div>
                <PictureTable imgname={showImg} imgpath={showPath}/>
                <Row className="d-flex justify-content-center">
                    <Pagination style={{marginTop: "50px"}} size="sm">{items}</Pagination>
                </Row>
            </div>
        )
    }
}

export default PictureGrid
