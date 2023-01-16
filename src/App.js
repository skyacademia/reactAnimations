import './App.css';
import { Navbar, Container, Nav, Carousel, Card, Row, Col } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { Routes, Route, Link, Outlet, useParams } from 'react-router-dom'
import axios from 'axios'


function App() {
  const [index, setIndex] = useState(0);
  let [animations, setAnimations] = useState([]);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div className="App">
      <section>
        <Routes>
          <Route path='/' element={<Navivation></Navivation>}>
            <Route index element={<Main index={index} handleSelect={handleSelect}></Main>}></Route>
            <Route path='/search' element={<Search animations={animations} setAnimations={setAnimations}></Search>}></Route>
            <Route path='/items/:id' element={<Item animations={animations}></Item>}></Route>
          </Route>
        </Routes>
      </section>
    </div>
  );
}

function Navivation() {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand><Link>Animations</Link></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link><Link to="/">Home</Link></Nav.Link>
            <Nav.Link><Link to="/search">Serch</Link></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Outlet></Outlet>
    </>);
}

function Search(props) {
  useEffect(() => {
    axios.get('/search').then((result) => {
      let copy = result.data;
      props.setAnimations(copy);
    })
  }, [props.setAnimations]);a

  return (
    <>
      <Container>
        <Row>
          <Col sm={2}>
            <Card>
              <Card.Body>
                <Card.Title>장르</Card.Title>
                <form>
                  <input type='checkbox' name='genre' value='드라마' />드라마<br/>
                  <input type='checkbox' name='genre' value='액션' />액션
                </form>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                <Card.Title>방영날짜</Card.Title>
                <form>
                  <input type='checkbox' name='genre' value='드라마' />드라마<br/>
                  <input type='checkbox' name='genre' value='액션' />액션
                </form>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                <Card.Title>나이</Card.Title>
                <form>
                  <input type='checkbox' name='genre' value='드라마' />드라마<br/>
                  <input type='checkbox' name='genre' value='액션' />액션
                </form>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={10}><ListViewer animations={props.animations}></ListViewer></Col>
        </Row>

      </Container>
    </>
  )
}

function ListViewer(props) {
  return (
    <Row xs={2} lg={4}>
      {
        props.animations.map((animation) => {
          return (
            <Link to={`/items/${animation.id}`}>
              <Col>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={process.env.PUBLIC_URL + `/images/animation_keyVisual/${animation.image_path}.jpg`} />
                  <Card.Body>
                    <Card.Title>{animation.name}</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            </Link>
          )
        })
      }
    </Row>
  )
}

function Item(props) {
  console.log(useParams());
  let { id } = useParams();
  let copy = [...props.animations];
  let animation = copy.find((element, index, array) => {
    return element.id === Number(id);
  })
  return (
    <>
      <div className='background'>
        <div className='window'>
          <div className='popup'>
            <img
              className="d-block h-25"
              src={process.env.PUBLIC_URL + `/images/animation_keyVisual/${animation.image_path}.jpg`}
              alt="animation Poster"
            /><br />
            {animation.name}
            <p>{animation.genre1}{animation.genre2 !== null ? ", " + animation.genre2 : null} / {animation.age === "ALL" ? "전체이용가" : animation.age + "세 이상"} / {animation.opening_year}년 {animation.opening_quarter}분기</p>
            <h4>소개글</h4>
            <p>
              {animation.info}
            </p>
          </div>
        </div>
      </div>
    </>
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

export default App;