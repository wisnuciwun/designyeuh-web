import React, { Component } from 'react'
import { Modal, ModalHeader } from 'reactstrap';
import { UserConsumer } from '../helpers/UserContext';
import ImageDownloadOptions from './Modals/ImageDownloadOptions';
import Preview from './Modals/Preview';

export default class MainModals extends Component {
    render() {
        let toggle = this.props.toggle
        return (
                <UserConsumer>
                    {
                        states => {
                            return(
                            <div>
                                <Modal toggle={toggle} isOpen={states.toggle}>
                                    <ModalHeader toggle={toggle}>{states.type}</ModalHeader>
                                    {
                                        {
                                            'Preview': <Preview/>,
                                            'ImgDownloadOpt': <ImageDownloadOptions/>
                                        }[states.type]
                                    }
                                </Modal>
                            </div>)
                        }
                    }

                </UserConsumer>
        )
    }
}
