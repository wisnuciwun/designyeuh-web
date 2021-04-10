import React, { Component } from 'react'
import { Modal, ModalBody, ModalHeader } from 'reactstrap';


class Preview extends Component {
    render() {
        return (
            <Modal centered className="modal-body-preview" toggle={this.props.toggle} isOpen={this.props.isOpen}>
                <ModalHeader toggle={this.props.toggle}>{this.props.imgName}</ModalHeader>
                <ModalBody className="d-flex justify-content-center">
                    <img className="border-img" style={{width: "450px"}} src={this.props.imgFile}/>
                </ModalBody>
            </Modal>
        )
    }
}

export default Preview
