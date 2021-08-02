import React, { Component } from 'react'
import PictureGrid from '../../components/PictureGrid';
import { API_URL_ALL_RESUMES, API_URL_PAGES_RESUMES } from '../../constants/Constants';

class ResumeCategory extends Component {
    
    render() {
        return (
            <PictureGrid url={API_URL_ALL_RESUMES} page={API_URL_PAGES_RESUMES} purpose="Resumes"/>
        )
    }
}

export default ResumeCategory
