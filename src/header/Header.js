import React from 'react';
import LinkContainer from './LinkContainer';
import {
    Navbar,
    NavItem,
    NavDropdown,
    MenuItem,
    FormControl,
    FormGroup,
    Nav
} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import ButtonBar from './ButtonBar'
import './Header.css'

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchValue: ""
        }
    }

    render() {

        return (
            <Navbar collapseOnSelect fixedTop inverse className="header">
                <Navbar.Header>
                    <Navbar.Brand>
                        Reciprocity™
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <LinkContainer exact to="/" ><NavItem eventKey={1}>Home</NavItem></LinkContainer>

                        <NavDropdown eventKey={3} title="Menu" id="basic-nav-dropdown">
                            <LinkContainer exact to="/create"><MenuItem eventKey={3.1}>Add Recipe</MenuItem></LinkContainer>
                            <LinkContainer exact to="/calculator"><MenuItem eventKey={3.2}>Search Recipes</MenuItem></LinkContainer>
                            <LinkContainer exact to="/about"><MenuItem eventKey={3.3}>View Favorites</MenuItem></LinkContainer>
                        </NavDropdown>
                        <NavDropdown eventKey={3} title="Tools" id="basic-nav-dropdown">
                            <ButtonBar />
                        </NavDropdown>
                    </Nav>
                    <Navbar.Form pullLeft>
                        <FormGroup>
                            <FormControl type="text" placeholder="Search for recipes..." onChange={(event) => this.setState({ searchValue: event.target.value })}/>
                        </FormGroup>
                        {' '}
                        <Link className="btn btn-default" to={`/Search/${this.state.searchValue}`} >Search!</Link>
                    </Navbar.Form>
                    <Nav pullRight>
                        <NavDropdown eventKey={4} title="Account" id="basic-nav-dropdown">
                            <LinkContainer exact to="/topics"><MenuItem eventKey={4.1}>Edit Information</MenuItem></LinkContainer>
                            <LinkContainer exact to="/calculator"><MenuItem eventKey={4.2}>View Posted Recipes </MenuItem></LinkContainer>
                            <MenuItem divider />
                            <LinkContainer exact to="/"><MenuItem eventKey={4.4}>Log Out </MenuItem></LinkContainer>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}
export default Header;