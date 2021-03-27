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
                <label>Title:</label>
                <h3 >{postData.title}</h3>
                <label>Issued To:</label>
                <h3 >{postData.issuedTo}</h3>
                <h3 >{postData.issueData}</h3>
                <label>Issuer:</label>
                <h3 >{postData.issuer}</h3>
                <label>Summary:</label>
                <h3 >{postData.summary}</h3>
                <label>Comments:</label>
                <h3 >{postData.comments}</h3>
                <div className= 'buttons'>
                <button className= "button">
                        <Link to="/current">Back</Link>
                </button>            
                <button className= "button" onClick={() => {setCurrentId(postData._id)}}>
                            <Link to="/current-update">Update</Link>
                </button>
            </div>
            </div>
        </div>
    )
}

export default CompletedView;