import { Component } from 'react'
import CommentsList from './CommentsList'

class CommentArea extends Component {
  state = {
    comments: [],
  }

  componentDidMount = async () => {
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + this.props.asin,{
        headers: {
          Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjU2YzZmYmE5MDIzOTAwMTVkOTY2MTAiLCJpYXQiOjE2NTA2NTIyMzksImV4cCI6MTY1MTg2MTgzOX0.jS0KfpZx5CUj87y9RBmwUe9uwZmLgu0hIu6XV80lnSA",
        }
      })
           console.log(response)
            if (response.ok) {
                const comments = await response.json()
                this.setState({ comments: comments})
            } else {
                console.log('error')
              
            }
        } catch (error) {
            console.log(error)
            
        }
    }
  
  render() {
    return (
      <div>
          <CommentsList reviewComments={this.state.comments}/>
     </div>
    )
  }
}
export default CommentArea