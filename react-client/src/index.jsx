import React from 'react';
import ReactDOM from 'react-dom';
import TopTen from './components/topTen.jsx';
import $ from 'jquery';

const App = (props) => <TopTen />;
$.ajax({
    url:"/",
    method:"POST",
    data:{story},
    dataType:JSON,
    success:function(result){
        alert(result)
        console.log("success")
    }
})
stories.error(function(result){
    console.log("somthing error")
})




ReactDOM.render(<App />, document.getElementById('app'));

