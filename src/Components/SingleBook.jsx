import React from "react";

import { Card, Col, } from "react-bootstrap";



class SingleBook extends React.Component { 
  state = {
    selected: false,
  }


  render() {
    return(
      
    <Col md={3}>
    <Card  onClick={() => this.setState({selected:!this.state.selected})}
    style={{border: this.state.selected? "1px solid blue":"none"}}
    key={this.props.book.asin}>
      <Card.Img variant="top" src={this.props.book.img} style={{ height: 300 }} />
      <Card.Body>
        <Card.Text
          style={{
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {this.props.book.title}
        </Card.Text>
    

    
      </Card.Body>
      
    </Card>

  </Col>
  
    )
  }
}

export default SingleBook