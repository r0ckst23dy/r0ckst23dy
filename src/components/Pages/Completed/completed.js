import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import InfiniteScroll from 'react-infinite-scroll-component';

const Completed = ({setCurrentId}) => {
    // TODO 
    // Add loading handler
    // Add onScroll Functionality
    const posts = useSelector((state) => state.posts)
    const dataObject = posts.map((data) => {

        if(data.status === "Complete") {
            return (
                <div className= "dataObject" post= {data} key={data._id}>
                        <div>{data.title}</div>
                        <div>{data.issuedTo}</div>
                        <div>{data.issueDate}</div>
                    <button className= "button" onClick={() => setCurrentId(data._id)}>
                        <Link to="/completed-view">View</Link> 
                    </button>
                </div>
            )
        }

    })

    return ( 
        <div className="Complete-Page-Container">
            <div className="Header-Back-btn">
                <h1>Completed Work Orders</h1>
            </div>
            <div className="Work-Order">
                <InfiniteScroll setCurrentId = {setCurrentId}
                    dataLength={posts.length} //This is important field to render the next data
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
                </InfiniteScroll>
            </div>
        </div>

    );
}

export default Completed;