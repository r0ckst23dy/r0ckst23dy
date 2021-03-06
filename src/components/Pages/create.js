import React, { useState } from 'react';
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';

import { createPost } from '../../actions/posts';

const Create = ({ currentId, setCurrentId }) => {
    const [postData, setPostData] = useState({
        issuer: '', title: '', issuedTo: '', summary: '', comments:'', selectFile:'', status: 'Assign'
    });
    const dispatch = useDispatch();
    const clear = () => {
        setCurrentId(0)
        setPostData({issuer: '', title: '', issuedTo: '', summary: '', comments:'', selectFile:'', status: 'Assign'})

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createPost(postData));
        clear();
    }
    return ( 
        <form className="form-container" onSubmit={handleSubmit}>
            <div className= "header">
                <h1>Create a Work Order</h1>
            </div>
            <div className="first-row">
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
            <div className = "second-row">
                <input
                name = 'summary'
                label='Summary'
                value= {postData.summary}
                placeholder='Summary'
                onChange={(e) => setPostData({...postData, summary: e.target.value })}
                />            
                {/* <div>
                    <FileBase 
                        type= "file"
                        multiple={false}
                        onDone={( {base64} ) => setPostData({ ...postData, selectFile: base64 })}
                    />
                </div>  */}
            </div>
            <div className= "submit">
                <button type="submit"> Submit </button>    
            </div>
        </form>
    );
}
export default Create;