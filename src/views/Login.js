import React, { Component } from 'react'
import { Button, Card, Col, Image, InputGroup } from 'react-bootstrap'
import Campaign from '../components/Campaign';
import logo_big from '../public/logo/logo_big.png';
import welcome from '../public/logo/ok.jpg'

export default class Login extends Component {
    render() {
        return (
        <div className="app d-flex justify-content-center">
            <div className="vertical-center" style={{zIndex: "2"}}>
                <div style={{zIndex: "1", fontSize: "28pt", opacity: "20%", textAlign: "center", textAlignLast: "justify"}}>
                    <Campaign/>
                </div>
            </div>
            <div style={{zIndex: "3"}} className="vertical-center">
                <Card className="animate-screen slideIn-screen cstm login-card container">
                    <InputGroup className="vertical-center">
                        <Col style={{textAlign: 'left', padding: 0, marginLeft: 0}}>
                            <Image src={welcome} className="img-fluid rounded float-left" alt="Responsive image" style={{width: '500px', height: '470px', borderRadius: '5px'}} />
                        </Col>
                        <Col style={{textAlign: 'center', marginTop: '80px'}}>
                            <Image src={logo_big} id="logo-big"/>
                            <input type="text" className="input-margin form-control" placeholder="Username" aria-describedby="basic-addon1"/>
                            <input type="password" className="input-margin form-control" placeholder="Password" aria-describedby="basic-addon1"/>
                            <div style={{textAlign:'right', paddingTop: "10px"}}>
                                <a href="home"><Button style={{width: "100%"}} className="btn btn-danger">Sign In</Button></a>
                                <p>Need accout ? <a style={{cursor: 'pointer'}} className="text-red">Register here</a></p>
                            </div>
                        </Col>
                    </InputGroup>
                </Card>
            </div>
        </div>)
    }
}
