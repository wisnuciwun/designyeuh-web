import React from 'react'
import Swal from 'sweetalert2'

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