import React from 'react'
import Swal from 'sweetalert2'
import Axios from '../helpers/axios'

export function SuccesAlert(msg = "") {
    Swal.fire({
        titleText: "Success",
        icon: "success",
        text: msg,
        showConfirmButton: true
    })
}

export function ErrorAlert(msg) {
    Swal.fire({
        titleText: "Something wrong",
        text: msg,
        icon: "error",
        showConfirmButton: true
    })
}

export function QuestionAlert({msg = '', apiUrl, axiosCommand}) {
    Swal.fire({
        titleText: 'Are you sure ?',
        text: msg,
        showConfirmButton: true,
        showCancelButton: true,
        icon: 'question'
    }).then(async (res) => {
        if(res.value)
        {
            if(axiosCommand == 'delete')
            {
                await Axios.delete(apiUrl)
                .then(SuccesAlert())
                .catch(err => ErrorAlert(err))
            }
            else if(axiosCommand == 'post')
            {
                await Axios.post(apiUrl)
                .then(SuccesAlert())
                .catch(err => ErrorAlert(err))
            }
            else
            {
                ErrorAlert("Unknown request")
            }
        }
    })    
}