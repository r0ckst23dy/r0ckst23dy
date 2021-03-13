import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { getPosts } from './actions/posts';
import Create from './components/Pages/create.js';
import Current from './components/Pages/current.js';
import Assign from './components/Pages/assign';
import Completed from './components/Pages/completed';
import Archived from './components/Pages/archived';
import View from './components/Pages/view';
import Update from './components/Pages/update';

import logo from '../src/Assets/logo.png'



const App = () => {
    const [ currentId, setCurrentId ] = useState(null);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);

    return ( 
        <Router>
            <div className= "container">
                    <div className="header">
                        <img className="header__img" src={logo} width="30" height= "30" alt="WORCS" />
                        <div className="header__acronym">
                            <h1>W.O.R.C.S</h1>                
                        </div>
                        <div className="header__full-name">
                            <h4>Work Order Request and Completion System</h4>
                        </div>                        
                    </div>
                <div className="navbar">                    
                    <nav className="navbar__navbar-links">
                        
                            <div className="navbar__navbar-link2">
                                <Link to="/create" >Create</Link>
                            </div>
                            <div  className="navbar__navbar-link5">
                                <Link to="/assign"> Assign</Link>
                            </div>
                            <div className="navbar__navbar-link1">
                                <Link to="/">Current</Link>
                            </div>
                            <div className="navbar__navbar-link4">
                                <Link to="/completed">Completed</Link>
                            </div>
                            <div lassName="navbar__navbar-link3">
                                <Link to="/archived"> Archived</Link>
                            </div>
                        
                    </nav>
                </div>
                <Route path="/" exact component={Current} />
                <Route path="/create" exact component={Create} />
                <Route path="/update"><Update currentId= { currentId } setCurrentId= { setCurrentId }/></Route>
                <Route path="/view"><View currentId= { currentId } setCurrentId= { setCurrentId }/></Route> 
                <Route path="/completed"><Completed currentId= { currentId } setCurrentId= { setCurrentId }/></Route>>
                <Route path="/assign"><Assign currentId= { currentId } setCurrentId= { setCurrentId }/></Route>
                <Route path="/archived" ><Archived currentId= { currentId } setCurrentId= { setCurrentId } /></Route>
            </div>
        </Router>
    )
}

export default App;