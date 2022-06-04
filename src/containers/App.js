import React, {Component} from "react";
import CardList from '../components/CardList';
// import { robots } from './robots';
import SearchBox from '../components/SearchBox';
import './App.css'
import Scroll from "../components/Scroll"

class App extends Component{
    constructor(){ //dom runs this first
        super()
        this.state = {
            robots: [],
            searchField: ''
        }
    }

    componentDidMount(){ //dom runs this third
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> response.json())
        .then(users => {this.setState({robots: users})});
        
    }

    onSearchChange = (event) => {
        this.setState({searchField: event.target.value})
    }


    render(){ //dom runs this second
        const {robots, searchField } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
         })
         if(!robots.length){
            return <h1>Loading</h1>
         }
         else{
            return (
                <div className="tc">
                    <h1 className="f2">RoboFriends</h1>
                    <SearchBox searchChange= {this.onSearchChange}/>
                    <Scroll>
                        <CardList robots = {filteredRobots}/>
                    </Scroll>
                     
                </div> 
                );
         }

    }
}

export default App;