import React, { Component } from 'react';
import {Navbar,Nav,NavDropdown} from 'react-bootstrap';
import { auth } from '../../firebase/firebase.utils';
import './header.styles.scss';

const Header = ({currentUser}) => (         
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky='top' className='py-4'>
            <Navbar.Brand href="/" className='mr-auto' >Inventory</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav"className='justify-content-center'>
                <Nav  >
                <NavDropdown title="Major" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Major 1</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Major 2</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Major 3</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Major 4</NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Minor" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Minor 1</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Minor 2</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Minor 3</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Minor 4</NavDropdown.Item>
                </NavDropdown>
                </Nav>
                <Nav>
                        <Nav.Link href='/createItem'>
                            Create Item
                        </Nav.Link>                     
                        {currentUser ? (
                            <Nav.Link className='option' onClick={() => auth.signOut()}>
                            SIGN OUT
                            {currentUser.displayName}
                            </Nav.Link>
                        ) : (
                            <Nav.Link className='option' href='/signin'>
                            SIGN IN
                            </Nav.Link>
                        )}  
                                           
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        );

export default Header;
