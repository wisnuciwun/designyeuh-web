import React, { Component } from 'react'
import FileImporter from '../helpers/FileImporter';
import { Button, Image, Pagination, Row, Table } from 'react-bootstrap';
import PictureTable from './PictureTable';
import Axios from '../helpers/axios';

class PictureGrid extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            perRow: 5,
            imgPath:[],
            imgNames:[],
            imgLink:[],
            perPage: 10,
            offset: 0,
            allPage: 0,
            activePage: 1,
            data: []
        }
    }
    
    imgImporters = async () => {
        var images =  this.state.data
        let imgpth = []
        let imgnm = []
        let imglk = []

        if(images !== null || images !== undefined)
        {
            images.map((x) => { 

            imgpth.push(x.filename)
            imgnm.push(x.title)
            imglk.push(x.link)

            })

        this.setState({
            imgPath: imgpth,
            imgNames: imgnm,
            imgLink: imglk
        })
        }
    }


    changePage = (page) => {
        this.setState({
            offset: (page - 1),
            activePage: page
        }, () => this.loadData())
    }

    loadData = async () => {
        await Axios.get(`/${this.props.url}?page=${this.state.activePage}&perpage=${this.state.perPage}`)
        .then(res => this.setState({...this.state, data: res.data}))
        await Axios.get(`/Resumes/pages`)
        .then(res => this.setState({...this.state, allPage: Math.ceil(res.data / this.state.perPage)        
        }))
        this.imgImporters()
    }

    componentDidMount = async () =>
    {
        await this.loadData()
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
    
    let {imgPath, imgNames, imgLink, perRow, perPage} = this.state

        return (
            <div>
                <PictureTable purpose={this.props.purpose} perPage={perPage} constanta={perRow} imgname={imgNames} imgpath={imgPath} imglink={imgLink}/>
                <Row className="d-flex justify-content-center">
                    <Pagination style={{marginTop: "50px"}} size="sm">{items}</Pagination>
                </Row>
            </div>
        )
    }
}

export default PictureGrid
