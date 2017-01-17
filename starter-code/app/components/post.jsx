import React from 'react'
import Comment from './comment'

class Post extends React.Component {
  render() {
    return (
    	<div className = "Post">
    	<h3>Title:{this.props.title}</h3>
    	<h4>Author:{this.props.author}</h4>
    	<h5>{this.props.body}</h5>
    	<h6>Comments:</h6>
    	<ul> {
    		this.props.comments.map((comment,index) => {
    			return <Comment key = {index} body = {comment}/>
    		})
    	}</ul>
    	</div>

  	)
	}
}




export default Post
