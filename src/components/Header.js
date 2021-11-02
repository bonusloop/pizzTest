import Button from '@restart/ui/esm/Button'
import React, { Component } from 'react'
import { Container, FormControl, Nav, Navbar, NavbarBrand, NavLink, Form } from 'react-bootstrap'
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse'
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle'
import logo from './img/logo.png'

class Header extends Component {
    render () {
        return (
            <div>
                <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" >
                    <Container>
                        <NavbarBrand href="/">
                            <img src={logo} height="30" width="30"
                            className="d-inline-block aline-top"
                            alt="logo"/>
                        </NavbarBrand>
                        <NavbarToggle aria-controls="responsive-navbar-nav" />
                        <NavbarCollapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                                <NavLink href="/">Home </NavLink>
                                <NavLink href="/about">About us </NavLink>
                                <NavLink href="/contacts">Contacts </NavLink>
                                <NavLink href="/blog">Blog </NavLink>
                            </Nav>
                            <Form inline>
                                <FormControl 
                                    type="text"
                                    placeholder="Search"
                                    className="mr-sm-2"
                                    />
                                    <Button variant="outline-info" >Search</Button>
                            </Form>
                        </NavbarCollapse>
                    </Container>
                </Navbar>
            </div>
        )
    }
}

export default Header
