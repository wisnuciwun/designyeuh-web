import axios from 'axios'
import React, { Component } from 'react'
import { Dropdown } from 'react-bootstrap'
import { Tooltip } from 'reactstrap'
import Axios from '../helpers/axios'
import Preview from '../views/Modals/Preview'
import moment from 'moment'
import { API_URL_DOWNLOAD_IMAGES, API_URL_DOWNLOAD_RESUMES } from '../constants/Constants'
import ImageDownloadOptions from '../views/Modals/ImageDownloadOptions'

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
             },
             toggleImgOpt: false
        }
    }

    onClickDownload = async (val) => 
    {
        let url = `${API_URL_DOWNLOAD_RESUMES}?id=${this.props.imgid}`
        await Axios.post(url)

        window.open(val)
    }

    onClickModal = (value) => 
    {
        this.setState({
            togglePreview:{
                toggle: !this.state.togglePreview.toggle,
                imgFile: value
            }
        })
    }

    onClickModalImgOpt = () => 
    {
        this.setState({
            toggleImgOpt: !this.state.toggleImgOpt
        })
    }

    procInfo = () => 
    {
        this.setState({
            toggleInfo:{
                toggle: !this.state.toggleInfo.toggle,
            }
        })
    }

    onClickDownloadImage = async (value, filename) => {
        let url = `${API_URL_DOWNLOAD_IMAGES}?id=${this.props.imgid}`
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
        
        this.onClickModalImgOpt()
      }
    
    render() {
        return (
        <td className="btn-group dropright animate-screen slideIn-screen">
            <Dropdown>
                <Dropdown.Toggle variant="light" id="dropdown-basic">
                    <img alt={this.props.path} className="border-img center-cropped" style={{width: '150px', height:'225px'}} src={this.props.path} />
                </Dropdown.Toggle>
                <Dropdown.Menu className="img-dropdown animate-img slideIn-img">
                    <Dropdown.Item className="padding-item-dropdown btn btn-outline-danger btn-custom-color" onClick={() => {this.props.purpose == "Images" ?
                        this.onClickModal(this.props.downlink.link_Pc)
                        :
                        this.onClickModal(this.props.path)}}><i className="fas fa-eye"></i></Dropdown.Item>
                    <Dropdown.Item className="padding-item-dropdown btn-custom-color"><i className="fas fa-plus-circle"></i></Dropdown.Item>
                    <Dropdown.Item className="padding-item-dropdown btn-custom-color" onClick={() => { this.props.purpose == "Images" ? 
                        this.onClickModalImgOpt()
                        :
                        this.onClickDownload(this.props.downlink.link_Pc)}}><i className="far fa-save"></i></Dropdown.Item>
                    <Dropdown.Item className="padding-item-dropdown btn-custom-color" id="info" ><i className="fas fa-info"></i></Dropdown.Item>
                    
                    <Tooltip style={{textAlign: "left"}} placement="right" isOpen={this.state.toggleInfo.toggle} target="info" toggle={this.procInfo}>
                        {this.props.name}<br/>
                        {moment(this.props.date).format("DD-MM-YYYY")}<br/>
                        {this.props.author}<br/>
                    </Tooltip>
                </Dropdown.Menu>
            </Dropdown>
            <Preview purpose={this.props.purpose} className={this.props.purpose == "Images" ? "modal-body-preview" : ""} toggle={this.onClickModal} isOpen={this.state.togglePreview.toggle} imgFile={this.props.path} imgNm={this.props.name}/>
            <ImageDownloadOptions toggle={this.onClickModalImgOpt} onClickDownload={this.onClickDownloadImage} isOpen={this.state.toggleImgOpt} imgLinkPc={this.props.downlink.link_Pc} imgLinkMobile={this.props.downlink.link_Mobile} imgNm={this.props.name}/>
        </td>

        )
    }
}

export default ImageComponent
