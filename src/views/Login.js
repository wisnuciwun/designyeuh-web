import React, { Component } from 'react'
import { Button, Card, Col, Image, InputGroup } from 'react-bootstrap'
import ReactDatePicker from 'react-datepicker';
import Campaign from '../components/Campaign';
import { API_URL_LOGIN, API_URL_REGISTER, NATIONALITIES } from '../constants/Constants';
import logo_big from '../public/logo/logo_big.png';
import welcome from '../public/logo/ok.jpg'
import "react-datepicker/dist/react-datepicker.css";
import { Input, Row } from 'reactstrap';
import Axios from '../helpers/axios';
import { ApiCommands, ErrorAlert, SuccesAlert } from '../components/Alerts';
import Cookies from 'js-cookie'
import SimpleReactValidator from 'simple-react-validator';
import { connect } from 'react-redux';
import { getLoginData } from '../config/redux/rootAction';
import { validPassword, validUsername } from '../helpers/Regex';
import moment from 'moment';

class Login extends Component {
    constructor(props) {
        super(props)
        
        this.validatorLogin = new SimpleReactValidator({ element: () => <span className="d-flex justify-content-start" style={{fontSize: '9pt', color: 'red'}}>Please fill the blank</span>  });
        this.validatorRegister = new SimpleReactValidator({ element: () => <span className="d-flex justify-content-start" style={{fontSize: '9pt', color: 'red'}}>Please fill the blank</span>  });
        
        this.state = {
             hidelogin: false,
             selectSize: 1,
             hideregister: true,
             bornCalendar: '',
             login: {
                 email: '',
                 password: ''
             },
             register: {
                 userName: '',
                 nationality: 'Indonesia',
                 born: '',
                 works: '',
                 email: '',
                 password: ''
             }
        }
    }

    onChangeLoginMenu = () => {
        this.setState({
            hidelogin: !this.state.hidelogin,
            hideregister: !this.state.hideregister
        })
    }

    onChangeLoginData = (e) => {
        let newLogin = {...this.state.login}
        newLogin[e.target.name] = e.target.value

        this.setState({
            login: newLogin
        })
    }

    onChangeRegisterData = (e) => {
        let newRegisters = {...this.state.register}
        newRegisters[e.target.name] = e.target.value

        this.setState({
            ...this.state.register,
            register: newRegisters,
            login: {
                email: newRegisters.email,
                password: newRegisters.password
            }
        })
    }

    onChangeRegisterBornDate = (val) => {
        this.setState({
            bornCalendar: val,
            register: {
                ...this.state.register,
                born: moment(val).format("YYYY-MM-DD")
            }
        })
    }

    onClickRegister = async () => {
        let { register } = this.state
        let url = `${API_URL_REGISTER}`

        if(!this.validatorRegister.allValid())
        {
            this.validatorRegister.showMessages()
            this.forceUpdate()
        }
        else if(!(validUsername.test(register.userName))){
            ErrorAlert("Username shouldn't contains whitespace")
        }
        else if(!(validPassword.test(register.password))){
            ErrorAlert("Password must have 8 characters at least 1 Uppercase Alphabet, 1 Lowercase Alphabet, 1 Number and 1 Special Character")
        }
        else
        {
            ApiCommands({cmd: 'POST', url: url, obj: register, todo: this.onChangeSuccessRegister})
        }
    }

    onChangeSuccessRegister = () => {
        SuccesAlert("You're succesfully registered !", false)
        setTimeout(() => {
            this.onClickLogin()
        }, 2000);
    }

    onSubmitLogin = (event) => {
        if(event.key == 'Enter'){
            if(this.validatorLogin.allValid())
            {
              this.onClickLogin()
            }else{
              this.validatorLogin.showMessages()
              this.forceUpdate()
            }
        }
    }

    onClickLogin = async () => {
        let { login } = this.state
        let url = `${API_URL_LOGIN}`
        
        if(this.validatorLogin.allValid())
        {
            await ApiCommands({cmd: 'POST', url: url, obj: login, todo: this.onChangeViewHome})
        }
        else
        {
            this.validatorLogin.showMessages()
            this.forceUpdate()
        }
    }

    onChangeViewHome = (res) => {
        let {dispatch} = this.props
        dispatch(getLoginData(res.data.token))
        this.props.history.push('home')
    }
    
    render() {
        let { userName, nationality, works, email, password } = this.state.register
        let login = this.state.login

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
                            {this.validatorLogin.message('email', login.email, 'required|email')}
                            <input onKeyPress={this.onSubmitLogin} onChange={this.onChangeLoginData} name="email" value={login.email} type="text" className="input-margin form-control" placeholder="Email" aria-describedby="basic-addon1"/>
                            {this.validatorLogin.message('password', login.password, 'required')}
                            <input onKeyPress={this.onSubmitLogin} onChange={this.onChangeLoginData} name="password" type="password" value={login.password} className="input-margin form-control" placeholder="Password" aria-describedby="basic-addon1"/>
                            <div style={{textAlign:'right', paddingTop: "10px"}}>
                                <span>
                                    <a><Button style={{width: "50%"}} onClick={this.onClickLogin} className="btn btn-danger"><i className="fas fa-sign-in-alt"></i>&nbsp;&nbsp;Sign In</Button></a>
                                    <a href="/home"><Button style={{width: "47%", marginLeft: '10px'}} className="btn btn-danger"><i className="fas fa-home"></i>&nbsp;&nbsp;Homepage</Button></a>
                                </span>
                                <p style={{marginTop: '5px'}}>Need account ? <a onClick={this.onChangeLoginMenu} style={{cursor: 'pointer', color: "red"}} >Register here</a></p>
                            </div>
                        </Col>
                        <Col hidden={this.state.hideregister}>
                            <h4 style={{textAlign: 'center'}}>Create new user</h4>
                            {this.validatorRegister.message('userName', userName, 'required')}
                            <input onChange={this.onChangeRegisterData} name="userName" value={userName} type="text" className="input-margin form-control" placeholder="Username" aria-describedby="basic-addon1"/>
                            {this.validatorRegister.message('nationality', nationality, 'required')}
                            <select type="select" defaultValue={nationality} onChange={this.onChangeRegisterData} name="nationality" value={nationality} className="input-margin form-control">
                                {NATIONALITIES.map(x => {return(<option>{x}</option>)})}
                            </select>
                            <span className="d-flex justify-content-between">
                                <span>
                                    {this.validatorRegister.message('bornCalendar', this.state.bornCalendar, 'required')}
                                    <ReactDatePicker
                                    inputFormat="dd-MM-yyyy"
                                    showMonthDropdown
                                    showYearDropdown
                                    selected={this.state.bornCalendar}
                                    className="input-margin form-control"
                                    scrollableYearDropdown
                                    yearDropdownItemNumber={50}
                                    maxDate={new Date()}
                                    placeholderText="Born Date (YYYY-MM-DD)"
                                    onChange={(date) => this.onChangeRegisterBornDate(date)}
                                    />
                                </span>
                                &nbsp;&nbsp;
                                <span>
                                    {this.validatorRegister.message('works', works, 'required')}
                                    <input onChange={this.onChangeRegisterData} name="works" value={works} type="text" className="input-margin form-control" placeholder="Work" aria-describedby="basic-addon1"/>
                                </span>
                            </span>
                            {this.validatorRegister.message('email', email, 'required|email')}
                            <input onChange={this.onChangeRegisterData} name="email" value={email} type="text" className="input-margin form-control" placeholder="Email" aria-describedby="basic-addon1"/>
                            {this.validatorRegister.message('password', password, 'required|min:8')}
                            <input onChange={this.onChangeRegisterData} name="password" value={password} type="password" className="input-margin form-control" placeholder="Password" aria-describedby="basic-addon1"/>
                            <div style={{textAlign:'right', paddingTop: "10px"}}>
                                <a><Button style={{width: "100%", marginBottom: '10px'}} onClick={this.onClickRegister} className="btn btn-success"><i className="fas fa-user-plus"></i>&nbsp;&nbsp;Register & Sign In</Button></a>
                                <br/>
                                <a><Button style={{width: "100%"}} onClick={this.onChangeLoginMenu} className="btn btn-danger"><i className="fas fa-ban"></i>&nbsp;&nbsp;Cancel</Button></a>
                            </div>
                        </Col>
                    </InputGroup>
                </Card>
            </div>
        </div>)
    }
}

function mapStateToProps(state){ return state }
export default connect(mapStateToProps)(Login)