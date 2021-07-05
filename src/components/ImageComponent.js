import axios from 'axios'
import React, { Component } from 'react'
import { Dropdown } from 'react-bootstrap'
import { ModalBody, Tooltip } from 'reactstrap'
import Axios from '../helpers/axios'
import Preview from '../views/Modals/Preview'
import moment from 'moment'
import { Modal } from 'bootstrap'
import ButtonIcons from './ButtonIcon'

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

    onClickDownload = async (val) => 
    {
        let url = `${this.props.purpose}/Downloaded?id=${this.props.imgid}`
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

    procInfo = (value) => 
    {
        this.setState({
            toggleInfo:{
                toggle: !this.state.toggleInfo.toggle,
            }
        })
    }

    onClickDownloadImage = async (value, filename) => {
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
        return (
        <td className="btn-group dropright animate-screen slideIn-screen">
            <Dropdown>
                <Dropdown.Toggle variant="light" id="dropdown-basic">
                    <img alt={this.props.path} className="border-img center-cropped" style={{width: '150px', height:'225px'}} src={this.props.path} />
                </Dropdown.Toggle>
                <Dropdown.Menu className="img-dropdown animate-img slideIn-img">
                    <Dropdown.Item className="padding-item-dropdown" onClick={() => {this.props.purpose == "Images" ?
                        this.onClickModal(this.props.downlink)
                        :
                        this.onClickModal(this.props.path)}}><i className="fas fa-eye"></i></Dropdown.Item>
                    <Dropdown.Item className="padding-item-dropdown"><i class="fas fa-heart"></i></Dropdown.Item>
                    <Dropdown.Item className="padding-item-dropdown" onClick={() => { this.props.purpose == "Images" ? 
                        this.onClickDownloadImage(this.props.downlink, this.props.name)
                        :
                        this.onClickDownload(this.props.downlink)}}><i class="far fa-save"></i></Dropdown.Item>
                    <Dropdown.Item className="padding-item-dropdown" id="info" ><i class="fas fa-info"></i></Dropdown.Item>
                    
            <Tooltip style={{textAlign: "left"}} placement="right" isOpen={this.state.toggleInfo.toggle} target="info" toggle={this.procInfo}>
            {this.props.name}<br/>
            {moment(this.props.date).format("DD-MM-YYYY")}<br/>
            {this.props.author}<br/>
            </Tooltip>
                </Dropdown.Menu>
            </Dropdown>
            <Preview purpose={this.props.purpose} class={this.props.purpose == "Images" ? "modal-body-preview" : ""} toggle={this.onClickModal} isOpen={this.state.togglePreview.toggle} imgFile={this.props.path} imgNm={this.props.name}/>
            {/* <Modal isOpen={true} >
                <ButtonIcons title="a" />
                <ButtonIcons title="b" />
            </Modal> */}
        </td>

        )
    }
}

export default ImageComponent
