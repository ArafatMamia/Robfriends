import "./App.css";
import CardsList from "../components/CardsList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoudary from "../components/ErrorBoudary";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ robots: users }));
  }

  onSearchChange = (e) => {
    this.setState({ searchField: e.target.value });
  };
  render() {
    const { robots, searchField } = this.state;
    const filterdRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return !robots.length ? (
      <h1>Loading </h1>
    ) : (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox searchchange={this.onSearchChange} />
        <Scroll>
          <ErrorBoudary>
            <CardsList robots={filterdRobots} />
          </ErrorBoudary>
        </Scroll>
      </div>
    );
  }
}
export default App;
/*  one way data flow
             APP
           /    \
     cardlist   searchbox
     /
card
React basics 
context api
state management
redux
*/
