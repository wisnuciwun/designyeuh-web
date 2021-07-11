import React from 'react'
import { Button, Card, CardBody, CardTitle, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import ButtonIcons from './ButtonIcon'
import InputField from './InputField'

function InputsModal({data = {}, onChange, openModal, toggle, putTableData}) {
    let inputs = []
    for (let i = 0; i < data.value.length; i++) {
        let values = <InputField title={data.title[i]} value={data.value[i]} name={i} onChange={onChange} />

        inputs.push(values)
    }
    return (
        <Modal isOpen={openModal.isOpen} toggle={() => toggle(openModal.type)}>
        <ModalHeader>
            Update Data System
        </ModalHeader>
        <ModalBody>
            {inputs}
        </ModalBody>
        <ModalFooter>
            <ButtonIcons color="success" onClick={putTableData} title="Submit" icon={<i className="fas fa-submit"></i>} />
        </ModalFooter>
    </Modal>
    )
}

export default InputsModal
