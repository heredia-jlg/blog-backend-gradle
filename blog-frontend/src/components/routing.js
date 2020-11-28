import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import { connect } from 'react-redux';
import { Navbar, Nav } from 'react-bootstrap'
import Index from './dashboard';


class Routing extends Component {

    render() {
        return <Router>
            <>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="/home">Home</Navbar.Brand>
                    <Nav className="mr-auto">
                    <Nav.Link href="/idk">idk</Nav.Link>
                    <Nav.Link href="/idk2">idk</Nav.Link>
                    </Nav>
                </Navbar>
            </>
                <Route path='/home' component={Index}/>
                <Route path='/idk' component={Index}/>
                <Route path='/idk2' component={Index}/>
            </Router>
    }
}
function mapStateToProps(state) {
    const {user} = state;
    return {
        user: user
    }
}
export default connect(mapStateToProps)(Routing);
