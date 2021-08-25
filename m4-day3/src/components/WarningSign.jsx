
import {Navbar} from 'react-bootstrap'


const WarningSign = ({text})=>{
    return(
        <>
        
  
  <Navbar  bg="dark">
    <Navbar.Brand onClick={alert(text)} >NavBar</Navbar.Brand>
  </Navbar>
  
 
   
   
</>
        
    )
}

export default WarningSign