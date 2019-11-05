import React from 'react';
import ReactDOM from 'react-dom';
import TopTen from './components/topTen.jsx';

class App extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
               <div>
                  <TopTen/>
           </div>  
        )
    }
    };
ReactDOM.render(<App />, document.getElementById('app'));

