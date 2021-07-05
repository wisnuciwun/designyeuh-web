import { Dropdown } from 'bootstrap'
import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import ContentRow from '../../components/ContentRow';
import PictureGrid from '../../components/PictureGrid';
import { API_URL_ALL_RESUMES, API_URL_PAGES_RESUMES } from '../../constants/Constants';
import Axios from '../../helpers/axios';
import FileImporter from '../../helpers/FileImporter';

class ResumeCategory extends Component {
    
    render() {
        return (
            <PictureGrid url={API_URL_ALL_RESUMES} page={API_URL_PAGES_RESUMES} purpose="Resumes"/>
        )
    }
}

export default ResumeCategory
