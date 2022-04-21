import {  Container , Row } from "react-bootstrap"
import SingleBook from "./SingleBook"



const BookList = ({books}) => (
    <>   
    
  <Container>
      <Row>
        {books.map((book) => (
         <SingleBook book={book}  />
        ))}
      </Row>
    </Container>


    </>  
)

export default BookList