import React from 'react'
import { Button, Card, CardBody, CardTitle } from 'reactstrap'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import { DOWNLOAD_TEMP } from '../constants/Constants'
import { Row } from 'react-bootstrap'
import ButtonIcons from './ButtonIcon'

function MaintenanceCard({title = '', data, columns, defaultPageSize = 5, onClickDownload, onClickUpload, downloadRef, uploadRef }) {
    return (
        <div style={{marginBottom: '20px'}}>
        <Card>
            <CardTitle style={{textAlign: 'left'}} tag="h3">{title}&nbsp;Maintenance</CardTitle>
            <Row style={{textAlign: 'right'}}>
                <CardBody >
                    <input ref={uploadRef} style={{visibility: "hidden"}} type="file" />
                    <a ref={downloadRef} style={{visibility: "hidden"}} href={DOWNLOAD_TEMP}></a>
                    <ButtonIcons color="dark" title="Download template" icon={<i class="fas fa-download"></i>} onClick={onClickDownload}/>
                    <ButtonIcons color="success" title="Insert file" icon={<i class="fas fa-upload"></i>}/>
                </CardBody>
            </Row>
            <ReactTable
            filterable
            className="text-center font-table -striped -highlight"
            data={data}
            columns={columns}
            defaultPageSize={defaultPageSize}
            />
        </Card>
    </div>
    )
}

export default MaintenanceCard
