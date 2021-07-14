import React from 'react'
import { Input, FormGroup, Label } from 'reactstrap'

export default function InputField({title = "", value, name, onChange, type = "text", width = "200px", disabled = false,
textAlign = "left", addedIcon = "", addedOnClick, validator = "", placeholder = "", fontWeight = "bold"}) {

    return (
        <FormGroup>
            <Label style={{fontSize:"9pt", margin: "0px", color: 'black'}}>{title}</Label>
                <div className="d-flex justify-content-right">
                    {
                        <Input placeholder={placeholder} disabled={disabled} type={type} 
                        style={{fontWeight: fontWeight, width: width, borderWidth: "3px", textAlign: textAlign}}
                        value={value} name={name} onChange={onChange}>
                        </Input>
                    }
                    &nbsp;&nbsp;
                    <i className={addedIcon} onClick={addedOnClick}></i>
                </div>
                {validator}
        </FormGroup>
    )
}
