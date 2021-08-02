import moment from 'moment'
import React from 'react'
import { Link } from 'react-router-dom'
import ButtonIcons from '../components/ButtonIcon'

export function procResumeColumn(onClickDelete, onClickOpenModal) {
    let data = 
    [
        {
            Header: 'Id',
            accessor: 'id',
            minWidth: 130,
            Cell: props => <span>{props.value}</span>
        },
        {
            Header: 'Downloads',
            accessor: 'downloaded',
            minWidth: 80,
            Cell: props => <span>{props.value}</span>
        },
        {
            Header: 'Title',
            accessor: 'title',
            minWidth: 130,
            Cell: props => <span>{props.value}</span>

        },
        {
            Header: 'Author',
            accessor: 'author',
            minWidth: 130,
            Cell: props => <span>{props.value}</span>
        },
        {
            Header: 'Download Link',
            accessor: 'link',
            minWidth: 130,
            Cell: props => <Link>{props.value}</Link>
        },
        {
            Header: 'Display Image',
            accessor: 'filename',
            Cell: props => <Link>{props.value}</Link>
        },
        {
            Header: 'Upload Date',
            accessor: 'uploadDate',
            minWidth: 130,
            Cell: props => <span>{moment(props.value).format("DD-MM-YYYY")}</span>
        },
        {
            Header: '',
            filterable: false,
            minWidth: 60,
            accessor: 'id',
            Cell: props => <ButtonIcons onClick={() => onClickOpenModal('resume', props.value)} color="info" width="40px" icon={<i className="far fa-edit"></i>}/>
        }, 
        {
            Header: '',
            filterable: false,
            minWidth: 60,
            accessor: 'id',
            Cell: props => <ButtonIcons onClick={() => onClickDelete(props.value)} color="danger" width="40px" icon={<i className="fas fa-eraser"></i>}/>
        }, 
    ]
return data
}

export function procImageColumn(onClickDelete, onClickOpenModal) {
    let data = 
    [
        {
            Header: 'Id',
            accessor: 'id',
            minWidth: 130,
            Cell: props => <span>{props.value}</span>
        },
        {
            Header: 'Downloads',
            accessor: 'downloaded',
            minWidth: 80,
            Cell: props => <span>{props.value}</span>
        },
        {
            Header: 'Title',
            accessor: 'title',
            minWidth: 130,
            Cell: props => <span>{props.value}</span>

        },
        {
            Header: 'Author',
            accessor: 'author',
            minWidth: 130,
            Cell: props => <span>{props.value}</span>
        },
        {
            Header: 'Download Link PC',
            accessor: 'link',
            minWidth: 130,
            Cell: props => <Link>{props.value}</Link>
        },
        {
            Header: 'Download Link Mobile',
            accessor: 'link_Mobile',
            minWidth: 130,
            Cell: props => <Link>{props.value}</Link>
        },
        {
            Header: 'Display Image',
            accessor: 'filename',
            Cell: props => <Link>{props.value}</Link>
        },
        {
            Header: 'Upload Date',
            accessor: 'uploadDate',
            minWidth: 130,
            Cell: props => <span>{moment(props.value).format("DD-MM-YYYY")}</span>
        },
        {
            Header: '',
            filterable: false,
            minWidth: 60,
            accessor: 'id',
            Cell: props => <ButtonIcons onClick={() => onClickOpenModal('image', props.value)} color="info" width="40px" icon={<i className="far fa-edit"></i>}/>
        }, 
        {
            Header: '',
            filterable: false,
            minWidth: 60,
            accessor: 'id',
            Cell: props => <ButtonIcons onClick={() => onClickDelete(props.value)} color="danger" width="40px" icon={<i className="fas fa-eraser"></i>}/>
        }, 
    ]
return data
}

export function procContributorColumn(onClickDelete, onClickOpenModal) {
    let data = 
    [
        {
            Header: 'Id',
            accessor: 'id',
            minWidth: 130,
            Cell: props => <span>{props.value}</span>
        },
        {
            Header: 'Name',
            accessor: 'name',
            minWidth: 80,
            Cell: props => <span>{props.value}</span>
        },
        {
            Header: 'Profil Image',
            accessor: 'imgLink',
            minWidth: 130,
            Cell: props => <Link>{props.value}</Link>

        },
        {
            Header: 'Creation',
            accessor: 'creation',
            minWidth: 130,
            Cell: props => <span>{props.value}</span>
        },
        {
            Header: 'Instagram',
            accessor: 'instagram',
            minWidth: 130,
            Cell: props => <span>{props.value}</span>
        },
        {
            Header: 'Twitter',
            accessor: 'twitter',
            Cell: props => <span>{props.value}</span>
        },
        {
            Header: 'Facebook',
            accessor: 'facebook',
            minWidth: 130,
            Cell: props => <span>{props.value}</span>
        },
        {
            Header: 'Address',
            accessor: 'address',
            minWidth: 130,
            Cell: props => <span>{props.value}</span>
        },
        {
            Header: '',
            filterable: false,
            minWidth: 60,
            accessor: 'id',
            Cell: props => <ButtonIcons onClick={() => onClickOpenModal('contributor', props.value)} color="info" width="40px" icon={<i className="far fa-edit"></i>}/>
        }, 
        {
            Header: '',
            filterable: false,
            minWidth: 60,
            accessor: 'id',
            Cell: props => <ButtonIcons onClick={() => onClickDelete(props.value)} color="danger" width="40px" icon={<i className="fas fa-eraser"></i>}/>
        }, 
    ]
return data
}

export function procDonateColumn(onClickDelete, onClickOpenModal) {
    let data = 
    [
        {
            Header: 'Id',
            accessor: 'id',
            minWidth: 130,
            Cell: props => <span>{props.value}</span>
        },
        {
            Header: 'Image',
            accessor: 'imgLink',
            minWidth: 80,
            Cell: props => <Link>{props.value}</Link>
        },
        {
            Header: 'Payment Name',
            accessor: 'payment',
            minWidth: 130,
            Cell: props =>  <span>{props.value}</span>

        },
        {
            Header: '',
            filterable: false,
            minWidth: 60,
            accessor: 'id',
            Cell: props => <ButtonIcons onClick={() => onClickOpenModal('donation', props.value)} color="info" width="40px" icon={<i className="far fa-edit"></i>}/>
        }, 
        {
            Header: '',
            filterable: false,
            minWidth: 60,
            accessor: 'id',
            Cell: props => <ButtonIcons onClick={() => onClickDelete(props.value)} color="danger" width="40px" icon={<i className="fas fa-eraser"></i>}/>
        }, 
    ]
return data
}


export function procResumeInsert() {
    let data = [
        {
            Header: 'Title',
            accessor: 'title',
            minWidth: 150,
            Cell: props => <span>{props.value}</span>
        },
        {
            Header: 'Filename',
            accessor: 'filename',
            minWidth: 150,
            Cell: props => <span>{props.value}</span>
        },
        {
            Header: 'Download Link',
            accessor: 'link',
            minWidth: 150,
            Cell: props => <span>{props.value}</span>

        },
        {
            Header: 'Author',
            accessor: 'author',
            minWidth: 150,
            Cell: props => <span>{props.value}</span>
        },
    ]
    return data
}

export function procImageInsert() {
    let data = [
        {
            Header: 'Title',
            accessor: 'title',
            minWidth: 150,
            Cell: props => <span>{props.value}</span>
        },
        {
            Header: 'Filename',
            accessor: 'filename',
            minWidth: 150,
            Cell: props => <span>{props.value}</span>
        },
        {
            Header: 'Download Link',
            accessor: 'link',
            minWidth: 150,
            Cell: props => <span>{props.value}</span>

        },
        {
            Header: 'Author',
            accessor: 'author',
            minWidth: 150,
            Cell: props => <span>{props.value}</span>
        },
    ]
    return data
}

export function procContributorInsert() {
    let data = [
        {
            Header: 'Name',
            accessor: 'name',
            minWidth: 150,
            Cell: props => <span>{props.value}</span>
        },
        {
            Header: 'Instagram',
            accessor: 'instagram',
            minWidth: 150,
            Cell: props => <span>{props.value}</span>
        },
        {
            Header: 'Facebook',
            accessor: 'facebook',
            minWidth: 150,
            Cell: props => <span>{props.value}</span>

        },
        {
            Header: 'Twitter',
            accessor: 'twitter',
            minWidth: 150,
            Cell: props => <span>{props.value}</span>
        },
        {
            Header: 'Creation',
            accessor: 'creation',
            minWidth: 150,
            Cell: props => <span>{props.value}</span>

        },
        {
            Header: 'Image Link',
            accessor: 'imgLink',
            minWidth: 150,
            Cell: props => <span>{props.value}</span>
        },
        {
            Header: 'Address',
            accessor: 'address',
            minWidth: 150,
            Cell: props => <span>{props.value}</span>
        },
    ]
    return data
}

export function procDonateInsert() {
    let data = [
        {
            Header: 'Payment Name',
            accessor: 'payment',
            minWidth: 150,
            Cell: props => <span>{props.value}</span>
        },
        {
            Header: 'Image Link',
            accessor: 'imgLink',
            minWidth: 150,
            Cell: props => <span>{props.value}</span>
        },

    ]
    return data
}