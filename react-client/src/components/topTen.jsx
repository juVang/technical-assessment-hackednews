import React from 'react';

// Build out the view for the top ten HackerNews stories here. 
// Each story should have a title, author, and score. 
// You may wish to refactor the existing component structure - that's fine.
//const TopTen = () => (
  class TopTen extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        obj:{
         title:'',
         Author:'',
         Score:''
        }
      }
      this.handleSumbit = this.handleSumbit.bind(this);
      this.handleChange = this.handleChange.bind(this);

    }
    handleChange(event){
      var states= this.state.obj;
      var key= this.state,name;
      var value=this.state.value;
      states[key]= value;
      this.setState( {
        obj : states
      });
    }
    handleSumbit(event){
      // db.save1(event.target.value);
      event.preventDefault();
      console.log("Hii");
    }
    render(){
      return(
  <div>
    <h1> Top Ten Stories </h1>
    <button type="sumbit" onClick = {this.handleSumbit}> Top Ten Stories</button>
    <button type="sumbit" onClick = {this.handleSumbit}>Top Ten Authores </button>
    <table>
      <thead>
        <tr>
        {/* <th>Title</th>
        <th>Author</th>
        <th>Score</th> */}
      </tr>
    </thead>
    <tbody>
      <tr>
        {/* <td name="name">Switch – New Video Game System [video]</td>
        <td>ocdtrekkie</td>
        <td>536</td> */}
        <input name="type"></input>
        <button type="Sumbit"> Search </button>
        <div >
          <li>
          
          </li>
        </div>
      </tr>
      <tr>
        {/* <td>Video Games Are Changing the Way Soccer Is Played</td>
        <td>mhb</td>
        <td>100</td> */}
      </tr>
       </tbody>
     </table>
    </div>
      

    )};
  }

  
//);

export default TopTen;