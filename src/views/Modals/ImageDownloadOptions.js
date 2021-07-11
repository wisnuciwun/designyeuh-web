import React, { Component } from 'react'
import { Row } from 'react-bootstrap';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import ButtonIcons from '../../components/ButtonIcon';

class ImageDownloadOptions extends Component {
    render() {
        return(
            <Modal centered toggle={this.props.toggle} isOpen={this.props.isOpen}>
                <ModalHeader className="d-flex justify-content-center">Download Options</ModalHeader>
                <ModalBody className="d-flex justify-content-center"> 
                    <Row>
                        <ButtonIcons disabled={this.props.imgLinkPc == null ? true : false} onClick={() => this.props.onClickDownload(this.props.imgLinkPc, this.props.imgNm)} fontSize="12pt" title="1920x1080" textColor="black" icon={<i class="fas fa-desktop"></i>} />
                        <ButtonIcons disabled={this.props.imgLinkMobile == null ? true : false} onClick={() => this.props.onClickDownload(this.props.imgLinkMobile, this.props.imgNm)} fontSize="12pt" title="1440x2560" textColor="black" icon={<i class="fas fa-mobile-alt"></i>} />
                    </Row>
                </ModalBody>
            </Modal>        
        )
    }
}

export default ImageDownloadOptions
