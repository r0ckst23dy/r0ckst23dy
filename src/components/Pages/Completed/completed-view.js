import React, { useState, useEffect } from 'react';
import { useSelector  } from 'react-redux';
import { Link } from "react-router-dom";

const CompletedView = ({ currentId, setCurrentId }) => {
    const [postData, setPostData] = useState({
        issuer: '', title: '', issuedTo: '', summary: '', comments:'', selectFile:'', status: ''
    });
    const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null);

    useEffect(() => {
        if(post) setPostData(post)
    }, [post])

    return(
        <div className= "View-Container">
            <div className="Work-Order">
                <h1 >{postData.title}</h1>
                <h1 >{postData.issuedTo}</h1>
                <h1 >{postData.issueData}</h1>
                <h1 >{postData.issuer}</h1>
                <h1 >{postData.summary}</h1>
                <h1 >{postData.comments}</h1>
            </div>
            <div className= 'buttons'>
                <button className= "button">
                        <Link to="/completed">Back</Link>
                </button>            
                <button className= "button" onClick={() => {setCurrentId(postData._id)}}>
                            <Link to="/completed-update">Update</Link>
                </button>
            </div>
        </div>
    )
}

export default CompletedView;