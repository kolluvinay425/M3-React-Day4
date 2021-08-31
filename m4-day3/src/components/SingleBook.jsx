import { Card, Button, Col, Row, Container } from "react-bootstrap";
import { Component } from "react";
import CommentArea from "./CommentArea";
class SingleBook extends Component {
  state = {
    selected: false,
  };
  render() {
    return (
      <Container>
        <Row>
          <Col lg={12} className="justify-content-center">
            <Card
              onClick={() => this.setState({ selected: !this.state.selected })}
              style={{ border: this.state.selected ? "3px solid red" : "none" }}
            >
              <Card.Img variant="top" src={this.props.book.img} />
              <Card.Body>
                <Card.Title>{this.props.book.title}</Card.Title>
                <Card.Text></Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
            {this.state.selected && <CommentArea asin={this.props.book.asin} />}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SingleBook;
