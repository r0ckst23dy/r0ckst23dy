import React, { useState, useEffect } from 'react';
import FileBase from 'react-file-base64';
import { useDispatch,  useSelector  } from 'react-redux';

import { createPost, updatePost } from '../../actions/posts';

const Create = ({ currentId, setCurrentId }) => {
    // TODO 
    // render all form input fields
    // onClick submit functionality 
    const [postData, setPostData] = useState({
        issuer: '', title: '', issuedTo: '', summary: '', comments:'', selectFile:'', status: 'Assign'
    });
    const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null);
    const dispatch = useDispatch();

    useEffect(() => {
        if(post) setPostData(post)
    }, [post])

    const handleSubmit = (e) => {
        e.preventDefault();

        if(currentId) {
            dispatch(updatePost( currentId, postData ))

        }else {
            dispatch(createPost(postData));

        }

    }



    return ( 
        <form className="form-container" onSubmit={handleSubmit}>
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
                <option value="Archived">Urgent</option>                    
            </select>
            <div>
                <FileBase 
                    type= "file"
                    multiple={false}
                    onDone={( {base64} ) => setPostData({ ... postData, selectFile: base64})}
                />
            </div> 
            <button type="submit"> Submit </button>    

        </form>
    );
}

export default Create;