import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";

const Completed = ({setCurrentId}) => {
    // TODO 
    // render all complete work orders title, issuedTo, issueDate
    // onClick view component functionality

    const posts = useSelector((state) => state.posts)

    const dataObject = posts.map((data) => {

        if(data.status === "Complete") {
            return (
                <div post= {data} key={data._id}>
                    <h1>{`${data ? "Title" : null}`}: {data.title}</h1>
                    <h3>{data.issuedTo}</h3>
                    <h5>{data.issueDate}</h5>
                    <button className="button" onClick={() => {setCurrentId(data._id)}}>
                        <Link to="/view/_id">View</Link>
                    </button>
                </div>
            )
        }

    })

    return ( 
        <div className="Complete-Page-Container">
            <div className="Header-Back-btn">
                <h1>Completed Work Orders</h1>
                <button className="button">
                    <Link to="/create">Back</Link>
                </button>                
            </div>
            <div className="Work-Order">{dataObject}</div>
        </div>

    );
}

export default Completed;