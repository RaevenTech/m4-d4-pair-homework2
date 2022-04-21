import { Alert } from "react-bootstrap"

const MyWarnig = (props) => (
    
   <Alert variant="danger">
  <Alert.Heading>{props.text}</Alert.Heading>
</Alert>
    
)
export default MyWarnig