import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Current = ({currentId, setCurrentId}) => {
    // TODO 
    // render all current work orders
    // onClick view component functionality
    const [postData, setPostData] = useState({
        issuer: '', title: '', issuedTo: '', summary: '', comments:'', selectFile:'', currentStatus: false, assignStatus: false, completeStatus: false, archivedStatus: true
    });
    const posts = useSelector((state) => state.posts);
    const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null);
    const dataObject = posts.map((data) => {

        if(data.status === "Current") {
            return (
                <div post= {data} key={data._id}>
                    <h1>{data.title}</h1>
                    <h3>{data.issuedTo}</h3>
                    <h5>{data.issueDate}</h5>
                    <h5>{data._id}</h5>
                    <button classname="button" onClick={() => { return post}}>
                        <Link to="/view/_id">View</Link>
                    </button>
                </div>
            )
        }

    })

    return ( 
        <div className= "Current-Page-Container" >
            <div className= "Header-Back-btn" >
                <h1>These are your current work orders</h1>
                <button className="button">
                    <Link to="/create">Back</Link>
                </button>
            </div>
            <div className=  "Work-Order" >{dataObject}</div>
        </div>

    );
}

export default Current;