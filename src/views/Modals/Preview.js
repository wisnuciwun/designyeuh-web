import React, { Component } from 'react'
import { Modal, ModalBody, ModalHeader } from 'reactstrap';


class Preview extends Component {
    render() {
        return(
            <Modal centered className={this.props.class} toggle={this.props.toggle} isOpen={this.props.isOpen}>
                <i style={{ cursor: "pointer", textAlign: "right", margin: "5px"}} onClick={this.props.toggle} class="far fa-times-circle"></i>
                <div style={{padding: "5px"}} >
                    <img style={{height: "100%", width: "100%"}} src={this.props.imgFile}/>
                </div>
            </Modal>        
        )
    }
}

export default Preview
