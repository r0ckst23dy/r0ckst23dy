import React from 'react';


import Post from './Post';

const Posts = ({ setCurrentId }) => {

    return ( 
        <div>
            <h1>POSTS</h1>
            <Post setCurrentId={setCurrentId} />
        </div>
    );
}

export default Posts;