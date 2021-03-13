import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"


const Post = ({setCurrentId}) => {
    const posts = useSelector((state) => state.posts)
    const dataObject = posts.map((data) => {

        if(data.assignStatus === true) {
            return (
                <div post= {data} key={data._id}>
                    <h1>{`${data ? "Title" : null}`}: {data.title}</h1>
                    <h3>{data.issuedTo}</h3>
                    <h5>{data.issueDate}</h5>
                    <button onClick={() => {setCurrentId(data._id)}}>
                        <Link to="/view/_id">View</Link>
                    </button>
                </div>
            )
        }

    })

    return ( 
        <div >
            <div>{dataObject}</div>

        </div>

    );
}

export default Post;