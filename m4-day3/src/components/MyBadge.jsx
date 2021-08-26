
import { Button,Badge} from 'react-bootstrap'

const MyBadge=(props) =>{
    
    
        return (
            <div className="text-center">
                <Button variant='primary'>
                {props.text}  <Badge variant={props.color}>9</Badge>
                    <span className="sr-only">{props.text}</span>
                </Button>
            </div>
        )
    
        }

export default MyBadge