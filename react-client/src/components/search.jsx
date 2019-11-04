import React from 'react';
import $ from 'jquery';
//const Search = (props) => (
class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            authorname: ''
        }
        this.updateState = this.updateState.bind(this);
    }
    updateState(event) {
        this.setState({authorname: event.target.value});
    }
    retrieveData(){
        $.ajax({
            url: '/api/story/:author',
            type: 'GET',
            dataType: 'json',
            data : this.state.authorname,
            success: function(data){
                console.log(authorname);
            },
            error: function(err){
                console.log("err", err);
            }
        });

    }
    render() {
        return(
        <div>
        <h1> Search {this.state.authorname}</h1>
        <input type="text" id="author" name="author" onChange={this.updateState}/>
        <button onClick={this.retrieveData.bind(this)}>Search</button>
        <hr/>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Points</th>
              <th>Comments</th>
            </tr>
          </thead>
          <tbody>
          {/* {props.authors.map(function(itm){
            return (
              <tr>
                <td>{itm.by}</td>
                <td>{itm.karma}</td>
                <td>{itm.about}</td>
              </tr>
            )
          })} */}
          </tbody>
        </table>
      </div>
      );
    }
}
 

export default Search;