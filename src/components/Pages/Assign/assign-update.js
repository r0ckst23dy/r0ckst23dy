import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useDispatch,  useSelector  } from 'react-redux';

import { updatePost } from '../../../actions/posts';

const AssignUpdate = ({ currentId, setCurrentId }) => {
    // TODO
    // handler for clearing input fields on submit. 
    const [postData, setPostData] = useState({
        issuer: '', title: '', issuedTo: '', summary: '', comments:'', selectFile:'', status: ''
    });
    const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null);
    const dispatch = useDispatch();
    useEffect(() => {
        if(post) setPostData(post)
    }, [post])
    const clear = () => {
        setCurrentId(0)
        setPostData({issuer: '', title: '', issuedTo: '', summary: '', comments:'', selectFile:'', status: 'Assign'})

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(currentId) {
            dispatch(updatePost( currentId, postData))
        }
        clear();
    }
    return ( 
        <form className="update-form-container" onSubmit={handleSubmit}>
            <div className= "header">
                <h1>Updating Work Order</h1>
            </div>
            <div className = "first-row">
                <input
                    name = 'issuer'
                    label='Issuer'
                    value= {postData.issuer}
                    placeholder='Issuer'
                    onChange={(e) => setPostData({...postData, issuer: e.target.value })}
                />
                <input
                    name = 'title'
                    label='Title'
                    value= {postData.title}
                    placeholder='Title'
                    onChange={(e) => setPostData({...postData, title: e.target.value })}
                />            
                <input
                name = 'issuedTo'
                label='IssuedTo'
                value= {postData.issuedTo}
                placeholder='Issued To'
                onChange={(e) => setPostData({...postData, issuedTo: e.target.value })}
                />
                <select
                name="priority"
                value={postData.status}
                onChange={(e) => setPostData({...postData, status: e.target.value })}
                >   
                    <option value="Assign">Assign</option>
                    <option value="Current">Current</option>
                    <option value="Complete">Complete</option>
                    <option value="Archived">Archived</option>                    
                </select>
            </div>
            <div className= "second-row">
                <input
                name = 'summary'
                label='Summary'
                value= {postData.summary}
                placeholder='Summary'
                onChange={(e) => setPostData({...postData, summary: e.target.value })}
                />            
            </div>
            <div className = "third-row">
                <input
                    name = 'comments'
                    label='Comments'
                    value= {postData.comments}
                    placeholder='Comments'
                    onChange={(e) => setPostData({...postData, comments: e.target.value })}
                /> 
            </div>
            <div className= "buttons">
                <button type="submit"> Submit </button>
                <button className= "button">
                    <Link to="/assign-view">Cancel</Link>
                </button> 
            </div>                
        </form>
    );
}
export default AssignUpdate;