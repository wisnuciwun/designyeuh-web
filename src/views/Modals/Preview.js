import React, { Component } from 'react'
import { Modal, ModalBody, ModalHeader } from 'reactstrap';

class Preview extends Component {
    render() {
        const conf = {width: 400, height: 250, zoomWidth: 500, img: this.props.imgFile, zoomPosition: 'original'};
        return(
            <Modal centered className={this.props.class} toggle={this.props.toggle} isOpen={this.props.isOpen}>
                <span className="d-flex justify-content-between"><span style={{ textAlign: "left", margin: "5px"}}>{this.props.imgNm}</span><i style={{ cursor: "pointer", textAlign: "right", margin: "5px"}} onClick={this.props.toggle} class="far fa-times-circle"></i></span>
                <div style={{padding: "5px"}} >
                    {
                        this.props.purpose == "Images" ?
                        <img className="center-cropped responsive" src={this.props.imgFile}/>
                        :
                        <img style={{width: "100%", height:"auto"}} src={this.props.imgFile}/>
                    }
                    
                </div>
            </Modal>        
        )
    }
}

export default Preview
