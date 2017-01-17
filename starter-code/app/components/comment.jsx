import React from 'react'

class Comment extends React.Component {
	render() {
		return (
			<li>{this.props.body}</li>
		)
	}
}

export default Comment