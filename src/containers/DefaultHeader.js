import React, { Component } from 'react'
import { Nav, Navbar, NavDropdown, Image, Dropdown, Row, Col } from 'react-bootstrap'
import logo_big from '../public/logo/logo_big.png';
import anonymous from '../public/logo/anonymous.png';
import FileImporter from '../helpers/FileImporter';
import { DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from 'reactstrap';
import TextIcons from '../components/TextIcons';
import MenuItem from '../components/MenuItem';
import ButtonIcons from '../components/ButtonIcon';

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
                          <MenuItem title="Resume" href="resumes" icon="far fa-images"/>
                          <MenuItem title="Wallpaper" href="images" icon="fas fa-file-alt"/>
                        </Row>
                          <UncontrolledDropdown style={{marginRight: "-10px"}}>
                            <DropdownToggle nav>
                              <img src={anonymous} alt="Avatar" style={{height: "50px"}} className="rounded-circle z-depth-0 float-right"/>
                            </DropdownToggle>
                            <DropdownMenu className="fadeIn-screen menu-profil" right>
                              <DropdownItem disabled={true} style={{textAlign: 'center'}}>Welcome, guest !</DropdownItem>
                              <DropdownItem href="/login"><ButtonIcons textAlign='left' fontSize="11pt" title="Sign In" color="light" icon={<i className="fas fa-sign-out-alt"></i>} textColor="black" /></DropdownItem>
                              <DropdownItem disabled={true} href="/"><ButtonIcons textAlign='left' fontSize="11pt" title="Favorites" color="light" icon={<i class="far fa-star"></i>} textColor="black" /></DropdownItem>
                              <DropdownItem disabled={true} href="/"><ButtonIcons textAlign='left' fontSize="11pt" title="Settings" color="light" icon={<i class="fas fa-sliders-h"></i>} textColor="black" /></DropdownItem>
                              <DropdownItem disabled={true} href="/"><ButtonIcons textAlign='left' fontSize="11pt" title="Storage" color="light" icon={<i class="fas fa-box-open"></i>} textColor="black" /></DropdownItem>
                              <DropdownItem href="/administrator"><ButtonIcons textAlign='left' fontSize="11pt" title="Administrator" icon={<i className="fas fa-users-cog"></i>} color="light" textColor="black" /></DropdownItem>
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
