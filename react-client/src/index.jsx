import React from 'react';
import ReactDOM from 'react-dom';
import TopTen from './components/topTen.jsx';
import $ from 'jquery';

class App extends React.Component{
    
     render(){
         return <div> <TopTen/> </div>
     }

}

ReactDOM.render(<App />, document.getElementById('app'));

// import React from 'react';
// import ReactDOM from 'react-dom';
// import TopTen from './components/topTen.jsx';
// import $ from 'jquery';

// const App = (props) => <TopTen />;

// ReactDOM.render(<App />, document.getElementById('app'));
