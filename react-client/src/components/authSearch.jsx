import React from 'react';

// Build out the view for the top ten HackerNews stories here. 
// Each story should have a title, author, and score. 
// You may wish to refactor the existing component structure - that's fine.

class AuthSearch extends React.Component  {
  constructor(props) {
      super(props);
      this.state={
        search: ''
     }
  };
 //-------------get value from input -------------
  search(event){
     var val = event.target.value;
     this.state = {search: val} 
  }
//-----------pust the value that get from input and pust it to get the data from db------------
  onSearch(){
     $.ajax({
         method: "post",
         url:"/auth",
         data: this.state.search
     })      
  }


  render() {
      return (<div>
           <input type="text" name="serch" onChange={this.search.bind(this)}/>
           <input type="submit" value="Submit" onClick = {this.onSearch.bind(this)}/>
        </div> 
      );

      
  };
}
export default AuthSearch;