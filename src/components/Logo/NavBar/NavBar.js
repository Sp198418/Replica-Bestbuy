import Logo from '../../Logo/Logo';
import SearchBar from '../../Search';
import './NavBar.css';
import { Row, Col, Button, Dropdown, DropdownButton, ButtonGroup } from 'react-bootstrap';



function NavBar() {
    return (
       
        <Row className="NavBar">
            <Logo/>
            <SearchBar/>
            <Col className = "Dropdowns">
                
                <Row className= "items">
                    {['Products', 'Brands', 'Deals', 'Services'].map(
                        (variant) => (
                            <DropdownButton
                                as={ButtonGroup}
                                key={variant}
                                id={`dropdown-variants-${variant}`}
                                variant={variant.toLowerCase()}
                                title={variant}
                            >
                                <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                                <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                                <Dropdown.Item eventKey="3" active>
                                    Active Item
        </Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                            </DropdownButton>
                        ),
                    )}
</Row>

           </Col>

        </Row>
    )

}

export default NavBar;