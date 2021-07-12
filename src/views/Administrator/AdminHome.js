import React, { Component } from 'react'
import { Button, Card, CardBody, CardTitle, Modal, ModalHeader, ModalBody } from 'reactstrap'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import { API_URL_DELETE_CONTRIBUTORS, API_URL_DELETE_DONATE, API_URL_DELETE_IMAGE, API_URL_DELETE_RESUME, API_URL_GET_CONTRIBUTORS, API_URL_GET_DONATE, API_URL_GET_IMAGES, API_URL_GET_RESUMES, API_URL_PUT_CONTRIBUTORS, API_URL_PUT_DONATE, API_URL_PUT_IMAGE, API_URL_PUT_RESUME, DOWNLOAD_TEMP_CONTRIBUTORS, DOWNLOAD_TEMP_DONATE, DOWNLOAD_TEMP_IMAGES, DOWNLOAD_TEMP_RESUMES } from '../../constants/Constants'
import Axios from '../../helpers/axios'
import { procContributorColumn, procDonateColumn, procImageColumn, procResumeColumn } from '../../constants/TableColumns'
import { Row } from 'react-bootstrap'
import ButtonIcons from '../../components/ButtonIcon'
import MaintenanceCard from '../../components/MaintenanceCard'
import InputField from '../../components/InputField'
import InputsModal from '../../components/InputsModal'
import Loading from '../../components/Loading'
import { ErrorAlert, SuccesAlert } from '../../components/Alerts'
import { ExcelRenderer } from 'react-excel-renderer';

export class AdminHome extends Component {
    
    constructor(props) {
        super(props)
        this.downloadFile = React.createRef()
        this.uploadFile = React.createRef()
        this.state = {
            fileDownload: '',
            openModal: {
                type: '',
                isOpen: false
            },
            url: '',
            resumes: [],
            images: [],
            contributors: [],
            donations: [],
            users: [],
            selectedModal: {
                title: ['id', 'link', 'title', 'downloaded','uploadDate', 'author', 'filename'],
                value: ['', '', '', '', '', '', '']
            },
            resumeModal: {
                title: ['id', 'uploadDate', 'link', 'downloaded','author', 'filename', 'title'],
                value: ['', '', '', '', '', '', '']
            },
            imageModal: {
                title: ['id', 'uploadDate', 'link_Mobile', 'link_Pc', 'downloaded', 'author', 'filename', 'title'],
                value: ['', '', '', '', '', '', '', '']
            },
            contributorModal: {
                title: ['id', 'name', 'instagram', 'facebook', 'twitter', 'creation', 'imgLink', 'address'],
                value: ['', '', '', '', '', '', '', '']
            },
            donationModal: {
                title: ['id', 'payment', 'imgLink'],
                value: ['', '', '',]
            }
        }
    }

    // procFileHandler = (event) => {
    //     let fileObj = event.target.files[0];
    
    //     ExcelRenderer(fileObj, (err, resp) => {
    //       if(err){
    //         console.log(err);
    //       }
    
    //       else{
    //         if(resp.cols.length == 6)
    //         {
    //           for (let i = 2; i < resp.rows.length; i++) {
    //             let temp = {
    //               brand: resp.rows[i][1],
    //               jumlah: resp.rows[i][3],
    //               lokasi: resp.rows[i][4],
    //               tahunUnit: resp.rows[i][2],
    //               unitType: resp.rows[i][0],
    //               statusPinjam: resp.rows[i][5]
    //             }
    
    //             if (temp.brand != null && temp.jumlah != null && temp.lokasi != null && temp.tahunUnit != null
    //               && temp.unitType != null && temp.statusPinjam != null)
    //             {
    //             this.setState(state => {
    //               const populasiUnit = [...state.populasiUnit, temp];
    //               return {
    //                 populasiUnit,
    //                 temp: {
    //                   brand: '',
    //                   jumlah: '',
    //                   lokasi: '',
    //                   tahunUnit: '',
    //                   unitType: '',
    //                   statusPinjam: ''
    //                 }
    //               };
    
    //             });
    //             }
    //           }
    //         }else {
    //           Swal.fire({
    //             type: 'warning',
    //             title: 'Oops...',
    //             text: 'Template Tidak Sesuai!',
    //           })
    
    //         }
    
    //       }
    //     }, event.target.value = ''
    //     );
    
    //   }
    

    onClickDownload = (val) => {

        switch (val) {
            case 'Resume':
                this.setState({fileDownload: DOWNLOAD_TEMP_RESUMES})
                break;
            case 'Image':
                this.setState({fileDownload: DOWNLOAD_TEMP_IMAGES})
                break;
            case 'Contributor':
                this.setState({fileDownload: DOWNLOAD_TEMP_CONTRIBUTORS})
                break;
            case 'Donation':
                this.setState({fileDownload: DOWNLOAD_TEMP_DONATE})
                break;
        
            default:
                break;
        }

        setTimeout(() => {
            this.downloadFile.current.click()
        }, 1000);
    }

    onClickUpload = () => {
        this.uploadFile.current.click()
    }

    onClickOpenModal = (val, id) => {
        this.setState({
            openModal: {
                type: val,
                isOpen: !this.state.openModal.isOpen
            }
        }, () => this.onChangeModalData(id))
    }

    procUpdateDataSwitchCase = () => {
        let stateSet
        switch (this.state.openModal.type) {
            case 'resume':
                stateSet = this.state.resumeModal
                this.setState({url: API_URL_PUT_RESUME})
                break;
            case 'image':
                stateSet = this.state.imageModal
                this.setState({url: API_URL_PUT_IMAGE})
                break;
            case 'contributor':
                stateSet = this.state.contributorModal
                this.setState({url: API_URL_PUT_CONTRIBUTORS})
                break;
            case 'donation':
                stateSet = this.state.donationModal
                this.setState({url: API_URL_PUT_DONATE})
                break;

            default:
                stateSet = this.state.resumeModal
                break;
        }

        this.setState({selectedModal: stateSet})
        return stateSet
    }

    onChangeModalData = (id) => {
        if(id != null)
        {
            let findId
            let stateSet = this.procUpdateDataSwitchCase()
            let newValue
            let bigData

            switch (this.state.openModal.type) {
                case 'resume':
                    bigData = this.state.resumes
                    break;
                case 'image':
                    bigData = this.state.images
                    break;
                case 'contributor':
                    bigData = this.state.contributors
                    break;
                case 'donation':
                    bigData = this.state.donations
                    break;

                default:
                    break;
            }

            findId = bigData.find(x => x.id == id)
            newValue = Object.values(findId)
    
            for (let i = 0; i < stateSet.value.length; i++) {
                stateSet.value[i] = newValue[i]
                this.setState({
                    stateSet: {
                        ...stateSet,
                        value: stateSet.value
                    }
                })
            }
        }
    }

    onChangeModalValues = (e) => {
        let newValue = e.target.value
        let arrayIdx = e.target.name
        let stateSet = this.procUpdateDataSwitchCase()
        let changedState = stateSet.value

        changedState[arrayIdx] = newValue

        this.setState({
            stateSet: {
                ...stateSet,
                value: changedState
            }
        })        
    }

    putTableData = async () => {
        let { url } = this.state
        let stateSet = this.procUpdateDataSwitchCase()
        let changedState = stateSet.value
        let jsonEntries = new Map()

        for (let i = 0; i < changedState.length; i++) {
            jsonEntries.set(stateSet.title[i], stateSet.value[i])             
        }

        let finalData = Object.fromEntries(jsonEntries)

        await Axios.put(`${url}?id=${finalData.id}`, finalData)
        .then(SuccesAlert())
        .catch((err) => ErrorAlert(err))
    }

    getResumeList = async () => {
        await Axios.get(`${API_URL_GET_RESUMES}`)
        .then(res => this.setState({...this.state, resumes: res.data}))
    }

    getImageList = async () => {
        await Axios.get(`${API_URL_GET_IMAGES}`)
        .then(res => this.setState({...this.state, images: res.data}))
    }

    getDonationList = async () => {
        await Axios.get(`${API_URL_GET_DONATE}`)
        .then(res => this.setState({...this.state, donations: res.data}))
    }

    getContributorList = async () => {
        await Axios.get(`${API_URL_GET_CONTRIBUTORS}`)
        .then(res => this.setState({...this.state, contributors: res.data}))
    }

    delResume = async (val) => {
        await Axios.delete(`${API_URL_DELETE_RESUME}?id=${val}`)
        .then(SuccesAlert())
        .catch(err => ErrorAlert(err))
    }

    delImage = async (val) => {
        await Axios.delete(`${API_URL_DELETE_IMAGE}?id=${val}`)
        .then(SuccesAlert())
        .catch(err => ErrorAlert(err))
    }

    delDonation = async (val) => {
        await Axios.delete(`${API_URL_DELETE_DONATE}?id=${val}`)
        .then(SuccesAlert())
        .catch(err => ErrorAlert(err))
    }

    delContributor = async (val) => {
        await Axios.delete(`${API_URL_DELETE_CONTRIBUTORS}?id=${val}`)
        .then(SuccesAlert())
        .catch(err => ErrorAlert(err))
    }

    componentDidMount = () => {
        this.getResumeList()
        this.getImageList()
        this.getDonationList()
        this.getContributorList()
        this.procUpdateDataSwitchCase()
    }
    
    render() {
        let { resumes, images, donations, contributors, openModal, fileDownload } = this.state        

        let resumeColumn = procResumeColumn(this.delResume, this.onClickOpenModal)
        let imageColumn = procImageColumn(this.delImage, this.onClickOpenModal)
        let contributorColumn = procContributorColumn(this.delContributor, this.onClickOpenModal)
        let donateColumn = procDonateColumn(this.delDonation, this.onClickOpenModal)

        return (
            <div>
                <MaintenanceCard onClickDownload={this.onClickDownload} onClickUpload={this.onClickUpload} downloadRef={this.downloadFile} uploadRef={this.uploadFile} fileDownload={fileDownload} title='Resume' data={resumes} columns={resumeColumn} />
                <MaintenanceCard onClickDownload={this.onClickDownload} onClickUpload={this.onClickUpload} downloadRef={this.downloadFile} uploadRef={this.uploadFile} fileDownload={fileDownload} title='Image' data={images} columns={imageColumn} />
                <MaintenanceCard onClickDownload={this.onClickDownload} onClickUpload={this.onClickUpload} downloadRef={this.downloadFile} uploadRef={this.uploadFile} fileDownload={fileDownload} title='Contributor' data={contributors} columns={contributorColumn} />
                <MaintenanceCard onClickDownload={this.onClickDownload} onClickUpload={this.onClickUpload} downloadRef={this.downloadFile} uploadRef={this.uploadFile} fileDownload={fileDownload} title='Donation' data={donations} columns={donateColumn} />

                <InputsModal 
                toggle={this.onClickOpenModal}
                openModal={openModal}
                data={this.state.selectedModal}
                onChange={this.onChangeModalValues}
                putTableData={this.putTableData}
                />
            </div>
        )
    }
}

export default AdminHome
