import React from "react";
import Add from "./add";
import {
  NavDropdown,
  Nav,
  Form,
  Button,
  Navbar,
  Container,
  FormControl,
  

} from "react-bootstrap";
import Rating from './rating'
function Navsearch(props) {


     





  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#" style={{color:'green'}}>EGY BEST FILMS</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">FILMS</Nav.Link>
              <Nav.Link href="#action2">SERIE</Nav.Link>
              <NavDropdown title="CATEGRIE" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">ACTION</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  ROMANTIQUE
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  EXIT
                </NavDropdown.Item>
              </NavDropdown>
              <Add     moviedata={props.moviedata}  setmoviedata={props.setmoviedata}  />
              
            </Nav>
            <Rating  setnewRating={props.setnewRating}/>
            <Form className="d-flex" >
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onChange={(e)=> props.setSearch(e.target.value) }
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
export default Navsearch;
