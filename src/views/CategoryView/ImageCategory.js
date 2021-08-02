import React, { Component } from 'react'
import PictureGrid from '../../components/PictureGrid';
import { API_URL_ALL_IMAGES, API_URL_PAGES_IMAGES } from '../../constants/Constants';

class ImageCategory extends Component {
    
    render() {
        return (
            <PictureGrid url={API_URL_ALL_IMAGES} page={API_URL_PAGES_IMAGES} purpose="Images"/>
        )
    }
}

export default ImageCategory

