import React from 'react'
import { Input, FormGroup, Label, Row } from 'reactstrap'
// import NumberFormat from 'react-number-format'


export default function InputField({title = "", value, name, onChange, type = "text", width = "200px", disabled = false, textAlign = "left", addedIcon = "", addedOnClick, validator = "", format = "", placeholder = "", fontWeight = "bold"}) {

    return (
        <FormGroup>
            <Label style={{fontSize:"9pt", margin: "0px", color: 'black'}}>{title}</Label>
                <div className="d-flex justify-content-right">
                    {
                        // format == "number" ?
                        // <NumberFormat readOnly={true} className="custom-input" name={name} style={{fontWeight: fontWeight, width: width, borderWidth: "3px", textAlign: textAlign}} thousandSeparator={true} prefix={'Rp '} onChange={onChange} displayType="input" value={value} />
                        // :
                        <Input placeholder={placeholder} disabled={disabled} type={type} style={{fontWeight: fontWeight, width: width, borderWidth: "3px", textAlign: textAlign}} value={value} name={name} onChange={onChange}></Input>
                    }
                    &nbsp;&nbsp;
                    <i className={addedIcon} onClick={addedOnClick}></i>
                </div>
                {validator}
        </FormGroup>
    )
}
