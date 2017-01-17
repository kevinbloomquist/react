import React from 'react'

class ProfilePic extends React.Component {
	render() {
		return (
			<a {...this.props}>
				{this.props.children}
				<img style = {{width:'200px'}} src = "http://bit.ly/1MItzOs"/>
				
			</a>
		)
	}
}

export default ProfilePic