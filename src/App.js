import './App.css';
import { Navbar, Container, Nav, Carousel, Card, Row, Col, Modal, Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

function App() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  const navigate = useNavigate();
  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand onClick={() => navigate("/")}>Animations</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => navigate("/")}>Home</Nav.Link>
            <Nav.Link onClick={() => navigate("/search")}>Serch</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <section>
        <Routes>
          <Route path='/' element={<Main index={index} handleSelect={handleSelect}></Main>}></Route>
          <Route path='/search' element={<Search navigate = {navigate}></Search>}></Route>
          <Route path='/item/:id' element={<Search navigate = {navigate}></Search>}></Route>
        </Routes>
      </section>
    </div>
  );
}

function Search(props) {
  let [animations, setAnimations] = useState([]);
  axios.get('/search').then((result) => {
    let copy = result.data;
    setAnimations(copy);
  })

  return (
    <Container>
      <Row xs={2} lg={4}>
        {
          animations.map((animation) => {
            return (
              <Col onClick={()=>{props.navigate(`/item/:${id}`);}}>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={process.env.PUBLIC_URL + `/images/animation_keyVisual/${animation.image_path}.jpg`} />
                  <Card.Body>
                    <Card.Title>{animation.name}</Card.Title>
                    {/* <Card.Text>
                      {animation.info}
                    </Card.Text> */}
                  </Card.Body>
                </Card>
              </Col>
            )
          })
        }
      </Row>
    </Container>
  )
}

function Main(props) {
  return (
    <Container>
      <Carousel activeIndex={props.index} onSelect={props.handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={process.env.PUBLIC_URL + '/images/homepage/img1.jpg'}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={process.env.PUBLIC_URL + '/images/homepage/img2.jpg'}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={process.env.PUBLIC_URL + '/images/homepage/img3.jpg'}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  )
}

// function Item(){
  
//   return(
//     <Modal
//     {...props}
//     size="lg"
//     aria-labelledby="contained-modal-title-vcenter"
//     centered
//   >
//     <Modal.Header closeButton>
//       <Modal.Title id="contained-modal-title-vcenter">
//         Modal heading
//       </Modal.Title>
//     </Modal.Header>
//     <Modal.Body>
//       <h4>Centered Modal</h4>
//       <p>
//         Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
//         dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
//         consectetur ac, vestibulum at eros.
//       </p>
//     </Modal.Body>
//     <Modal.Footer>
//       <Button onClick={props.onHide}>Close</Button>
//     </Modal.Footer>
//   </Modal>
//   )
// }

export default App;
