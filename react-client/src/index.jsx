import React from 'react';
import ReactDOM from 'react-dom';
import TopTen from './components/topTen.jsx';
import $ from 'jquery';

const data = require('../dummy_data.js');



class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: []
        }

        this.getData();
    }

    getData(){

        //  var response = [];

        var that = this;
        $.ajax({
            type: 'GET',
            url: '/api/story/',
            success: function(res) {
                var response = JSON.stringify(res);
                 alert('Data From Server:  ' +  response);
                
                that.updateState(response);
                // that.setState({data:response});

                // console.log(that.state.data);
                
            }

        });

        // fetch('/api/story/')
        // .then(res => res.json())
        // .then(res => {
        //  this.setState({data: res});
        //  });
    }

    updateState(response) {
        this.setState({data: response});
        // alert(" comp status" +this.state.data);

    }


    render () {
        
        return (
            <div>
                {/* <button onClick = {this.getData.bind(this)}>

                </button> */}

                <TopTen stories = {this.state.data} />

            </div>
            
            
        )
    }
}



ReactDOM.render(<App />, document.getElementById('app'));

