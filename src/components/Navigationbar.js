import {Navbar, Container, Nav} from "react-bootstrap"

const Navigationbar = () => {
    return (
      <div> 
        <Navbar variant="dark">
          <Container>
            <Navbar.Brand href="/">OurStory</Navbar.Brand>
            <Nav>
              <Nav.Link href="#pertama">2019</Nav.Link>
              <Nav.Link href="#kedua">2020</Nav.Link>
              <Nav.Link href="#ketiga">2021</Nav.Link>
              <Nav.Link href="#keempat">2022</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div> 
    )
}

export default Navigationbar