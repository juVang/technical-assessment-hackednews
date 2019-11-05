import React from 'react';
import ReactDOM from 'react-dom';
import TopTen from './components/topTen.jsx';
import $ from 'jquery';
class App extends React.Component{
 constructor(props){
      super(props);
      this.state={
        top:[]
     }
     this.updateTop = this.updateTop.bind(this);
    //  this.updateTopAuthor= this.updateTopAuthor.bind(this);
  }

  updateTop(data){
      this.setState({
        top:data
      })
  }
//   updateTopAuthor(data){
//     this.setState({
//       top:data
//     })
// }

  getTopTen(){
    console.log('Here we are')
      $.ajax({
       url:"/data",
       method:"GET",
       success: function(results) {
           updateTop(results);
           console.log(results);
        },
        error:function(error){
          console.log("error")
        }
      })
  }
  // getTopTenAuthors(){
  //   console.log('Here we are')
  //     $.ajax({
  //      url:"/authors",
  //      method:"GET",
  //      success: function(results) {
  //          updateTopAuthor(results);
  //       },
  //       error:function(error){
  //         console.log("error")
  //       }
  //     })
  // }
render(){
    return(
      <div>
       <button onClick = {this.getTopTen }>Top Ten Stories</button>
       {/* <button onClick = {getTopTenAuthors}>Top Ten Authors</button> */}
       <TopTen top ={this.state.top}/> 
       </div>
    )
 }
}
ReactDOM.render(<App />, document.getElementById('app'));

