import React, { Component } from 'react'
import { Nav, Navbar, NavDropdown, Image, Dropdown, Row, Col } from 'react-bootstrap'
import logo_big from '../public/logo/logo_big.png';
import anonymous from '../public/logo/anonymous.png';
import FileImporter from '../helpers/FileImporter';
import { DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from 'reactstrap';
import TextIcons from '../components/TextIcons';
import MenuItem from '../components/MenuItem';
import ButtonIcons from '../components/ButtonIcon';
import { connect } from 'react-redux';
import { RoleAdmin } from '../helpers/Role';
import { getLoginData } from '../config/redux/rootAction';

class DefaultHeader extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       username: this.props.userbasedata.name.split('', 7).reduce((o, c) => o.length === 6 ? `${o}${c}...` : `${o}${c}` , '')
    }
  }
  
  onClickLogout = () => {
    let {dispatch} = this.props
    dispatch(getLoginData(null))
    setTimeout(() => {
      window.location.replace('/login')
    }, 1000);
  }

  _aliasesDisplayPicture = (firstname) => {
    return `${firstname.substring(0, 1).toUpperCase()}`
}

    render() {
      let user = this.props.userbasedata
        return (
            <div className="animate-screen slideIn-screen">
                <Navbar className="cstm" style={{textAlign: 'right', backgroundColor: 'whitesmoke'}} expand="lg">
                  <Navbar.Brand href="home"><Image src={logo_big} className="navbar-brand" id="logo"/></Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav style={{width: "100%"}} className="mr-auto text-light d-flex justify-content-between">
                      <Col className="d-flex justify-content-between">
                        <Row className="align-content-center">
                          <MenuItem title="Resume" href="resumes" icon="far fa-images"/>
                          <MenuItem title="Wallpaper" href="images" icon="fas fa-file-alt"/>
                        </Row>
                          <UncontrolledDropdown style={{marginRight: "-10px"}}>
                            <DropdownToggle nav>
                              {
                                this.props.userbasedata.name != 'Guest' ?
                                <div style={{ color: 'white', width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#bf0310', fontSize: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', scale: '0.7' }}>
                                  {this._aliasesDisplayPicture(user.name)}
                                </div>
                                :
                                <img src={anonymous} alt="Avatar" style={{height: "50px"}} className="rounded-circle z-depth-0 float-right"/>
                              }
                              
                            </DropdownToggle>
                            <DropdownMenu className="fadeIn-screen menu-profil" right>
                              <DropdownItem className="btn-custom-color" disabled={true} style={{textAlign: 'left'}}>&nbsp;&nbsp;Welcome, {this.state.username}</DropdownItem>
                              {
                                this.props.userbasedata.role ?
                                <DropdownItem className="btn-custom-color" onClick={this.onClickLogout}><ButtonIcons className="btn-custom-color" textAlign='left' fontSize="11pt" title="Sign Out" backgroundColor='white' icon={<i className="fas fa-sign-out-alt"></i>} textColor="black" /></DropdownItem>
                                :
                                <DropdownItem className="btn-custom-color" href="/login"><ButtonIcons className="btn-custom-color" textAlign='left' fontSize="11pt" title="Sign In" backgroundColor='white' icon={<i className="fas fa-sign-in-alt"></i>} textColor="black" /></DropdownItem>
                              }
                              <DropdownItem className="btn-custom-color" disabled={true} href="/"><ButtonIcons textAlign='left' fontSize="11pt" title="Favorites" backgroundColor='white' icon={<i className="far fa-star"></i>} textColor="black" /></DropdownItem>
                              <DropdownItem className="btn-custom-color" disabled={true} href="/"><ButtonIcons textAlign='left' fontSize="11pt" title="Settings" backgroundColor='white' icon={<i className="fas fa-sliders-h"></i>} textColor="black" /></DropdownItem>
                              <DropdownItem className="btn-custom-color" disabled={true} href="/"><ButtonIcons textAlign='left' fontSize="11pt" title="Storage" backgroundColor='white' icon={<i className="fas fa-box-open"></i>} textColor="black" /></DropdownItem>
                              {
                              RoleAdmin(this.props.userbasedata.role) ? 
                              <DropdownItem className="btn-custom-color" href="/administrator"><ButtonIcons className="btn-custom-color" textAlign='left' backgroundColor='white' fontSize="11pt" title="Administrator" icon={<i className="fas fa-users-cog"></i>} textColor="black" /></DropdownItem>
                              :
                               null
                              }
                            </DropdownMenu>
                          </UncontrolledDropdown>
                      </Col>
                    </Nav>
                  </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps)(DefaultHeader)
