import React from "react"
import {  Container , Row , Col, Form} from "react-bootstrap"
import SingleBook from "./SingleBook"



class BookList extends React.Component{ 
  state = {
    searchQuery: "",
  }


  render(){
  return(  
  <Container>
    <Row>
      <Col>
      <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Search</Form.Label>
    <Form.Control type="text" placeholder="Search" />
  </Form.Group>
      </Col>
      </Row> 
      <Row>    
        {this.props.books.map((item) => (         
         <SingleBook book={item}  />        
        ))}
      </Row>
    </Container>    
)
}
}

export default BookList