import React from "react";
import ReactDOM from "react-dom";
import TopTen from "./components/topTen.jsx";
import TopTenAuth from "./components/TopTenAuth.jsx";
import AuthorSearchView from "./components/AuthorSearchView.jsx";
import $ from "jquery";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from "react-router-dom";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  componentDidMount() {}

  render() {
    return (
      <Router>
        <div>
          <NavLink to="/">|TopTenStories| </NavLink>
          <NavLink to="/top-auth">TopTenAuther|</NavLink>
          <NavLink to="/auth-search">AuthorSearch|</NavLink>

          <Route path="/" exact component={TopTen} />
          <Route path="/top-auth" exact component={TopTenAuth} />
          <Route path="/auth-search" exact component={AuthorSearchView} />
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
