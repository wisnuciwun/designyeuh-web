import React from 'react'
import { ModalBody } from 'reactstrap'

function Terms() {
    return (
        <div className="fadeIn-screen">
            <h2>Terms & Conditions</h2><br/><br/>
            <div className="d-flex justify-content-center"> 
                <p style={{width: '66%', textAlignLast: 'left', textAlign: 'justify'}}>
                    Designyeuh allows you to :<br/>
                    1. Edit and customize all of our contents. Including fonts, shapes, background, icons, etc.<br/> 
                    2. Share links or contents to anyone<br/> 
                    3. Give comments and suggestion<br/>
                    4. Request any custom design (with additional fee)<br/>
                    <br/>
                    Designyeuh forbids you to :<br/>
                    1. Re-upload our original or customized contents for individual purpose. Especially if it's for sale<br/>
                    2. Hijack, spoil and spam to our email, social media and website.<br/>
                </p>
            </div>
        </div>
    )
}

export default Terms
