
import {Card,Button,Col,Row,Container} from 'react-bootstrap'

const SingleBook = (props)=>{
    
return(
    
    (
        <Container>
            <Row>
           <Col lg={12} className='justify-content-center'>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.book.img} />
        <Card.Body>
          <Card.Title>{props.book.title}</Card.Title>
          <Card.Text>
            
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      </Col>
       </Row>
        </Container>
       
        
    
    )
    )
    
}
export default SingleBook