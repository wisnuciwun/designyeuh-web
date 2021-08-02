import jwtDecode from 'jwt-decode';
import Axios from '../../helpers/axios';
import * as actionTypes from './actionTypes';
import Cookies from 'js-cookie'
import { ErrorAlert } from '../../components/Alerts';

// import React from 'react'


/*
We are exporting thegetData function. This function will be called from our component to fetch the data from the server 
(therefore we must export it from this file). Then with axios, we are sending the GET request. 
If it is successful we are dispatching the getDataSuccess function which returns an object for the reducer file to use. 
*/

export const getLoginData = (data) => {

    let usedData

    if(data == null)
    {
        usedData = usedData = {name: 'Guest', role: null}
        Cookies.remove('token')
    }
    else{
        Cookies.set('token', data)
        let extracted = jwtDecode(Cookies.get('token'))    
    
        let name = 'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'
        usedData = {name: extracted[name], role: extracted.aud}
    }

    return{
        type: actionTypes.USER_LOGGED_DATA,
        data: usedData,
    }
}

export const getResumes = (data) => {
    return{
        type: actionTypes.RESUME_DATA,
        data: data,
    }
}

export const getImages = (data) => {
    return{
        type: actionTypes.IMAGE_DATA,
        data: data,
    }
}

export const getContributors = (data) => {
    return{
        type: actionTypes.CONTRIBUTOR_DATA,
        data: data,
    }
}

export const getDonations = (data) => {
    return{
        type: actionTypes.DONATION_DATA,
        data: data,
    }
}
