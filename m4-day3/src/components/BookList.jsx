import { useState } from "react";
import SingleBook from "./SingleBook";
import { Col, Row, Container, Form, FormControl } from "react-bootstrap";
const BookList = (props) => {
  // state = {
  //   query: "",
  // };
  const [query, setQuery] = useState("");

  return (
    <Container>
      <Row>
        <Form inline>
          <FormControl
            style={{ width: "80px" }}
            type="text"
            placeholder="Search"
            className="mr-sm-2"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </Form>
      </Row>
      <Row className="m-3 b-2 m-4">
        {props.books
          .filter((book) => book.title.toLowerCase().includes(query))
          .map((book) => (
            <Col lg={4} key={book.asin}>
              <SingleBook book={book} />
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default BookList;
