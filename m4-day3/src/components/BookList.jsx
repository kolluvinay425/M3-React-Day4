import { Component } from "react";
import SingleBook from "./SingleBook";
import { Col, Row, Container, Form, FormControl } from "react-bootstrap";
class BookList extends Component {
  state = {
    selected: false,
    query: "",
  };
  render() {
    return (
      <Container>
        <Row>
          <Form inline>
            <FormControl
              style={{ width: "80px" }}
              type="text"
              placeholder="Search"
              className="mr-sm-2"
              value={this.state.value}
              onChange={(e) => this.setState({ query: e.target.value })}
            />
          </Form>
        </Row>
        <Row className="m-3 b-2 m-4">
          {this.props.books
            .filter((book) =>
              book.title.toLowerCase().includes(this.state.query)
            )
            .map((book) => (
              <Col lg={4}>
                <SingleBook book={book} />
              </Col>
            ))}
        </Row>
      </Container>
    );
  }
}

export default BookList;
