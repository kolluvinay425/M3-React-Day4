
import {Card,Button,Col,Row,Container} from 'react-bootstrap'
const BookList = (props)=>


    (
      <Container>
        <Row className='m-3 b-2 m-4' >
          {
            props.books.map(book=>(
       
              <Col lg={4}>
              <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={book.img} />
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>
                  
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
            </Col>
          ))
          }
        </Row>
      </Container>
  )
  
    
  
   

    

export default BookList