/* eslint-disable jsx-a11y/anchor-is-valid */
import React,{useContext} from 'react';
import './header.styles.scss';
import {Nav,Navbar} from 'react-bootstrap';
import {Context} from '../../provider/AuthProvider';
import {NavLink,useHistory} from "react-router-dom";
import Cookies from 'js-cookie'
import decode from '../../provider/decode'
// import {Link} from 'react-dom'

const Header = () =>{
    
        const [currentUser,setCurrentUser]  = useContext(Context)
        // const [cookie,setCookie] = useState(Cookies.remove('token'))
        console.log(currentUser)
        const history = useHistory();

        function signOut(){
            Cookies.remove('token')
            history.push('/signin');
            setCurrentUser(decode())
        }

        return(
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark"className='py-4' >
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" className='mr-4'/>
                    <Navbar.Brand className='mr-auto' >
                        <NavLink exact to='/' activeClassName="selected">Inventory</NavLink>
                    </Navbar.Brand>
                    <Navbar.Collapse id="responsive-navbar-nav"className='justify-content-center'>
                        {
                            // <Link to='/items/major'>Major</Link>
                            currentUser?(
                            <Nav >                              
                                <NavLink to='/items/major' activeClassName="selected">Major</NavLink>
                                <NavLink to='/items/minor' activeClassName="selected">Minor</NavLink>
                                <NavLink to='/createItem' activeClassName="selected">Create Item</NavLink>  
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
                            <div className='mr-4 detail' onClick={() => signOut()} ><a ><i className="iconify" data-icon="clarity:ellipsis-vertical-line"></i> Logout</a></div>
                            {/* <a className="profile-picture">
                                <img src="https://i.imgur.com/aIcL9f6.jpg" width="100%" height="100%" alt=""/>
                            </a> */}
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
        </div>
        );
};

export default Header;
