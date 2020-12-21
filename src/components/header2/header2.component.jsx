/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './header2.styles.scss'
import {Nav,NavDropdown,Navbar} from 'react-bootstrap'
import { auth } from '../../firebase/firebase.utils';

const Header2 = ({currentUser}) =>(
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top" className='py-4' >
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" className='mr-4'/>
                    <Navbar.Brand href="/" className='mr-auto' >Inventory</Navbar.Brand>
                    <Navbar.Collapse id="responsive-navbar-nav"className='justify-content-center'>
                        {
                            currentUser?(
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
                                <Nav.Link href='/createItem'>
                                    Add Item
                                 </Nav.Link> 
                            </Nav>
                            
                            ):(
                                <Nav></Nav>
                            )
                        }
                    </Navbar.Collapse>
                    {
                        currentUser?(
                            <>
                            <div className="navbar-right flexbox-right">
                            <div className='detail'><a><i className="iconify" data-icon="uil-user"></i>{currentUser.displayName}</a></div>
                            {/* <span className="iconify" data-icon="clarity:ellipsis-vertical-line" data-inline="false"></span> */}
                            <div className='mr-4 detail' onClick={() => auth.signOut()} ><a ><i className="iconify" data-icon="clarity:ellipsis-vertical-line"></i> Logout</a></div>
                            <a className="profile-picture">
                                <img src="https://i.imgur.com/aIcL9f6.jpg" width="100%" height="100%" alt=""/>
                            </a>
                        </div>
                         <div id="dropdownmenu" className="flexbox-col">
                             
                             <div id="switch" className="menu-item"><a><i className="iconify" data-icon="uil-sunset"></i> Light Mode</a></div>
                             
                         </div>
                         </>
                        
                        ) : (
                            <Nav.Link className='option' href='/signin'>
                                SIGN IN
                            </Nav.Link>
                        )
                    }

            </Navbar>
         {/* { 
            <div id="dropdownmenu" className="flexbox-col">
            <span className="iconify" data-icon="uil-user-plus" data-inline="false"></span>
                <div className='menu-item'><a><i className="iconify" data-icon="uil-user"></i></a></div>
                <div id="switch" className="menu-item"><a><i className="iconify" data-icon="uil-sunset"></i> Light Mode</a></div>
                <div className="menu-item"onClick={() => auth.signOut()} ><a ><i className="iconify" data-icon="uil-arrow-right"></i> Logout</a></div>
            </div>
         } */}
        </div>
    );

export default Header2;
