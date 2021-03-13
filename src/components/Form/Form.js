import React, { useState, useEffect } from 'react';
import FileBase from 'react-file-base64';
import { useDispatch,  useSelector  } from 'react-redux';

import { createPost, updatePost } from '../../actions/posts';

const Form = ({ currentId, setCurrentId }) => {
    const [postData, setPostData] = useState({
        issuer: '', title: '', issuedTo: '', summary: '', comments:'', selectFile:'', currentStatus: false, assignStatus: true, completeStatus: false, archivedStatus: false
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
        clear();
    }

    // const clear = () => {
    //     setCurrentId === null;
    //     setPostData({issuer: '', title: '', issuedTo: '', summary: '', comments:'', selectFile:''});
    // }

    return ( 
        <form onSubmit={handleSubmit} className="create-form-container">
            <div>{`${currentId ? "Updating" : 'Create'}`} a Work Order</div>
            <div className="create-form">
                <div className= "two-column">
    `             <input
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
                </div>
                <div className="one-column">                 
                        <input
                        name = 'summary'
                        label='Summary'
                        value= {postData.summary}
                        placeholder='Summary'
                        onChange={(e) => setPostData({... postData, summary: e.target.value })}
                        />
                </div> 
                <div className="one-column">           
                    <input
                    name = 'comments'
                    label='Comments'
                    value= {postData.comments}
                    placeholder='Comments'
                    onChange={(e) => setPostData({... postData, comments: e.target.value })}
                    />
                </div> 
                
                    <div className="one-column">
                        <FileBase 
                            type= "file"
                            multiple={false}
                            onDone={( {base64} ) => setPostData({ ... postData, selectFile: base64})}
                        />
                    </div> 
                </div>
            <button className="submit-btn" type="submit"> Submit </button>    
            <button className="submit-btn" onClick={clear}> Clear </button>                   
        </form>
    );
}

export default Form;