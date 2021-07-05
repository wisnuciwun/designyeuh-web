import { Dropdown } from 'bootstrap'
import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import ContentRow from '../../components/ContentRow';
import PictureGrid from '../../components/PictureGrid';
import { API_URL_ALL_IMAGES, API_URL_PAGES_IMAGES } from '../../constants/Constants';
import Axios from '../../helpers/axios';
import FileImporter from '../../helpers/FileImporter';

class ImageCategory extends Component {
    
    render() {
        return (
            <PictureGrid url={API_URL_ALL_IMAGES} page={API_URL_PAGES_IMAGES} purpose="Images"/>
        )
    }
}

export default ImageCategory
