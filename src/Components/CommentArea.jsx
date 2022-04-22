import React from 'react'
import {  Row, Col, Form } from 'react-bootstrap'



function CommentArea() {
  return (

<div>
    
<Row>
    <Form.Label column="lg" lg={2}>Add Review</Form.Label>
    <Col>
      <Form.Control size="lg" type="text" placeholder="Enter Comment" />
    </Col>
  </Row>
  </div>
    )

}

export default CommentArea