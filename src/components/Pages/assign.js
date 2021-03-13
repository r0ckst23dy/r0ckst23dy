import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Post from '../Posts/Post';

const Assign = ({setCurrentId}) => {
    // TODO 
    // render all  work order title, issuedTo, issuedDate that need to be assigned
    // onClick view component functionality
    const posts = useSelector((state) => state.posts)

    const dataObject = posts.map((data) => {

        if(data.status === "Assign") {
            return (
                <div post= {data} key={data._id}>
                    <h1>{`${data ? "Title" : null}`}: {data.title}</h1>
                    <h3>{data.issuedTo}</h3>
                    <h5>{data.issueDate}</h5>
                    <h5>{data._id}</h5>
                    <button onClick={() => {setCurrentId(data._id)}}>
                        <Link to="/view/_id">View</Link>
                    </button>
                </div>
            )
        }

    })

    return ( 
        <div >
            <div>
                <h1> assign work orders</h1>
                <button>
                    <Link to="/create">Back</Link>
                </button>
            </div>
            <div>{dataObject}</div>

        </div>

    );
}

export default Assign;