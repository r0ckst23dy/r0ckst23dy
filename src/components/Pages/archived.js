import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Archived = () => {
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
                    <button onClick={() => setCurrentId(data._id)}>Update</button>
                </div>
            )
        }

    })

    return ( 
        <div >
            <div>
                <h1>Archived Work Orders</h1>                
                <button>
                    <Link to="/create">Back</Link>
                </button>
            </div>

            <div>{dataObject}</div>

        </div>

    );
}

export default Archived;