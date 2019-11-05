import React from 'react';
import ReactDOM from 'react-dom';
import TopTen from './components/topTen.jsx';
import TopTenA from './components/topTenA.jsx';
import $ from 'jquery';

// const App = (props) => <TopTen dummyData={this.props.dummyData}/>;
// console.log(this.props.dummyData)


class App extends React.Component  {
    constructor(props) {
        super(props);
        this.state={
           stories: [],
           changeB: 1
        }
    };
    onchangeBut(x){
        //event.preventdefault();
         this.state = {changeB: x};
        console.log(x);
         
      }
  //-------its not work-----    
    componentDidMount() {
        var that = this;
        $.ajax({
            method: "GET",
            url: '/story',
            
            success: function(data) {
                that.state = {stories: data};
                console.log(data);
            }     
        })
        
    }
    // componentDidMount() {     
    //     fetch("/story")
    //       .then(res => res.json())
    //       .then(
    //         (result) => {
    //             console.log(result)
    //           this.setState({
                
    //             items: result
    //           });
    //         }
    //       )
    //   }

//------------its not work toooo---------
    componentDidMount() {
        fetch('/story')
          .then(res => {
             
              return res.json()
           })
          .then(items => { 
              console.log(items); 
              this.setState({ items })
           });
       }
    //----------sory but the buttons dosnt work also--------
    render() {
        return (
            <div>
            <button type="button" onClick={this.onchangeBut.bind(this, 1)}>Top Ten Stories</button><button type="button" onClick={this.onchangeBut.bind(this, 2)}>Top Ten Authers</button><button type="button" onClick={this.onchangeBut.bind(this, 3)}>Search Authers</button>
            {(this.state.changeB === 1)?
          <TopTen allItems={this.state.stories}/>  
        :<TopTenA />}  
          </div> 
        );
        
    };
    
}
ReactDOM.render(<App />, document.getElementById('app'));