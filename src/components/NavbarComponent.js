import React, { useState } from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText,
    Container,
} from "reactstrap";

const NavbarComponent = (props) => {
const [isOpen, setIsOpen] = useState(false);

const toggle = () => setIsOpen(!isOpen);

return (
    <div>
        <Container>
            <Navbar color="light" light expand="md">
            <NavbarBrand href="/">Code Lyoko Academy</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <NavLink href="/components/">Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="https://github.com/reactstrap/reactstrap">
                        About Us
                        </NavLink>
                    </NavItem>
                </Nav>
                <NavbarText>Admin</NavbarText>
            </Collapse>
            </Navbar>
        </Container>
    </div>
    );
};

export default NavbarComponent;
