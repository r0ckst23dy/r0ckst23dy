import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import InfiniteScroll from 'react-infinite-scroll-component';

const Current = ({setCurrentId}) => {
    const posts = useSelector((state) => state.posts);
    const dataObject = posts.map((data) => {
        if(data.status === "Current") {
            return (
                <div className= "dataObject" post= {data} key={data._id}>
                    <div className="title">Title: {data.title}</div>
                    <div className="issuedTo">Issued To: {data.issuedTo}</div>
                    <div className="issueDate">{data.issueDate}</div>
                    <button className= "button" onClick={() => setCurrentId(data._id)}>
                        <Link to="/current-view">View</Link> 
                    </button>
                </div>
            )
        }
    });
    return ( 
        <div className= "Current-Page-Container" >
            <div className= "Header-Back-btn" >
                <h1>Current Work Orders</h1>
            </div>
            <div className="Work-Order">
                <InfiniteScroll setCurrentId = {setCurrentId}
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
                        height: 380,
                        overflow:'auto',
                        display: 'flex',
                        flexDirection: 'column'
                    }}
                >
                    {dataObject}
                </InfiniteScroll>
            </div>
        </div>
    );
}
export default Current;