import React from 'react';
import ReactDOM from 'react-dom';
import TopTen from './components/topTen.jsx';
import $ from 'jquery';
const data = require('../dummy_data.js')
//import '../dummy_data.js'

//const App = (props) => <TopTen />;

class App extends React.Component {
    render() {
      return <TopTen stories = {data}/>;
    }
  }

ReactDOM.render(<App />, document.getElementById('app'));

