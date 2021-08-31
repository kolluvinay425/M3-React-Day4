import { Card, Button, Col, Row, Container } from "react-bootstrap";
import { useState } from "react";
import CommentArea from "./CommentArea";
const SingleBook = ({ book }) => {
  const [selected, setSelected] = useState(false);
  // state = {
  // selected: false,
  //};

  return (
    <Container>
      <Row>
        <Col lg={12} className="justify-content-center">
          <Card
            onClick={() => setSelected(!selected)}
            style={{ border: selected ? "3px solid red" : "none" }}
          >
            <Card.Img variant="top" src={book.img} />
            <Card.Body>
              <Card.Title>{book.title}</Card.Title>
              <Card.Text></Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          {selected && <CommentArea asin={book.asin} />}
        </Col>
      </Row>
    </Container>
  );
};

export default SingleBook;
