import React from 'react';
import ReactDOM from 'react-dom';
import TopTen from './components/topTen.jsx';
import $ from 'jquery';
const entries = require('../dummy_data');



class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: entries
        }
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount() {
        $.ajax({
            type: 'GET',
            url: '/',
            dataType:"json",
            success: function(result) {
                this.setState({data: result});
            },
            error: function(err) {
                console.log(err);
            }
        });
    }

    render() {
        return (
            <div>
                <TopTen entries={this.state.data}/>
            </div>
        )
    }
}



ReactDOM.render(<App />, document.getElementById('app'));

