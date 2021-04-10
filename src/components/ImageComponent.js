import axios from 'axios'
import React, { Component } from 'react'
import { Dropdown } from 'react-bootstrap'
import Preview from '../views/Modals/Preview'

class ImageComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             downloadItem: '',
             togglePreview:{
                 toggle: false,
                 imgFile: ''
             }
        }
    }

    executeDownload = (val) => 
    {
        window.open(val)
    }

    modalPreview = (value) => 
    {
        this.setState({
            togglePreview:{
                toggle: !this.state.togglePreview.toggle,
                imgFile: value
            }
        })
    }

    previewImage = (val) => {
        window.open(val,"_self")
    }

    executeDownloadImage = (value, filename) => {
        axios({
            url: value,
            method: "GET",
            responseType: 'blob'
        }).then((res) => {
            const url = window.URL.createObjectURL(new Blob([res.data]))
            const link = document.createElement('a')
            link.href = url
            link.setAttribute('download', `${filename}.jpg`)
            document.body.appendChild(link)
            link.click()
        })
      }
    
    render() {
        return (
        <td className="btn-group dropright animate-screen slideIn-screen">
            <Dropdown>
                <Dropdown.Toggle variant="light" id="dropdown-basic">
                    <img alt={this.props.path} className="border-img center-cropped" style={{width: '150px', height:'225px'}} src={this.props.path} />
                </Dropdown.Toggle>
                <Dropdown.Menu className="img-dropdown animate-img slideIn-img">
                    <Dropdown.Item className="padding-item-dropdown" onClick={() => {this.props.purpose == "image" ?
                        this.previewImage(this.props.downlink)
                        :
                        this.modalPreview(this.props.path)}}><i className="fas fa-eye"></i></Dropdown.Item>
                    <Dropdown.Item className="padding-item-dropdown"><i class="fas fa-heart"></i></Dropdown.Item>
                    <Dropdown.Item className="padding-item-dropdown" onClick={() => { this.props.purpose == "image" ? 
                        this.executeDownloadImage(this.props.downlink, this.props.name)
                        :
                        this.executeDownload(this.props.downlink)}}><i class="far fa-save"></i></Dropdown.Item>
                    <Dropdown.Item className="padding-item-dropdown" ><i class="fas fa-info"></i></Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <Preview toggle={this.modalPreview} isOpen={this.state.togglePreview.toggle} imgFile={this.props.path} imgName={this.props.name} />
        </td>

        )
    }
}

export default ImageComponent
