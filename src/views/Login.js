import React, { Component } from 'react'
import { Button, Card, Col, Image, InputGroup } from 'react-bootstrap'
import ReactDatePicker from 'react-datepicker';
import Campaign from '../components/Campaign';
import { NATIONALITIES } from '../constants/Constants';
import logo_big from '../public/logo/logo_big.png';
import welcome from '../public/logo/ok.jpg'
import "react-datepicker/dist/react-datepicker.css";
import { Row } from 'reactstrap';

export default class Login extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             hidelogin: false,
             hideregister: true
        }
    }

    onChangeLoginMenu = () => {
        this.setState({
            hidelogin: !this.state.hidelogin,
            hideregister: !this.state.hideregister
        })
    }
    
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
                            <Image src={welcome} className="img-fluid rounded float-left center-cropped" alt="Responsive image" style={{width: '500px', height: '470px', borderRadius: '5px'}} />
                        </Col>
                        <Col hidden={this.state.hidelogin} style={{textAlign: 'center', marginTop: '80px'}}>
                            <Image src={logo_big} id="logo-big"/>
                            <input type="text" className="input-margin form-control" placeholder="Username" aria-describedby="basic-addon1"/>
                            <input type="password" className="input-margin form-control" placeholder="Password" aria-describedby="basic-addon1"/>
                            <div style={{textAlign:'right', paddingTop: "10px"}}>
                                <span>
                                    <a href="home"><Button style={{width: "50%"}} className="btn btn-danger"><i class="fas fa-sign-in-alt"></i>&nbsp;&nbsp;Sign In</Button></a>
                                    <a href="home"><Button style={{width: "47%", marginLeft: '10px'}} className="btn btn-danger"><i class="fas fa-home"></i>&nbsp;&nbsp;Homepage</Button></a>
                                </span>
                                <p style={{marginTop: '5px'}}>Need account ? <a onClick={this.onChangeLoginMenu} style={{cursor: 'pointer', color: "red"}} >Register here</a></p>
                            </div>
                        </Col>
                        <Col hidden={this.state.hideregister} style={{textAlign: 'center'}}>
                            <h4>Create new user</h4>
                            <input type="text" className="input-margin form-control" placeholder="Username" aria-describedby="basic-addon1"/>
                            <select className="input-margin form-control">
                                {
                                    NATIONALITIES.map(x => {return(<option>{x}</option>)})
                                }
                            </select>
                            <ReactDatePicker
                            className="input-margin form-control"
                            placeholderText="Born Date"
                            />
                            <input type="text" className="input-margin form-control" placeholder="Work" aria-describedby="basic-addon1"/>
                            <input type="text" className="input-margin form-control" placeholder="Email" aria-describedby="basic-addon1"/>
                            <input type="password" className="input-margin form-control" placeholder="Password" aria-describedby="basic-addon1"/>
                            <div style={{textAlign:'right', paddingTop: "10px"}}>
                                <a href="home"><Button style={{width: "100%", marginBottom: '10px'}} className="btn btn-success"><i class="fas fa-user-plus"></i>&nbsp;&nbsp;Register & Sign In</Button></a>
                                <br/>
                                <a><Button style={{width: "100%"}} onClick={this.onChangeLoginMenu} className="btn btn-danger"><i class="fas fa-ban"></i>&nbsp;&nbsp;Cancel</Button></a>
                            </div>
                        </Col>
                    </InputGroup>
                </Card>
            </div>
        </div>)
    }
}
