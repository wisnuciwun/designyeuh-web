import { Dropdown } from 'bootstrap'
import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import ContentRow from '../../components/ContentRow';
import PictureGrid from '../../components/PictureGrid';
import Axios from '../../helpers/axios';
import FileImporter from '../../helpers/FileImporter';

class ImageCategory extends Component {
    
    render() {
        return (
            <PictureGrid url="Images/AllImages" purpose="image"/>
        )
    }
}

export default ImageCategory
