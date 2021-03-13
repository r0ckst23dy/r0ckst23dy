import React from 'react';
import { useSelector } from 'react-redux';
import {  Link } from "react-router-dom";


const Archived = ({ currentId, setCurrentId }) => {
    // TODO 
    // render all archived work orders title issuedTo issuedData
    // onClick view component functionality
    const posts = useSelector((state) => state.posts)

    const dataObject = posts.map((data) => {

        if(data.status === "Archived") {
            return (
                <div post= {data} key={data._id}>
                    <h1>{`${data ? "Title" : null}`}: {data.title}</h1>
                    <h3>{data.issuedTo}</h3>
                    <h5>{data.issueDate}</h5>
                    <button className= "button" onClick={() => setCurrentId(data._id)}>
                       <Link to="/view">View</Link> 
                    </button>
                </div>
            )
        }

    })

    return ( 
        <div className="Archived-Page-Container">
            <div className="Header-Back-btn">
                <h1>Archived Work Orders</h1>                
                <button className="button">
                    <Link to="/create">Back</Link>
                </button>
            </div>

            <div className="Work-Order">{dataObject}</div>

        </div>

    );
}

export default Archived;