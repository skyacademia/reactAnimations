import { Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'

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

  export default ListViewer;