import React, { Component } from 'react'
import { Modal, ModalBody, ModalHeader } from 'reactstrap';

class Preview extends Component {
    render() {
        return(
            <Modal centered className={this.props.class} toggle={this.props.toggle} isOpen={this.props.isOpen}>
                <span className="d-flex justify-content-between"><span style={{ textAlign: "left", margin: "5px"}}>{this.props.imgNm}</span><i style={{ cursor: "pointer", textAlign: "right", margin: "5px"}} onClick={this.props.toggle} className="far fa-times-circle"></i></span>
                <div style={{padding: "5px"}} >
                    {
                        this.props.purpose == "Images" ?
                        <img style={{objectFit: 'contain'}} className="responsive" src={this.props.imgFile}/>
                        :
                        <img style={{width: "100%", height:"auto"}} src={this.props.imgFile}/>
                    }
                </div>
            </Modal>        
        )
    }
}

export default Preview
