import data from '../data/menu.json'
import {Card,Button,Col,Row} from 'react-bootstrap'
const SingleBook = ()=>{
    console.log(data)
return(
    
    data.map(a=>(
       
        <Col>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={a.img} />
        <Card.Body>
          <Card.Title>{a.title}</Card.Title>
          <Card.Text>
            
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      </Col>
    
    )
    )
   
)
    
}
export default SingleBook