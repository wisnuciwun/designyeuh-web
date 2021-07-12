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
             hideregister: true,
             login: {
                 username: '',
                 password: ''
             },
             register: {
                 username: '',
                 nationality: 'Indonesia',
                 born: '',
                 works: '',
                 email: '',
                 address: ''
             }
        }
    }

    onChangeLoginMenu = () => {
        this.setState({
            hidelogin: !this.state.hidelogin,
            hideregister: !this.state.hideregister
        })
    }

    onChangeRegisterData = (e) => {
        let newRegisters = {...this.state.register}
        newRegisters[e.target.name] = e.target.value

        this.setState({
            ...this.state.register,
            register: newRegisters
        })
    }

    onChangeRegisterBornDate = (val) => {
        this.setState({
            register: {
                ...this.state.register,
                born: val
            }
        })
    }

    onClickRegister = () => {
        window.location.replace('/home')
    }
    
    render() {
        let { username, nationality, born, works, email, address } = this.state.register
        return (
        <div className="app d-flex justify-content-center">
            <div className="vertical-center" style={{zIndex: "2"}}>
                <div style={{zIndex: "1", fontSize: "28pt", opacity: "20%", textAlign: "center", textAlignLast: "justify"}}>
                    <Campaign/>
                </div>
            </div>
            <div style={{zIndex: "3", padding: '10px'}} className="vertical-center">
                <Card className="animate-screen slideIn-screen cstm login-card">
                    <InputGroup className="d-flex align-items-center">
                        <Col className="d-none d-lg-flex" style={{textAlign: 'left', padding: 0, marginLeft: 0}}>
                            <Image src={welcome} className="img-fluid rounded float-left center-cropped" alt="Responsive image" style={{width: '100%', height: '470px', borderRadius: '5px'}} />
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
                        <Col hidden={this.state.hideregister}>
                            <h4 style={{textAlign: 'center'}}>Create new user</h4>
                            <input onChange={this.onChangeRegisterData} name="username" value={username} type="text" className="input-margin form-control" placeholder="Username" aria-describedby="basic-addon1"/>
                            <select defaultValue={nationality} onChange={this.onChangeRegisterData} name="nationality" value={nationality} className="input-margin form-control">
                                {
                                    NATIONALITIES.map(x => {return(<option>{x}</option>)})
                                }
                            </select>
                            <span className="d-flex">
                                <ReactDatePicker
                                inputFormat="dd-MM-yyyy"
                                showMonthDropdown
                                showYearDropdown
                                selected={born}
                                className="input-margin form-control"
                                placeholderText="Born Date (DD-MM-YYYY)"
                                onChange={(date) => this.onChangeRegisterBornDate(date)}
                                />
                                <input style={{marginLeft: '10px'}} onChange={this.onChangeRegisterData} name="works" value={works} type="text" className="input-margin form-control" placeholder="Work" aria-describedby="basic-addon1"/>
                            </span>
                            <input onChange={this.onChangeRegisterData} name="email" value={email} type="text" className="input-margin form-control" placeholder="Email" aria-describedby="basic-addon1"/>
                            <input onChange={this.onChangeRegisterData} name="address" value={address} type="password" className="input-margin form-control" placeholder="Password" aria-describedby="basic-addon1"/>
                            <div style={{textAlign:'right', paddingTop: "10px"}}>
                                <a><Button style={{width: "100%", marginBottom: '10px'}} onClick={this.onClickRegister} className="btn btn-success"><i class="fas fa-user-plus"></i>&nbsp;&nbsp;Register & Sign In</Button></a>
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
