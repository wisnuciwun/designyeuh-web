import React, { Component } from 'react'
import 'react-table/react-table.css'
import { API_URL_DELETE_CONTRIBUTORS, API_URL_DELETE_DONATE, API_URL_DELETE_IMAGE, API_URL_DELETE_RESUME, API_URL_GET_CONTRIBUTORS,
API_URL_GET_DONATE, API_URL_GET_IMAGES, API_URL_GET_RESUMES, API_URL_POST_CONTRIBUTORS, API_URL_POST_DONATE, API_URL_POST_IMAGES,
API_URL_POST_RESUMES, API_URL_PUT_CONTRIBUTORS, API_URL_PUT_DONATE, API_URL_PUT_IMAGE, API_URL_PUT_RESUME, DOWNLOAD_TEMP_CONTRIBUTORS,
DOWNLOAD_TEMP_DONATE, DOWNLOAD_TEMP_IMAGES, DOWNLOAD_TEMP_RESUMES } from '../../constants/Constants'
import Axios from '../../helpers/axios'
import { procContributorColumn, procContributorInsert, procDonateColumn, procDonateInsert, procImageColumn, procResumeColumn, procResumeInsert } from '../../constants/TableColumns'
import MaintenanceCard from '../../components/MaintenanceCard'
import InputsModal from '../Modals/InputsModal'
import { ErrorAlert, QuestionAlert, SuccesAlert } from '../../components/Alerts'
import { ExcelRenderer } from 'react-excel-renderer';
import TableModal from '../Modals/TableModal'

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
            openModalTable: {
                isOpenResume: false,
                isOpenDonate: false,
                isOpenContribute: false,
                isOpenImage: false
            },
            url: '',
            modalUploadType: '',
            resumes: [],
            images: [],
            contributors: [],
            donations: [],
            users: [],
            readyToInsert: [],
            selectedType : {},
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
            },
            resumeInsert: {
                title: ['title','filename', 'link', 'author'],
                values: ['','','','']
            },
            imageInsert: {
                title: ['title','filename', 'link', 'author'],
                values: ['','','','']
            },
            contributorInsert: {
                title: ['name','instagram','facebook', 'twitter', 'creation', 'imgLink', 'address'],
                values: ['','','','','','','']
            },
            donateInsert: {
                title: ['payment','imgLink'],
                values: ['','']
            }
        }
    }

    procFileHandler = (event) => {
        let names = this.state.selectedType.title
        let values = this.state.selectedType.values
        
        let fileObj = event.target.files[0];
        this.onClickOpenModalUpload()
    
        ExcelRenderer(fileObj, (err, resp) => {
          if(err)
          {
            console.log(err);
          }
          else
          {
            for (let i = 1; i < resp.rows.length; i++) 
            {
                for (let z = 0; z < names.length; z++) { values[z] = resp.rows[i][z] }

                let jsonEntries = new Map()
                jsonEntries.set(names, values)                     
                let temp = Object.assign(...names.map((k, i) => ({[k]: values[i]})))
        
                this.setState(state => {
                    const readyToInsert = [...state.readyToInsert, temp];
                    temp = Object.assign(...names.map((k,i) => ({[k]: ''})))
                    return {readyToInsert, temp}
                })
            }
          }
        }, 
        event.target.value = '',
        this.setState({readyToInsert: []})
        )
      }

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

    onClickUpload = (type) => {
        let { resumeInsert, imageInsert, contributorInsert, donateInsert } = this.state
        let stateSet

        switch (type) {
            case "Resume":
                stateSet = resumeInsert
                break;
            case "Image":
                stateSet = imageInsert
                break;
            case "Contributor":
                stateSet = contributorInsert
                break;
            case "Donation":
                stateSet = donateInsert
                break;
            default:
                break;
        }
        
        this.setState({
            selectedType: stateSet,
            modalUploadType: type
        }, () => this.uploadFile.current.click())
    }

    onClickOpenModal = (val, id) => {
        this.setState({
            openModal: {
                type: val,
                isOpen: !this.state.openModal.isOpen
            }
        }, () => this.onChangeModalData(id))
    }

    onClickOpenModalUpload = () => {
        let { isOpenResume, isOpenDonate, isOpenImage, isOpenContribute } = this.state.openModalTable

        switch (this.state.modalUploadType) {
            case "Resume":
                this.setState({
                    openModalTable: {
                    isOpenResume: !isOpenResume
                },
                url: API_URL_POST_RESUMES
            })
            break;
            case "Image":
                this.setState({openModalTable: {
                    isOpenImage: !isOpenImage
                },
                url: API_URL_POST_IMAGES
            })
            break;
            case "Contributor":
                this.setState({openModalTable: {
                    isOpenContribute: !isOpenContribute
                },
                url: API_URL_POST_CONTRIBUTORS
            })
            break;
            case "Donation":
                this.setState({openModalTable: {
                    isOpenDonate: !isOpenDonate
                },
                url: API_URL_POST_DONATE
            })
            break;

            default:
            break;
        }
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

    onClickUploadData = async () => {
        let { url } = this.state
        let obj = this.state.readyToInsert

        await Axios.post(`${url}`, obj)
        .then(SuccesAlert())
        .catch(err => ErrorAlert(err))
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
        QuestionAlert({apiUrl:`${API_URL_DELETE_RESUME}?id=${val}`, axiosCommand:'delete'})
    }

    delImage = async (val) => {
        QuestionAlert({apiUrl:`${API_URL_DELETE_IMAGE}?id=${val}`, axiosCommand:'delete'})
    }

    delDonation = async (val) => {
        QuestionAlert({apiUrl:`${API_URL_DELETE_DONATE}?id=${val}`, axiosCommand:'delete'})
    }

    delContributor = (val) => {
        QuestionAlert({apiUrl:`${API_URL_DELETE_CONTRIBUTORS}?id=${val}`, axiosCommand:'delete'})
    }

    componentDidMount = () => {
        this.getResumeList()
        this.getImageList()
        this.getDonationList()
        this.getContributorList()
        this.procUpdateDataSwitchCase()
    }
    
    render() {
        let { resumes, images, donations, contributors, openModal, fileDownload, readyToInsert, openModalTable } = this.state

        let resumeColumn = procResumeColumn(this.delResume, this.onClickOpenModal)
        let imageColumn = procImageColumn(this.delImage, this.onClickOpenModal)
        let contributorColumn = procContributorColumn(this.delContributor, this.onClickOpenModal)
        let donateColumn = procDonateColumn(this.delDonation, this.onClickOpenModal)

        let resumeInsertColumn = procResumeInsert()
        let donateInsertColumn = procDonateInsert()
        let contributorInsertColumn = procContributorInsert()
        let donationInsertColumn = procDonateInsert()

        let tableTitles = ['Resume', 'Image', 'Contributor', 'Donation']
        let tableData = [resumes, images, contributors, donations]
        let uploadDataColumns = [resumeInsertColumn, donateInsertColumn, contributorInsertColumn, donationInsertColumn]
        let modalUploadToggles = [openModalTable.isOpenResume, openModalTable.isOpenImage, openModalTable.isOpenContribute, openModalTable.isOpenDonate]
        let columns = [resumeColumn, imageColumn, contributorColumn, donateColumn]

        let MaintenanceCardArray = []
        let tableModalArray = []

        for (let i = 0; i < tableTitles.length; i++) {
            MaintenanceCardArray.push(<MaintenanceCard onChangeUpload={this.procFileHandler} onClickDownload={this.onClickDownload} onClickUpload={this.onClickUpload} downloadRef={this.downloadFile} uploadRef={this.uploadFile} fileDownload={fileDownload} title={tableTitles[i]} data={tableData[i]} columns={columns[i]} />)
        }

        for (let j = 0; j < tableTitles.length; j++) {
            tableModalArray.push(<TableModal isOpen={modalUploadToggles[j]} toggle={this.onClickOpenModalUpload} columns={uploadDataColumns[j]} data={readyToInsert} onClickUpload={this.onClickUploadData} />)            
        }

        return (
            <div>
                {MaintenanceCardArray}
                <InputsModal 
                toggle={this.onClickOpenModal}
                openModal={openModal}
                data={this.state.selectedModal}
                onChange={this.onChangeModalValues}
                putTableData={this.putTableData}
                />
                {tableModalArray}
            </div>
        )
    }
}

export default AdminHome
