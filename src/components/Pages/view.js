import React, { useState, useEffect } from 'react';
import { useDispatch,  useSelector  } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


const View = ({ currentId, setCurrentId }) => {
    // TODO 
    // View the selected work order
    // Have onClick update functionality
    const [postData, setPostData] = useState({
        issuer: '', title: '', issuedTo: '', summary: '', comments:'', selectFile:'', currentStatus: false, assignStatus: true, completeStatus: false, archivedStatus: false
    });
    const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null);

    
    useEffect(() => {
        if(post) setPostData(post)
    }, [post])


    return(
        <div className= "View-Container">
            <div className="Work-Order">
                <h1 className="Work-Order">{postData.title}</h1>
                <h3 className="Work-Order" >{postData.issuedTo}</h3>
                <h3 className="Work-Order">{postData.issueData}</h3>
                <div className="Work-Order">{postData.issuer}</div>
                <h4 className="Work-Order">{postData.summary}</h4>
                <h4 className="Work-Order">{postData.comments}</h4>
            </div>
            <button className= "button">
                    <Link to="/create">Back</Link>
            </button>            
            <button className= "button" onClick={() => {setCurrentId(postData._id)}}>
                        <Link to="/update">Update</Link>
            </button>
            
        </div>
    )
}

export default View;