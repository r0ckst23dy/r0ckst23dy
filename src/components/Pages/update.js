import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { useDispatch,  useSelector  } from 'react-redux';

import { createPost, updatePost } from '../../actions/posts';

const Update = ({ currentId, setCurrentId }) => {
    const [postData, setPostData] = useState({
        issuer: '', title: '', issuedTo: '', summary: '', comments:'', selectFile:'', currentStatus: true, assignStatus: false, completeStatus: false, archivedStatus: false
    });
    const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null);
    const dispatch = useDispatch();

    useEffect(() => {
        if(post) setPostData(post)
    }, [post])



    const handleSubmit = (e) => {


        e.preventDefault();
        
        if(currentId) {
            dispatch(updatePost( currentId, postData))

        }
        
        clear();
    }

    const clear = () => {
        setCurrentId === null;
        setPostData({issuer: '', title: '', issuedTo: '', summary: '', comments:'', selectFile:''});
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <div>{postData.assignStatus}</div>
            <div>{`${currentId ? "Updating" : 'Create'}`} a Work Order</div>
            <input
                name = 'issuer'
                label='Issuer'
                value= {postData.issuer}
                placeholder='Issuer'
                onChange={(e) => setPostData({... postData, issuer: e.target.value })}
            />
            <input
                name = 'title'
                label='Title'
                value= {postData.title}
                placeholder='Title'
                onChange={(e) => setPostData({... postData, title: e.target.value })}
            />            
            <input
            name = 'issuedTo'
            label='IssuedTo'
            value= {postData.issuedTo}
            placeholder='Issued To'
            onChange={(e) => setPostData({... postData, issuedTo: e.target.value })}
            />
            <input
            name = 'summary'
            label='Summary'
            value= {postData.summary}
            placeholder='Summary'
            onChange={(e) => setPostData({... postData, summary: e.target.value })}
            />            
            <input
            name = 'comments'
            label='Comments'
            value= {postData.comments}
            placeholder='Comments'
            onChange={(e) => setPostData({... postData, comments: e.target.value })}
            /> 
            <select
                name="priority"
                value={postData.status}
                onChange={(e) => setPostData({... postData, status: e.target.value })}
            >   
                <option value="Assign">Assign</option>
                <option value="Current">Current</option>
                <option value="Complete">Complete</option>
                <option value="Archived">Archived</option>                    
            </select>
            <button type="submit"> Submit </button>
            <button>
                    <Link to="/view">Cancel</Link>
            </button>                
        </form>
    );
}
export default Update;