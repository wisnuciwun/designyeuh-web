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

    modalPreview = (event) => 
    {
        this.setState({
            togglePreview:{
                toggle: !this.state.togglePreview.toggle,
                imgFile: event.target.value
            }
        })
    }
    
    render() {
        return (
        <td className="btn-group dropright animate-screen slideIn-screen">
            <Dropdown>
                <Dropdown.Toggle variant="light" id="dropdown-basic">
                    <img alt={this.props.path} className="border-img" style={{width: '150px', height:'225px'}} src={this.props.path} />
                </Dropdown.Toggle>
                <Dropdown.Menu className="img-dropdown animate-img slideIn-img">
                    <Dropdown.Item onClick={this.modalPreview}><i className="fas fa-eye"></i></Dropdown.Item>
                    <Dropdown.Item ><i class="fas fa-heart"></i></Dropdown.Item>
                    <Dropdown.Item onClick={() => this.executeDownload(this.props.downlink)}><i class="far fa-save"></i></Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <Preview toggle={this.modalPreview} isOpen={this.state.togglePreview.toggle} imgFile={this.props.path} imgName={this.props.name} />
        </td>

        )
    }
}

export default ImageComponent
