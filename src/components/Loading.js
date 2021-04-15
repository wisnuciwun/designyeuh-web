import React from 'react'
import loading from '../public/logo/loading.gif'

function Loading() {
    return (
        <div className="d-flex justify-content-center">
            <img className="vertical-center" src={loading} />
        </div>
    )
}

export default Loading
