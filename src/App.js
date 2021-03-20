import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { getPosts } from './actions/posts';
import Create from './components/Pages/create.js';
import Current from './components/Pages/Current/current.js';
import CurrentView from './components/Pages/Current/current-view.js';
import CurrentUpdate from './components/Pages/Current/current-update.js';
import Assign from './components/Pages/Assign/assign';
import AssignView from './components/Pages/Assign/assign-view';
import AssignUpdate from './components/Pages/Assign/assign-update';
import Completed from './components/Pages/Completed/completed';
import CompletedView from './components/Pages/Completed/completed-view';
import CompletedUpdate from './components/Pages/Completed/completed-update';
import Archived from './components/Pages/Archived/archived';
import ArchivedView from './components/Pages/Archived/archived-view';


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
                                <Link to="/current">Current</Link>
                            </div>
                            <div className="navbar__navbar-link4">
                                <Link to="/completed">Completed</Link>
                            </div>
                            <div lassName="navbar__navbar-link3">
                                <Link to="/archived"> Archived</Link>
                            </div>
                    </nav>
                </div>
                <Route path= "/" ><Create  setCurrentId= { setCurrentId }/></Route>
                <Route path="/current" ><Current  setCurrentId= { setCurrentId } /></Route>
                <Route path="/current-view"><CurrentView currentId= { currentId } setCurrentId = { setCurrentId }/></Route>
                <Route path="/current-update"><CurrentUpdate currentId= { currentId } setCurrentId = { setCurrentId }/></Route>
                <Route path="/create" exact ><Create currentId= { currentId } setCurrentId = { setCurrentId } /></Route>
                <Route path="/completed"><Completed setCurrentId = { setCurrentId }/></Route>
                <Route path="/completed-view"><CompletedView currentId= { currentId } setCurrentId = { setCurrentId }/></Route>
                <Route path="/completed-update"><CompletedUpdate currentId= { currentId } setCurrentId = { setCurrentId }/></Route>
                <Route path="/assign"><Assign setCurrentId = { setCurrentId }/></Route>
                <Route path="/assign-view"><AssignView currentId= { currentId } setCurrentId = { setCurrentId }/></Route>
                <Route path="/assign-update"><AssignUpdate currentId= { currentId } setCurrentId = { setCurrentId }/></Route>                   
                <Route path="/archived" ><Archived setCurrentId = { setCurrentId } /></Route>
                <Route path="/archived-view"><ArchivedView currentId= { currentId } setCurrentId = { setCurrentId }/></Route>
                
            </div>
        </Router>
    )
}

export default App;