import React from 'react';
import ReactDOM from 'react-dom';
import TopTen from './components/topTen.jsx';
import $ from 'jquery';

class App extends React.Component{
    constructor(props){
      super(props);
      this.state={
  
      }
    }
}
// const App = (props) => <TopTen />;

handleSendtoDB(e){
    var data = { 
        Title:$('#Title').val(),
        Author:$('#Author').val(),
        Score:$('#Score').val()
    }
}
$.ajax({
    url:"/news",
    type:"post",
    data:data,
    dataType:'JSON',
    success:function(data){
        console.log("succuess");
    },
    error:function(err){
        console.log(data)
    }
});

getDataFromDb = () => {
    fetch('http://localhost:5000/api/getData')
      .then((data) => data.json())
      .then((res) => this.setState({ data: res.data }));
  };

  // our put method that uses our backend api
  // to create new query into our data base
  putDataToDB = (message) => {
    let currentIds = this.state.data.map((data) => data.id);
    let idToBeAdded = 0;
    while (currentIds.includes(idToBeAdded)) {
      ++idToBeAdded;
    }
ReactDOM.render(<App />, document.getElementById('app'));

