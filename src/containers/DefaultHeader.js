import React, { Component } from 'react'
import { Nav, Navbar, NavDropdown, Image, Dropdown, Row, Col } from 'react-bootstrap'
import logo_big from '../public/logo/logo_big.png';
import anonymous from '../public/logo/anonymous.png';
import FileImporter from '../helpers/FileImporter';
import { DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from 'reactstrap';
import TextIcons from '../components/TextIcons';
import MenuItem from '../components/MenuItem';

class DefaultHeader extends Component {
    render() {
        return (
            <div className="animate-screen slideIn-screen">
                <Navbar className="cstm" style={{textAlign: 'right', backgroundColor: 'whitesmoke'}} expand="lg">
                  <Navbar.Brand href="home"><Image src={logo_big} className="navbar-brand" id="logo"/></Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav style={{width: "100%"}} className="mr-auto text-light d-flex justify-content-between">
                      <Col className="d-flex justify-content-between">
                        <Row className="align-content-center">
                          <MenuItem title="Home" href="home" icon="fas fa-home"/>
                          <MenuItem title="Resume" href="resumes" icon="far fa-images"/>
                          <MenuItem title="Wallpaper" href="images" icon="fas fa-file-alt"/>
                        </Row>
                          <UncontrolledDropdown style={{marginRight: "-10px"}}>
                            <DropdownToggle nav>
                              <img src={anonymous} alt="Avatar" style={{height: "50px"}} className="rounded-circle z-depth-0 float-right"/>
                            </DropdownToggle>
                            <DropdownMenu className="fadeIn-screen menu-profil" right>
                              <DropdownItem href="/login"><TextIcons icon={<i className="fas fa-sign-out-alt"></i>} text="Logout"/></DropdownItem>
                              <DropdownItem href="/administrator"><TextIcons icon={<i className="fas fa-users-cog"></i>} text="Administrator"/></DropdownItem>
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

export default DefaultHeader
