import { Card, Col } from "react-bootstrap";


const SingleBook = ({book}) => (
    <Col md={3}>
    <Card key={book.asin}>
      <Card.Img variant="top" src={book.img} style={{ height: 300 }} />
      <Card.Body>
        <Card.Text
          style={{
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {book.title}
        </Card.Text>

    
      </Card.Body>
    </Card>
  </Col>
)

export default SingleBook