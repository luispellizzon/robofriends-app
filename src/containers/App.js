<<<<<<< HEAD
import React, {useState, useEffect } from 'react';
=======
import React, {useState, useEffect}from 'react';
>>>>>>> a0d0d75c6f008c11db029dee1847dc5b0e04da8d
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox';
import './App.css';
import ErrorBoundary from '../components/ErrorBoundary';
import NoFriends from '../components/NoFriends';

<<<<<<< HEAD
function App (){

    const [robots, setRobots] = useState([])
    const [searchField, setSearchField]= useState('')
    
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users =>{setRobots(users)})
        
    },[])
    
    const onSearchChange = (event) =>{
        setSearchField(event.target.value)
    };

    const filteredRobots = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchField.toLowerCase()) 
    });
    
    return !robots.length ? 
         <h1>Loading...</h1> :
    (
            <div className = 'tc'>
                <h1 className='f1'> RoboFriends </h1>
                <SearchBox searchChange={onSearchChange}/>
                <ErrorBoundary>
                    <CardList robots ={  filteredRobots }/>
                    { searchField.length > 0 && filteredRobots.length === 0 ? <NoFriends/> : null
                    }
                </ErrorBoundary>
                
            </div>
    )
     
=======
function App(){
    const [robots, setRobots] = useState([]);
    const [searchField, setSearchField] = useState('');

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(user => setRobots(user))
        
    },[])
    
    
    const onSearchChange = (event) =>{
       setSearchField(event.target.value)
    };

    const filteredRobots = robots.filter(robot =>{
        return robot.name.toLowerCase().includes(searchField.toLowerCase()) 
    });

    
    return !robots.length ? 
        <h1>Loading...</h1> :
    (
        <div className = 'tc'>
            <h1 className='f1'> RoboFriends </h1>
            <SearchBox searchChange={onSearchChange}/>
            <ErrorBoundary>
                <CardList robots ={ filteredRobots }/>
                { searchField.length > 0 && filteredRobots.length === 0 ? <NoFriends/> : null
                }
            </ErrorBoundary>
            
        </div>
    )
>>>>>>> a0d0d75c6f008c11db029dee1847dc5b0e04da8d
}

export default App;

//Updated using UseState and UseEffect