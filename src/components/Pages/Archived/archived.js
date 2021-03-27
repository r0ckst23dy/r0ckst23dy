import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {  Link } from "react-router-dom";
import InfiniteScroll from 'react-infinite-scroll-component';

const Archived = ({ setCurrentId }) => {
    const [loading, setLoading] = useState(true);
    const posts = useSelector((state) => state.posts)
    const dataObject = posts.map((data) => {
        if(data.status === "Archived") {
            return (
                <div className= "dataObject" post= {data} key={data._id}>
                    <div>Title: {data.title}</div>
                    <div>Issued To: {data.issuedTo}</div>
                    <div>{data.issueDate}</div>
                    <button className= "button" onClick={() => setCurrentId(data._id)}>
                        <Link to="/archived-view">View</Link> 
                    </button>
                </div>
            )
        }
    });
    return ( 
        <div className="Archived-Page-Container">
            <div className="Header-Back-btn">
                <h1>Archived Work Orders</h1>                
            </div>
            <div>{loading} </div>
            <div className="Work-Order"
                
            >
                <InfiniteScroll className="scroll" setCurrentId = {setCurrentId}
                    dataLength={posts.length} 
                    next={posts}
                    hasMore={true}
                    loader={<h4>Loading...</h4>}
                    endMessage={
                        <p style={{ textAlign: 'center' }}>
                        <b>Yay! You have seen it all</b>
                        </p>
                    }
                    style={{
                        height: 370,
                        overflow:'auto',
                        display: 'flex',
                        flexDirection: 'column'
                    }}
                >
                    {dataObject}
                    <div className="spacer"/>
                </InfiniteScroll>
            </div>
        </div>
    );
}

export default Archived;