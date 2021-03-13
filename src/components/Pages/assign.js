import React from 'react';
import { useSelector } from 'react-redux';
import {  Link } from "react-router-dom";


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
                    <button classname="button"onClick={() => {setCurrentId(data._id)}}>
                        <Link to="/view/_id">View</Link>
                    </button>
                </div>
            )
        }

    })

    return ( 
        <div className="Assign-Page-Container">
            <div className="Header-Back-btn">
                <h1> assign work orders</h1>
                <button className="button">
                    <Link to="/create">Back</Link>
                </button>
            </div>
            <div className="Work-Order">{dataObject}</div>

        </div>

    );
}

export default Assign;