import React from 'react';
import ReactDOM from 'react-dom';
import TopTen from './components/topTen.jsx';
import $ from 'jquery';
import { Component } from "react";

export default class App extends Component {
    render(){
        return (
            <div>
             <TopTen />
             <h3> Hello </h3>
            </div>    
        );
    } 
}
ReactDOM.render(<App />, document.getElementById('app'));