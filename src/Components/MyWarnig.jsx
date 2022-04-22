import { Alert } from "react-bootstrap"

const MyWarnig = (props) => (
    <div className="">
   <Alert className="" variant="danger">
  <Alert.Heading>{props.text}</Alert.Heading>
</Alert>
</div>
    
)
export default MyWarnig