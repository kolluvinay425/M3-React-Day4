
import {Navbar,Alert} from 'react-bootstrap'


const WarningSign = (props)=>{
    return(
        <>
        
  
  <Navbar  bg="dark">
    <Navbar.Brand >NavBar</Navbar.Brand>
  </Navbar>
  <Alert variant ='danger'>
        {props.text}
  </Alert>

  
 
   
   
</>
        
    )
}

export default WarningSign