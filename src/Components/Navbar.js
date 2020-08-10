import React, { useState } from 'react'
import { Nav, Navbar, NavbarToggler, Collapse, NavItem } from "reactstrap";
import { NavLink } from 'react-router-dom';

export default function NavbarComponent() {
    const [isNavOpen, setNav] = useState(false);
    const toggleNav = () => {
        setNav(!isNavOpen);
    }
    return (
        <Navbar dark className="header-con" export expand="md">
            <div className="container-fluid">
                <NavbarToggler onClick={toggleNav} />
                <Collapse isOpen={isNavOpen} navbar>
                    <Nav navbar>
                        <NavItem className="nav_li_item"><NavLink className="nav-link" to="https://github.com/Zaidi10/Movie-Search-App-React/Home"><span className="fa fa-home fa-lg head-icon"></span>Home</NavLink></NavItem>
                        <NavItem className="nav_li_item"><NavLink className="nav-link" to="https://github.com/Zaidi10/Movie-Search-App-React/favorites"><i className="fa fa-heart head-icon" aria-hidden="true"></i>Favorites</NavLink></NavItem>
                    </Nav>
                </Collapse>
            </div>
        </Navbar>


    )
}
