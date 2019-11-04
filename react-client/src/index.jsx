import React from 'react';
import ReactDOM from 'react-dom';
import TopTen from './components/topTen.jsx';
import $ from 'jquery';
import dummyData from '../dummy_data.js';
// import data from './dummy_data.js'

// const App = (props) => <TopTen />;

class App extends React.Component {
  constructor (props) {
    super(props);
    
  }
  render(){
    return(
      
      <TopTen />
    )
  }
}
ReactDOM.render(<App />, document.getElementById('app'));

