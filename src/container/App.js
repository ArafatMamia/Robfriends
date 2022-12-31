import "./App.css";
import CardsList from "../components/CardsList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoudary from "../components/ErrorBoudary";
import {useEffect, useState } from "react";

function App (){
  const [robots, setRobots] = useState([])
  const [searchField, setSearchField] = useState("");
  

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setRobots(users));
  },[])

  const onSearchChange = (e) => {
    setSearchField( e.target.value );
  };
  
    const filterdRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return !robots.length ? (
      <h1>Loading </h1>
    ) : (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox searchchange={onSearchChange} />
        <Scroll>
          <ErrorBoudary>
            <CardsList robots={filterdRobots} />
          </ErrorBoudary>
        </Scroll>
      </div>
    );
  
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
