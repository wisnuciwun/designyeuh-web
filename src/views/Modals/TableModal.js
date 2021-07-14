import React from 'react'
import { Button, Card, CardBody, CardTitle, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import { Row } from 'react-bootstrap'
import ButtonIcons from '../../components/ButtonIcon'

function TableModal({data, columns, defaultPageSize = 5, toggle, isOpen, onClickUpload }) {
    return (
            <Modal centered isOpen={isOpen} toggle={toggle} style={{padding: "10px"}} >
                <ModalHeader toggle={toggle} style={{padding: '10px'}}>
                    Insert File System
                </ModalHeader>
                <ModalBody>
                <ReactTable
                filterable
                className="text-center font-table -striped -highlight"
                data={data}
                columns={columns}
                defaultPageSize={defaultPageSize}
                />
                </ModalBody>
                <ModalFooter>
                <ButtonIcons onClick={onClickUpload} title="submit" color="success" />
                </ModalFooter>
            </Modal>
    )
}

export default TableModal
