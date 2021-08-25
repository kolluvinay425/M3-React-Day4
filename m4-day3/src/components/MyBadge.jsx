
import { Button,Badge} from 'react-bootstrap'

const MyBadge=({text,color}) =>{
    
    
        return (
            <div className="text-center">
                <h2>Make A Badge :)</h2>
                <Button variant={color}>
                     {text} <Badge variant={color}></Badge>
                    <span className="sr-only">unread messages</span>
                </Button>
            </div>
        )
    
        }

export default MyBadge