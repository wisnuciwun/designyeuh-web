import React, { Component } from 'react'
import { Button, Card, CardBody, CardTitle, Modal, ModalHeader, ModalBody } from 'reactstrap'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import { API_URL_GET_CONTRIBUTORS, API_URL_GET_DONATE, API_URL_GET_IMAGES, API_URL_GET_RESUMES, DOWNLOAD_TEMP } from '../../constants/Constants'
import Axios from '../../helpers/axios'
import { procContributorColumn, procDonateColumn, procImageColumn, procResumeColumn } from '../../constants/TableColumns'
import { Row } from 'react-bootstrap'
import ButtonIcons from '../../components/ButtonIcon'
import MaintenanceCard from '../../components/MaintenanceCard'
import InputField from '../../components/InputField'
import InputsModal from '../../components/InputsModal'

export class AdminHome extends Component {
    
    constructor(props) {
        super(props)
        this.downloadFile = React.createRef()
        this.uploadFile = React.createRef()
        this.state = {
            openModal: {
                type: '',
                isOpen: false
            },
            resumes: [],
            images: [],
            contributors: [],
            donations: [],
            users: [],
            selectedModal: {
                title: ['id', 'link', 'title', 'downloaded','uploadDate', 'author', 'filename'],
                value: ['', '', '', '', '', '', '']},
            resumeModal: {
                title: ['id', 'link', 'title', 'downloaded','uploadDate', 'author', 'filename'],
                value: ['', '', '', '', '', '', '']
            },
            imageModal: {
                title: ['id', 'link', 'title', 'downloaded','uploadDate', 'author', 'filename'],
                value: ['', '', '', '', '', '', '']
            },
            contributorModal: {
                title: ['id', 'link', 'title', 'downloaded','uploadDate', 'author', 'filename'],
                value: ['', '', '', '', '', '', '']
            },
            donationModal: {
                title: ['id', 'link', 'title', 'downloaded','uploadDate', 'author', 'filename'],
                value: ['', '', '', '', '', '', '']
            }
        }
    }

    onClickDownload = () => {
        this.downloadFile.current.click()
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
                break;
            case 'image':
                stateSet = this.state.imageModal
                break;
            case 'contributor':
                stateSet = this.state.contributorModal
                break;
            case 'donation':
                stateSet = this.state.donationModal
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

    putTableData = () => {
        let stateSet = this.procUpdateDataSwitchCase()
        let changedState = stateSet.value
        let jsonEntries = new Map()

        for (let i = 0; i < changedState.length; i++) {
            jsonEntries.set(stateSet.title[i], stateSet.value[i])             
        }

        let finalData = Object.fromEntries(jsonEntries)
        console.log("jsonnya", finalData)
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
        console.log("object", val)
        // await Axios.delete(``).then(this.getResumeList())
    }

    componentDidMount = () => {
        this.getResumeList()
        this.getImageList()
        this.getDonationList()
        this.getContributorList()
        this.procUpdateDataSwitchCase()
    }
    
    render() {
        let { resumes, images, donations, contributors, openModal, resumeModal } = this.state        

        let resumeColumn = procResumeColumn(this.delResume, this.onClickOpenModal)
        let imageColumn = procImageColumn(this.delResume, this.onClickOpenModal)
        let contributorColumn = procContributorColumn(this.delResume, this.onClickOpenModal)
        let donateColumn = procDonateColumn(this.delResume, this.onClickOpenModal)

        return (
            <div>
                <MaintenanceCard title='Resume' data={resumes} columns={resumeColumn} onClickDownload={this.onClickDownload} onClickUpload={this.onClickUpload} downloadRef={this.downloadFile} uploadRef={this.uploadFile}/>
                <MaintenanceCard title='Image' data={images} columns={imageColumn} onClickDownload={this.onClickDownload} onClickUpload={this.onClickUpload} downloadRef={this.downloadFile} uploadRef={this.uploadFile}/>
                <MaintenanceCard title='Contributor' data={contributors} columns={contributorColumn} onClickDownload={this.onClickDownload} onClickUpload={this.onClickUpload} downloadRef={this.downloadFile} uploadRef={this.uploadFile}/>
                <MaintenanceCard title='Donation' data={donations} columns={donateColumn} onClickDownload={this.onClickDownload} onClickUpload={this.onClickUpload} downloadRef={this.downloadFile} uploadRef={this.uploadFile}/>

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
