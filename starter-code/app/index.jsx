"use strict"

import React from 'react'
import ReactDOM from 'react-dom'
import HelloWorld from './components/hello-world'
import Greeting from './components/greeting'
import ProfilePic from './components/profilePic'
import Post from './components/post'


ReactDOM.render(
	<HelloWorld name = "WDI" mood = "hungry"/>,
	document.getElementById("hello-world-component")
	)

ReactDOM.render(
	<Greeting timeOfDay = "day" object = "fine sir"/>,
	document.getElementById("greeting-component")
	)

ReactDOM.render(
	<ProfilePic href = "http://nyan.cat/" className = "profile-pic" id = "mr-cat">
	 <h3>Cute flexin'</h3>
	 <p className = "bio">Stuff about cat</p>
	</ProfilePic>,
	document.getElementById("profile-pic-component")
	)

ReactDOM.render(
<Post title = "SH5" author = "KVonn" body = "And so it goes" comments = {["bitchin","billy Pilgrim!"]}>

</Post>,
document.getElementById("post-component")
)