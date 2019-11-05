import React from 'react';
import $ from 'jquery';
export default class AuthorSearchView extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			author: "",
			redirect: false
		}
	} 

    handleChange(e) {
    	this.setState({author : e.target.value})
    }

    handleClick(){
    	console.log(this.state.author);
	    $.ajax({
	      url:`/api/story/${this.state.author}`,
	      type: 'POST',
	      data:JSON.stringify({author:this.state.author}),
	      ContentType:'application/json',
	      success: (data) => {
	        console.log(data);
	       // this.setState({data: data})
	      },
	      error: (err) => {
	        console.log(err)
	      }
	    })
    }

	render() {
    
		return (
			<div>
				<br/>
				<br/><input type="text"  name="auther" value={this.state.author}  onChange ={this.handleChange.bind(this)}/>
				<button onClick = {this.handleClick.bind(this)} type="submit">Search</button>
			</div>
		);
	}
}
