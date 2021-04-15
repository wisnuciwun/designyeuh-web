import axios from 'axios'
import React, { Component } from 'react'
import { Dropdown } from 'react-bootstrap'
import { Tooltip } from 'reactstrap'
import Axios from '../helpers/axios'
import Preview from '../views/Modals/Preview'
import moment from 'moment'

class ImageComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             downloadItem: '',
             togglePreview:{
                 toggle: false,
                 imgFile: ''
             },
             toggleInfo:{
                toggle: false
             }
        }
    }

    executeDownload = async (val) => 
    {
        let url = `${this.props.purpose}/Downloaded?id=${this.props.imgid}`
        await Axios.post(url)

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

    modalInfo = (value) => 
    {
        this.setState({
            toggleInfo:{
                toggle: !this.state.toggleInfo.toggle,
            }
        })
    }

    previewImage = (val) => {
        window.open(val,"_self")
    }

    executeDownloadImage = async (value, filename) => {
        let url = `${this.props.purpose}/Downloaded?id=${this.props.imgid}`
        await Axios.post(url)

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
        console.log("object", this.props)
        return (
        <td className="btn-group dropright animate-screen slideIn-screen">
            <Dropdown>
                <Dropdown.Toggle variant="light" id="dropdown-basic">
                    <img alt={this.props.path} className="border-img center-cropped" style={{width: '150px', height:'225px'}} src={this.props.path} />
                </Dropdown.Toggle>
                <Dropdown.Menu className="img-dropdown animate-img slideIn-img">
                    <Dropdown.Item className="padding-item-dropdown" onClick={() => {this.props.purpose == "Images" ?
                        this.modalPreview(this.props.downlink)
                        :
                        this.modalPreview(this.props.path)}}><i className="fas fa-eye"></i></Dropdown.Item>
                    <Dropdown.Item className="padding-item-dropdown"><i class="fas fa-heart"></i></Dropdown.Item>
                    <Dropdown.Item className="padding-item-dropdown" onClick={() => { this.props.purpose == "Images" ? 
                        this.executeDownloadImage(this.props.downlink, this.props.name)
                        :
                        this.executeDownload(this.props.downlink)}}><i class="far fa-save"></i></Dropdown.Item>
                    <Dropdown.Item className="padding-item-dropdown" id="info" ><i class="fas fa-info"></i></Dropdown.Item>
                    
            <Tooltip style={{textAlign: "left"}} placement="right" isOpen={this.state.toggleInfo.toggle} target="info" toggle={this.modalInfo}>
            {this.props.name}<br/>
            {moment(this.props.date).format("DD-MM-YYYY")}<br/>
            {this.props.author}<br/>
            </Tooltip>
                </Dropdown.Menu>
            </Dropdown>
            <Preview class={this.props.purpose == "Images" ? "modal-body-preview" : ""} toggle={this.modalPreview} isOpen={this.state.togglePreview.toggle} imgFile={this.props.path}/>
        </td>

        )
    }
}

export default ImageComponent
