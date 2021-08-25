import { ListGroup} from 'react-bootstrap'

const BookList =()=>{
    return(
        <div class="container mt-3">
<ListGroup as="ul">
  <ListGroup.Item as="li" active>
    History
  </ListGroup.Item>
  <ListGroup.Item as="li">Horror</ListGroup.Item>
  <ListGroup.Item as="li">
    Romance
  </ListGroup.Item>
  <ListGroup.Item as="li">Scifi</ListGroup.Item>
</ListGroup>
</div>
    )
}
export default BookList