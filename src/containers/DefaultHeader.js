import React, { Component } from 'react'
import { Nav, Navbar, NavDropdown, Image, Dropdown } from 'react-bootstrap'
import logo_big from '../public/logo/logo_big.png';
import anonymous from '../public/logo/anonymous.png';
import FileImporter from '../helpers/FileImporter';
import { DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from 'reactstrap';
import TextIcons from '../components/TextIcons';

class DefaultHeader extends Component {
    render() {
        return (
            <div>
                <Navbar className="cstm" style={{textAlign: 'right', backgroundColor: 'whitesmoke'}} expand="lg">
                  <Navbar.Brand href="home"><Image src={logo_big} className="navbar-brand" id="logo"/></Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto text-light">
                      <Nav.Link href="home"><i className="fas fa-home"></i>&nbsp;&nbsp;Home</Nav.Link>
                        <NavDropdown title="Category" id="basic-nav-dropdown">
                          <NavDropdown.Item href="/resumes"><i class="fas fa-file-alt"></i>&nbsp;&nbsp;Resume</NavDropdown.Item>
                          <NavDropdown.Item href="/images"><i class="far fa-images"></i>&nbsp;&nbsp;Wallpaper</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <UncontrolledDropdown>
                      <DropdownToggle nav>
                        <img src={anonymous} alt="Avatar" style={{height: "50px"}} className="rounded-circle z-depth-0 float-right"/>
                      </DropdownToggle>
                      <DropdownMenu className="menu-profil" right>
                        <DropdownItem href="/login"><TextIcons icon="fas fa-sign-out-alt" text="Logout"/></DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default DefaultHeader
