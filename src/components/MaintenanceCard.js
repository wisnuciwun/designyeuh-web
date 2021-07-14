import React from 'react'
import { Card, CardBody, CardTitle } from 'reactstrap'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import ButtonIcons from './ButtonIcon'

function MaintenanceCard({title = '', data, columns, defaultPageSize = 5, onClickDownload, onClickUpload, downloadRef, uploadRef, fileDownload, onChangeUpload }) {
    return (
        <div style={{marginBottom: '20px'}}>
            <input ref={uploadRef} onChange={onChangeUpload} style={{visibility: "hidden"}} type="file" />
            <a ref={downloadRef} style={{visibility: "hidden"}} href={fileDownload}></a>
            <Card style={{padding: "10px"}}>
                <CardTitle className="d-flex justify-content-center d-lg-none" style={{padding: '10px'}}>
                    <div>
                        <h3>{title}&nbsp;Maintenance </h3>
                        <div>
                            <ButtonIcons color="dark" title="Download template" icon={<i class="fas fa-download"></i>} onClick={() => onClickDownload(title)}/>
                            <ButtonIcons color="success" title="Insert file" icon={<i class="fas fa-upload"></i>} onClick={() => onClickUpload(title)} />
                        </div>
                    </div>
                </CardTitle>
                <CardTitle className="justify-content-between d-none d-lg-flex" style={{padding: '10px'}}>
                    <h3>{title}&nbsp;Maintenance </h3>
                    <div>
                        <ButtonIcons color="dark" title="Download template" icon={<i class="fas fa-download"></i>} onClick={() => onClickDownload(title)}/>
                        <ButtonIcons color="success" title="Insert file" icon={<i class="fas fa-upload"></i>} onClick={() => onClickUpload(title)} />
                    </div>
                </CardTitle>
                <CardBody>
                <ReactTable
                filterable
                className="text-center font-table -striped -highlight"
                data={data}
                columns={columns}
                defaultPageSize={defaultPageSize}
                />
                </CardBody>
            </Card>
    </div>
    )
}

export default MaintenanceCard
