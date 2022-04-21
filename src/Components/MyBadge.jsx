import { Badge } from "react-bootstrap"

const MyBadge = (props) => (
    <>
    <h1>
    Badge <Badge variant={props.color}>{props.BadgeText}</Badge>
  </h1>
  </>
    
)
export default MyBadge