import SingleComment from "./SingleComment"
import { ListGroup } from "react-bootstrap"

const CommentsList = ({ commentsRecived }) => (
  <>
  <ListGroup >
      {
          commentsRecived.map(comment => (
              <SingleComment comment={comment} key={comment._id} />
          ))
      }
  </ListGroup>
  </>
)  


export default CommentsList