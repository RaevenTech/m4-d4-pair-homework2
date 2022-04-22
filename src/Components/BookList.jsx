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
    <Form.Label> Search</Form.Label>
    <Form.Control 
    type="text" 
    placeholder="Search"
    value={this.state.searchQuery}
    onChange={(e) => this.setState({searchQuery: e.target.value})}
     />
  </Form.Group>
      </Col>
      </Row> 
      <Row>    
        {this.props.books.filter(book => book.title.toLowerCase().includes(this.state.searchQuery)).map((book) => (         
         <SingleBook book={book}  />        
        ))}
      </Row>
    </Container>    
)
}
}

export default BookList