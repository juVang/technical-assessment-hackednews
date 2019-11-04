import React from 'react';
import ReactDOM from 'react-dom';
import TopTen from './components/topTen.jsx';
import $ from 'jquery';
const util = require('util');

// function getData() {
//     var result = [];
//     var wow =  $.ajax({
//         url: "/api/stories",
//         type: "GET",
//         success: (data) => {
//             result = data;
//             console.log("****************************** ", data, " ******************************");
//             // 
//             // return data;
//         }
//     })
//     // return wow.responseJSON || []
//     console.log("****************************** ", result)
//     return result;
// }
var fakeData = [{'by':  'test', 'id': 12789, 'score': 392, 'title': 'How to write fun technical assessments for everyone!'}];
// var fakeData = ["one", "two"];

// var d = getData();
// console.log("d is: ",d);
// var props = (d.length > 0)? d[0] : fakeData;
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stories: []
        };
        
        $.ajax({
            url: "/api/stories",
            type: "GET",
            success: (data) => {
                // result = data;
                console.log("the data i got from the server in the front end >> ", data);
                this.setState({stories: data});
                // return data;
            }
        })
    }
    // blaBlaBla(callback) {
    //     $.ajax({
    //         url: "/api/stories",
    //         type: "GET",
    //         success: (data) => {
    //             // result = data;
    //             console.log("****************************** ", data, " ******************************");
    //             this.setState({stories: callback(data)});
    //             // return data;
    //         }
    //     })
    //     // .then(console.log("finally"))
    // }
    render() {
        // this.blaBlaBla((err, data) => {console.log(err, data)})
        console.log("the props i send to the components >>> ",this.state.stories);
        // var storys = this.state.stories.map((oneStory) => {
        //             console.log("one story is: ", oneStory);
        //             return <TopTen story={oneStory}/>
        // })
        
        if (this.state.stories.length > 0) {
            // {storys}
            return <TopTen stories={this.state.stories}/>
        } 
        return <TopTen stories={fakeData}/>
            
        
    }
    
    
};

ReactDOM.render(<App />, document.getElementById('app'));

