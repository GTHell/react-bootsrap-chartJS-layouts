import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav, NavItem } from 'react-bootstrap'

export default class extends React.Component {
  render() {
    return (
      <Navbar
        inverse
        collapseOnSelect
        onClick={this.handleClick}
        style={{ margin: 0, borderRadius: 0, padding: 0 }}>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#home">SITH</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} href="#">
              <Link to="/">index.html</Link>
            </NavItem>
            <NavItem eventKey={2} href="#">
              <Link to="/aboutme">about-me.jsx</Link>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
