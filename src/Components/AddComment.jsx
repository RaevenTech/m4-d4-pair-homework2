import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap'

class AddComment extends Component {
    state= {
        comment: "",
        rate: 1,
    }
  render() {
    return (
      <div>  <div>
      <Form onSubmit={this.sendComment}>
          <Form.Group>
              <Form.Label>Comment text</Form.Label>
              <Form.Control
                  type="text"
                  placeholder="Add comment here"
                
              />
          </Form.Group>
          <Form.Group>
              <Form.Label>Rating</Form.Label>
              <Form.Control as="select">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
              </Form.Control>
          </Form.Group>
          <Button variant="primary" type="submit">
              Submit
          </Button>
      </Form>
  </div></div>
    )
  }
}

export default AddComment